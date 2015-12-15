"use strict";

var express = require("express");
var serveStatic = require("serve-static");
var downloadProxy = require("../../server/download-proxy.js");

var PORT = process.env.PORT || 3000;

var app = express();

app.use("/proxy/:url", downloadProxy({allowedMimes: ["application/octet-stream"]}));
app.use("/files/", serveStatic(__dirname + "/static"));

console.log("Starting Wanadev Proxy Test Server on 0.0.0.0:" + PORT);
app.listen(PORT);
