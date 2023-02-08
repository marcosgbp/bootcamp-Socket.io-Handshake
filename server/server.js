const express = require('express');
const app = express();
const socket = require('socket.io');
const cors = require("cors");
 
const server = app.listen(8000,()=>{
    console.log("El server esta ok Rey")
});
//Socket
const io = socket(server, {
    cors:{
        origin:"*",
        methods:["POST", "GET"]
    }
})
io.on("connection", socket=>{
    io.emit("saludar")
})