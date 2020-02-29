"use strict";
exports.__esModule = true;
var smartPhone_1 = require("./smartPhone");
var basicPhone_1 = require("./basicPhone");
var models = new Array();
var basic = new basicPhone_1.Basicphone("Basic");
models.push(basic);
var smart = new smartPhone_1.Smartphone("Smart");
models.push(smart);
for (var i = 0; i < models.length; i++) {
    models[i].printMobile();
}
