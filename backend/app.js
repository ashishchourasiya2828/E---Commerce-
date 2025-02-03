const express = require("express")
const cookieParser = require("cookie-parser")
const app = express()

const database = require("./src/db/db")
database()

const userRoutes = require("./src/routes/user.routes")


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/users',userRoutes)





module.exports = app