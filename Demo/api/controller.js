const { 
    addEmp,
    getEmp,
    getEmpByID
    } = require("./service");                     //Importing from service.js
const logger = require("../logging/log");         //Importing logger from log.js 

module.exports = {
    add: (req,res) => {
        const body = req.body;
        addEmp(body,(err,results) => {                    //Calling addEmp() function
            try{
                if(err){
                    logger.error(new Error("Database connection error"));              //Logging error log
                    throw new Error("Database connection error");
                }
            }catch(e){
                console.log(e);

                //http logging
                logger.http({"host":req.headers.host,"ip":req.ip,"params":req.params,"path":req.path,"method":req.method});
                return res.status(500).json({
                    success:0,
                    message:"Database connection error"
                });
            }
            logger.info("New employe added!");
            //http logging
            logger.http({"host":req.headers.host,"ip":req.ip,"params":req.params,"path":req.path,"method":req.method});
            return res.status(200).json({
                success:1,
                message: "Successfull!!!",
                data:results
            })
        });
    },
    getEmployee: (req,res) => {
        getEmp((err,results) => {
            try{
                if(err){
                    logger.error(new Error("Database connection error"));               //Logging error log
                    throw new Error("Database connection error");
                }
            }catch(e){
                console.log(e);
                //http logging
                logger.http({"host":req.headers.host,"ip":req.ip,"params":req.params,"path":req.path,"method":req.method});
                return res.status(500).json({
                    success:0,
                    message:"Database connection error"
                });
            }
            logger.info("Employee list displayed!!");             //Logging info
            //http logging
            logger.http({"host":req.headers.host,"ip":req.ip,"params":req.params,"path":req.path,"method":req.method});
            return res.status(200).json({
                success:1,
                message: "Successfull!!",
                data: results
            });
        });
    },
    getEmployeeById: (req,res) => {
        const id = req.params.id;
        getEmpByID(id,(err,results) => {
            //Handling database connection error
            try{
                if(err){
                    logger.error(new Error("Database connection error"));               //Logging error log
                    throw new Error("Database connection error");
                }
            }catch(e){
                console.log(e);
                //http logging
                logger.http({"host":req.headers.host,"ip":req.ip,"params":req.params,"path":req.path,"method":req.method});
                return res.status(500).json({
                    success:0,
                    message:"Database connection error"
                });
            }
            //Handling employee not found error
            try{
                if(results.length > 0){
                    logger.info("Employee found and displayed!!");           //logging info
                   // winston.info("Employee found and displayed!!");
                    logger.http({"host":req.headers.host,"ip":req.ip,"params":req.params,"path":req.path,"method":req.method});
                    return res.status(200).json({
                        success:1,
                        message: "Successfull!!!",
                        data:results
                    })
                }
                else {
                    throw new Error("Employee doesn't exist!!!");
                }
            }catch(e){
                console.log(e);
                logger.error(new Error("Employee doesn't exist"));               //logging error in error.log
                //winston.error(e);
                //http logging
                logger.http({"host":req.headers.host,"ip":req.ip,"params":req.params,"path":req.path,"method":req.method});
                return res.status(500).json({
                    success:1,
                    message:"Employee doesn't exists!!"
                });
            }
        });
    }
};