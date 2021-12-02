let a = 10;
let b = "20";
let c = 80;

//First Value//
console.log(++a + +b++ + +c++ - +a++);

/*
[++a] => Value : 11
[+] => Addition Operator
[+b++] => Value : 20
[+] => Addition Operator
[+c++] => Value : 80
[+a++] => Value : 11
*/




//------------------------------------------------------------------------//
a = 10;
b = "20";
c = 80;

//Second Value//
console.log(++a + -b + +c++ - -a++ + +a);
//          11  + -20 + 80 - -11 + 12




//------------------------------------------------------------------------//
a = 10;
b = "20";
c = 80;

//Third Value//
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
//           79 + 20 +  9  *  20  - 21 * 9 +  8  - 1
