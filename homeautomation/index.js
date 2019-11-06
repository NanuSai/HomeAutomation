const path = require("path");
global.appRoot = path.resolve(__dirname);
const express = require("express");
const port = process.env.PORT || "8000";
var app = express();
var loginrouter = require("./Routes/login-router");
var mainrouter = require("./Routes/main-router");
var controlsrouter = require("./Routes/control-router");

app.use("/", loginrouter);
app.use("/main", mainrouter);
app.use("/controls",controlsrouter);


app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});