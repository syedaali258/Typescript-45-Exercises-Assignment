//define the functions to show magicians names

function show_magicians(magicians: string[]){
    magicians.forEach(name =>  console.log(name));
}
  //function to make magicians great throug.map it will modify array
function make_great(magicians: string[]){
   return  magicians.map(name =>  ` The great ${name}`);
}

//define an array of magicians names
let magicians_names = ["harry potter" , "asad" , "wasif"] 

// call make great function to modify magicians names
let great_magicians = make_great(magicians_names);


//call show magicians that  show modified list of magicians
show_magicians(great_magicians);

