import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { getSortedNews } from "@/lib/content/news";

export const metadata: Metadata = {
  title: "News — Studio Mascia",
  description:
    "Aggiornamenti fiscali, societari e normativi a cura dello Studio Mascia.",
};

export default function NewsPage() {
  const news = getSortedNews();

  return (
    <>
      <section className="bg-ink px-6 py-16 md:px-[60px] md:py-24">
        <Eyebrow>Aggiornamenti</Eyebrow>
        <h1 className="font-serif text-[38px] md:text-[52px] font-light text-white leading-[1.1] tracking-tight">
          News e <em className="text-gold">approfondimenti</em>
        </h1>
      </section>

      <section className="px-6 py-16 md:px-[60px] md:py-20">
        {news.length === 0 ? (
          <p className="text-sm text-muted">
            Non ci sono ancora articoli pubblicati.
          </p>
        ) : (
          <div className="flex flex-col divide-y divide-line max-w-3xl">
            {news.map((n) => (
              <Link
                key={n.slug}
                href={`/news/${n.slug}`}
                className="group py-8 first:pt-0"
              >
                <time className="text-[11px] tracking-[0.15em] uppercase text-gold font-mono">
                  {new Date(n.date).toLocaleDateString("it-IT", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <h2 className="font-serif text-2xl font-medium text-ink mt-2 mb-2.5 group-hover:text-gold transition-colors">
                  {n.title}
                </h2>
                <p className="text-sm text-muted leading-relaxed">
                  {n.excerpt}
                </p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
