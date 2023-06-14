"use strict";
/* Q.26  Alien Colors #2: Choose a color for an alien as you did in Exercise 25,
 and write an if-else chain.*/
Object.defineProperty(exports, "__esModule", { value: true });
let planet_temperature = 89; //      degrees
if (planet_temperature >= 100) {
    console.log("alien_color: red ,");
} /* If the alien’s color isn’t green,
                                 print a statement that the player just earned 10 points. */
else if (planet_temperature >= 70) {
    console.log("alien_color: orange , the player just earned 10 points. ");
}
else if (planet_temperature >= 50) {
    console.log("alien_color: blue,");
}
/* If the alien’s color is green, print a statement that the
player just earned 5 points for shooting the alien.*/
else {
    console.log("alien_color : green ,he player just earned 5 points for shooting the alien.");
}
