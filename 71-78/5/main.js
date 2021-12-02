let nums = [2, 12, 11, 5, 10, 1, 99];

// 500

let nNums = nums.reduce(function (acc, ele) {
    return ele % 2 == 0 ? acc * ele : acc + ele;
}, 1);

console.log(nNums);
