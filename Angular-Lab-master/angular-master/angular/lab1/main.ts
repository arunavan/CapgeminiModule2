import{Smartphone} from './smartPhone'
import{Basicphone} from './basicPhone'
var models=new Array();
var basic=new Basicphone("Basic");
models.push(basic);

var smart=new Smartphone("Smart");
models.push(smart);

for(var i=0;i<models.length;i++)
{
models[i].printMobile();

}

