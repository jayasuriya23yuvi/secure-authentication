import nodemailer from 'nodemailer'



import dotenv from'dotenv'
dotenv.config();


//console.log("EMAIL:", process.env.SMTP_USER);
//console.log("PASS:", process.env.SMTP_PASS);
const transporter =nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
        user:process.env.SMTP_USER,
        pass:process.env.SMTP_PASS
    }
  
})
export default transporter;