let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let j = 1;

for (i = letter.indexOf("a"); i < friends.length; i++) {
    if (
        friends[i][letter.indexOf("a")] == "A" ||
        friends[i][letter.indexOf("a")] == "a"
    ) {
        continue;
    } else {
        document.write(`"${j} => ${friends[i]}"<br>`);
        j++;
    }
}
