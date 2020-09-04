const prompt = require("prompt");

prompt.start();

console.log("Enter two numbers : ");
prompt.get(["a","b"],function(err,result){
    if(err){
        console.log("error!!");
    }
    else {
        try{
            if(result.b==0){
                throw new Error("Cannot divide by zero!!");
            }
            const c = result.a / result.b;
            console.log("Result : ",c);
        }catch(e){
            console.log(e);
        }
    }
} );