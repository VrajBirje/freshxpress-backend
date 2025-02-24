const express = require("express");
const { signup, login } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "This is a protected route!", user: req.user });
});

router.get("/verify", (req, res) => {
    const authHeader = req.headers.authorization;
  
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Unauthorized - No token provided" });
    }
  
    const token = authHeader.split(" ")[1];
  
    try {
      const decoded = verifyToken(token);
      return res.status(200).json({ message: "Token is valid", user: decoded });
    } catch (error) {
      return res.status(401).json({ error: "Invalid or expired token" });
    }
  });

module.exports = router;
