/*
    Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
my.pop();
my.pop();
console.log(my.reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(my.length - counter, my.length - true)); // ["Elham", "Mazero"]
my.pop();
my.shift();
let text =
    my[zero].slice(zero, my.length) + my[counter - my.length].slice(my.length);
console.log(text); // "Elzero"

console.log(
    text[my.length + my.length] + text[counter + my.length].toUpperCase()
); // "rO"
