import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config();

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server Running at port : ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("Mongo connection failed",error);
})