"use strict";
/*Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list. */
Object.defineProperty(exports, "__esModule", { value: true });
let Guest_lit = ["Hammad", "Abaid", "Tayyab"];
Guest_lit.pop();
console.log(Guest_lit);
console.log(Guest_lit.splice(2, 0, "Yasin", "Ghulam Rasool"));
console.log(Guest_lit);
console.log(Guest_lit[0] + " MERE trf se apko dinnar ki dawat ha ");
console.log(Guest_lit[1] + " MERE trf se apko dinnar ki dawat ha ");
console.log(Guest_lit[2] + " MERE trf se apko dinnar ki dawat ha ");
console.log(Guest_lit[3] + " MERE trf se apko dinnar ki dawat ha ");
console.log(Guest_lit[4] + '" MERE trf se apko dinnar ki dawat ha pls zaror aaye"');
