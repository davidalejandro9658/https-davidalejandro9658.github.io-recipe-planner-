document.addEventListener("DOMContentLoaded", function () {

    const recipeInput = document.getElementById("recipeName");
    const addBtn = document.getElementById("addRecipeBtn");
    const recipeList = document.getElementById("recipeList");

    let recipes = [];

    addBtn.addEventListener("click", function () {
        const name = recipeInput.value.trim();
        if (name === "") return;

        recipes.push(name);
        renderRecipes();
        recipeInput.value = "";
    });

    function renderRecipes() {
        recipeList.innerHTML = "";

        recipes.forEach(function (recipe) {
            const li = document.createElement("li");
            li.textContent = recipe;
            recipeList.appendChild(li);
        });
    }

});
