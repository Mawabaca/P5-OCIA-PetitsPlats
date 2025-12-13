import Image from "next/image";

export function Hero({ image, title, children }) {
  return (
    <header className="relative isolate flex min-h-[80vh] flex-col overflow-hidden text-white">
      <div className="absolute inset-0">
        <Image src={image} alt="Table remplie de recettes" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 text-xs font-semibold uppercase tracking-[0.28em]">
        <div className="flex items-center gap-3">
          <Image
            src="/images/Les petits plats (1).svg"
            alt="Logo Les petits plats"
            width={181}
            height={26}
            priority
            className="h-[26px] w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
          />
          <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white/80 bg-transparent">
            <span className="h-3 w-3 rounded-full bg-white" />
          </span>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 pb-12 pt-4 text-center sm:pb-16 sm:pt-8 md:pb-20">
        <h1 className="font-display text-4xl leading-snug text-[var(--accent)] drop-shadow-[0_6px_16px_rgba(0,0,0,0.35)] sm:text-5xl md:text-[46px]">
          {title}
        </h1>
        <div className="mt-8 w-full max-w-4xl">{children}</div>
      </div>
    </header>
  );
}
