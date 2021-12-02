let index = 10;
let jump = 2;
let end = 0;

for (;;) {
    document.write(`${index} <br>`);
    index -= jump;
    if (index <= jump) {
        break;
    }
}
