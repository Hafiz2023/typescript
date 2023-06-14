
/* Q.41  Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
         which prints the name of each magician in the array.*/

         // make a function that will get an array and print of each elements

function show_megician(megician = []) {
    for (let i = 0; i < megician.length; i++) {
        console.log(megician[i])
    }
}

let arrMegician:any = ['mohid', 'saeed', 'irfan', 'furqan']
show_megician(arrMegician)