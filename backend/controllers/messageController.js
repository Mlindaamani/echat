const { Message } = require("../models/Message");
const { Conversation } = require("../models/Conversation");
const { io, getReceiverSocketId } = require("../socket");

const sendMessage = async (req, res) => {
  try {
    const { receiverId } = req.params;
    const { id: senderId } = req.user;
    const { message } = req.body;

    // Find the existing conversation
    let conversation = await Conversation.findOne({
      participants: { $all: [receiverId, senderId] },
    });

    // If no conversation exists, create a new one
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    // Create the new message
    const newMessage = await Message.create({
      receiverId,
      senderId,
      message,
    });

    // Push the new message ID to the conversation's messages array
    conversation.messages.push(newMessage._id);

    //Sending the message via socketIo server
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      //send new message to the receiver
      io.to(receiverSocketId).emit("new-message", newMessage);
    }

    // Save the updated conversation
    await conversation.save();
    res.status(201).json(newMessage);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getMessagesBetweenUsers = async (req, res) => {
  const { receiverId } = req.params;
  const { id: senderId } = req.user;

  try {
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");

    if (conversation) {
      return res.status(200).json(conversation.messages);
    } else {
      res.status(200).json([]);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal sever error" });
  }
};

const markMessageAsRead = async (req, res) => {
  const { id: messageId } = req.params;
  try {
    const message = await Message.findByIdAndUpdate(
      messageId,
      { isRead: true },
      { new: true }
    );
    return res
      .status(200)
      .json({ message, actionComment: "Message updated successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal sever error" });
  }
};

const deleteConversation = async (req, res) => {
  const { conversationId } = req.params;
  try {
    const conversation = await Conversation.findById(conversationId);

    if (conversation === null) {
      return res.status(404).json({
        message: "Conversation does not exist! Try again later",
      });
    }
    await Message.deleteMany({ _id: { $in: conversation.messages } });
    await Conversation.findByIdAndDelete(conversationId);

    return res
      .status(200)
      .json({ message: "Conversation deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal sever error" });
  }
};

module.exports = {
  sendMessage,
  getMessagesBetweenUsers,
  markMessageAsRead,
  deleteConversation,
};
