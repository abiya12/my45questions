var currentUsers = ["admin", "july", "max", "hailey"];
var newUsers = ["bob", "harry", "Admin", "sam"];
newUsers.forEach(function (newUser) {
    if (currentUsers.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username"));
    }
    else {
        console.log("".concat(newUser, " is available"));
    }
});
