let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

if (haystack.includes(needle)) {
    console.log("Found");
}

if (haystack.includes("JS")) {
    console.log("Found");
}

if (haystack.includes(needle) == false) {
    console.log("Not Found");
} else {
    console.log("Found");
}
