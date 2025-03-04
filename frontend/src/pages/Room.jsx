import React, { useState, useEffect, useRef } from "react";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "../stores/authStore";
import { messageStore } from "../stores/messageStore";
import { useSocket } from "../stores/socketStore";
import { formatDate } from "../utils/functions";
import "../chats.css";

export const Room = () => {
  const lastMessageRef = useRef();
  const [message, setMessage] = useState("");
  const [showOnlineOnly, setShowOnlineOnly] = useState(false); 
  const { connectToSocketServer, onlineUsers, disconnect } = useSocket();
  const { user } = useAuthStore();
  const {
    messages,
    sendNewMessage,
    users,
    getChatUsers,
    getMessages,
    selectedUser,
    setSelectedUser,
  } = messageStore();

  const sendMessage = (e) => {
    e.preventDefault();
    sendNewMessage(message);
    setMessage("");
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
    getMessages();
  };

  useEffect(() => {
    getChatUsers();
    connectToSocketServer();

    return () => disconnect();
  }, [getChatUsers]);

  useEffect(() => {
    if (lastMessageRef.current && messages)
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  return (
    <div className="dashboard-chat-container h-100">
      <div className="chat-layout h-100 d-flex">
        {/* My-Pros */}
        <div className="sidebar bg-light border-end p-3">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h5 className="text-secondary mb-0">Chats</h5>
            <div className="form-check form-switch">
              <input
                type="checkbox"
                checked={showOnlineOnly}
                className="form-check-input"
                onChange={() => setShowOnlineOnly(!showOnlineOnly)}
              />
              <label className="form-check-label small">
                {showOnlineOnly ? "Online" : "All"}
              </label>
            </div>
          </div>

          <ul className="list-unstyled">
            {filteredUsers.map((user) => (
              <li
                key={user._id}
                onClick={() => handleUserClick(user)}
                className={`p-3 mb-2 cursor-pointer rounded ${
                  selectedUser?._id === user._id
                    ? "bg-primary text-white"
                    : "hover-bg-light"
                }`}
              >
                <div className="d-flex align-items-center">
                  <span
                    className={`status-indicator me-3 ${
                      onlineUsers.includes(user._id) ? "online" : "offline"
                    }`}
                  ></span>
                  <span className="fw-medium">{user.username}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Chat Area */}
        <div className="flex-grow-1 d-flex flex-column">
          {/* Messages */}
          <div className="messages flex-grow-1 p-4 overflow-auto">
            {!selectedUser ? (
              <div className="h-100 d-flex align-items-center justify-content-center">
                <div className="text-center text-muted">
                  <h4>Select a chat to start messaging</h4>
                </div>
              </div>
            ) : messages.length === 0 ? (
              <div className="h-100 d-flex align-items-center justify-content-center">
                <div className="text-center text-muted">
                  <h4>No messages yet</h4>
                  <p>Start the conversation!</p>
                </div>
              </div>
            ) : (
              messages.map(({ _id: id, senderId, message, created_at }) => (
                <div
                  key={id}
                  ref={lastMessageRef}
                  className={`message-bubble ${
                    senderId === user?.id ? "message-sent" : "message-received"
                  } mb-3`}
                >
                  <div className="message-content">
                    <div className="d-flex align-items-center mb-1">
                      <small className="fw-bold text-secondary">
                        {senderId === user?.id ? "You" : selectedUser?.username}
                      </small>
                      <small className="text-muted ms-2">
                        {formatDate(created_at)}
                      </small>
                    </div>
                    <p className="mb-0 text-dark">{message}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Meesage-Input-section */}
          {selectedUser && (
            <div className="input-area p-4 border-top">
              <form onSubmit={sendMessage} className="d-flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="form-control rounded-pill"
                />
                <button
                  type="submit"
                  className="btn btn-primary rounded-pill px-4"
                  disabled={!message.trim()}
                >
                  Send
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
      <Toaster />
    </div>
  );
};
