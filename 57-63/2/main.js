// Needed Output
// calculate(20); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, 'add'); // 50
// calculate(20, 30, 'subtract'); // -10
// calculate(20, 30, 'multiply'); // 600
function calculate(firstNum, secondNum, operation) {
    if (operation === "add") {
        document.write(firstNum + secondNum);
    } else if (operation === "subtract") {
        document.write(firstNum - secondNum);
    } else if (operation === "multiply") {
        document.write(firstNum * secondNum);
    } else if (firstNum === undefined || secondNum === undefined) {
        document.write("Second Number Not Found");
    } else {
        document.write(firstNum + secondNum);
    }
}

calculate(20, 30, "add");
