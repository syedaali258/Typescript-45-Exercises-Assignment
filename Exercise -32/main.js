var current_users = ["sana", "mehrish", "meerab", "wasif", "zehrish"]; //creating current user Array
var new_users = ["bushra", "mehrish", "meerab", "asad", "sadia"]; //creating new user Array
new_users.forEach(function (new_one_user) {
    var our_conditon = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); }); // making a condition for user name already exist and save in our condition variable
    if (our_conditon) { //print different messages using IF ELSE statement
        console.log("sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is Available"));
    }
});
