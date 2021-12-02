body = document.querySelector("body")
body.style.cssText = "margin: 0px"
// Header Start
let header = document.createElement("header");
header.classList.add("header");
header.style.cssText = "display: flex; padding: 10px 15px; align-items: center; justify-content: space-between;";

let headerH1 = document.createElement("h1");
headerH1.style.cssText = "color: rgb(18, 108, 81); margin: 0px;";
headerH1.innerHTML = "Elzero";
header.appendChild(headerH1);


let headerUl = document.createElement("ul");
headerUl.style.cssText = "display: flex; list-style: none; margin: 0px;";
header.appendChild(headerUl)

let headerNav = ["Home","About","Services","Contact"]
for(i=0; i < headerNav.length;i++){
let headerLi = document.createElement("li")

let headerA = document.createElement("a")
headerA.setAttribute("href","#");
headerA.style.cssText = "color: rgb(103, 103, 103); font-weight: 600; display: block; margin: 0px 10px; font-size: 1.1rem; text-decoration: none;"
headerA.innerHTML = headerNav[i];

headerLi.appendChild(headerA)
headerUl.appendChild(headerLi)
}

document.body.appendChild(header);
// Header End
// Start Main
let main = document.createElement("main");
main.classList.add("products-container");
main.style.cssText = "background-color: rgb(238, 238, 238); display: flex; flex-wrap: wrap; gap: 15px; justify-content: space-between; padding: 15px; min-height: calc(100vh - 116.5px); box-sizing: border-box;";



for(let i = 1;i <=  15;i++){
let mainDiv = document.createElement("div")
mainDiv.classList.add("product")
mainDiv.style.cssText = "text-align: center; flex-basis: calc(33.3333% - 30px); background-color: white; padding: 23px 10px; font-size: 1.1rem;";
mainDiv.innerHTML = "Product"
main.appendChild(mainDiv);

let mainSpan = document.createElement("span");
mainSpan.style.cssText = "display: block; font-size: 1.6rem;";
mainSpan.innerHTML = i
console.log(document.createTextNode(i))
mainDiv.prepend(mainSpan)
}

document.body.appendChild(main);
// End Main
// Start Footer
footer = document.createElement("footer");
footer.classList.add("footer")
footer.style.cssText = "text-align: center; font-size: 1.5rem; color: white; background-color: rgb(18, 108, 81); padding: 16px;"
footer.innerHTML = "Copyright 2021"
document.body.appendChild(footer)
// End Footer