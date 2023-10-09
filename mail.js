import nodemailer from "nodemailer";
import mailGun from "nodemailer-mailgun-transport";

const auth = {
  auth: {
    api_key: "73f65f6d13978f6a071fedab247c97a6-5465e583-2202890d",
    domain: "sandboxb90d9736da5f4d82afd3c09a7758b816.mailgun.org",
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
