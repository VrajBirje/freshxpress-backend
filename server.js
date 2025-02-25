const express = require("express");
require("dotenv").config();
const cors = require("cors");
const farmerRoutes = require("./routes/farmerRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Allow CORS for only http://localhost:3001
app.use(cors({
  origin: ["https://dashboard.freshxpress.co.in", "https://freshxpress.co.in"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true // Allow cookies and auth headers
}));

// Routes
app.use("/api", farmerRoutes);
app.use("/api/auth", authRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
