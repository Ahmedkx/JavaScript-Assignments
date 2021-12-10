let name1 = document.querySelector("#name")
let age1 = document.querySelector("#age")
let email1 = document.querySelector("#email")
let country1 = document.querySelector("#country")

name1.value = window.sessionStorage.getItem("name")
age1.value = window.sessionStorage.getItem("age")
email1.value = window.sessionStorage.getItem("email")
country1.value = window.sessionStorage.getItem("country")


name1.oninput = function () {
        window.sessionStorage.setItem("name",name1.value)
}

age1.oninput = function () {
        window.sessionStorage.setItem("age",age1.value)
}

email1.oninput = function () {
        window.sessionStorage.setItem("email",email1.value)
}

country1.oninput = function () {
        window.sessionStorage.setItem("country",country1.value)
}