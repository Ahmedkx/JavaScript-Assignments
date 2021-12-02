let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero

let result = mix
    .map(function (ele) {
        return typeof ele === "number" ? "" : ele;
    })
    .reduce(function (a, b) {
        return `${a}${b}`;
    });

console.log(result);
