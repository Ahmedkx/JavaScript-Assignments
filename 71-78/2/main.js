let myString = "EElllzzzzzzzeroo";

// Elzero

let String = myString
    .split("")
    .filter(function (ele, index) {
        console.log(
            ele +
                " index of ele : " +
                myString.indexOf(ele) +
                " The index is : " +
                index
        );
        return myString.indexOf(ele) == index;
    })
    .join("");

console.log(String);
