const burger = document.querySelector("#hamburger-menu");
const menu = document.querySelector(".services");
const propdrop = document.querySelector(".propdrop")
const loginbtn = document.querySelector("#login")
const loginform = document.querySelector(".loginform")
logic = false;

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
})
document.querySelectorAll(".services").forEach(element => {
    element.addEventListener('click', () => {
        burger.classList.remove("active");
        menu.classList.remove("active");
    })
})

loginbtn.addEventListener("click", () => {
    loginform.style.display = "flex"
})

document.querySelector("#create").addEventListener("click", () => {
    document.querySelector(".loginBox").style.display = "none"
    document.querySelector("#signupbox").style.display = "flex"
})
document.querySelector("#backtologin").addEventListener("click", () => {
    document.querySelector("#signupbox").style.display = "none"
    document.querySelector(".loginBox").style.display = "flex"
})

document.querySelectorAll(".xmark").forEach(element => {
    element.addEventListener("click", () => {
        loginform.style.display = "none"
    })
})

