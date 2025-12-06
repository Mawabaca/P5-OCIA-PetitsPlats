import recipesJson from "./recipes.json";

export const filters = ["Ingrédients", "Appareils", "Ustensiles", "Tout"];

export const heroImage = "/hero.jpg";

const formatQuantity = (quantity, unit) => {
  const parts = [];
  if (quantity !== undefined) parts.push(quantity);
  if (unit) parts.push(unit);
  return parts.join(" ").trim();
};

export const recipes = recipesJson.map((recipe) => ({
  title: recipe.name,
  time: `${recipe.time} min`,
  servings: `${recipe.servings} pers`,
  description: recipe.description,
  image: `/recipes/${recipe.image}`,
  ingredients: recipe.ingredients.map((ingredient) => ({
    name: ingredient.ingredient,
    quantity: formatQuantity(ingredient.quantity, ingredient.unit),
  })),
}));
