//	Calculate total cart value
// 	Hint: parameter we need to pass array [199, 299, 499]
// Discount (Ex:10%)

function add(a, b, c){
    return a+b+c;
}

let result = add(199, 299, 499);
console.log(result);

let Discount= ( result/100) * 15;
let payableAmount= result - Discount;
console.log("final result =", payableAmount);

// All Arithmetic operation using functions

function add(a,b){
    return a+b;
}
let results=add(45,15);
console.log(results);

function sub(a,b) {
    return a-b ;
}
let resultss =sub(45,15) ;
console.log(resultss);

function multliplication(a,b) {
    return a*b ;
}
let resultsss =multliplication(45,15) ;
console.log(resultsss);

function division(a,b) {
    return a/b ;
}
let resultssss =division(45,15) ;
console.log(resultssss);

// Convert Celsius – Fahrenheit

function celsiusToFahrenheit(celsius){
    fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
// Convert  Fahrenheit - Celsius
console.log(celsiusToFahrenheit(32));

function fahrenheitToCelsius(fahrenheit){
    celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}
console.log(fahrenheitToCelsius(98));