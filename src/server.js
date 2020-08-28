import express from "express";
import morgan from "morgan";
import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";
import path from "path";
import mustacheExpress from "mustache-express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
const logger = morgan("dev");

app
  .engine("html", mustacheExpress())
  .set("views", path.join(__dirname))
  .set("view engine", "html")
  .use(express.static(__dirname))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())

  .use(logger)
  .use(express.json());

// mailer

const sendToMeRouter = express.Router();
const saveScore = express.Router();

const transport = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
};

const transporter = nodemailer.createTransport(smtpTransport(transport));
transporter.verify((error, success) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Mailer Ready");
  }
});

sendToMeRouter.post("/", (req, res, next) => {
  //make mailable object
  const mail = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: req.body.subject,
    text: `
      from:
      ${req.body.name} 

      contact: ${req.body.email}

      message: 

      ${req.body.message}`,
  };
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

// score

saveScore.post("/", (req, res, next) => {
  if (req.body.key === process.env.KEY) {
    const score = {
      score: req.body.score,
    };

    const json = JSON.stringify(score);

    fs.writeFile("./score.json", json, "utf8", (err) => {
      if (err) {
        console.log(err);
        next(err);
      }
    });
  }
});

app.get("/loadsnakescore", (req, res) => {
  fs.readFile("./score.json", (err, data) => {
    if (err) {
      res.json({
        score: 0,
      });
    }
    const jsonData = JSON.parse(data);
    res.send({
      score: jsonData.score,
    });
  });
});

app.use("/sendmail", sendToMeRouter);
app.use("/updatesnakescore", saveScore);

app
  .get("/", (req, res) => res.render("./index.html"))
  .get("*", (req, res) => res.status(404).send("not found"));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
