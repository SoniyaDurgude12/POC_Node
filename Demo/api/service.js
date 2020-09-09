const pool = require("../config/database");                 //Getting db connectivity from database.js

module.exports = {
   
    addEmp: (data) => {
        return new Promise((resolve,reject)=>{
            pool.query(                                  //Writing mysql query
                'insert into emp values(?,?)',
                [
                    data.empId,
                    data.empName
                ],
                (error,results) => {
                    if(error){
                        reject(error);
                    }
                    resolve(results);
                }
            );
        })
    },
    getEmp: () => {
        return new Promise((resolve,reject)=>{
            pool.query('select * from emp',                       //Writing mysql query
            [],
            (error,results) => {
                if(error){
                    reject(error);
                }
                resolve(results);
            });
        })
    },
    getEmpByID: (id) => {
        return new Promise((resolve,reject)=>{
            pool.query('select * from emp where empId=?',          //Writing mysql query
            [
                id
            ],
            (error,results) => {
                if(error){
                    reject(new Error('Database connection error'));
                }
                resolve(results);
            }
            );
        })
    },
    checkResultLength: (results) => {
        return new Promise((resolve,reject)=> {
            if(results.length > 0){
                resolve(results);
            }
            else {
                reject(new Error("Employee doesn't exist!!"));
            }
        });
    }
};