const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

var schema = new Schema(
    {
        email: { type: String, required: true },
        password: { type: String, required: true }
    }
);

//trigger this when save event is hit (pre) 
schema.pre('save', async function (next) {

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    }
    catch (err) {
        next(err);
    }
});


module.exports = mongoose.model("User", schema, 'user');
