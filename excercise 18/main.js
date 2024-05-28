var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["maldives", "bali", "thailand", "london", "paris"];
console.log("orignal order:", places);
console.log("alphabetical order:", __spreadArray([], places, true).sort());
console.log("orignal order:", places);
console.log("reverse order:", __spreadArray([], places, true).sort().reverse());
console.log("orignal order:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Back to original order:", places);
places.sort();
console.log("Sorted in alphabetical order:", places);
