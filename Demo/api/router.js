const router = require("express").Router();
const { 
    add,
    getEmployee,
    getEmployeeById
    } = require("./controller");

router.post("/addEmployee",function(req,res){                   //Defining api
    add(req,res);
});
router.get("/getEmployee",function(req,res){
    getEmployee(req,res);
});
router.get("/getEmployeeById/:id",function(id,req,res){
    getEmployeeById(id,req,res);
});

module.exports = router;
