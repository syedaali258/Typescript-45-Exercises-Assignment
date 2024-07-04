function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//function to amke magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
//define an array of magicians names
var magician_names = ["harry poter", "asad", "wasif"];
//making a copy of orignal array through .slice() function
var copy_magician_names = magician_names.slice();
//modify the copied array to include "The Great" with their names
var copy_great_magicians = make_great(copy_magician_names);
//show both arrays orignal and copied
//orignal
console.log("orignal Array\n");
show_magicians(magician_names);
//copied
console.log("\ncopied Array\n");
show_magicians(copy_great_magicians);
