let div = document.createElement("div");


div.innerText = "10";

let interval = setInterval(() => {
    div.innerText = +div.innerText - 1;
    if(+div.innerText === 0){
        location.href = "https://elzero.org/";
    }
}, 1000);

document.body.appendChild(div);