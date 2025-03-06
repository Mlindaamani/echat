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

const uploadProfile = async (req, res) => {
  const MAX_FILE_SIZE = 200 * 1024;

  const { id: userId } = req.user;
  const { mimetype, size, buffer } = req.file;

  try {
    if (size > MAX_FILE_SIZE) {
      return res.status(400).json({
        message: `File size should not exceed ${MAX_FILE_SIZE / 1024} KB`,
      });
    }

    // Convert the file buffer to a base64 string
    const base64Photo = buffer.toString("base64");
    // Data-URL
    const imageData = `data:${mimetype};base64,${base64Photo}`;

    const uploadResult = await v2.uploader.upload(imageData, {
      folder: "user-profiles",
      resource_type: "auto",
    });

    const updatedUserProfile = await User.findByIdAndUpdate(
      userId,
      { photo: uploadResult.secure_url },
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

module.exports = { getSidebarUsers, uploadProfile, getProfile };
