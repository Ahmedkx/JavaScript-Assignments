/*
Number Challenge
*/

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(parseInt(Math.min(a, b, c, d)));
console.log("ـــــــــــــــــــــ");

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a, parseInt(d))); // 10000
console.log("ـــــــــــــــــــــ");

// Get Integer "2" From d Variable With 4 Methods
console.log(parseInt(d));
console.log(+d.toFixed(0));
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log("ـــــــــــــــــــــ");

// Use Variables b + d To Get This Valus
console.log((parseInt(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String

console.log(Math.ceil(parseInt(b) / Math.ceil(d))); // 67 => Number