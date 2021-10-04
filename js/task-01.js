const arrayOfCategories = document.querySelectorAll(".item");

console.log(`Number of categories: ${arrayOfCategories.length}`);

let nameCategories;
let numberOfItems;
for (let i = 0; i < arrayOfCategories.length; i += 1) {
    nameCategories = arrayOfCategories[i].querySelector("h2").textContent;
    console.log(`Category: ${nameCategories}`);

    numberOfItems = arrayOfCategories[i].querySelectorAll("li").length;
    console.log(`Elements: ${numberOfItems}`);
}
