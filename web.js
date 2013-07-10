#!/usr/bin/env node

"use strict";
var express = require("express"),
	fs = require("fs");

var app = express.createServer(express.logger());

app.get("/", function (request, response) {
	var fileData =fs.readFileSync("./index.html","utf8");
	response.send(fileData);
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
	console.log("Listening on " + port);
});