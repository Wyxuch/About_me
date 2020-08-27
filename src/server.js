import express from "express";
import morgan from "morgan";
import path from "path";
import mustacheExpress from "mustache-express";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 5000;

const app = express();
const logger = morgan("combined");

app
  .engine("html", mustacheExpress())
  .set("views", path.join(__dirname))
  .set("view engine", "html")
  .use(express.static(__dirname))

  .use(logger)
  .use(express.json())
  .use(cookieParser())

  .get("/", (req, res) => res.render("./index.html"))
  .get("*", (req, res) => res.send("not found", 404));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
