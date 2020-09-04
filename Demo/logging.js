const winston = require("winston");
require("winston-mongodb");


const logger = winston.createLogger({
    level:'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({filename: "error.log",level:"error"}),
        new winston.transports.File({filename:"combined.log",level:"info"}),
        new winston.transports.File({filename:"all.log",level:"silly"}),

        new winston.transports.MongoDB({
            db: 'mongodb://localhost:27017/POC',
            collection: 'log',
            level: 'silly',
            storeHost: true,
            capped: true,
        })
    ],
});

logger.log("info","Info-Logger");
logger.log("error","error-logger");
logger.log("silly","silly-logger");
logger.log("warn","warn-logger");
logger.log("debug","debug-logger");