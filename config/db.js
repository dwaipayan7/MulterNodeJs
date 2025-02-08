import { config } from "dotenv";
import mongoose from "mongoose";
config()
const connectDB = async function () {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB Connected");
        
    } catch (error) {
        console.log(error);
        
    }
}

export default connectDB;