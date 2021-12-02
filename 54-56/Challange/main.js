/*
Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
    "Amgad",
    "Samah",
    "Ameer",
    "Omar",
    "Othman",
    "Amany",
    "Samia",
    "Anwar",
];
let counter = 0;
let index = 0;

for (j = 0; j < myAdmins.length; j++) {
    if (myAdmins[j] == "Stop") {
        break;
    } else {
        counter++;
    }
}

document.write(`<div>We Have ${counter} Admins</div><hr>`);

for (i = 0; i < counter; i++) {
    document.write(`
    <div>The Admin for team ${i + 1} Is ${myAdmins[i]}</div>
    <h3>Team Members:</h3>`);
    for (j = 0; j < myEmployees.length; j++) {
        if (myAdmins[i].charAt(0) === myEmployees[j].charAt(0)) {
            document.write(`<p>- ${index + 1} ${myEmployees[j]}</p>`);
            index++;
        } else continue;
    }
    index = 0;
    document.write("<hr>");
}
