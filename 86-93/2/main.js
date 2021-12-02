for (i = 0; i < document.querySelectorAll("div").length; i++) {
    document
        .querySelectorAll("img")
        [i].setAttribute(
            "src",
            "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
        );
    document.querySelectorAll("img")[i].setAttribute("alt", "Elzero Logo");
}

console.log(document.querySelectorAll("div")[3]);
