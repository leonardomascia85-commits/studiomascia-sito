import Link from "next/link";
import { STUDIO_INFO } from "@/lib/content/studio-info";

export function SiteFooter() {
  return (
    <footer className="bg-ink border-t border-gold/20">
      <div className="max-w-6xl mx-auto px-6 md:px-[60px] py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-serif text-lg tracking-wide text-white">
          Studio <span className="text-gold">Mascia</span>
        </span>
        <p className="text-[13px] text-white/40 text-center sm:text-right leading-relaxed">
          {STUDIO_INFO.address} · {STUDIO_INFO.city}
          <br />
          {STUDIO_INFO.email} · © {new Date().getFullYear()} ·{" "}
          <Link href="/privacy" className="underline underline-offset-2 hover:text-white/70">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}
