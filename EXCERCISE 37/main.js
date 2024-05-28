//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeShirt(size, message) {
    if (size === void 0) { size = "L"; }
    if (message === void 0) { message = "I Love Typescript"; }
    console.log("Making a ".concat(size, " shirt with ").concat(message, " printing on it."));
}
makeShirt();
makeShirt("M");
makeShirt("S", "Coding is my passion");
