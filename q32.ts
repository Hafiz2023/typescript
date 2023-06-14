

// check the username must be

/*Checking Usernames: Do the following to create a program that 
simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. 
Make sure one or two of the new usernames are also in the current_users list.*/


let current_user = ['nafees', 'fawad', 'mohsin', 'akram'];
let new_user = ['aslam', 'nafees', 'mohsin', 'adil'];
let match = [];

for (let i = 0; i < current_user.length; i++) {
    for (let b = 0; b < new_user.length; b++) {
        if (current_user[i] == new_user[b]) {
            match.push(current_user[i])
        }
    
        

    }
}
console.log(match, 'chose a different user names');


export{}