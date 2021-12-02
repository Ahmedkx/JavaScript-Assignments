let start = 1;
let end = 6;
let breaker = 2;

for (i = start; i <= end; i++) {
    document.write(`${i} <br>`);
    for (j = breaker; j < end; j += breaker) {
        document.write(`-- ${j}<br>`);
    }
}
