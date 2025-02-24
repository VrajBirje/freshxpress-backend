const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const saltRounds = 10;

// Hash password
exports.hashPassword = async (password) => {
  return await bcrypt.hash(password, saltRounds);
};

// Compare password
exports.comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

// Generate JWT Token (1-day expiry)
exports.generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// Verify JWT Token
exports.verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
