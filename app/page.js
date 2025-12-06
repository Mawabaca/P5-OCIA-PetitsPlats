import { Filters } from "../components/Filters";
import { Hero } from "../components/Hero";
import { RecipeCard } from "../components/RecipeCard";
import { SearchBar } from "../components/SearchBar";
import { filters, heroImage, recipes } from "../data/recipes";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100 text-slate-900">
      <Hero
        image={heroImage}
        title={
          <>
            Découvrez nos recettes
            <br />
            du quotidien, simples et délicieuses
          </>
        }
      >
        <SearchBar />
      </Hero>

      <main className="relative z-10 mx-auto w-2/3 pb-16 pt-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Filters filters={filters} />
          <p className="text-sm font-semibold text-slate-700">50 recettes</p>
        </div>

        <section className="mt-6 grid justify-items-center gap-[15px] sm:grid-cols-2 lg:grid-cols-3">
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
