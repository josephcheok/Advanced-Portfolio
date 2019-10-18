const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: "fcb7557b6ce515335c1a433a95626f59-9c988ee3-d2c4ab9e",
    domain: "sandbox8e4028ae53474161a0ad88fc0d3902b5.mailgun.org"
  }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (username, email, message, cb) => {
  const mailOptions = {
    from: email,
    to: "joseph@cheokandco.com",
    subject: "Email from Your Portfolio Page",
    text: username + " here." + message
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

module.exports = sendMail;
