import { Filters } from "../components/Filters";
import { Hero } from "../components/Hero";
import { RecipeCard } from "../components/RecipeCard";
import { SearchBar } from "../components/SearchBar";
import { filterOptions, filters, heroImage, recipes } from "../data/recipes";

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

      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Filters filters={filters} options={filterOptions} />
          <p className="text-[21px] font-normal text-black">50 recettes</p>
        </div>

        <section className="mt-8 grid justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
