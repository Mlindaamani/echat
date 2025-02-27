const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = Schema(
  {
    username: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [3, "Name must be atleast 3 characters long"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
      unique: true,
      validate: {
        validator: (value) => value.length >= 8,
        message: (props) => `The ${props.value} must be 2 chars`,
      },
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be atleast 6 characters long"],
      trim: true,
    },

    role: {
      type: String,
      enum: ["creator", "user", "developer"],
      default: "user",
    },

    hasPaid: {
      type: Boolean,
      default: false,
    },

    profile: {
      type: String,
      default: "",
    },
  },

  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);
const User = model("User", userSchema);
module.exports = { User };
