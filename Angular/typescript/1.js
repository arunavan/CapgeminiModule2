var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.disp = function () {
        console.log("Function displays Engine is  :   " + this.engine);
    };
    return Car;
}());
var obj = new Car("XXSY1");
console.log("Reading attribute value Engine as :  " + obj.engine);
obj.disp();
var obj1 = new Car();
obj1.engine = "FF001";
obj1.disp();
