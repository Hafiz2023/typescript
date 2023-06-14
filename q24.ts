/* Q.24   More Conditional Tests: You don’t have to limit the number of tests you create to 10.
 If you want to try more comparisons, write more tests. 
Have at least one True and one False result for each of the following: */

let numberOfTests = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
 let i = numberOfTests.length
if ( i < 19) {
    console.log(`true`);
    } else {
    console.log(`false`);
}


// A. • Tests for equality and inequality with strings

 let x = 5
if (x > 10){
   console.log("x is greater than 10");   //This will not execute since x < 10
}
else{
    console.log("x is not greater than 10"); // This will print since x < 10

}
  
// B. Tests for equality and inequality with string.

let a = `adil`
let b = `adil`
if (a == b){
    console.log(`the two string are wqual , a == b: ${a} `);
}
else {
    console.log(`the two string are not wqual,a != b : ${a} `);
    
}

//  inequality
let string1 = "Hello"
let string2 = "World"
if (string1 != string2){
    console.log("The two strings are not equal");

}
else{
    console.log("The two strings are equal");

}

/* C.   Numerical tests involving equality and inequality, greater than and less than, 
        greater than or equal to, and less than or equal to.*/



    let n = 10
    let m = 10
        if( n == m)  {                          // Equality test
            console.log ("n and m are equal");
}
        else {
            console.log("n and m are not equal");
}
                                                // Inequality test
       let p = 10
       let y = 20
        if (p != y) {
            console.log("p and y are not equal");
}
        else {
            console.log("p and y are equal");
          
}


                                               //Greater than test
        x = 20
        y = 10
        if ( x > y) {
            console.log("x is greater than y");

}
        else {
            console.log("x is not greater than y");
}
                                               // Less than test
        x = 10
        y = 20
        if ( x < y) {
            console.log("x is less than y");
}

        else {
            console.log("x is not less than y");
}
        
                                            //Greater than or equal to test
        x = 20
        y = 10
        if (x >= y) {
            console.log("x is greater than or equal to y");
}
        else {
            console.log("x is less than y");
}
                                        




                                      //Less than or equal to test
        x = 10
        y = 20
        if (x <= y) {
            console.log("x is less than or equal to y");
}
        else {
            console.log("x is greater than y");
}




// D• Tests using "and" and "or" operators


// operator "and".
x = 10
y = 20
if (x > 0 && y > 0)
    console.log("x and y are both positive");

// operator "or".
x = 10
y = 5
if (x < 0 || y > 0)
    console.log("x or y is positive");




// E • Test whether an item is in a array



let whether =[ `sunday`, `monday`,`tusday`,`wednesday`, `thursday`,`friday`,`saturday`];
console.log(`is avalibile`, whether[1]);
console.log(`is not avalibile`, whether[11]);   // whether an item is not in a array.













export{}