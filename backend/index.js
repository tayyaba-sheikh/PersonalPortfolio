const express = require("express");

require("dotenv").config();

const cors = require("cors");
const connectDB = require("./config/db");


// Initialize Express App
const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// const authRoutes = require("./routes/auth.route");
// const caseRoutes = require("./routes/case.route");
// const taskRoutes = require("./routes/task.route");
// const adminRoutes = require("./routes/admin.route");

const PORT = process.env.PORT || 4999;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/case", caseRoutes);
// app.use("/api/v1/task", taskRoutes);
// app.use("/api/v1/admin", adminRoutes);