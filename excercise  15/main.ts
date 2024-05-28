let guest:string[]=["Hamzah","Farhan","Imran"];
for(let i=0; i<guest.length; i++){
    console.log("Hello" +" "+guest[i]+" "+"I would like to invite you on dinner.")
}

let notComing="imran"
let newGuest:string="sarah"

console.log(`Sir ${notComing} will not coming tomorrow`)

guest[2]=newGuest

for(let i=0; i<guest.length; i++){
    console.log("Hello" +" "+guest[i]+" "+"I would like to invite you on dinner.")

}
