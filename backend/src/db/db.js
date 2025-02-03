const mongoose = require("mongoose");
const config = require("../config/config")

const database = ()=>{
    mongoose.connect(config.MONGO_URI).then(()=>{
        console.log("connected to db");
    }).catch(err =>{
        console.log(err);
        
    })
}

module.exports = database