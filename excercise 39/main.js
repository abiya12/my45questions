//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
function cityCountry(city, country) {
    return "\"".concat(city, ", ").concat(country, "\"");
}
var city1 = cityCountry("Lahore", "Pakistan");
var city2 = cityCountry("Tokyo", "Japan");
var city3 = cityCountry("New York", "USA");
console.log(city1);
console.log(city2);
console.log(city3);
