const jwt = require("jsonwebtoken");
const { User } = require("../models/User");

/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 */

/**
 * @param {Request} req
 * @param {Response} res
 */
const userIsAuthenticatedMiddleware = async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token)
    return res.status(401).json({ message: "Token was not provided!" });

  try {
    jwt.verify(token, process.env.JWT_ACCESS_SECRET, (error, user) => {
      if (error) {
        return res.status(401).json({ message: error.message });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * @param {Request} req
 * @param {Response} res
 */
const userIsACreatorMiddleware = (req, res, next) => {
  const { role } = req.user;
  if (role !== process.env.CREDOR_SYS_USER)
    return res.status(403).json({ message: "Access Denied" });
  next();
};

module.exports = {
  userIsACreatorMiddleware,
  userIsAuthenticatedMiddleware,
};
