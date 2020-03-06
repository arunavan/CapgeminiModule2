class Employee {
   ename :string ;
   mobile:string ;
   email :string;
constructor(ename:string, mobile:string,email:string) {
  this.ename=ename;
  this.mobile=mobile;
  this.email=email;
}
showEmpDetails() :void {
   console.log(this.ename+" "+this.mobile+"  "+this.email);
}
}
class FreelanceEmployee extends Employee {
 constructor()  {super()}
disp():void {console.log("sub class");
 }
}
var e1=new Employee("Ram","9878675645","ram@gmail.com");
e1.showEmpDetails();

var f=new FreelanceEmployee();
f.disp();