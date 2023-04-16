const rangeInputEl = document.querySelector("#font-size-control");

const spanEl = document.querySelector("#text");

rangeInputEl.addEventListener("input", (event) => {
  spanEl.style.fontSize = `${event.currentTarget.value}px`;
});
