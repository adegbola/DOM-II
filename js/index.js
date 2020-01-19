// Your code goes here
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(element => {
  element.addEventListener("mouseover", event => {
    event.target.style.color = "red";
  });
});

const funBus = document.querySelector(".logo-heading");
funBus.addEventListener("dblclick", () => {
  funBus.textContent = "Welcome";
});

const funBusImg = document.querySelector(".intro img");
funBusImg.addEventListener("mouseenter", event => {
  event.target.src =
    "https://brandongaille.com/wp-content/uploads/2014/02/AirTran-Holdings-Company-Logo.jpg";
});

const contentSection = document.querySelector(".text-content p");
contentSection.addEventListener("mouseout", () => {
  contentSection.textContent = "Adventure webdesign pretty design design.";
});

const contentImg = document.querySelectorAll(".img-content img");
contentImg[0].addEventListener("click", event => {
  event.target.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7MsqgrpKDqlV0t4tIgXxVeDX0MM9bNDiZnIwE_Y3W7Xw2iHNfdA&s";
});

const destinations = document.querySelectorAll(".destination");
destinations.forEach(element => {
  element.addEventListener("mousemove", () => {
    element.style.color = "green";
  });
});

const destination = document.querySelector(".footer");
destination.addEventListener("click", () => {
  destination.style.backgroundColor = "black";
});

const destination1 = document.querySelector(".footer p");
destination1.addEventListener("click", () => {
  destination1.style.color = "white";
});

const contentImgs = document.querySelectorAll(".img-content img");
contentImgs[1].addEventListener("mouseenter", event => {
  event.target.style.transform = "scale(1.2)";
  event.target.style.transition = "all 0.3s";
});

const contentImage = document.querySelectorAll(".img-content img");
contentImage[1].addEventListener("mouseleave", event => {
  event.target.style.transform = "scale(1)";
  event.target.style.transition = "all 0.3s";
});

let myTest = document.querySelector(".nav-container");
myTest.addEventListener("click", event => {
  myTest.style.backgroundColor = "pink";
  event.stopPropagation();
});

let links = document.querySelectorAll(".nav-link");
for (let i = 0; i <= links.length; i++) {
  links[i].addEventListener("click", event => {
    event.preventDefault();
  });
}
