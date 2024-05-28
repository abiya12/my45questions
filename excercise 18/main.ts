let places=["maldives","bali","thailand","london","paris"];
console.log("orignal order:" , places)

console.log("alphabetical order:", [...places].sort())

console.log("orignal order:" , places)

console.log("reverse order:", [...places].sort().reverse())

console.log("orignal order:" , places)

places.reverse();
console.log("Reversed order:", places);


places.reverse();
console.log("Back to original order:", places);


places.sort();
console.log("Sorted in alphabetical order:", places);
