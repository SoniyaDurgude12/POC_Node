const mongoose = require("mongoose");
const express = require('express');
const db_config = require("../config/database_mongo");
const utils = require("../lib/utils");
const User = require("../model/User");
const bcrypt =require('bcrypt');


// make connection to mongodb ///////////

mongoose.connect(db_config.database
    , { useCreateIndex: true, useNewUrlParser: true });

/// check connection 
mongoose.connection
    .once('open', () => console.log("db connected "))
    .on("error", (error) => {
        console.log(error);
    });


module.exports = {
    login: function (req, res, next) {
        User.findOne({ email: req.body.email })
            .then((user) => {

                if (!user) {
                    res.status(401).json({ sucess: false, msg: "could not find user" })
                }
                if (user) {

                    //validate password 

                    let password = req.body.password;

                    const ismatch = isValidPassword(password, user.password);
                    if (ismatch) {

                        // issue token 
                        const tokenObject = utils.issueJwt(user);
                        res.status(200).json({ sucess: true, token: tokenObject.token, expiresIn: tokenObject.expires });


                    } else {

                        res.status(401).json({ sucess: false, message: "wrong password " });
                    }



                }



            })
            .catch((err) => {
                next(err);
            });
        }
    ,





                
    register: function (req, res, next) {

        // get fields from body 
        email = req.body.email;
        password = req.body.password;
        var newUser = User({ email, password });

        newUser.save()
            .then((user) => {
                // if user is save create token 
                const tokenObject = utils.issueJwt(user);

                res.json({ sucess: true, user: user, token: tokenObject.token, expiresIn: tokenObject.expires })
            }).catch(err => next(err));

    }

};


function isValidPassword(user_pass, db_pass) {
    console.log(user_pass, db_pass)
    return bcrypt.compareSync(user_pass, db_pass);

}


