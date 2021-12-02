let start = 0;
let swappedName = "elZerO";

for (i = start; i < swappedName.length; i++) {
    if (swappedName.charAt(i) == swappedName.charAt(i).toUpperCase()) {
        document.write(swappedName.charAt(i).toLowerCase());
    } else {
        document.write(swappedName.charAt(i).toUpperCase());
    }
}
