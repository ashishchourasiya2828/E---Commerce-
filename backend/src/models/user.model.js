const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config")


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        // required: true,
        unique: true
    },
    address: {
        // street: { type: String, required: true },
        // city: { type: String, required: true },
        // state: { type: String, required: true },
        // postalCode: { type: String, required: true },
        // country: { type: String, required: true }
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
},{timestamps:true});


userSchema.statics.hashPassword = async (password) => {
    return await bcrypt.hash(password,10)
}

userSchema.methods.comparePassword = async function name(password) {
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateToken = function() {
    return jwt.sign({ _id: this._id }, config.JWT_SECRET)
}

userSchema.statics.verifyToken = function(token) {
    return jwt.verify(token, config.JWT_SECRET)
}

module.exports = new  mongoose.model("user", userSchema);