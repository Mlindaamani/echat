const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models/User");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/functions");

const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = await User.create({
      username,
      email,
      password: await bcryptjs.hash(password, 10),
    });

    return res
      .status(201)
      .json({ success: "Successfully created Account!", user });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message:
        "Sorry! We could not create an account for you! Try again later...",
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "No user found with given credentials" });
    }

    const passwordMatches = await bcryptjs.compare(password, user.password);
    if (!passwordMatches) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const payload = {
      id: user._id,
      username: user.username,
      photo: user.photo,
    };

    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);

    res.status(200).json({
      id: user._id,
      username: user.username,
      photo: user.photo,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

const refreshToken = (req, res) => {
  const { refreshToken } = req.body;

  // Check if refresh token is provided
  if (!refreshToken) {
    return res.status(400).json({ message: "Provide a refresh token!" });
  }

  // Verify the refresh token
  jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (error, user) => {
    if (error) {
      return res.status(403).json({ message: "Invalid refresh token!" });
    }

    //Payload
    const payload = {
      id: user.id,
      name: user.name,
      role: user.role,
      hasPaid: user.hasPaid,
    };

    const accessToken = generateAccessToken(payload);
    res.status(200).json({ accessToken });
  });
};

module.exports = { register, login, refreshToken };
