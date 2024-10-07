/**
Given a list of ingredients needed for a recipe, represented as strings,
and a list of ingredients you have in your pantry, write a function to
return the minimum number of additional ingredients you need to buy to make the recipe.
If you want to do some extra credit, add expiration dates to the pantry items,
and only account for food that isn't expired.
 */

function missingIngredients(recipe, pantry) {
  return recipe.reduce(
    (acc, ingredient) => acc + Boolean(pantry.includes(ingredient)),
    0
  );
}

console.log(
  missingIngredients(
    ["eggs", "flour", "sugar", "butter"],
    ["sugar", "butter", "milk"]
  )
);

function missingIngredientsWithDates(recipe, pantry) {
  return recipe.reduce((acc, ingredient) => {
    const entry = pantry.find((e) => e.name === ingredient);
    return (
      acc + Boolean(entry && entry.date.getTime() - new Date().getTime() > 0)
    );
  }, 0);
}

console.log(
  missingIngredientsWithDates(
    ["eggs", "flour", "sugar", "butter"],
    [
      { name: "sugar", date: new Date(2025, 1, 1, 0, 0, 0) },
      { name: "butter", date: new Date(2024, 1, 1, 0, 0, 0) },
      { name: "milk", date: new Date(2025, 1, 1, 0, 0, 0) },
    ]
  )
);
