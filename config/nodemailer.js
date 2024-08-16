import nodemailer from "nodemailer";

const email = process.env.REACT_APP_GOOGLE_EMAIL;
const pass = process.env.REACT_APP_GOOGLE_PASSWORD;

export const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth:{
    user: email,
    pass: pass,
  }
});

export const mailOptions = {
  from: email,
  to: email,
};