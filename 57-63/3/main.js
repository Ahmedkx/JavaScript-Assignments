// Needed Output
// ageInTime(110); // Age Out Of Range
// ageInTime(38); // Months Example => 456 Months

function ageInTime(theAge) {
    if (theAge < 10 || theAge > 100) {
        document.write("Age Out Of Range");
    } else {
        document.write(`Your Age In Months ${theAge * 12}<br>`);
        document.write(`Your Age In Weeks ${theAge * 12 * 4}<br>`);
        document.write(`Your Age In Days ${theAge * 12 * 4 * 7}<br>`);
        document.write(`Your Age In Hours ${theAge * 12 * 4 * 7 * 24}<br>`);
        document.write(
            `Your Age In Minutes ${theAge * 12 * 4 * 7 * 24 * 60}<br>`
        );
        document.write(
            `Your Age In Seconds ${theAge * 12 * 4 * 7 * 24 * 60 * 60}`
        );
    }
}

ageInTime(10);
