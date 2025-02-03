const express = require("express");
const router = express.Router()
const controller = require('../controllers/user.controller')
const validator = require("../middleware/expressValidate.middleware")

router.post("/register",validator.registerValidater,controller.userRegister)

router.post("/login",validator.loginValidator,controller.userLogin)

module.exports = router