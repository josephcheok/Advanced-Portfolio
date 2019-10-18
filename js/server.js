const express = require("express");
const sendMail = require("./mail");
const app = express();
const path = require("path");

const PORT = 8080;

//Data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("../"));

app.post("/email", (req, res) => {
  //TODO
  const { username, email, message } = req.body;
  console.log("Data: ", req.body);
  sendMail(username, email, message, function(err, data) {
    if (err) {
      res.status(500).json({ message: "Internal Error" });
    } else {
      res.json({ message: "Email sent!" });
    }
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

console.log(__dirname);

app.listen(PORT, () => console.log("Server is starting on PORT, ", 8080));
