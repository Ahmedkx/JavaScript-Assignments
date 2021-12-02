let addClass = document.querySelector(".classes-to-add");
let removeClass = document.querySelector(".classes-to-remove");
let classList = document.querySelector(".classes-list div");
let span = document.createElement("span");

addClass.onblur = function() {
    let classesToAdd = addClass.value.toLowerCase().split(" ");
    if(addClass.value !== ""){
    for(i=0;i < classesToAdd.length ; i++){
        let span = document.createElement("span");
        console.log(span.classList.add = classesToAdd[i])
        classList.appendChild(span);
    }}
    addClass.value = "";
}

removeClass.onblur = function() {
    let classesToRemove = removeClass.value.toLowerCase().split(" ");
    if(removeClass.value !== ""){
    for(i=0;i < classesToRemove.length ; i++){
        console.log(span.innerHTML == classesToRemove[i]);
        // classList.remove(span[i]);
    }}
    removeClass.value = "";
}