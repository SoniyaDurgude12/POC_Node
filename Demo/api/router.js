const router = require("express").Router();
const {
    add,
    getEmployee,
    getEmployeeById,
    updateEmployeeById,
    deleteEmployeeById
    } = require("./controller");
   /*  getEmployeeById
} = require("./controller"); */

const passport = require("passport");
require('../config/passport')(passport); 

const { loginUser, registerUser } = require("./validation_controller");


router.post("/addEmployee",passport.authenticate('jwt', { session: false }), function (req, res) {                   
    add(req, res);
    //res.status(200).json("done");
});
router.get("/getEmployee",passport.authenticate('jwt',{session: false}), function (req, res) {
     getEmployee(req, res);
});
 router.get("/getEmployeeById/:id",passport.authenticate('jwt',{session: false}), function (req, res) {
     getEmployeeById(req, res);
});

////auth apis 
router.post("/login", function (req, res, next) {
    //Defining api
    loginUser(req, res, next);
});
/* router.get("/getEmployeeById/:id",function(req,res){
    getEmployeeById(req,res);
}); */
router.put("/updateEmployeeById",passport.authenticate('jwt',{session: false}),function(req,res){
    updateEmployeeById(req,res);
});
router.delete("/deleteEmployeeById/:id",passport.authenticate('jwt',{session: false}),function(req,res){
    deleteEmployeeById(req,res);
});
router.post("/register", function (req, res, next) {
    registerUser(req, res, next);
});


module.exports = router;
