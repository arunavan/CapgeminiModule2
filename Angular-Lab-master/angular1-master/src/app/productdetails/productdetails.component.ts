import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
shops: Array<String>=[];

print(form)
{
console.log("Product ID:"+form.id)
console.log("Product Name:"+form.name)
console.log("Product Cost:"+form.cost)
console.log("Product Online:"+form.online)
console.log("Product Category:"+form.category)
this.getshops(form)
console.log("Available in Shops:"+this.shops)
}

constructor() { }

  ngOnInit() 
  {
  }
getshops(form)
{
this.shops.splice(0,4)
if(form.shop1)
{
this.shops.push("Big Bazzar")
}
if(form.shop2)
{
this.shops.push("D-Mart")
}

if(form.shop3)
{
this.shops.push("Reliance")
}

if(form.shop4)
{
this.shops.push("Mega Store")
}
}
  

}
