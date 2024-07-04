function makesandwitch(... items: string[]){              //define a function with a rest parameter that acceps items arguments representing our sandwitch
    console.log("\nMaking a sandwitch with the following items:  \n");
    items.forEach(singleitem =>console.log(singleitem));

    console.log("\nNow enjoy your sandwitch");
    
}

//call the function 3 times with 3 different number of arguments
makesandwitch("chicken" ,"cheese" , "mayo" , "egg");

makesandwitch("bread" , "butter");

makesandwitch("bread" ,"butter" ,"chicken", "mayo" ,"egg" ,"lettuce" , "toamto");



