const express = require("express");
const app = express();

let port = 1001;

app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("App is starting on port " + port);
});

app.get("/", (req, res) => {
  res.send("working well!!");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    res.send("Login Successful");
  } else {
    res.send("Invalid Username or Password");
  }
});
