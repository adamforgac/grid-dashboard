const arrowLeft = document.querySelector(".left-arrow");
const arrowRight = document.querySelector(".right-arrow");

arrowLeft.addEventListener("click", function() {
    setTimeout(function() {
        document.querySelector(".todo-list-area").style.right = "50px";
    }, 100)
    setTimeout(function() {
        document.querySelector(".todo-list-area").style.right = "50px";
    }, 100)
    document.querySelector(".todo-list-area").style.display = "grid"; 
});

arrowRight.addEventListener("click", function() {
    document.querySelector(".todo-list-area").style.right = "-150%";
    document.querySelector(".todo-list-area").style["margin-right"] = "0px";
    setTimeout(function() {
        document.querySelector(".todo-list-area").style.display = "none";
    }, 500)
});

const calculator = document.querySelector(".project1");
const website = document.querySelector(".project2");
const form = document.querySelector(".project3");
const game = document.querySelector(".project4");

calculator.addEventListener("click", function() {
    window.open("https://adamforgac.github.io/Calculator/", "_blank");
})

website.addEventListener("click", function() {
    window.open("https://adamforgac.github.io/tutoring-web/", "_blank");
})

form.addEventListener("click", function() {
    window.open("https://adamforgac.github.io/sign-up-form/", "_blank");
})

game.addEventListener("click", function() {
    window.open("https://adamforgac.github.io/etch-a-sketch/", "_blank");
})