function alert() {
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    let span = document.createElement("span");
    let exit = document.createElement("div");

    div.style.cssText =
        "background-color : #F5F3F4; width: 400px; height: 150px; display: flex; justify-content: center; alighn-items: center; flex-direction: column; text-align: center";
    h1.style.cssText = "margin-top: 0";
    exit.style.cssText =
        "position: relative; top: -110px; right: -200px; width: 50px; height: 10px; border-radius: 50%; background-color: red";
    h1.innerText = "Welcome";
    span.innerText = "Welcome To Elzero Web School";
    exit.innerText = "X";
    div.appendChild(h1);
    div.appendChild(span);
    div.appendChild(exit);
    document.body.appendChild(div);
}
alert();
