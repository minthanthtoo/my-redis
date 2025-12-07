import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello! Your string service is running 🚀");
});

app.get("/hello", (req, res) => {
  res.send("Hello from Render Web Service!");
});

app.get("/random", (req, res) => {
  const messages = [
    "apple",
    "banana",
    "cherry",
    "dragonfruit",
    "elderberry"
  ];
  const msg = messages[Math.floor(Math.random() * messages.length)];
  res.send(msg);
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("String service running on port", PORT);
});
