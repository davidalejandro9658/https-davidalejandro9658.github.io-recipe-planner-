const recipeInput = document.getElementById("recipeName");
const addBtn = document.getElementById("addRecipeBtn");
const recipeList = document.getElementById("recipeList");

let recipes = [];

addBtn.addEventListener("click", function () {
    const name = recipeInput.value.trim();
    if (name === "") return;

    recipes.push(name);
    recipeInput.value = "";

    renderRecipes();
});

function renderRecipes() {
    recipeList.innerHTML = "";

    recipes.forEach(function (recipe, index) {
        const li = document.createElement("li");

        const text = document.createElement("span");
        text.textContent = recipe;

        const del = document.createElement("button");
        del.textContent = "Delete";

        del.addEventListener("click", function () {
            recipes.splice(index, 1);
            renderRecipes();
        });

        li.appendChild(text);
        li.appendChild(del);
        recipeList.appendChild(li);
    });
}
