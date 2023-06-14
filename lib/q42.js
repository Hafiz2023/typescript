"use strict";
/* Q.42  Great Magicians: Start with a copy of your program from Exercise 39.
         Write a function called make_great() that modifies the array of magicians by
        adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.*/
Object.defineProperty(exports, "__esModule", { value: true });
// make a function that will get an array and print of each elements
function show_megician(megician = []) {
    for (let i = 0; i < megician.length; i++) {
        console.log(megician[i]);
    }
}
function great_megician(megician = []) {
    for (let i = 0; i < megician.length; i++) {
        console.log(megician[i] + ' is a Great Megician');
    }
}
let arrMegician = ['mohid', 'saeed', 'irfan', 'furqan'];
great_megician(arrMegician);
const newArrayMegician = show_megician(arrMegician);
console.log(newArrayMegician);
