const router = require("express").Router();
const { 
    add,
    getEmployee,
    getEmployeeById,
    updateEmployeeById,
    deleteEmployeeById
    } = require("./controller");

router.post("/addEmployee",function(req,res){                   //Defining api
    add(req,res);
});
router.get("/getEmployee",function(req,res){
    getEmployee(req,res);
});
router.get("/getEmployeeById/:id",function(req,res){
    getEmployeeById(req,res);
});
router.put("/updateEmployeeById",function(req,res){
    updateEmployeeById(req,res);
});
router.delete("/deleteEmployeeById/:id",function(req,res){
    deleteEmployeeById(req,res);
});

module.exports = router;
