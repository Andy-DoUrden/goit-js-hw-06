const categoryEl = document.querySelector("#categories");

const categoryItemsEl = Array.from(categoryEl.querySelectorAll(".item"));

console.log("Number of categories:", categoryItemsEl.length);

function logCategoriesAndNumberOfElements(array) {
  array.forEach((element) => {
    console.log("Category:", element.querySelector("h2").textContent);
    console.log("Elements:", element.querySelectorAll("li").length);
  });
}

logCategoriesAndNumberOfElements(categoryItemsEl);
