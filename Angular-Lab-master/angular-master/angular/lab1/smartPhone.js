"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var mobile_1 = require("./mobile");
var Smartphone = /** @class */ (function (_super) {
    __extends(Smartphone, _super);
    function Smartphone(mobile) {
        var _this = _super.call(this, 2, "Samsung Galaxy S10", 75000) || this;
        _this.mobileType = mobile;
        return _this;
    }
    Smartphone.prototype.printMobile = function () {
        _super.prototype.printMobile.call(this);
        console.log("Mobile Model:" + this.mobileType);
    };
    return Smartphone;
}(mobile_1.Mobile));
exports.Smartphone = Smartphone;
