let number = document.querySelector("[type = number]");
let result = document.querySelector(".result");

document.forms[0].oninput = function () {
    result.textContent = `{${
        document.querySelector("[type = number]").value * 1
    }} USD Dollar = {${
        document.querySelector("[type = number]").value * 15.6
    }} Egyptian Pound`;
};
