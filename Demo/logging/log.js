const winston = require("winston");
require("winston-mongodb");

const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    transports: [
        new winston.transports.File({filename:"./logging/error.log",level:"error"}),
        new winston.transports.File({filename:"./logging/info.log",level:"info"}),
        new winston.transports.File({filename:"./logging/all.log",level:"silly"}),

        new winston.transports.MongoDB({
            db: 'mongodb://localhost:27017/POC',
            collection: 'log',
            level: 'silly',
            storeHost: true,
        }),

        new winston.transports.MongoDB({
            db: 'mongodb://localhost:27017/POC',
            collection: 'log_error',
            level: 'error',
            storeHost: true,
        })
    ],
});

module.exports = logger;