


let guest_list = ["meerab", "sadia", "wasif", "asad"]      //creating a guest list Array

let dontcome = guest_list[0];                             //making variable for those guest who cant come

console.log(dontcome, "nahi asakti");                    //print the name of guest  who cant come

guest_list.splice(0, 1, "bushra");                   //add or remove guest from guest list Array

console.log("Good News ! we have found a bigger table for dinner");            //message print for bigger table

guest_list.unshift("sana");                                     //adding a new guest at starting index of array

guest_list.push("mehrish");                                     //adding a new guest to the ending index of array

let middleindex: number = Math.floor(guest_list.length / 2)         //get a middle index of our guestlist array

guest_list.splice(middleindex , 0, "ali");                        //adding a new guest to middle index of array

console.log("updated list of our guests");                        //print message of updated list

guest_list.forEach(guest_list => console.log(`hi ${guest_list} i want to invite you for dinner tonight 8:pm at my place`))    ;          //sending an invitation message to our guest


console.log("unfortunately, the new dinner table wont arrive on time, so i can invite only two guests to dinner with me");     //inform that only two guests can be invited at a time


while (guest_list.length > 2) {                                  //using while loop to remove guests from the array until only two guests remain
     let removedguest = guest_list.pop()
     console.log(`sorry, ${removedguest} I cant invite you for dinner`);

}
console.log("Invitations to the last two Guests");                           //sending invitations to the last two guests in the list
guest_list.forEach(lasttwo => console.log(`luckily ${lasttwo}, you are still invited for dinner`));

//Removing the last two guests from the list
guest_list.pop();
guest_list.pop();

console.log("Empty List:" , guest_list);