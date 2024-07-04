var userNames = ["bushra", "asad", "sadia", "admin", "wasif"];
userNames = [];
if (userNames.length === 0) {
    console.log(" your array is empty we need to find some users!");
}
else {
    //using for each loop on array
    userNames.forEach(function (oneuser) {
        if (oneuser === "admin") {
            console.log("Hello ".concat(oneuser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneuser, ", thankyou for logging in agian"));
        }
    });
}
