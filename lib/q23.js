"use strict";
/* Q.23
Conditional Tests: Write a series of conditional tests.
 Print a statement describing each test and your prediction for the results of each test.
 Your code should look something like this:*/
Object.defineProperty(exports, "__esModule", { value: true });
let number = 15;
if (number > 10) {
    console.log("number is greater than 10 & True condition");
}
let a = 20;
let b = 20;
if ((a = !b)) {
    console.log(" True condition");
}
else
    (b = a) => {
        console.log("False condition");
    };
// predict true result
let car = "honda";
console.log("Is car == 'honda'? I predict True.");
console.log(car == "honda");
let book = "javascript for biggners";
console.log("Is book == 'javascript for biggners'? I predict True.");
console.log(book == "javascript for biggners");
let city = "Lahore";
console.log("Is city == 'Lahore'? I predict True.");
console.log(city == "Lahore");
let mountain = "K2";
console.log("Is mountain == 'K2'? I predict True.");
console.log(mountain == "K2");
let river = "indus";
console.log("Is river == 'indus'? I predict True.");
console.log(river == "indus");
// predict false result
console.log("Is car is not 'honda'? I predict false.");
console.log(car != "honda");
console.log("Is book is not 'javascript for biggners'? I predict false.");
console.log(book != "javascript for biggners");
console.log("Is city is not 'Lahore'? I predict false.");
console.log(city != "Lahore");
console.log("Is mountain is not 'K2'? I predict false.");
console.log(mountain != "K2");
console.log("Is river is not 'indus'? I predict false.");
console.log(river != "indus");
