let para = document.querySelector("p");
para.remove();

let div1 = document.createElement("div")
let div2 = document.createElement("div")
let mainDiv = document.querySelector(".our-element")

div1.classList.add("start")
div1.setAttribute("title","Start Element")
div1.setAttribute("data-value","Start")
div1.innerHTML = "Start"

div2.classList.add("end")
div2.setAttribute("title","End Element")
div2.setAttribute("data-value","End")
div2.innerHTML = "End"

mainDiv.before(div1);
mainDiv.after(div2);