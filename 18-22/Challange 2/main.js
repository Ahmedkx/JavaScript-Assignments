let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(-d * +e++ + (f % g++)); // 2000
console.log(-d + e * g + ++f); // 173