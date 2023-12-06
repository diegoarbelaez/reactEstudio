const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api/singup", require("./routes/singup"));
app.use("/api/login", require("./routes/login"));
app.use("/api/user", require("./routes/user"));
app.use("/api/todos", require("./routes/todos"));
app.use("/api/refresh-token", require("./routes/refreshToken.js"));
app.use("/api/singout", require("./routes/singout"));

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World! 2");
});

app.listen(port, () => {
  console.log("Server listening on port 3000");
});
