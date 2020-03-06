function addNumbers(...nums:number[]) {  
   var i;   
   var sum:number = 0; 
   
   for(i = 0;i<nums.length;i++) { 
      sum = sum + nums[i]; 
   } 
   console.log("sum of the numbers",sum) 
} 
addNumbers(1,2,3) 
addNumbers(10,10,10,10,10)

addNumbers(102,130,140,234,453,435,10,10)

function calculate_discount(price:number,rate:number = 0.50) { 
   var discount = price * rate; 
   console.log("Discount Amount: ",discount); 
} 
calculate_discount(1000) 
calculate_discount(1000,0.30)


var product = function(a:number,b:number) { 
   return a*b;  
}; 
console.log(product(12,2)) 

var foo = (x:number)=> 10 + x  
console.log(foo(100))


var uname = new String("Hello World")
console.log(uname) 
console.log("Length "+uname.length)


var alphas:string[]; 
alphas = ["1","2","3","4"] 
console.log(alphas[0]); 
console.log(alphas[1]);
var arr_names:number[] = new Array(4)  

for(var i = 0;i<arr_names.length;i++;) { 
   arr_names[i] = i * 2 
   console.log(arr_names[i]) 
}


var mytuple = [10,"Hello","World","typeScript"]; 
console.log("Items before push "+mytuple.length)    // returns the tuple size 
		
mytuple.push(12)                                    // append value to the tuple 
console.log("Items after push "+mytuple.length) 
console.log("Items before pop "+mytuple.length) 
console.log(mytuple.pop()+" popped from the tuple") // removes and returns the last item
  
console.log("Items after pop "+mytuple.length)


