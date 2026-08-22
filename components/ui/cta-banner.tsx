import type { ReactNode } from "react";
import Link from "next/link";

export function CtaBanner({
  variant,
  title,
  description,
  buttonLabel,
  buttonHref,
}: {
  variant: "dark" | "cream";
  title: ReactNode;
  description?: ReactNode;
  buttonLabel: string;
  buttonHref: string;
}) {
  const dark = variant === "dark";

  return (
    <section
      className={`px-6 md:px-[60px] py-16 md:py-20 flex flex-col md:flex-row items-center md:items-center justify-between gap-8 text-center md:text-right ${
        dark ? "bg-ink" : "bg-cream"
      }`}
    >
      <h2
        className={`font-serif text-4xl md:text-[42px] font-light leading-tight max-w-xl text-center md:text-left ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <div className="flex flex-col items-center md:items-end gap-5 shrink-0">
        {description && (
          <p
            className={`text-[15px] leading-relaxed ${
              dark ? "text-white/40" : "text-muted"
            }`}
          >
            {description}
          </p>
        )}
        <Link
          href={buttonHref}
          className={`text-[13px] font-medium tracking-[0.1em] uppercase px-9 py-4 whitespace-nowrap ${
            dark
              ? "bg-gold text-ink hover:bg-[#d4b06a]"
              : "bg-ink text-white hover:bg-ink/90"
          }`}
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
