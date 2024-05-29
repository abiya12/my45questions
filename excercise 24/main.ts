let car:String="subaru";

//equality true
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

// equality false
console.log("Is car =='honda'? I predict false.");
console.log(car == 'honda');

// inequality true
console.log("Is car !='toyota'? I predict true.");
console.log(car != 'toyota');

// inequalty false
console.log("Is car !=='subaru'? I predict false.");
console.log(car !== 'subaru');

// lower case conversion true
console.log("is car.tolowercase == 'subaru'? i predict true")
console.log(car.toLowerCase() == 'subaru');

// lower case conversion false
console.log("is car.tolowercase == 'honda'? i predict false")
console.log(car.toLowerCase() == 'honda');
let number: number = 42;

// Numerical equality test
console.log("Is number == 42? I predict True.");
console.log(number == 42); 

// Numerical inequality test
console.log("Is number != 10? I predict True.");
console.log(number != 10); 

// Greater than test
console.log("Is number > 30? I predict True.");
console.log(number > 30); 

// Less than test
console.log("Is number < 50? I predict True.");
console.log(number < 50); 

// Greater than or equal to test
console.log("Is number >= 42? I predict True.");
console.log(number >= 42);

// Less than or equal to test
console.log("Is number <= 42? I predict True.");
console.log(number <= 42); 

// False numerical equality test
console.log("Is number == 10? I predict False.");
console.log(number == 10); 

// False numerical inequality test
console.log("Is number != 42? I predict False.");
console.log(number != 42); 

// False greater than test
console.log("Is number > 100? I predict False.");
console.log(number > 100); 

// False less than test
console.log("Is number < 10? I predict False.");
console.log(number < 10); 

//and operator &&
console.log("Is number > 30 && number < 50? I predict True.");
console.log(number>30 && number<50)

//or operator ||
console.log("Is number > 50 || number < 18? I predict false.");
console.log(number> 50 || number<18)

let fruits: string[] = ["banana"];

// Item in array test
console.log("Is 'banana' in fruits? I predict True.");
console.log(fruits.includes('banana')); 

// Item not in array test
console.log("Is 'grape' in fruits? I predict False.");
console.log(fruits.includes('grape')); 

