var express = require("express");
var mainrouter = express.Router();

//on req to localhost:3000 root req '/data'
mainrouter.get("/css",(req,res) => {
    res.sendFile(appRoot+"/main/main.css");
});

mainrouter.get("/script",(req,res) => {
    res.sendFile(appRoot+"/main/main.js");
});

mainrouter.get("/", (req, res) => {
    res.sendFile(appRoot+'/main/main.html');
});

module.exports = mainrouter;
