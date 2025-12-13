import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Manrope } from "next/font/google";
import { heroImage, recipes } from "../../../data/recipes";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const capitalize = (value = "") =>
  value
    .toString()
    .trim()
    .replace(/^\p{Ll}/u, (c) => c.toUpperCase());

export function generateStaticParams() {
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

export default async function RecipeDetail({ params }) {
  const { slug } = await params;
  const targetSlug = decodeURIComponent(slug);
  const recipe =
    recipes.find((item) => item.slug === targetSlug) ||
    recipes.find((item) => item.slug === targetSlug.toLowerCase());

  if (!recipe) {
    notFound();
  }

  const steps =
    recipe.description
      ?.split(".")
      .map((step) => step.trim())
      .filter(Boolean) || [];

  return (
    <div className={`${manrope.className} flex min-h-screen flex-col bg-white text-slate-900`}>
      <header className="relative isolate h-[128px] w-full overflow-hidden">
        <Image src={heroImage} alt="Fond Les Petits Plats" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-white">
            <Image
              src="/images/Les%20petits%20plats%20(1).svg"
              alt="Logo Les petits plats"
              width={181}
              height={26}
              className="h-[26px] w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
              priority
            />
            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white/80 bg-transparent">
              <span className="h-3 w-3 rounded-full bg-white" />
            </span>
          </Link>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-12 px-6 py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[430px_1fr]">
          <div className="overflow-hidden rounded-[22px]">
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={606}
              height={738}
              className="h-[738px] w-[606px] rounded-[22px] object-cover"
              priority
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-start justify-between">
              <h1 className="font-display text-3xl font-semibold leading-tight text-slate-900">
                {capitalize(recipe.title)}
              </h1>
            </div>

            <div className="flex flex-col gap-5 text-sm">
              <div className="flex flex-col gap-2">
                <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Temps de préparation
                </span>
                <span className="self-start rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm">
                  {recipe.time}
                </span>
              </div>

              <div className="space-y-3">
                <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-500">Ingrédients</p>
                <dl className="grid grid-cols-2 gap-y-3 text-sm text-slate-900">
                  {recipe.ingredients.map((ingredient) => (
                    <div key={`${recipe.slug}-${ingredient.name}`} className="flex flex-col gap-1">
                      <span className="font-normal">{capitalize(ingredient.name)}</span>
                      {ingredient.quantity && (
                        <span className="text-xs font-normal text-slate-500">{ingredient.quantity}</span>
                      )}
                    </div>
                  ))}
                </dl>
              </div>

              <div className="space-y-2">
                <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Ustensiles nécessaires
                </p>
                <ul className="space-y-2 text-sm text-slate-900">
                  {recipe.ustensils.map((item) => (
                    <li key={`${recipe.slug}-${item}`} className="flex flex-col font-normal">
                      <span>{capitalize(item)}</span>
                      <span className="text-xs font-normal text-slate-500">1</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Appareils nécessaires
                </p>
                <ul className="space-y-2 text-sm text-slate-900">
                  <li className="flex flex-col font-normal">
                    <span>{capitalize(recipe.appliance)}</span>
                    <span className="text-xs font-normal text-slate-500">1</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-500">Recette</p>
              {steps.length > 0 ? (
                <ol className="list-decimal space-y-3 pl-5 text-sm leading-relaxed text-slate-800">
                  {steps.map((step, index) => (
                    <li key={`${recipe.slug}-step-${index}`}>{step}</li>
                  ))}
                </ol>
              ) : (
                <p className="text-sm text-slate-700">Aucune instruction détaillée fournie.</p>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-auto flex h-[138px] items-center justify-center bg-[#000000] text-center text-[16px] font-medium tracking-[0.08em] text-white">
        Copyright 2025 - Les Petits Plats
      </footer>
    </div>
  );
}
