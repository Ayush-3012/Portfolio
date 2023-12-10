import nodemailer from "nodemailer";
import mailGun from "nodemailer-mailgun-transport";
import dotenv from "dotenv";

dotenv.config();

const auth = {
  auth: {
    api_key: process.env.API_KEY,
    domain: process.env.DOMAIN,
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMessage = (email, name, subject, text, cb) => {
  const mailOptions = {
    from: email,
    to: "diveshsrivastava31@gmail.com",
    name,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

export default sendMessage;
