var magicians = ["chris", "michael", "tom"];
function showMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function makeGreat(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great" + " " + magicians[i];
    }
}
;
makeGreat(magicians);
showMagicians(magicians);
