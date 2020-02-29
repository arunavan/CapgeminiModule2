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
var Mobile_1 = require("./Mobile");
var Basicphone = /** @class */ (function (_super) {
    __extends(Basicphone, _super);
    function Basicphone(mobile) {
        var _this = _super.call(this, 1, "Nokia 108", 4500) || this;
        _this.mobiletype = mobile;
        return _this;
    }
    Basicphone.prototype.printMobile = function () {
        _super.prototype.printMobile.call(this);
        console.log("Mobile Model:" + this.mobiletype);
    };
    return Basicphone;
}(Mobile_1.Mobile));
exports.Basicphone = Basicphone;
