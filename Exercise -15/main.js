var guest_list = ["meerab", "sadia", "wasif", "asad"];
var dontcome = guest_list[0];
console.log(dontcome, "nahi asakti");
guest_list.splice(0, 1, "bushra");
guest_list.forEach(function (guest_list) { return console.log("hi ".concat(guest_list, " i want to invite you for dinner tonight 8:pm at my place")); });
