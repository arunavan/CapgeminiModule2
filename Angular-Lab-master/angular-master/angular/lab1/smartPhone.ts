import {Mobile} from './mobile';
export class Smartphone extends Mobile{
mobileType:string;
constructor(mobile)
{
super(2,"Samsung Galaxy S10",75000);
this.mobileType=mobile;
}
printMobile()
{
super.printMobile();
console.log("Mobile Model:"+this.mobileType);
}

}
