"use strict";
/* Q.40  Album: Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title, and it should return a Object
containing these two pieces of information. Use the function to make three dictionaries representing different albums.
 Print each return value to show that Objects are storing the album information correctly.
 Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
 If the calling line includes a value for the number of tracks, add that value to the album’s Object.
 Make at least one new function call that includes the number of tracks on an album. */
Object.defineProperty(exports, "__esModule", { value: true });
// make a function that have an dictionary object
function make_album(artist_name, album_title, track = 0) {
    let album = {
        "Artist": artist_name,
        "Title": album_title,
        "tracks": track
    };
    return album;
}
var newAlbum = make_album("Nusrat Fateh Ali Khan", "Shahen shah");
console.log(newAlbum);
var newAlbum = make_album("Mehdi Hassan", "Ab ke hum bichde");
console.log(newAlbum);
var newAlbum = make_album("Tylor swift", "folklore", 9);
console.log(newAlbum);
