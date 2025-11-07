//task

//Shopping Cart
let item1 = 6100;
let item2 = 4500;

let total = item1 + item2 ;

console.log("Original price:", item1+item2)

const discount = total/100*30 ;

let finalPrice = total - discount;

console.log("FinalPrice:", finalPrice );

//Age and Country Check
let Country1 = "India";
let Country2 = "USA";
let Age = 25;

if(Age >= 18 && (Country1 == "India" || Country2 == "USA")){
    console.log("Allowed");
}else{
    console.log("Not Allowed");
}