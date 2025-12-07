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

app.listen(10000, () => {
  console.log("String service running on port 10000");
});
