//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function carInfo(manufacturer: string, modelName: string, ...options: [string, any][]): object {
    let car = {manufacturer, modelName};
    options.forEach(([key,value])=>car[key]=value);
    return car;
}
console.log(carInfo("Toyota", "Corolla", ["color", "blue"], ["year", 2023]));
console.log(carInfo("Ford", "Fiesta", ["color", "red"], ["sunroof", true]));