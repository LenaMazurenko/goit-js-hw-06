const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

let liItem;
const listOfIngredients = document.querySelector("#ingredients");

for (let item of ingredients) {
    liItem = document.createElement("li");
    liItem.textContent = item;
    listOfIngredients.append(liItem);
    liItem.setAttribute("class", "item");
}
