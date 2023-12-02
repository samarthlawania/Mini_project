import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import dbConnection from "./dbConfig/index.js";

// security package
import helmet from "helmet";
import exp from "constants";
import errorMiddleware from "./middleware/errorMiddleware.js";
import router from "./routes/index.js";
// import dbConnection from "./dbConfig";
dotenv.config();

const app=express();
const PORT=process.env.PORT||8800;
dbConnection();

app.get('/',(req,resp)=>{
    resp.status(201).json("Home getRequest")
})
// app.use('/auth',router)
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(router)
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json({limit:"10mb"}));
app.use(express.urlencoded({extended:true}));
app.use(morgan("dev"))

app.use(errorMiddleware)

app.listen(PORT,()=>{
    
    console.log(`sever running on port: ${PORT}`)
})