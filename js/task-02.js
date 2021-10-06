const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const listOfIngredients = document.querySelector("#ingredients");

const liArray = ingredients.map((item) => {
    let liItem = document.createElement("li");
    liItem.textContent = item;
    liItem.setAttribute("class", "item");
    return liItem;
});

listOfIngredients.append(...liArray);
