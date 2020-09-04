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
                    logger.log("error","Database connection error");              //Logging error log
                    throw new Error("Database connection error");
                }
            }catch(e){
                console.log(e);
                return res.status(500).json({
                    success:0,
                    message:"Database connection error"
                });
            }

            logger.log("info","New Employee added!!");                //logging info
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
                    logger.log("error","Database connection error");              //Logging error log
                    throw new Error("Database connection error");
                }
            }catch(e){
                console.log(e);
                return res.status(500).json({
                    success:0,
                    message:"Database connection error"
                });
            }
            logger.log("info","Employee list displayed!!");             //Logging info
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
                    logger.log("error","Database connection error");              //Logging error log
                    throw new Error("Database connection error");
                }
            }catch(e){
                console.log(e);
                return res.status(500).json({
                    success:0,
                    message:"Database connection error"
                });
            }
            //Handling employee not found error
            try{
                if(results.length > 0){
                    logger.log("info","Employee found and displayed!!");           //logging info
                    return res.status(200).json({
                        success:1,
                        message: "Successfull!!!",
                        data:results
                    })
                }
                else {
                    logger.log("error","Employee doesn't exist!!!");                 //logging error in error.log
                    throw new Error("Employee doesn't exist!!!");
                }
            }catch(e){
                console.log(e);
                return res.status(500).json({
                    success:1,
                    message:"Employee doesn't exists!!"
                });
            }
        });
    }
};