import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CtaBanner } from "@/components/ui/cta-banner";
import { getNewsBySlug, getSortedNews } from "@/lib/content/news";

export function generateStaticParams() {
  return getSortedNews().map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/news/[slug]">) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  return {
    title: item ? `${item.title} — Studio Mascia` : "News — Studio Mascia",
    description: item?.excerpt,
  };
}

export default async function NewsArticlePage({
  params,
}: PageProps<"/news/[slug]">) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) notFound();

  return (
    <>
      <section className="bg-ink px-6 py-16 md:px-[60px] md:py-20">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-[12px] tracking-[0.1em] uppercase text-white/50 hover:text-gold mb-8"
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
      </section>

      <article className="px-6 py-16 md:px-[60px] md:py-20 max-w-3xl">
        {item.body.map((paragraph, i) => (
          <p
            key={i}
            className="text-[15px] text-[#3a3020] leading-[1.8] font-light mb-5"
          >
            {paragraph}
          </p>
        ))}

        {item.source && (
          <p className="text-[13px] text-muted mt-8 pt-6 border-t border-line">
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
