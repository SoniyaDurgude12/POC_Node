require("dotenv").config();
const express = require("express");
const route = require("./api/router");

const app = express();
app.use(express.json());

app.use("/api",route);

const port = process.env.port || 3000;

app.listen(process.env.APP_PORT,() => {
    console.log("Server running on port : ",process.env.APP_PORT);
});