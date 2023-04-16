function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanEl = document.querySelector(".color");

const buttonEl = document.querySelector(".change-color");

buttonEl.addEventListener("click", () => {
  const color = getRandomHexColor();
  spanEl.textContent = color;
  document.body.style.background = color;
});
