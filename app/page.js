import Image from "next/image";

const filters = ["Ingrédients", "Appareils", "Ustensiles", "Tout"];

const heroImage =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80";

const recipes = [
  {
    title: "Limonade de coco",
    time: "10 min",
    servings: "2 pers",
    description:
      "Régalez-vous avec cette boisson pleine de fraîcheur et de rondeur. Une poignée d'ingrédients et un simple blender suffisent.",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    ingredients: [
      { name: "Lait de coco", quantity: "400 ml" },
      { name: "Jus de citron", quantity: "80 ml" },
      { name: "Sucre de canne", quantity: "40 g" },
      { name: "Glaçons", quantity: "8 cubes" },
      { name: "Zestes", quantity: "1 citron vert" },
    ],
  },
  {
    title: "Poke bowl au saumon",
    time: "20 min",
    servings: "3 pers",
    description:
      "Un bol coloré, servi frais, avec du saumon mariné, du riz parfumé et une pluie de graines croquantes.",
    image:
      "https://images.unsplash.com/photo-1481931098730-318b6f776db0?auto=format&fit=crop&w=1200&q=80",
    ingredients: [
      { name: "Saumon frais", quantity: "400 g" },
      { name: "Riz à sushi", quantity: "300 g" },
      { name: "Avocat", quantity: "1 pièce" },
      { name: "Mangue", quantity: "1/2 pièce" },
      { name: "Graines de sésame", quantity: "2 c.à.s" },
    ],
  },
  {
    title: "Tartare de saumon",
    time: "15 min",
    servings: "2 pers",
    description:
      "Un tartare iodé relevé d'agrumes et d'herbes fraîches. À dresser minute pour conserver tout le croquant.",
    image:
      "https://images.unsplash.com/photo-1528712306091-ed0763094c98?auto=format&fit=crop&w=1200&q=80",
    ingredients: [
      { name: "Saumon", quantity: "250 g" },
      { name: "Aneth", quantity: "1/2 botte" },
      { name: "Citron jaune", quantity: "1 pièce" },
      { name: "Échalote", quantity: "1 petite" },
      { name: "Huile d'olive", quantity: "1 c.à.s" },
    ],
  },
  {
    title: "Poulet coco & citronnelle",
    time: "40 min",
    servings: "4 pers",
    description:
      "Une sauce douce et parfumée au lait de coco qui nappe des morceaux de poulet fondants. Parfait avec un riz thaï.",
    image:
      "https://images.unsplash.com/photo-1447078806655-40579c2520d6?auto=format&fit=crop&w=1200&q=80",
    ingredients: [
      { name: "Poulet", quantity: "800 g" },
      { name: "Lait de coco", quantity: "400 ml" },
      { name: "Citronnelle", quantity: "2 tiges" },
      { name: "Gingembre", quantity: "1 cm" },
      { name: "Riz thai", quantity: "300 g" },
    ],
  },
  {
    title: "Spaghetti au basilic",
    time: "25 min",
    servings: "4 pers",
    description:
      "La simplicité absolue : des spaghetti al dente, une huile parfumée, beaucoup de basilic et un voile de parmesan.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    ingredients: [
      { name: "Spaghetti", quantity: "320 g" },
      { name: "Parmesan", quantity: "50 g" },
      { name: "Basilic", quantity: "1 botte" },
      { name: "Ail", quantity: "2 gousses" },
      { name: "Huile d'olive", quantity: "3 c.à.s" },
    ],
  },
  {
    title: "Bœuf façon bourguignon",
    time: "2 h",
    servings: "6 pers",
    description:
      "Un mijoté généreux, fondant et très parfumé. Servez-le avec des tagliatelles fraîches ou une purée maison.",
    image:
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ingredients: [
      { name: "Bœuf à braiser", quantity: "1 kg" },
      { name: "Carottes", quantity: "3 pièces" },
      { name: "Vin rouge", quantity: "70 cl" },
      { name: "Oignons", quantity: "2 pièces" },
      { name: "Champignons", quantity: "200 g" },
    ],
  },
  {
    title: "Salade croquante",
    time: "15 min",
    servings: "3 pers",
    description:
      "Salade fraîche avec légumes croquants, feta et graines torréfiées pour un déjeuner léger et coloré.",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ingredients: [
      { name: "Salade romaine", quantity: "1 cœur" },
      { name: "Tomates cerises", quantity: "10 pièces" },
      { name: "Feta", quantity: "120 g" },
      { name: "Concombre", quantity: "1/2 pièce" },
      { name: "Graines de courge", quantity: "2 c.à.s" },
    ],
  },
  {
    title: "Tacos du mardi",
    time: "30 min",
    servings: "4 pers",
    description:
      "Des tortillas toastées garnies de bœuf épicé, de pickles rapides et d'une sauce yaourt citronnée.",
    image:
      "https://images.unsplash.com/photo-1608039782702-3b5d1d35dbd0?auto=format&fit=crop&w=1200&q=80",
    ingredients: [
      { name: "Tortillas", quantity: "8 pièces" },
      { name: "Bœuf haché", quantity: "400 g" },
      { name: "Yaourt grec", quantity: "150 g" },
      { name: "Coriandre", quantity: "1/2 botte" },
      { name: "Oignon rouge", quantity: "1 pièce" },
    ],
  },
  {
    title: "Brownie chocolat noir",
    time: "30 min",
    servings: "8 pers",
    description:
      "Gourmand et fondant avec une couche brillante sur le dessus. À cuire juste ce qu'il faut pour un cœur moelleux.",
    image:
      "https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ingredients: [
      { name: "Chocolat noir", quantity: "200 g" },
      { name: "Beurre", quantity: "150 g" },
      { name: "Sucre", quantity: "120 g" },
      { name: "Œufs", quantity: "3 pièces" },
      { name: "Farine", quantity: "90 g" },
    ],
  },
  {
    title: "Cheesecake vanille",
    time: "1 h 10",
    servings: "10 pers",
    description:
      "Base biscuit croustillante et appareil crémeux à la vanille. À refroidir longuement pour un démoulage parfait.",
    image:
      "https://images.pexels.com/photos/3577561/pexels-photo-3577561.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ingredients: [
      { name: "Biscuits sablés", quantity: "200 g" },
      { name: "Beurre fondu", quantity: "80 g" },
      { name: "Philadelphia", quantity: "500 g" },
      { name: "Sucre", quantity: "120 g" },
      { name: "Œufs", quantity: "3 pièces" },
    ],
  },
  {
    title: "Plâteau de fromages",
    time: "5 min",
    servings: "6 pers",
    description:
      "Une sélection généreuse de fromages, à servir avec des fruits secs, des pickles et un bon pain de campagne.",
    image:
      "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?auto=format&fit=crop&w=1200&q=80",
    ingredients: [
      { name: "Tomme", quantity: "150 g" },
      { name: "Comté", quantity: "150 g" },
      { name: "Bleu", quantity: "120 g" },
      { name: "Pain de campagne", quantity: "1 pièce" },
      { name: "Fruits secs", quantity: "1 bol" },
    ],
  },
  {
    title: "Granola bowl du matin",
    time: "8 min",
    servings: "1 pers",
    description:
      "Un bol ultra frais avec yaourt, granola torréfié, fruits rouges et un filet de miel.",
    image:
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ingredients: [
      { name: "Yaourt grec", quantity: "150 g" },
      { name: "Granola", quantity: "40 g" },
      { name: "Fruits rouges", quantity: "1 poignée" },
      { name: "Banane", quantity: "1/2 pièce" },
      { name: "Miel", quantity: "1 c.à.c" },
    ],
  },
];

function RecipeCard({ recipe }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_28px_68px_rgba(15,23,42,0.14)] ring-1 ring-black/5">
      <div className="relative h-48">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover"
          priority={recipe.title === "Limonade de coco"}
        />
        <div className="absolute right-4 top-4 rounded-full bg-amber-300 px-3 py-1 text-xs font-semibold text-slate-900 shadow-md">
          {recipe.time}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-slate-900">
            {recipe.title}
          </h3>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase text-slate-600">
            {recipe.servings}
          </span>
        </div>

        <div className="space-y-1">
          <p className="text-[13px] uppercase tracking-[0.22em] text-slate-500 font-semibold">
            Recette
          </p>
          <p className="text-sm leading-relaxed text-slate-700">
            {recipe.description}
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <p className="text-[13px] uppercase tracking-[0.22em] text-slate-500 font-semibold">
            Ingrédients
          </p>
          <dl className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm text-slate-800">
            {recipe.ingredients.map((ingredient, index) => (
              <div
                key={`${recipe.title}-${ingredient.name}-${index}`}
                className="flex flex-col"
              >
                <span className="font-semibold">{ingredient.name}</span>
                <span className="text-xs text-slate-500">
                  {ingredient.quantity}
                </span>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100 text-slate-900">
      <header className="relative isolate overflow-hidden text-white">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Table remplie de recettes"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-xs font-semibold uppercase tracking-[0.28em]">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-white drop-shadow">
              Les petits plats
            </span>
            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white/80 bg-transparent">
              <span className="h-3 w-3 rounded-full bg-white" />
            </span>
          </div>
        </div>

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pb-12 pt-4 text-center sm:pb-16 sm:pt-8 md:pb-20">
          <h1 className="font-display text-4xl leading-snug text-white drop-shadow-[0_6px_16px_rgba(0,0,0,0.35)] sm:text-5xl md:text-[46px]">
            Découvrez nos recettes
            <br />
            du quotidien,simple et délicieuses
          </h1>

          <div className="mt-8 w-full max-w-4xl">
            <label className="sr-only" htmlFor="search">
              Rechercher une recette ou un ingrédient
            </label>
            <div className="flex items-center gap-0 rounded-[14px] bg-white shadow-[0_12px_24px_rgba(0,0,0,0.18)] ring-1 ring-slate-200">
              <input
                id="search"
                className="flex-1 rounded-[14px] border-0 bg-transparent px-5 py-4 text-base font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                placeholder="Rechercher une recette, un ingrédient, ..."
                type="search"
              />
              <button className="flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-[#1f1f1f] text-white shadow-[0_10px_20px_rgba(0,0,0,0.25)] ring-1 ring-black/10 transition hover:bg-black focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-white m-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4">
            {filters.map((filter, index) => (
              <span
                key={filter}
                className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow-sm ring-1 ring-slate-200 transition ${
                  index === 0
                    ? "bg-amber-300 text-slate-900 shadow-[0_10px_18px_rgba(0,0,0,0.12)] ring-amber-200"
                    : "bg-white text-slate-700 hover:ring-amber-200"
                }`}
              >
                {filter}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5 text-slate-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                </svg>
              </span>
            ))}
          </div>
          <p className="text-sm font-semibold text-slate-700">50 recettes</p>
        </div>

        <section className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.title} recipe={recipe} />
          ))}
        </section>
      </main>

      <footer className="mt-auto bg-black py-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-white">
        Copyright 2020 - Les petits plats
      </footer>
    </div>
  );
}
