function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// спробую без innerHTML

const boxes = document.querySelector("#boxes");

const inputEl = document.querySelector("input[type='number']");

const createBtnEl = document.querySelector("button[data-create]");

const destroyBtnEl = document.querySelector("button[data-destroy]");

createBtnEl.addEventListener("click", () => {
  createBoxes(Number(inputEl.value));
});

destroyBtnEl.addEventListener("click", () => {
  boxes.innerHTML = "";
});

function createBoxes(number) {
  const boxArray = [];
  for (let i = 0; i < number; i += 1) {
    if (i >= 1) {
      const box = document.createElement("div");
      box.style.width = `${30 + 10 * i}px`;
      box.style.height = `${30 + 10 * i}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxArray.push(box);
    } else {
      const box = document.createElement("div");
      box.style.width = "30px";
      box.style.height = "30px";
      box.style.backgroundColor = getRandomHexColor();
      boxArray.push(box);
    }
  }
  boxes.append(...boxArray);
}
