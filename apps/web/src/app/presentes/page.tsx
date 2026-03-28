"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gifts from "../../data/gifts.json";
import { PageHeader } from "../../components/page-header";

const ALL = "Todos";
const CATEGORIES = [ALL, ...Array.from(new Set(gifts.map((g) => g.category)))];

export default function GiftsPage() {
  const [activeCategory, setActiveCategory] = useState(ALL);

  const filtered =
    activeCategory === ALL ? gifts : gifts.filter((g) => g.category === activeCategory);

  return (
    <div className="min-h-screen bg-background pb-12">
      <PageHeader title="Lista de Presentes" />

      <div className="flex overflow-x-auto whitespace-nowrap px-6 pt-2 gap-8 border-b border-border/30 scrollbar-hide">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`pb-3 border-b-4 font-medium transition-colors ${
              activeCategory === cat
                ? "border-primary font-semibold text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="p-6 flex flex-col gap-6 max-w-3xl mx-auto">
        {filtered.map((gift) => (
          <Link href={`/presentes/${gift.id}`} key={gift.id} className="block group outline-none">
            <div className="bg-white flex flex-row overflow-hidden rounded-2xl shadow-md shadow-black/5 group-hover:shadow-lg group-hover:shadow-black/10 group-focus-visible:ring-2 group-focus-visible:ring-primary transition-all duration-300">
              <div className="relative w-32 sm:w-36 shrink-0 bg-primary/5">
                {gift.image ? (
                  <Image src={gift.image} alt={gift.title} fill className="object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-primary/40">
                    <span className="text-4xl drop-shadow-sm">🎁</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col p-5 flex-grow justify-center">
                {gift.isOpenValue ? (
                  <>
                    <h2 className="text-xl font-serif text-foreground mb-1 group-hover:text-primary transition-colors">
                      {gift.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                      {gift.description}
                    </p>
                    <div>
                      <span className="inline-flex items-center justify-center bg-secondary text-secondary-foreground rounded-lg h-9 px-6 text-sm font-medium transition-colors shadow-sm">
                        Contribuir
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="text-xl font-serif text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                      {gift.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
                      {gift.description}
                    </p>
                    <div className="flex flex-col items-start gap-1.5">
                      <p className="font-semibold text-lg text-foreground">
                        R$ {gift.price.toFixed(2).replace(".", ",")}
                      </p>
                      {gift.isMostChosen && (
                        <div className="bg-secondary/30 text-secondary-foreground text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-sm">
                          Mais escolhido
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
