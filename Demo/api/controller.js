const { 
    addEmp,
    getEmp,
    getEmpByID,
    checkResultLength,
    updateEmpByID,
    checkEmpExist,
    deleteEmpById
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
//-------------------------------------------------------------------------------------------------
    getEmployee: (req,res) => {
        return getEmp()
        .then(
            (results) => {
                logger.info("Employee list displayed!!");             //Logging info
                return res.status(200).json({
                    results
                });
            }
        )
        .catch(
            (e) => {
                logger.error(e); 
                console.log(e);
                return res.status(500).json({
                    message:"Database connection error"
                });
            }
        )
    },
//--------------------------------------------------------------------------------------------------------
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
                            data:results
                        })
                    }
                )
                .catch(
                    (e)=> {
                    logger.error(e);   
                    console.log(e);
                    return res.status(500).json({
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
    },
//-----------------------------------------------------------------------------------------------
    updateEmployeeById: (req,res)=>{
        const body = req.body;
        return updateEmpByID(body)
        .then(
            (results)=>{
                return checkEmpExist(results).then(
                    (results)=>{
                        logger.info("Employee updated!!");
                        return res.status(200).json({
                            success:1,
                            message:"Successfull!!!",
                            data:results
                        });
                    }
                )
                .catch(
                    (e)=> {
                        logger.error(e);
                        return res.status(200).json({
                            success:1,
                            message:"Employee doesn't exists cannot update!!"
                        });
                    }
                )
            }
        )
        .catch(
            (e)=>{
                logger.error(e);
                console.log(e);
                return res.status(500).json({
                    success:0,
                    message:"Database connection error!!"
                });
            }
        )
    },
//---------------------------------------------------------------------------------------------

    deleteEmployeeById:(req,res)=> {
        id = req.params.id;
        return deleteEmpById(id).then(
            (results)=> {
                return checkEmpExist(results).then(
                    (results)=>{
                        logger.info("Employee deleted!!");
                        return res.status(200).json({
                            success:1,
                            message:"Successfull!!!",
                            data:results
                        });
                    }
                )
                .catch(
                    (e)=> {
                        logger.error(e);
                        return res.status(200).json({
                            success:1,
                            message:"Employee doesn't exists cannot delete!!"
                        });
                    }
                )
            }
        )
        .catch(
            (e)=>{
                logger.error(e);
                console.log(e);
                return res.status(500).json({
                    success:0,
                    message:"Database connection error!!"
                });
            }
        )
    }
};