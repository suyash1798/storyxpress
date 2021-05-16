const express = require("express");
const app = express();
const process = require("process");
const port = process.env.PORT || 3000;
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
require("./config/db-connection");
const movieRouter = require("./routes/movies");
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/movies", movieRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build", "index.html"));
  });
}

app.listen(port);
