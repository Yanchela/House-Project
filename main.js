const burger = document.querySelector("#hamburger-menu");
const menu = document.querySelector(".services");
const propdrop = document.querySelector(".propdrop")
const loginbtn = document.querySelector("#login")
const loginform = document.querySelector(".loginform")
const Login = document.querySelector(".loginBox")
const Register = document.querySelector("#signupbox")
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
    Login.style.display = "flex"
})

document.querySelector("#create").addEventListener("click", () => {
    Login.style.display = "none"
    Register.style.display = "flex"
})
document.querySelector("#backtologin").addEventListener("click", () => {
    Register.style.display = "none"
    Login.style.display = "flex"
})

document.querySelectorAll(".xmark").forEach(element => {
    element.addEventListener("click", () => {
        Login.style.display = "none"
        Register.style.display = "none"
    })
})

const review1 = document.querySelector(".person1");
const review2 = document.querySelector(".person2");
const review3 = document.querySelector(".person3");

const nextreview = document.querySelector("#next");
const previousreview = document.querySelector("#previous");
const person = document.querySelectorAll(".person")


// REVIEW
currentElementIndex = 0;
showElement(currentElementIndex); // Show first element
nextreview.addEventListener('click', function() {
  currentElementIndex++;
  if (currentElementIndex >= person.length) {
    currentElementIndex = 0;
  }
  
  showElement(currentElementIndex);
});
previousreview.addEventListener('click', function() {
  currentElementIndex--;
  if (currentElementIndex < 0) {
    currentElementIndex = person.length - 1;
  }
  
  showElement(currentElementIndex);
});
function showElement(index) {
  for (let i = 0; i < person.length; i++) {
    if (i === index) {
      person[i].style.display = 'block';
    } else {
      person[i].style.display = 'none';
    }
  }
};
//




  
