import Link from "next/link";
import { notFound } from "next/navigation";
import { Eyebrow } from "@/components/ui/eyebrow";
import { TAGS, tagToSlug, slugToTag, getNewsByTag } from "@/lib/content/news";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return TAGS.map((tag) => ({ tag: tagToSlug(tag) }));
}

export async function generateMetadata({
  params,
}: PageProps<"/news/tag/[tag]">) {
  const { tag: tagSlug } = await params;
  const tag = slugToTag(tagSlug);
  if (!tag) return buildMetadata({ title: "News", description: "", path: "/news" });

  return buildMetadata({
    title: `${tag} — News`,
    description: `Tutti gli articoli dello Studio Mascia sul tema: ${tag}.`,
    path: `/news/tag/${tagSlug}`,
  });
}

export default async function NewsTagPage({
  params,
}: PageProps<"/news/tag/[tag]">) {
  const { tag: tagSlug } = await params;
  const tag = slugToTag(tagSlug);
  if (!tag) notFound();

  const news = getNewsByTag(tag);

  return (
    <>
      <section className="bg-ink px-6 py-16 md:px-[60px] md:py-24">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-[13px] tracking-[0.1em] uppercase text-white/50 hover:text-gold mb-8"
        >
          ← Tutte le news
        </Link>
        <Eyebrow>Argomento</Eyebrow>
        <h1 className="font-serif text-[34px] md:text-[52px] font-light text-white leading-[1.1] tracking-tight">
          {tag}
        </h1>
      </section>

      <section className="px-6 py-16 md:px-[60px] md:py-20">
        {news.length === 0 ? (
          <p className="text-[15px] text-muted">
            Non ci sono ancora articoli su questo argomento.
          </p>
        ) : (
          <div className="flex flex-col divide-y divide-line max-w-3xl">
            {news.map((n) => (
              <Link
                key={n.slug}
                href={`/news/${n.slug}`}
                className="group py-8 first:pt-0"
              >
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
            ))}
          </div>
        )}
      </section>
    </>
  );
}
