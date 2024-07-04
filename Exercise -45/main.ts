//define a function to create an object with optional options

function create_car(manufacturer, model, ...options){
    //initialize a car object with manufacturer and model
    let car = {
        manufacturer : manufacturer,
        model: model,
    };

    //add additional options to the car object
    options.forEach(option => {
        let [key , value] = option.split(":");
        car[key.trim()] = value.trim()
    });
    return car;

}

//call the function to create the car object
let my_car = create_car("Toyota" , "corolla" , "color : black", "sunroof :true" , "year:2024");

//print the variable to ensure all the information is stored correctly in the car object
console.log(my_car);
