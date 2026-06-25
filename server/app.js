require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const customerRoutes = require("./routes/customerRoutes");
const authRoutes = require("./routes/authRoutes");
const app = express();

connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/customers", customerRoutes);
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to ALock Service API 🔐"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});