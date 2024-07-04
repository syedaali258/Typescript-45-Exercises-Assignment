function make_shirt(size: string  = "large", printMessage: string = "I love Typescript"){
    console.log(`creating a ${size} shirt  with the ${printMessage} prints on shirt`);
}

//calling a function with by default values

make_shirt();

//calling a function with now with medium size and default message
make_shirt("medium");

//calling a function with small size and different print Message
make_shirt("small" ,"I love Javascript")