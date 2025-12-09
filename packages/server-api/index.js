const express = require("express");
const port = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("Backend server from develop branch");
});
app.listen(port, (err) => {
  if (err) {
    console.log("Err", err);
  } else {
    console.log("Listening port :", port);
  }
});
