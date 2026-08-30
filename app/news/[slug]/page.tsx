import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CtaBanner } from "@/components/ui/cta-banner";
import { getNewsBySlug, getSortedNews, tagToSlug } from "@/lib/content/news";
import { buildMetadata } from "@/lib/seo";
import { STUDIO_INFO } from "@/lib/content/studio-info";

export function generateStaticParams() {
  return getSortedNews().map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/news/[slug]">) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) return buildMetadata({ title: "News", description: "", path: "/news" });

  return buildMetadata({
    title: item.title,
    description: item.excerpt,
    path: `/news/${item.slug}`,
  });
}

export default async function NewsArticlePage({
  params,
}: PageProps<"/news/[slug]">) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    description: item.excerpt,
    datePublished: item.date,
    author: { "@type": "Organization", name: STUDIO_INFO.name },
    publisher: { "@type": "Organization", name: STUDIO_INFO.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <section className="bg-ink px-6 py-16 md:px-[60px] md:py-20">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-[13px] tracking-[0.1em] uppercase text-white/50 hover:text-gold mb-8"
        >
          <ArrowLeft size={14} /> Tutte le news
        </Link>
        <Eyebrow>
          {new Date(item.date).toLocaleDateString("it-IT", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </Eyebrow>
        <h1 className="font-serif text-3xl md:text-[44px] font-light text-white leading-tight max-w-3xl">
          {item.title}
        </h1>
        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-6">
            {item.tags.map((tag) => (
              <Link
                key={tag}
                href={`/news/tag/${tagToSlug(tag)}`}
                className="text-[11px] tracking-[0.08em] uppercase text-white/60 border border-white/20 px-3 py-1 hover:border-gold hover:text-gold transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        )}
      </section>

      <article className="px-6 py-16 md:px-[60px] md:py-20 max-w-3xl">
        {item.body.map((paragraph, i) => (
          <p
            key={i}
            className="text-[16px] text-[#3a3020] leading-[1.8] font-light mb-5"
          >
            {paragraph}
          </p>
        ))}

        {item.source && (
          <p className="text-[14px] text-muted mt-8 pt-6 border-t border-line">
            Fonte:{" "}
            <a
              href={item.source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline"
            >
              {item.source.label}
            </a>
          </p>
        )}
      </article>

      <CtaBanner
        variant="cream"
        title="Hai un dubbio su questo argomento?"
        description="Scrivici, ti risponderemo entro 24 ore."
        buttonLabel="Contattaci"
        buttonHref="/contatti"
      />
    </>
  );
}
