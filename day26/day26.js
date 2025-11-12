 //Invert of right-angle triangle
 
 for(let i = 1; i<=5; i++){
    let pattern ="";
    for(let j =1; j<=5-i; j++){
    pattern += "   ";
    }
    for(let k =1; k<=i; k++){
        pattern=pattern+"*  "
    }
    console.log(pattern);
}

// Pyramid Pattern

 for(let i = 1; i<=3; i++){
    let pattern ="";
    for(let j =1; j<=3-i; j++){
    pattern += "  ";
    }
    for(let k =1; k<=2*i-1; k++){
        pattern=pattern+"* "
    }
    console.log(pattern);
}

// Display all Products
//colors = ["red", "green", "blue"];
//sizes = ["S", "M", "L"];
//O/p : Red -S. Red – M, Red – L, Green-S…….

 
 let  colors = ["Red", "Green", "Blue"];
 let sizes = ["Small", "Medium", "Large"];
for(let color of colors){
    for(let size of sizes){
    }
}
console.log(`${colors[0]}=${sizes[0]}`);
console.log(`${colors[0]}=${sizes[1]}`);
console.log(`${colors[0]}=${sizes[2]}`);
console.log(`${colors[1]}=${sizes[0]}`);
console.log(`${colors[1]}=${sizes[1]}`);
console.log(`${colors[1]}=${sizes[2]}`);
console.log(`${colors[2]}=${sizes[0]}`);
console.log(`${colors[2]}=${sizes[1]}`);
console.log(`${colors[2]}=${sizes[2]}`);