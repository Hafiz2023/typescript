"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guests = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve'];
let num_guests;
// Print a message inviting each person to dinner.
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ` + guests[0] + `  , please come to dinner at my place! `);
    console.log(`Dear ` + guests[1] + ` , please come to dinner at my place! `);
    console.log(`Dear ` + guests[2] + ` , please come to dinner at my place! `);
    console.log(`Dear ` + guests[3] + `, please come to dinner at my place! `);
    break;
}
// Print a message indicating the number of people invited to dinner.
//num_guests = (guests)
console.log(`I am inviting ,${guests.length} people to dinner.`);
