// Needed Output
// sayHello("Osama", "Male"); // "Hello Mr Osama"
// sayHello("Eman", "Female"); // "Hello Miss Eman"
// sayHello("Sameh"); // "Hello Sameh"

function sayHello(theName, theGender) {
    if (theGender === "Male") {
        document.write(`Hello Mr ${theName}`);
    } else if (theGender === "Female") {
        document.write(`Hello Miss ${theName}`);
    } else {
        document.write(`Hello ${theName}`);
    }
}

sayHello("Osama", "Male"); // "Hello Mr Osama"
