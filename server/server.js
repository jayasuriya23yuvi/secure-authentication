import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from './routes/authroutes.js';
import userRouter from "./routes/userRoutes.js";



const app =express();
const port=process.env.PORT || 4000;

connectDB();
const allowedOrigins =['http://localhost:5173']



app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:allowedOrigins,credentials: true}));
// API end points
app.get('/',(req,res)=>res.send("API works....."));

app.use('/api/auth',authRouter);
app.use('/api/user',userRouter)

app.listen(port,()=> console.log(`server started on port:${port}`));
//console.log("USER:", process.env.SMTP_USER);
//console.log("PASS EXISTS:", !!process.env.SMTP_PASS);
