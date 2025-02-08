import { config } from 'dotenv';
import express, { urlencoded } from 'express';
import Routes from "./routes/index.js";
config();

import connectDB from './config/db.js';

connectDB();

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}))

app.get("/", (req, res)=>{
    res.send("Dwaipayan");
});

app.use(Routes);


app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})
