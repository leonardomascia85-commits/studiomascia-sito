"use client";

import { useSyncExternalStore } from "react";
import {
  COOKIE_CONSENT_KEY,
  COOKIE_CONSENT_EVENT,
} from "@/lib/analytics/meta-pixel";

function subscribe(callback: () => void) {
  window.addEventListener(COOKIE_CONSENT_EVENT, callback);
  return () => window.removeEventListener(COOKIE_CONSENT_EVENT, callback);
}

function getSnapshot() {
  return window.localStorage.getItem(COOKIE_CONSENT_KEY);
}

function getServerSnapshot() {
  return null;
}

export function CookieConsent() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function choose(value: "accepted" | "rejected") {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
    window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
  }

  if (consent !== null) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[60] bg-ink border-t border-gold/30 px-6 py-6 md:px-[60px] flex flex-col md:flex-row items-center gap-5 md:gap-10">
      <p className="text-[13px] text-white/70 leading-relaxed flex-1">
        Utilizziamo cookie tecnici necessari al funzionamento del sito e,
        solo con il tuo consenso, cookie di profilazione per misurare le
        nostre campagne pubblicitarie. Consulta la{" "}
        <a href="/privacy" className="text-gold underline underline-offset-2">
          Privacy Policy
        </a>
        .
      </p>
      <div className="flex items-center gap-3 shrink-0">
        <button
          type="button"
          onClick={() => choose("rejected")}
          className="text-[12px] tracking-[0.1em] uppercase text-white/70 border border-white/25 px-6 py-3.5 hover:text-white hover:border-white/50 transition-colors"
        >
          Rifiuta
        </button>
        <button
          type="button"
          onClick={() => choose("accepted")}
          className="text-[12px] tracking-[0.1em] uppercase bg-gold text-ink font-medium px-6 py-3.5 hover:bg-[#d4b06a] transition-colors"
        >
          Accetta
        </button>
      </div>
    </div>
  );
}
