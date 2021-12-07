let div = document.createElement("div");


div.innerText = "10";

let interval = setInterval(() => {
    div.innerText = +div.innerText - 1;

    if(+div.innerText === 0){
        clearInterval(interval);
    }else if (+div.innerText === 5){
        window.open("https://elzero.org/","_blank","width=400,height=400,left=200,top=10")
    }
}, 100);

document.body.appendChild(div);