"use strict";
/* Q.29  Favorite Fruit: Make a array of your favorite fruits, and then write a series
         of independent if statements that check for certain fruits in your array.

 • Make a array of your three favorite fruits and call it favorite_fruits.

 • Write five if statements. Each should check whether a certain kind of fruit is in your array.
   If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
Object.defineProperty(exports, "__esModule", { value: true });
let FavoriteFruit = ["banana", "mango", "orange",];
// console.log(FavoriteFruit);
let fu = FavoriteFruit;
if (fu == FavoriteFruit) {
    console.log(`uch as You really like !, ${fu[0]} `);
    if (fu == FavoriteFruit) {
        console.log(fu[1]);
        if (fu == FavoriteFruit) {
            console.log(fu[2]);
        }
        if (fu == FavoriteFruit) {
            console.log(fu[3]);
            if (fu == FavoriteFruit) {
                console.log(fu[4]);
            }
        }
    }
}
