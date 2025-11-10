// find even or odd number
let number = 29;

if(number % 2==0){
    console.log("is even" +number );
}else{
    console.log("is odd"+ number);
}

// find age validator
let child = 13;
let Teenager= 19;
let	Adult= 20;
let	Senior= 60;

if(child >= 21){
console.log("The User is eligible movie");
}else{
    console.log("The User is not eligible movie");
}
if(Teenager >= 21){
console.log("The User is eligible movie");
}else{
    console.log("The User is not eligible movie");
}
if(Adult >= 21){
console.log("The User is eligible movie");
}else{
    console.log("The User is not eligible movie");
}
if(Senior >= 21){
console.log("The User is eligible movie");
}else{
    console.log("The User is not eligible movie");
}

// find grade

let marks = 93;
let grade;

if (marks >= 90) {
  grade = "A+";
} else if (marks >= 75 && marks <=89) {
  grade = "B";
} else if (marks >= 60 && marks <=74) {
  grade = "C";
} else if (marks >= 45 && marks <=59) {
  grade = "D";
} else if (marks < 45) {
  grade = "F";
}else{

}

console.log("Your Grade is: " + grade);
 
// find the largest number

let a = 100;
let b=250
let c=460
if(a>b && a<c){
    largest=a;
}else if(b>a && b>c){
    largest=b;
}else if(c>a && c>b){
    largest=c;
}
console.log("a = " + a + ", b = " + b + ", c = " + c);
console.log("The largest number is: " + largest);

// 

let year = 2024;
let result;

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  result = "Leap year";
} else {
  result = "Not a Leap year";
}

console.log("Given Year is:" + result);