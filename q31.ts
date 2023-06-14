
/*
No Q.31    Users: Add an if test to Exercise 28 to make sure the list of users is not empty.


• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/



let usernames = ['Adil', 'Amin', 'Ahmed', 'Abaid', 'Afzal'];

if (usernames.length === 0) {
  console.log('We need to find some users!');
} else {
  for (let i = 0; i < usernames.length; i++) {
    let username = usernames[i];
    if (username === 'Adil') {
      console.log(`Hello ${username} , would you like to see a status report?`);
    } else {
      console.log(`Hello ${username} , thank you for logging in again.`);
    }
  }
}



//• Remove all of the usernames from your array, and make sure the correct message is printed.*/

let usernames_2 = [];

if (usernames_2.length === 0) {
  console.log('We need to find some users!');
} else {
  for (let i = 0; i < usernames_2.length; i++) {
    let username = usernames[i];
    if (username === 'Adil') {
      console.log(`Hello ${username}, would you like to see a status report?`);
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}







export{}