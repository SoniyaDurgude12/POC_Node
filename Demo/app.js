require("dotenv").config();
const express = require("express");
const route = require("./api/router");
var winston = require('./config/winston');

const app = express();
app.use(express.json());

app.use("/api",route);

/* app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // add this line to include winston logging
    winston.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
  
    // render the error page
    //res.status(err.status || 500);
    //res.render('error');
  }); */

const port = process.env.port || 3000;

app.listen(process.env.APP_PORT,() => {
    console.log("Server running on port : ",process.env.APP_PORT);
});