import express from "express";
import morgan from "morgan";
import nodemailer from "nodemailer";
import path from "path";
import mustacheExpress from "mustache-express";
import cookieParser from "cookie-parser";

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
  .use(cookieParser())

  .get("/", (req, res) => res.render("./index.html"))
  .get("*", (req, res) => res.send("not found", 404));

// mailer

const sendToMeRouter = express.Router();

const transport = {
  //all of the configuration for making a site send an email.

  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.THE_EMAIL,
    pass: process.env.THE_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(transport);
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
    from: process.env.THE_EMAIL,
    to: "your.email@gmail.com",
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

app.use(sendToMeRouter);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
