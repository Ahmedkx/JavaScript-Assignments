function checkStatus(a, b, c) {
    let name;
    let age;
    let hire;
    switch (typeof a) {
        case "string":
            name = a;
            break;
        case "number":
            age = a;
            break;
        case "boolean":
            hire = a;
            break;
    }
    switch (typeof b) {
        case "string":
            name = b;
            break;
        case "number":
            age = b;
            break;
        case "boolean":
            hire = b;
            break;
    }
    switch (typeof c) {
        case "string":
            name = c;
            break;
        case "number":
            age = c;
            break;
        case "boolean":
            hire = c;
            break;
    }
    if (hire === true) {
        hire = "You Are Available For Hire";
    } else {
        hire = "You Are Not Available For Hire";
    }
    document.write(`"Hello ${name}, Your Age Is ${age}, ${hire}"<br>`);
}
// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
