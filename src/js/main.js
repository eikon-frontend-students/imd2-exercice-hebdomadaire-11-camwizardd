var button = document.querySelector(".button");
var text = document.querySelector(".text");
var count = document.querySelector(".count");
var icon = document.querySelector("i");

function changeColor() {
  button.classList.add("is-active");
  text.classList.add("is-active");
  icon.classList.add("is-active");

  count.textContent = parseInt(count.textContent) + 1;

  setTimeout(function () {
    button.classList.remove("is-active");
    text.classList.remove("is-active");
    icon.classList.remove("is-active");
  }, 2000);
}

button.addEventListener("click", changeColor);
