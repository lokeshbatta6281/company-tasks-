// Using Const
var city = "guntakal"
let age = 24
const country = "India"

console.log("Before update:")
console.log("City:", city)
console.log("Age:", age)
console.log("Country:", country)

city = "chippagiri"
age = 23
// country = "USA"  // will throw error if you try this

console.log("\nAfter update:")
console.log("City:", city)
console.log("Age:", age)
console.log("Country:", country)

 // Using let
let myAge = 24
console.log("\nMy current age:", myAge)
myAge = 25
console.log("After birthday:", myAge)
// let myAge = 24  // not allowed

// Using var
var myName = "lokesh b"
console.log("\nName:", myName)
myName = "naidu lokesh"
console.log("Updated name:", myName)