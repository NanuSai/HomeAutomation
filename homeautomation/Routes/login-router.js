var express = require("express");
var loginrouter = express.Router();

//on req to localhost:3000 root req '/data'
loginrouter.get("/css",(req,res) => {
    res.sendFile(appRoot+"/login.css");
});

loginrouter.get("/script",(req,res) => {
    res.sendFile(appRoot+"/login.js");
});

loginrouter.get("/", (req, res) => {
    res.sendFile(appRoot+"/login.html");
});

module.exports = loginrouter;
