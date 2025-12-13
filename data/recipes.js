import recipesJson from "./recipes.json";

export const filters = ["Ingrédients", "Appareils", "Ustensiles"];

export const heroImage = "/hero.jpg";

const formatQuantity = (quantity, unit) => {
  const parts = [];
  if (quantity !== undefined) parts.push(quantity);
  if (unit) parts.push(unit);
  return parts.join(" ").trim();
};

const slugify = (value) =>
  value
    ?.toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const normalize = (value) => (value ?? "").toString().trim();

const uniqueSorted = (list) =>
  Array.from(new Set(list.filter(Boolean).map(normalize))).sort((a, b) =>
    a.localeCompare(b, "fr", { sensitivity: "base" })
  );

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
  appliance: recipe.appliance,
  ustensils: recipe.ustensils,
  slug: recipe.slug || slugify(recipe.name),
}));

export const filterOptions = {
  Ingrédients: uniqueSorted(
    recipesJson.flatMap((recipe) => recipe.ingredients.map((i) => i.ingredient))
  ),
  Appareils: uniqueSorted(recipesJson.map((recipe) => recipe.appliance)),
  Ustensiles: uniqueSorted(
    recipesJson.flatMap((recipe) => recipe.ustensils)
  ),
};
