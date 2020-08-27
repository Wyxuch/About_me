const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 5000;

const app = express();
const logger = morgan("combined");

app
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .use(express.static(path.join(__dirname, "public")))

  .use(logger)
  .use(express.json())
  .use(cookieParser())

  .get("/", (req, res) => res.render("./build/index.html"))

  .get("*", (req, res) => res.send("not found", 404))

  .listen(PORT, () => console.log(`Listening on ${PORT}`));
