"use strict";
exports.__esModule = true;
var Mobile = /** @class */ (function () {
    function Mobile(id, name, price) {
        this.mobileID = id;
        this.mobileName = name;
        this.mobilePrice = price;
    }
    Mobile.prototype.printMobile = function () {
        console.log("\n");
        console.log("Mobile ID:" + this.mobileID + "\nMobile Model:" + this.mobileName +
            "\nMobile Price:" + this.mobilePrice);
    };
    return Mobile;
}());
exports.Mobile = Mobile;
