//Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magicians:string[]=["chris","michael","tom"];

function showMagicians(magicians:string[]) {
    magicians.forEach(magician =>{
        console.log(magician);
    });
}

function makeGreat(magicians:string[]) {
     for(let i=0; i<magicians.length; i++){
         magicians[i]="The Great"+" "+magicians[i];
}
 };
makeGreat(magicians);
showMagicians(magicians);
