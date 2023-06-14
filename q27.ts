/* Q.27     Alien Colors #3: Turn your if-else chain from 
            Exercise 5-4 into an if-else chain.

• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points */



let alien_color = "yellow";
   
// 1st version

if (alien_color == "green"){
    console.log("You earned :5 points!");
    
}
    // 2nd  version
else if (alien_color == "yellow"){
    console.log("You earned: 10 points!");
    
}
// three version
else {
    console.log("You earned : 0 points!");
}