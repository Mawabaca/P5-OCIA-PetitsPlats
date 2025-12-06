import Image from "next/image";

export function RecipeCard({ recipe }) {
  return (
    <article className="flex h-full w-full min-h-[731px] flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_26px_60px_rgba(15,23,42,0.12)] ring-1 ring-slate-100 sm:w-[380px]">
      <div className="relative h-60 bg-slate-100">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover"
          priority={recipe.title === "Limonade de coco"}
        />
        <div className="absolute right-3 top-3 rounded-full bg-amber-300 px-3 py-1 text-[11px] font-semibold text-slate-900 shadow-sm">
          {recipe.time}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-5 px-5 pb-6 pt-5">
        <h3 className="text-lg font-semibold text-slate-900">{recipe.title}</h3>

        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Recette</p>
          <p className="text-sm leading-relaxed text-slate-800">{recipe.description}</p>
        </div>

        <div className="flex flex-1 flex-col gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Ingrédients</p>
          <dl className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm text-slate-900">
            {recipe.ingredients.map((ingredient, index) => (
              <div key={`${recipe.title}-${ingredient.name}-${index}`} className="flex flex-col">
                <span className="font-semibold leading-tight">{ingredient.name}</span>
                <span className="text-xs text-slate-500 leading-tight">{ingredient.quantity}</span>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </article>
  );
}
