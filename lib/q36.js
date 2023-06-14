"use strict";
/* Q.36  T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message
          that should be printed on the shirt.

The function should print a sentence summarizing the size of the shirt and the message printed on it.
Call the function. */
Object.defineProperty(exports, "__esModule", { value: true });
// make a function that store a size and a message.
function make_shirt(size, message) {
    console.log("This is " + size + " shirt");
    console.log(message);
}
make_shirt('"small"', '"This is for teenager"');
