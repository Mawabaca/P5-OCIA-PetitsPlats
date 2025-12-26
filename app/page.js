"use client";

import { useMemo, useState } from "react";
import { Manrope } from "next/font/google";
import { Filters } from "../components/Filters";
import { Hero } from "../components/Hero";
import { RecipeCard } from "../components/RecipeCard";
import { filters, heroImage, recipes as allRecipes } from "../data/recipes";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

const normalizeValue = (value) =>
  value
    ?.toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

const sortValues = (values) =>
  Array.from(values)
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b, "fr", { sensitivity: "base" }));

export default function Home() {
  const [selectedTags, setSelectedTags] = useState({});

  const toggleTag = (filterKey, option) => {
    setSelectedTags((previous) => {
      const current = new Set(previous?.[filterKey] || []);
      if (current.has(option)) {
        current.delete(option);
      } else {
        current.add(option);
      }

      const updated = { ...previous, [filterKey]: Array.from(current) };
      if (updated[filterKey]?.length === 0) {
        const { [filterKey]: _removed, ...rest } = updated;
        return rest;
      }
      return updated;
    });
  };

  const normalizedSelection = useMemo(() => {
    const map = {};
    Object.entries(selectedTags).forEach(([filterKey, values]) => {
      map[filterKey] = values.map(normalizeValue);
    });
    return map;
  }, [selectedTags]);

  const filteredRecipes = useMemo(() => {
    const fieldMap = {
      [filters[0]]: (recipe) => recipe.ingredients.map((ingredient) => ingredient.name),
      [filters[1]]: (recipe) => [recipe.appliance],
      [filters[2]]: (recipe) => recipe.ustensils,
    };

    return allRecipes.filter((recipe) =>
      filters.every((filterKey) => {
        const selectedValues = normalizedSelection[filterKey];
        if (!selectedValues || selectedValues.length === 0) return true;
        const values = (fieldMap[filterKey]?.(recipe) || []).map(normalizeValue);
        return selectedValues.every((value) => values.includes(value));
      })
    );
  }, [normalizedSelection, filters]);

  const availableOptions = useMemo(() => {
    const ingredients = new Set();
    const appliances = new Set();
    const ustensils = new Set();

    filteredRecipes.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => ingredients.add(ingredient.name));
      appliances.add(recipe.appliance);
      recipe.ustensils.forEach((ustensil) => ustensils.add(ustensil));
    });

    return {
      [filters[0]]: sortValues(ingredients),
      [filters[1]]: sortValues(appliances),
      [filters[2]]: sortValues(ustensils),
    };
  }, [filteredRecipes, filters]);

  const resultsCount = filteredRecipes.length;
  const countLabel = `${resultsCount} ${resultsCount > 1 ? "recettes" : "recette"}`;

  return (
    <div className="flex min-h-screen flex-col bg-slate-100 text-slate-900">
      <Hero
        image={heroImage}
        title={
          <>
            Decouvrez nos recettes
            <br />
            du quotidien, simples et delicieuses
          </>
        }
      >
        <div className="rounded-[14px] bg-black/50 px-6 py-4 text-base font-medium text-amber-200 backdrop-blur">
          Utilisez les filtres pour affiner les recettes sans passer par la barre de recherche.
        </div>
      </Hero>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Filters filters={filters} options={availableOptions} selected={selectedTags} onSelectionChange={toggleTag} />
          <p className="text-[21px] font-normal text-black">{countLabel}</p>
        </div>

        {resultsCount > 0 ? (
          <section className="mt-8 grid justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.title} recipe={recipe} />
            ))}
          </section>
        ) : (
          <div className="mt-10 rounded-2xl bg-white px-6 py-10 text-center shadow-sm ring-1 ring-slate-200">
            <p className="text-lg font-semibold text-slate-900">
              Aucune recette ne correspond aux filtres selectionnes.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Supprimez un tag pour revenir aux resultats precedents ou essayez une autre combinaison.
            </p>
          </div>
        )}
      </main>

      <footer
        className={`${manrope.className} mt-auto flex h-[138px] items-center justify-center bg-[#000000] text-center text-[16px] font-medium tracking-[0.08em] text-white`}
      >
        Copyright 2025 - Les Petits Plats
      </footer>
    </div>
  );
}
