const {validationResult} = require("express-validator")
const userModel = require('../models/user.model')
const userService = require("../services/user.service")

module.exports.userRegister = async (req,res)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, firstName,lastName, password } = req.body;

      const existingUser = await userModel.findOne({email})

      if(existingUser){
        return res.status(400).json({ errors: [{ msg: "Email or username already exists" }] });
    }
    
    const hashedPasssword = await userModel.hashPassword(password)

    const newUser  = await userService.registerUserService({
        email,firstName,lastName,password:hashedPasssword
    })

    if(!newUser){
        return res.status(400).json({error:"error in creating user"});
    }
    
     return res.status(201).json({ user: newUser});


}

module.exports.userLogin = async (req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()})
    }

    const {email,password} = req.body

    const user = await userModel.findOne({ email }).select("+password");

    if (!user) {
        return res.status(401).json({ message: "invalid email or password" });
      }
    
    const isMatch = await user.comparePassword(password);
    
    if (!isMatch) {
        return res.status(401).json({ message: "invalid email or password" });
    }
      
    const token = user.generateToken();

    res.cookie('token',token)

    return res.status(200).json({user,token})

}