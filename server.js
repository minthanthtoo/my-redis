import express from "express";
import cors from "cors";

const app = express();

// Enable CORS for all origins
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello! Your string service is running 🚀");
});

// Return env variables
app.get("/secret-strings", (req, res) => {
  res.json({
    TG_KEY: process.env.TG_KEY || "",
    TG_CHAT_ID: process.env.TG_CHAT_ID || "",
    TG_CHAT_FILE_INDEX_ID: process.env.TG_CHAT_FILE_INDEX_ID || "",
    MARKET_SHEET_ID: process.env.MARKET_SHEET_ID || ""
  });
});

const port = process.env.PORT || 10000;
app.listen(port, () => console.log(`Running on port ${port}`));
