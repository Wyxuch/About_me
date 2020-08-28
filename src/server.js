import express from "express";
import morgan from "morgan";
import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";
import path from "path";
import mustacheExpress from "mustache-express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
const logger = morgan("dev");

app
  .engine("html", mustacheExpress())
  .set("views", path.join(__dirname))
  .set("view engine", "html")
  .use(express.static(__dirname))

  .use(logger)
  .use(express.json())

  .get("/", (req, res) => res.render("./index.html"))
  .get("*", (req, res) => res.send("not found", 404));

// mailer

const sendToMeRouter = express.Router();

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

app.use("/sendmail", sendToMeRouter);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
