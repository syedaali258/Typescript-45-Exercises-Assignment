let guest_list = ["meerab", "sadia" , "wasif" , "asad"];

let dontcome = guest_list[0];

console.log(dontcome, "nahi asakti");

guest_list.splice(0, 1, "bushra");

guest_list.forEach(guest_list => console.log(`hi ${guest_list} i want to invite you for dinner tonight 8:pm at my place`));