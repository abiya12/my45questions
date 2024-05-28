let guest:string[]=["Hamzah","Farhan","Imran"];


let notComing="imran"
let newGuest:string="sarah"

console.log(`Sir ${notComing} will not coming tomorrow`)

guest[2]=newGuest

for(let i=0; i<guest.length; i++){
    console.log("Hello" +" "+guest[i]+" "+"I would like to invite you on dinner.")

}

console.log("\nGood news! We found a bigger dinner table.");

guest.unshift("maha")
guest.splice(3,0,"irfan")
guest.push("maryam")
for(let i=0; i<guest.length; i++){
    console.log("Hello" +" "+guest[i]+" "+"I would like to invite you on dinner.")
}

// Print the number of people invited to dinner
console.log(`Number of people invited to dinner: ${guest.length}`);
