
const userModel = require("../models/user.model")

module.exports.registerUserService = async ({email,password,firstName,lastName})=>{
    if (!email || !password || !firstName || !lastName) {
        throw new Error("All fields are required");
      }
    
    const user= await userModel.create({
        email,password,lastName,firstName

    })

    return user;
}