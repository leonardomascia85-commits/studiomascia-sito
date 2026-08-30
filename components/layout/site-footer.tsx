import Link from "next/link";
import { STUDIO_INFO } from "@/lib/content/studio-info";

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={18}
      height={18}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink border-t border-gold/20">
      <div className="max-w-6xl mx-auto px-6 md:px-[60px] py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <span className="font-serif text-lg tracking-wide text-white">
            Studio <span className="text-gold">Mascia</span>
          </span>
          {STUDIO_INFO.linkedinUrl && (
            <a
              href={STUDIO_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Studio Mascia su LinkedIn"
              className="text-white/50 hover:text-gold transition-colors"
            >
              <LinkedinIcon />
            </a>
          )}
        </div>
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
