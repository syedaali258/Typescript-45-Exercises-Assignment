function makesandwitch() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwitch with the following items:  \n");
    items.forEach(function (singleitem) { return console.log(singleitem); });
    console.log("\nNow enjoy your sandwitch");
}
//call the function 3 times with 3 different number of arguments
makesandwitch("chicken", "cheese", "mayo", "egg");
makesandwitch("bread", "butter");
makesandwitch("bread", "butter", "chicken", "mayo", "egg", "lettuce", "toamto");
