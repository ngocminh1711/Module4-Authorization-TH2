import express from "express";

import bodyParser from "body-parser";

import mongoose from "mongoose";

import router from "./src/router/router";
import authRouter from "./src/router/auth.router";



const PORT = 3000;

const app = express();

app.set("view engine", "ejs");



app.set('views', './src/views');

app.use(bodyParser.json());

const DB_URL = 'mongodb://localhost:27017/dbtest';



mongoose.connect(DB_URL)

    .then(() => console.log('DB Connected!'))

    .catch(error => console.log('DB connection error:', error.message));



app.use("/api", router);
app.use('/auth', authRouter);



app.listen(PORT, () => {

    console.log("App running on port: "+ PORT)

})