/* 17.Q Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have
space for only two guests*/
var guest = ["Hammad", "Abaid", "Tayyab", "hafiz"];
var msg = " Sorry you are not invited on dinner ";
var txt1 = "";
for (var i = 0; i < 2; i++) {
    txt1 += guest.pop() + msg + "\n";
}
console.log(txt1);
var txt = "";
guest.forEach(myFunction);
console.log(txt);
console.log(guest.splice(0, 2));
console.log(guest.length);
function myFunction(value) {
    txt += value + " Your are still invited on dinner \n";
}
