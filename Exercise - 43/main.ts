function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

//function to amke magicians great through .map() it will modify array

function make_great(magicians: string[]){
    return magicians.map(name => `The great ${name}`)
}

//define an array of magicians names
let magician_names = ["harry poter" , "asad" , "wasif"]

//making a copy of orignal array through .slice() function
let copy_magician_names = magician_names.slice()

//modify the copied array to include "The Great" with their names
let  copy_great_magicians = make_great(copy_magician_names);

//show both arrays orignal and copied

//orignal
console.log("orignal Array\n");

show_magicians(magician_names);

//copied
console.log("\ncopied Array\n");

show_magicians(copy_great_magicians);
