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
var Employee = /** @class */ (function () {
    function Employee(ename, mobile, email) {
        this.ename = ename;
        this.mobile = mobile;
        this.email = email;
    }
    Employee.prototype.showEmpDetails = function () {
        console.log(this.ename + " " + this.mobile + "  " + this.email);
    };
    return Employee;
}());
var FreelanceEmployee = /** @class */ (function (_super) {
    __extends(FreelanceEmployee, _super);
    function FreelanceEmployee() {
        return _super.call(this) || this;
    }
    FreelanceEmployee.prototype.disp = function () {
        console.log("sub class");
    };
    return FreelanceEmployee;
}(Employee));
var e1 = new Employee("Ram", "9878675645", "ram@gmail.com");
e1.showEmpDetails();
var f = new FreelanceEmployee();
f.disp();
