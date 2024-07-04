var guest_list = ["meerab", "sadia", "wasif", "asad"]; //creating a guest list Array
var dontcome = guest_list[0]; //making variable for those guest who cant come
console.log(dontcome, "nahi asakti"); //print the name of guest  who cant come
guest_list.splice(0, 1, "bushra"); //add or remove guest from guest list Array
console.log("Good News ! we have found a bigger table for dinner"); //message print for bigger table
guest_list.unshift("sana"); //adding a new guest at starting index of array
guest_list.push("mehrish"); //adding a new guest to the ending index of array
var middleindex = Math.floor(guest_list.length / 2); //get a middle index of our guestlist array
guest_list.splice(middleindex, 0, "ali"); //adding a new guest to middle index of array
console.log("updated list of our guests"); //print message of updated list
guest_list.forEach(function (guest_list) { return console.log("hi ".concat(guest_list, " i want to invite you for dinner tonight 8:pm at my place")); }); //sending an invitation message to our guest
