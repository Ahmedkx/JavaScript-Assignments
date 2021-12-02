// let myDiv = document.createElement("div");


document.querySelector("form").onsubmit = function (e) {
    e.preventDefault();

    for (i = 0; i < document.querySelector("[type = number]").value; i++) {
        let myText = document.createTextNode(document.querySelector("[type = text]").value);
        let myDiv = document.createElement("div");
        let myClass = myDiv.classList.add("myDiv");
        myDiv.appendChild(myText);
        document.body.appendChild(myDiv);
    }

};

// let myText = document.createTextNode(document.querySelector("[type = text]").value);
// myDiv[i] = document.createElement("div");
// myDiv[i].appendChild(myText);
// document.body.appendChild(myDiv[i]);