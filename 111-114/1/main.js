if(!window.localStorage.getItem("fontFamily")){
    window.localStorage.setItem("fontFamily","Open Sans")
    window.localStorage.setItem("color","black")
    window.localStorage.setItem("fontSize","16px")
}

let para = document.querySelector("p");

function setLocal (localName,localValue){
    window.localStorage.setItem(localName,localValue)
}

let fontfamily = document.querySelector("#fontFamily")
fontfamily.onchange = function (){
    setLocal("fontFamily",fontfamily.value)
    para.style.fontFamily = window.localStorage.getItem("fontFamily")
}
let color = document.querySelector("#color")
color.onchange = function (){
    setLocal("color",color.value)
    para.style.color = window.localStorage.getItem("color")
}
let fontSize = document.querySelector("#font-size")
fontSize.onchange = function (){
    setLocal("fontSize",fontSize.value)
    para.style.fontSize = window.localStorage.getItem("fontSize")
}
fontfamily.value = window.localStorage.getItem("fontFamily")
color.value = window.localStorage.getItem("color")
fontSize.value = window.localStorage.getItem("fontSize")

para.style.fontFamily = window.localStorage.getItem("fontFamily")
para.style.color = window.localStorage.getItem("color")
para.style.fontSize = window.localStorage.getItem("fontSize")