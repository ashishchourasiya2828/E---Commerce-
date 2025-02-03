const {body} = require("express-validator")

exports.registerValidater = [
    body('firstName').isLength({min:3,max:20}).withMessage("firstName must be 3 letter min and 20 letter max"),
    body('lastName').isLength({min: 3,max:20}).withMessage("lastName must be at least 3 characters long and at most 20 characters long"),
    body('email').isEmail().withMessage("Please enter a valid email"),
    body('password').isLength({min: 6,max:30}).withMessage("Password must be at least 6 characters long and at most 15 characters long"),

]

exports.loginValidator = [
    body('email').isEmail().withMessage('please enter valid email'),
    body('password').isLength({min:6,max:30}).withMessage("password must be atleast 3 character long and less than 30 character")
]