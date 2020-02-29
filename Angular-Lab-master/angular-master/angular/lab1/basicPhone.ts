import{Mobile} from './Mobile'

export class Basicphone extends Mobile{
    mobiletype:string;
    constructor(mobile){
super(1,"Nokia 108",4500);
this.mobiletype=mobile;
    }
printMobile()
{
super.printMobile();
console.log("Mobile Model:"+this.mobiletype)

}

    }
