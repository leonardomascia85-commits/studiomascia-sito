"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Homepage" },
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/servizi", label: "Servizi" },
  { href: "/news", label: "News" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-ink border-b border-gold/20 h-[70px] flex items-center">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-[60px] flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl tracking-wide text-white"
        >
          Studio <span className="text-gold">Mascia</span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[12px] tracking-[0.12em] uppercase transition-colors ${
                  active ? "text-gold" : "text-white/60 hover:text-gold"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/contatti"
            className="bg-gold text-ink text-[11px] font-medium tracking-[0.12em] uppercase px-5 py-2.5 hover:bg-[#d4b06a] transition-colors"
          >
            Contattaci
          </Link>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label="Apri menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden absolute top-[70px] left-0 right-0 bg-ink border-t border-gold/20 flex flex-col gap-1 px-6 pb-5">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-[12px] tracking-[0.12em] uppercase text-white/70"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contatti"
            onClick={() => setOpen(false)}
            className="mt-2 bg-gold text-ink text-[11px] font-medium tracking-[0.12em] uppercase px-5 py-2.5 text-center"
          >
            Contattaci
          </Link>
        </nav>
      )}
    </header>
  );
}
