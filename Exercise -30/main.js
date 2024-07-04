var userNames = ["bushra", "asad", "sadia", "admin", "wasif"]; //creating an array
//using ForEach loop on array
userNames.forEach(function (oneuser) {
    if (oneuser === "admin") {
        console.log("Hello ".concat(oneuser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneuser, ", thankyou for logging in agian"));
    }
});
