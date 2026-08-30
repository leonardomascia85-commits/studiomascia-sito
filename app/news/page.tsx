import Link from "next/link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { getSortedNews, tagToSlug } from "@/lib/content/news";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "News",
  description:
    "Aggiornamenti fiscali, societari e normativi a cura dello Studio Mascia.",
  path: "/news",
});

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
          <p className="text-[15px] text-muted">
            Non ci sono ancora articoli pubblicati.
          </p>
        ) : (
          <div className="flex flex-col divide-y divide-line max-w-3xl">
            {news.map((n) => (
              <div key={n.slug} className="py-8 first:pt-0">
                <Link href={`/news/${n.slug}`} className="group block">
                  <time className="text-[12px] tracking-[0.15em] uppercase text-gold font-mono">
                    {new Date(n.date).toLocaleDateString("it-IT", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <h2 className="font-serif text-2xl font-medium text-ink mt-2 mb-2.5 group-hover:text-gold transition-colors">
                    {n.title}
                  </h2>
                  <p className="text-[15px] text-muted leading-relaxed">
                    {n.excerpt}
                  </p>
                </Link>
                {n.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {n.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/news/tag/${tagToSlug(tag)}`}
                        className="text-[11px] tracking-[0.08em] uppercase text-muted border border-line px-3 py-1 hover:border-gold hover:text-gold transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
