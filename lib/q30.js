"use strict";
/* Q.30
Hello Admin: Make a array of five or more usernames, including the name 'admin'.
 Imagine you are writing code that will print a greeting to each user after they log in to a website.
 Loop through the array, and print a greeting to each user:*/
Object.defineProperty(exports, "__esModule", { value: true });
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let usernames = ["Adil", "Amin", "Abaid", "Afzal", "Ahmad"];
for (let i = 0; i < usernames.length; i++) {
    let username = usernames[i];
    if (username === "Adil") {
        console.log(`Welcome back, ${username}: You have full access to the website.`);
    }
    else {
        console.log(`Hello, ${username}: Thanks for logging in.`);
    }
}
let usernames_2 = ['Admin', 'Johndoe', 'Janedoe', 'Bobsmith', 'Sarahjones'];
for (let i = 0; i < usernames_2.length; i++) {
    let username = usernames_2[i];
    if (username === 'Admin') {
        console.log(`Hello ${username}: would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${username}: thank you for logging in again.`);
    }
}
