let imgs = document.querySelectorAll("img");
console.log(imgs);

for (i = 0; i < imgs.length; i++) {
    if (imgs[i].hasAttribute("alt")) {
        imgs[i].setAttribute("alt", "Old");
    } else {
        imgs[i].setAttribute("alt", "Elzero New");
    }
}
