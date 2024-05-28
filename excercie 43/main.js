//Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var magicians = ["chris", "michael", "tom"];
function showMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
;
function makeGreat(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magician) {
        greatMagicians.push("The Great ".concat(magician));
    });
    return greatMagicians;
}
var greatMagicians = makeGreat(magicians.slice());
console.log("orignal magicians:");
showMagicians(magicians);
console.log("great magicians:");
showMagicians(greatMagicians);
