var guest = ["Hamzah", "Farhan", "Imran"];
for (var i = 0; i < guest.length; i++) {
    console.log("Hello" + " " + guest[i] + " " + "I would like to invite you on dinner.");
}
var notComing = "imran";
var newGuest = "sarah";
console.log("Sir ".concat(notComing, " will not coming tomorrow"));
guest[2] = newGuest;
for (var i = 0; i < guest.length; i++) {
    console.log("Hello" + " " + guest[i] + " " + "I would like to invite you on dinner.");
}
