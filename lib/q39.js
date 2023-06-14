"use strict";
/* Q.39 City Names: Write a function called city_country() that takes in the name of a city and its country.
The function should return a string formatted like this:
    "Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/
Object.defineProperty(exports, "__esModule", { value: true });
// create function that return string
function city_country(city, country) {
    console.log('"' + city + ',' + country + '"');
}
city_country("Peshawar", "Pakistan");
city_country("Queta", "Pakistan");
city_country("Karachi", "Pakistan");
