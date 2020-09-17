const passport = require("passport");

//define strategy 
var JwtStrategy =require("passport-jwt").Strategy,
    ExtractJwt =require("passport-jwt").ExtractJwt;

// import model 
const User =require("../model/User").model('User');

// declare option for passport 
var opts ={};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secretKey'; 
// use jwt strategy 
const strategy = new JwtStrategy(opts, (payload ,done)=>{

    User.findOne({_id :payload.sub})
    .then((user)=>{
        if(user){
        return done(null ,user);
        }
        else{
            return done(null, false);
        }
    })
    .catch(err=>{
        done(err, false);
    });

});

module.exports=(passport)=>{
    passport.use(strategy);
}

