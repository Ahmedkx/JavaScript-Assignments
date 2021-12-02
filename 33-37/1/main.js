let numOne = 9;
// Condition Output => "009"

let numTwo = 20;
// Condition Output => "020"

let numThree = 110;
// Condition Output => "110"

if (numOne < 10) {
    document.write(`00${numOne}`)
}
else if (numTwo > 10 && numTwo < 100) {
    document.write(`0${numTwo}`)
}
else if (numThree >= 100) {
    document.write(numThree)
}