require("dotenv").config();
const express = require("express");
const route = require("./api/router");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();
app.use(bodyParser.json());
app.use(express.json());

app.use(passport.initialize());
app.use("/api",route);

//todo  use env varaible for port
const port = process.env.PORT;


app.listen(port,() => {
    console.log("Server running on port : ",port);
});





