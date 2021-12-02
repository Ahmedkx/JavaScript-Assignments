let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
// Output
// "1 => Sayed"
// "2 => Mahmoud"

while (index < friends.length) {
    if (
        friends[index][friends.indexOf("Ahmed")] != "A" &&
        typeof friends[index] != "number"
    ) {
        counter++;
        document.write(`"${counter} => ${friends[index]}"<br>`);
        index++;
    } else {
        index++;
    }
}
