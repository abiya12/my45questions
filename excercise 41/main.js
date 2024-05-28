//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magicians = ["chris", "michael", "tom"];
function showMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
showMagicians(magicians);
