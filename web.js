#!/usr/bin/env node

"use strict";
var express = require("express"),
	fs = require("fs"),
	path = require("path"),
	app = express.createServer(express.logger());
app.use("/", path);
app.use(express.static(path.join(__dirname, "content")));

app.get("/", function (request, response) {
	response.sendfile(__dirname + "/index.html");
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
	console.log("Listening on " + port);
});