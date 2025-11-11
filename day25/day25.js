// Checking stock availability until quantity run out.

let stock = 10;
let customer = 1;
while (stock > 0) {
  console.log("Customer " + customer + " bought 1 item");
 stock = stock - 1;
  console.log("Remaining Stock:" + stock);
  customer++
 }
console.log("Stock Finished");


// Sum of Number from 1 to 20.

let n=20;
let sum=0;
 for(let i=1;i<=n;i++){
    sum=sum+i; 
 }
console.log("result=" +sum );

//	Reverse Countdown 10 to 1.

let m=1;

 for(let i=10;i>=m;i--){
    console.log('countdown=' +i)
 }

//	Sum of even Number, 1 to 50.

let a=50;
let total=0;
 for( let i=1;i<=a;i++){
   if(i%2===0){
      total=total+i;
   }
 }
console.log("sum of no=" +total)