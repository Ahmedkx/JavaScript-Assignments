let result = 1;
function multiply(...numbers) {
    for (i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] === "string") continue;
        else if (typeof numbers[i] === "number") {
            result *= Math.trunc(numbers[i]);
        }
    }
    document.write(`${result}<br>`);
    result = 1;
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
