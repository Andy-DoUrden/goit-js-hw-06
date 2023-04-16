const categoryEl = document.querySelector("#categories");

const categoryItemsEl = Array.from(categoryEl.children);

console.log("Number of categories:", categoryItemsEl.length);

function logCategoriesAndNumberOfElements(array) {
  array.forEach((element) => {
    console.log("Category:", element.firstElementChild.textContent);
    console.log("Elements:", element.lastElementChild.children.length);
  });
}

logCategoriesAndNumberOfElements(categoryItemsEl);
