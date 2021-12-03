let numbers = prompt("Print Number From – To", "5-20").split("-");

if (+numbers[0] < +numbers[1]) {
    for (i = +numbers[0]; i <= +numbers[1]; i++) {
        console.log(+numbers[0]);
        +numbers[0]++;
    }
} else if (+numbers[0] > +numbers[1]) {
    for (i = +numbers[1]; i <= +numbers[0]; i++) {
        console.log(+numbers[1]);
        +numbers[1]++;
    }
}
