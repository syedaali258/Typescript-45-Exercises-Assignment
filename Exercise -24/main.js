var banana = "banana"; //define variables
var uppercaseBanana = "BANANA";
var ten = 10;
var twenty = 20;
var colors = ["red", "black", "blue"];
//Test for equality and inequality with strings
console.log("Is banana is equal to banana?");
console.log(banana == "banana");
console.log("\n Is banana is not equal to banana?");
console.log(banana != "banana");
//Test using the lower case function 
console.log("Is BANANA is equal to banana after converting to lowercase?");
console.log(uppercaseBanana.toLowerCase() == "banana");
console.log("\n Is BANANA is not equal to banana after converting to lowercase?");
console.log(uppercaseBanana.toLowerCase() != banana);
//Numerical Tests 
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);
//
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);
//GREATER THAN
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);
//LESS THAN
console.log("\nIs twenty is less than ten?");
console.log(twenty < 10);
//GREATER THAN OR EQUAL TO 
console.log("\nIs ten is greater than or equal to five?");
console.log(ten >= 5);
//LESS THAN OR EQUAL TO 
console.log("\nIs twenty is less than or equal to ten?");
console.log(twenty <= 10);
//Test using "And" & "or" operators
//using && (and)
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("/n twenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);
//using  || (or)
console.log("\n 20 is greater than 50 0R 20 is equal to 20");
console.log(twenty > 50 || 20 == 20);
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(twenty > 50 || 20 != 20);
//Test whether an item is included in an Array
console.log("\nIs black include in my colors Array");
console.log(colors.includes("black"));
//Test whether an item is not included in an Array
console.log("\nIs black is not included in my colors Array");
console.log(!colors.includes("black"));
