//	Group students based on Marks

let numberList = [40, 85, 90, 33, 72];
let above40 = numberList.filter(n => n >= 40);
console.log(" Pass Above 40: "+ above40);

let below40 = numberList.filter(n => n < 40);
console.log(" Fail Below 40: "+ below40);

// 	Count how many numbers in an array are greater than 50.

let numbers =[24, 30, 45, 50, 65, 74, 83, 96,25, 45];
let greaterthan50 = numbers.filter(n => n>=50);
console.log("Grater than 50 numbers:" +greaterthan50);

// 	Find all Prime numbers in an array

let numberss = [2, 3, 5, 8, 11, 15, 17, 20, 23, 29, 31];

function isPrime(n){
    if(n < 2){
         return false;
    }
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) return false;
    }
    return true;
}

let prime = numberss.filter(n => isPrime(n));

console.log("Prime Numbers:", prime);

// 	Swap the First and last element of an array

let array = [1, 2, 3, 4, 5];
let temp = array[0];
array[0] = array[array.length - 1];
array[array.length - 1] = temp;

console.log("Swap the First and last element:",array);

// Find the second highest number in an array

let number = [15, 17, 20, 26, 40, 58];

let sorted = number.sort((a, b) => b - a);
let secondHighest = sorted[1];

console.log("Second Highest Number:", secondHighest);

//6.	Move all zeros to the end of the array
 // Input [1,0,5,0,9], Output [1,5,9,0,0]

let arrays = [1, 0, 5, 0, 9];
let result = arrays.filter(n => n !== 0).concat(arrays.filter(n => n === 0));
console.log("Zeros moves end:",result);  