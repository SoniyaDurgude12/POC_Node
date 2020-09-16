const jwt = require("jsonwebtoken");




function issueJwt(user){
    const _id = user._id;
    const expiresIn ="2 days";
    const payload={
        sub:_id
    };
    console.log(payload)
   
    let signedToken  =jwt.sign(payload , "secretKey" , {expiresIn:expiresIn } );
    
    return {
        token:"Bearer "+signedToken,
        expires :expiresIn
    };
};

// console.log(issueJwt(user));


module.exports.issueJwt =issueJwt;