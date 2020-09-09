const { 
    addEmp,
    getEmp,
    getEmpByID,
    checkResultLength
    } = require("./service");                     //Importing from service.js
const logger = require("../logging/log");         //Importing logger from log.js        

module.exports = {
    add: (req,res) => {
        const body = req.body;
        return addEmp(body)
        .then(
            (results)=> {
                logger.info("New Employee added!!");                //logging info
                return res.status(200).json({
                    success:1,
                    message: "Successfull!!!",
                    data:results
                })
            }
        )
        .catch(
            (e)=> {
                logger.error(e);
                console.log(e);
                return res.status(500).json({
                success:0,
                message:"Database connection error"
                });
            }
        )
    },
    getEmployee: (req,res) => {
        return getEmp()
        .then(
            (results) => {
                logger.info("Employee list displayed!!");             //Logging info
                return res.status(200).json({
                    success:1,
                    message: "Successfull!!",
                    data: results
                });
            }
        )
        .catch(
            (e) => {
                logger.error(e); 
                console.log(e);
                return res.status(500).json({
                    success:0,
                    message:"Database connection error"
                });
            }
        )
    },
    getEmployeeById: (req,res) => {
        const id = req.params.id;
        return getEmpByID(id)
        .then(
            (results) => {
                return checkResultLength(results)
                .then(
                    (results) => {
                        logger.info("Employee found and displayed!!");           //logging info
                        return res.status(200).json({
                            success:1,
                            message: "Successfull!!!",
                            data:results
                        })
                    }
                )
                .catch(
                    (e)=> {
                    logger.error(e);   
                    console.log(e);
                    return res.status(500).json({
                        success:1,
                        message:"Employee doesn't exists!!"
                    });
                    }
                )
            }
        )
        .catch((e) => {
            logger.error(e);
            console.log(e);
            return res.status(500).json({
                success:0,
                message:"Database connection error"
            });
        }
    ) 
        /* .catch(
            (error) => {
              if(error.name === "Employee doesn't exist!!!") {
                logger.error(new Error("Employee doesn't exist!!!"));   
                console.log(e);
                return res.status(500).json({
                    success:1,
                    message:"Employee doesn't exists!!"
                });
              }
              else {
                logger.error(new Error("Database connection error"));
                console.log(e);
                return res.status(500).json({
                    success:0,
                    message:"Database connection error"
                });
              }
            }
        )  */
 

        /* .catch("Employee doesn't exist!!!", function(e) {
                logger.error(new Error("Employee doesn't exist!!!"));   
                console.log("SFSDFSFSAGSA",e);
                return res.status(500).json({
                    success:1,
                    message:"Employee doesn't exists!!"
                });
            }
        )
        .catch((e) => {
                logger.error(new Error("Database connection error"));
                console.log("error",e);
                return res.status(500).json({
                    success:0,
                    message:"Database connection error"
                });
            }
        ) */
    }
};