const arrayOfCategories = document.querySelectorAll(".item");

console.log(`Number of categories: ${arrayOfCategories.length}`);

arrayOfCategories.forEach((item) => {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
