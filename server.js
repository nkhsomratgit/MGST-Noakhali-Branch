require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Health Check
app.get("/", (req, res) => {
  res.json({
    status: "MGST Server Online",
    message: "Backend is running successfully."
  });
});

// Report API (placeholder)
app.post("/report", (req, res) => {
  console.log("New Report:", req.body);

  res.json({
    success: true,
    message: "Report received."
  });
});

// Join API (placeholder)
app.post("/join", (req, res) => {
  console.log("New Join Request:", req.body);

  res.json({
    success: true,
    message: "Join request received."
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});