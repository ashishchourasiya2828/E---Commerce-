const app = require("./app")
const http = require("http")
const config = require("./src/config/config")

const server = http.createServer(app)


server.listen(config.PORT,()=>{
    console.log(`server is running on ${config.PORT}`);
});



