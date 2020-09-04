const pool = require("../config/database");                 //Getting db connectivity from database.js

module.exports = {
    addEmp: (data,callback) => {
        pool.query(                                  //Writing mysql query
            'insert into emp values(?,?)',
            [
                data.empId,
                data.empName
            ],
            (error,results) => {
                if(error){
                    callback(error);
                }
                return callback(null,results);
            }
        );
    },
    getEmp: callback => {
        pool.query('select * from emp',                       //Writing mysql query
        [],
        (error,results) => {
            if(error){
                callback(error);
            }
            return callback(null,results);
        });
    },
    getEmpByID: (id,callback) => {
        pool.query('select * from emp where empId=?',          //Writing mysql query
        [
            id
        ],
        (error,results) => {
            if(error){
                callback(error);
            }
            return callback(null,results);
        }
        );
    }
};