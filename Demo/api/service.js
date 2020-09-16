const pool = require("../config/database");                 //Getting db connectivity from database.js

module.exports = {
   
    //Function to insert emp into db
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
//-------------------------------------------------------------------------------------------------------

    //Function to fetch data from db
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
//------------------------------------------------------------------------------------------------------

    //Function to fetch data by Id from db
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
//------------------------------------------------------------------------------------------------------

    //Function to check whether employee exist or not in fetching emp by Id
    checkResultLength: (results) => {
        return new Promise((resolve,reject)=> {
            if(results.length > 0){
                resolve(results);
            }
            else {
                reject(new Error("Employee doesn't exist!!"));
            }
        });
    },
//------------------------------------------------------------------------------------------------------

    //function to update data in db
    updateEmpByID: (data) => {
        return new Promise((resolve,reject)=> {
            pool.query('update emp set empName=? where empId=?',
            [
                data.empName,
                data.empId
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
//--------------------------------------------------------------------------------------------------------

    //Function to check whether emp updated/deleted or not
    checkEmpExist: (results)=> {
        return new Promise((resolve,reject)=> {
           if(results.affectedRows==0){
                reject(new Error("Employee doesn't exists cannot update or delete!!"));
           }
           resolve(results);
        });
    },
//--------------------------------------------------------------------------------------------------------

    //Function to delete from db
    deleteEmpById:(id)=>{
       return new Promise((resolve,reject)=> {
            pool.query('delete from emp where empId=?',
            [
                id
            ],
            (error,results)=> {
                if(error)
                    reject(error);
                resolve(results);
            }
            );
       });
    }
//----------------------------------------------------------------------------------------------------------
};