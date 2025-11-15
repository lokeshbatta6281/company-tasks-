// 1) Remove duplicates from an array
let arr= [1,2,3,2,4,3,5];

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log("removeDuplicates:",removeDuplicates(arr));


// 2) Find the longest word in an array of strings

let words=["apple", "banana", "grapes", "Watermelon"]

let largest =" ";
 for(let word of words){
    if(word.length > largest.length)
        largest=word;
 }

 console.log("largestword:",largest);


// 3) Convert string to array


let string="JavaScript is fun";
 console.log("String : "+string)
 let arrays=string.split(" ");
 console.log("Array : ");
 console.log(arrays);
