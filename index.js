import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.get("/", (req, res) => {
    res.json({
        author: "Coding",
        message: "Comon"
    });
});

const PORT = process.env.PORT || 5000;

    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            app.listen(PORT, () => {
                console.log(`Server is running on port:${PORT}`)
            })
        })
        .catch((error) => {
            console.error(error.message)
        })