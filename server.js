import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello! Your string service is running 🚀");
});

// Return the env values directly
app.get("/secret-strings", (req, res) => {
  res.json({
    TG_KEY: process.env.TG_KEY || null,
    TG_CHAT_ID: process.env.TG_CHAT_ID || null,
    TG_CHAT_FILE_INDEX_ID: process.env.TG_CHAT_FILE_INDEX_ID || null,
    MARKET_SHEET_ID: process.env.MARKET_SHEET_ID || null
  });
});

const port = process.env.PORT || 10000;
app.listen(port, () => console.log(`Running on port ${port}`));
