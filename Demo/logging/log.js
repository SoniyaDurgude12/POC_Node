const winston = require("winston");
require("winston-mongodb");

//convert to upper case
const custFormat = winston.format((info,opts)=>{
    if(info.level != "http"){
        info.message = info.message.toUpperCase();
    }
    return info;
})();

//convert to lower case
const custFormat1 = winston.format((info,opts)=>{
    if(info.level != "http"){
        info.message = info.message.toLowerCase();
    }
    return info;
})();

const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.errors({stack:true}),
        winston.format.json(),
    ),
    transports: [
        new winston.transports.File({
            filename:"./logging/info.log",
            level:"info",
            format:winston.format.combine(custFormat)
        }),
        new winston.transports.File({filename:"./logging/error.log",level:"error"}),
        new winston.transports.File({filename:"./logging/all.log",level:"silly"}),

        new winston.transports.MongoDB({
            db: 'mongodb://localhost:27017/POC',
            collection: 'log',
            level: 'silly',
            storeHost: true,
            format:winston.format.combine(custFormat)
        }),

        new winston.transports.MongoDB({
            db: 'mongodb://localhost:27017/POC',
            collection: 'log_error',
            level: 'error',
            storeHost: true,
            format:winston.format.combine(custFormat1,winston.format.errors({stack:true}))
        })
    ],
});


/* logger.configure({
    level:"error",
    format:winston.format.combine(custFormat,winston.format.errors({stack:true}),),
    transports:[
        new winston.transports.File({filename:"./logging/error.log",level:"error"}),
    ],
}); */

module.exports = logger;