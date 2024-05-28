let guest:string[]=["Hamzah","Farhan","Imran"];
//for(let i=0; i<guest.length; i++){
//    console.log("Hello" +" "+guest[i]+" "+"I would like to invite you on dinner.")
//}

let notComing="imran";
let newGuest:string="sarah";

//console.log(`Sir ${notComing} will not coming tomorrow`)

guest[2]=newGuest

//for(let i=0; i<guest.length; i++){
//    console.log("Hello" +" "+guest[i]+" "+"I would like to invite you on dinner.")
//
//}

//console.log("\nGood news! We found a bigger dinner table.");

guest.unshift("maha")
guest.splice(3,0,"irfan")
guest.push("maryam")
//for(let i=0; i<guest.length; i++){
//    console.log("Hello" +" "+guest[i]+" "+"I would like to invite you on dinner.")
//}

console.log("\nUnfortunately! Bigger dinner table didn't arrive,only two people allowed")
while(guest.length>2){
   let removeGuest = guest.pop();
   console.log(`sorry ${removeGuest} you are not invited to dinner `)
}
for(let i=0; i<guest.length; i++){
        console.log("\nHello" +" "+guest[i]+" "+"you are still invited.\n")
    }
   
    guest.splice(0,2)
    console.log("final guest list:", guest)