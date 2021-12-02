console.log(document.getElementById("elzero"));
console.log(document.getElementsByTagName("div"));
console.log(document.getElementsByClassName("element"));
console.log(document.getElementsByName("js"));
console.log(document.querySelector(".element"));
console.log(document.querySelector("#elzero"));
console.log(document.querySelector("div"));
console.log(document.querySelector("[name = 'js']"));
console.log(document.querySelectorAll(".element"));
console.log(document.querySelectorAll("#elzero"));
console.log(document.querySelectorAll("div"));
console.log(document.querySelectorAll("body div"));

let first = document.querySelector(".element");
let second = document.querySelector(".element");
let third = document.querySelector(".element");

if (first.hasAttribute("id") === true) {
    console.log(first);
}
if (second.hasAttributes("id") === true) {
    console.log(first);
}
if (third.attributes.length === 3) {
    console.log(first);
}
