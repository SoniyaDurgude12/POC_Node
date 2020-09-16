const mongoose = require("mongoose");

const {login , register} = require("./validation_service")

// call function from  validation_service
module.exports= {
    loginUser: (req , res , next)=>{login(req , res , next)
    },
    registerUser:(req , res , next) =>{register(req , res , next )
    }
};


