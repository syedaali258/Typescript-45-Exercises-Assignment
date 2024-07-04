//define the functions to show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//function to make magicians great throug.map it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return " The great ".concat(name); });
}
//define an array of magicians names
var magicians_names = ["harry potter", "asad", "wasif"];
// call make great function to modify magicians names
var great_magicians = make_great(magicians_names);
//call show magicians that  show modified list of magicians
show_magicians(great_magicians);
