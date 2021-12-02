let num1 = 9;
let str = "9";
let num2 = "20";

// Output
"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {num2}"

if (num1 == str) {
    document.write(`${num1} Is The Same Value As ${str}`)
}
else if (num1 == str) {
    document.write(`${num1} Is The Same Value As ${str} But Not The Same Type`)
}
else if (num1 !== num2) {
    document.write(`${num1} Is Not The Same Value Or The Same Type As ${num2}`)
}