const { User } = require("../models/User");
const { v2 } = require("../config/cloudinary");

const getSidebarUsers = async (req, res) => {
  const { id: userId } = req.user;
  try {
    const filteredUsers = await User.find({ _id: { $ne: userId } })
      .select("-password")
      .sort({ username: -1 });
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve users",
    });
  }
};

const getProfile = async (req, res) => {
  const { id: userId } = req.user;
  try {
    const profile = await User.findById(userId).select(
      "-password -__v -updated_at"
    );
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    return res.status(200).json(profile);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateProfile = async (req, res) => {
  const { photo } = req.body;
  const { id: userId } = req.user;
  try {
    if (!profilePicture) {
      return res.status(404).json({ message: "Profile picture is required" });
    }
    //Upload profile picture to cloudinary bucket
    const upload = await v2.uploader.upload(photo);
    const updatedUserProfile = await User.findByIdAndUpdate(
      userId,
      { photo: upload.secure_url },
      { new: true }
    );
    return res.status(200).json(updatedUserProfile);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to update profile...",
    });
  }
};

module.exports = { getSidebarUsers, updateProfile, getProfile };
