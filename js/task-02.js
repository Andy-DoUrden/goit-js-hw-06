const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const listEl = document.querySelector("#ingredients");

function doListOfItems(parent, items) {
  parent.append(
    ...items.map((item) => {
      const liEl = document.createElement("li");
      liEl.classList = "item";
      liEl.textContent = item;
      return liEl;
    })
  );
}

doListOfItems(listEl, ingredients);
