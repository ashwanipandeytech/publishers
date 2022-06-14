const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    Mobile: {
        countryCode: String,
        dialCode: String,
        e164Number: String,
        internationalNumber: String,
        nationalNumber: String,

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        default: false,
        unique: true
    },
    registeredDate: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: Boolean,
        default: false,
    },
    balance: {
        type: String,
        default: 0,

    },
    lastRecharedDate: {
        type: Date,
        default: Date.now()

    },


});
userSchema.methods.hashPassword = async(password) => {
    return await bcrypt.hash(password, 10);
}
userSchema.methods.compareUserPassword = async(inputtedPassword, hashedPassword) => {
    return await bcrypt.compare(inputtedPassword, hashedPassword)
}
userSchema.methods.generateJwtToken = async(payload, secret, expires) => {
    return jwt.sign(payload, secret, expires)
}
module.exports = mongoose.model("User", userSchema);
userSchema.plugin(uniqueValidator, {
    message: '{PATH} Already in use'
});
