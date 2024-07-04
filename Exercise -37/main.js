function make_shirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "I love Typescript"; }
    console.log("creating a ".concat(size, " shirt  with the ").concat(printMessage, " prints on shirt"));
}
//calling a function with by default values
make_shirt();
//calling a function with now with medium size and default message
make_shirt("medium");
//calling a function with small size and different print Message
make_shirt("small", "I love Javascript");
