let myArray = ["E", "l", "z", ["e", "r"], "o"];
let myNewArray = myArray.reduce((acc, current) => {
    return Array.isArray(current)
        ? acc + current.reduce((first, sec) => first + sec)
        : acc + current;
});
console.log(myNewArray);
