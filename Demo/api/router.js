const router = require("express").Router();
const {
    add,
    getEmployee,
    getEmployeeById
} = require("./controller");

const passport = require("passport");
require('../config/passport')(passport); 

const { loginUser, registerUser } = require("./validation_controller");


router.post("/addEmployee",passport.authenticate('jwt', { session: false }), function (req, res) {                   
    // add(req, res);
    res.status(200).json("done");
});
// router.get("/getEmployee", function (req, res) {
//     getEmployee(req, res);
// });
// router.get("/getEmployeeById/:id", function (id, req, res) {
//     getEmployeeById(id, req, res);
// });

////auth apis 
router.post("/login", function (req, res, next) {
    //Defining api
    loginUser(req, res, next);
});
router.get("/register", function (req, res, next) {
    registerUser(req, res, next);
});


module.exports = router;
