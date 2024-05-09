import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const url= process.env.DB_URL;
export const connectUsingMongoose =  async()=>{
    try{
    await mongoose.connect(url);
    console.log("connected to mongoose mongodb");
}catch(err){
        console.log("error in connecting db");
        console.log(err);

    }
}