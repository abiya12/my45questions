let currentUsers:string[]=["admin","july","max","hailey"];
let newUsers:string[]=["bob","harry","Admin","sam"];

newUsers.forEach((newUser)=>{
    if(currentUsers.some(
        (currentUser)=> currentUser.toLowerCase() === newUser.toLowerCase())
     ) {
        console.log(`${newUser} will need to enter a new username`)
    }
    else{
        console.log(`${newUser} is available`)
    }
})

