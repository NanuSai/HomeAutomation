var express = require("express");
var controlrouter = express.Router();

//on req to localhost:3000 root req '/data'
controlrouter.get("/css",(req,res) => {
    res.sendFile(appRoot+'/controls/controls.css"');
});

controlrouter.get("/script",(req,res) => {
    res.sendFile(appRoot+'/controls/controls.js');
});

controlrouter.get("/", (req, res) => {
    res.sendFile(appRoot+'/controls/controls.html');
});

module.exports = controlrouter;
