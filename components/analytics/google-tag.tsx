"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { GOOGLE_TAG_ID } from "@/lib/analytics/google-tag";
import {
  COOKIE_CONSENT_KEY,
  COOKIE_CONSENT_EVENT,
} from "@/lib/analytics/meta-pixel";

function subscribe(callback: () => void) {
  window.addEventListener(COOKIE_CONSENT_EVENT, callback);
  return () => window.removeEventListener(COOKIE_CONSENT_EVENT, callback);
}

function getSnapshot() {
  return window.localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted";
}

function getServerSnapshot() {
  return false;
}

export function GoogleTag() {
  const pathname = usePathname();
  const consented = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [ready, setReady] = useState(false);
  const isFirstPageview = useRef(true);

  useEffect(() => {
    if (!ready || !window.gtag) return;
    if (isFirstPageview.current) {
      isFirstPageview.current = false;
      return;
    }
    window.gtag("event", "page_view", { page_path: pathname });
  }, [pathname, ready]);

  if (!GOOGLE_TAG_ID || !consented) return null;

  return (
    <>
      <Script
        id="google-tag-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`}
        onLoad={() => setReady(true)}
      />
      <Script id="google-tag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_TAG_ID}');
        `}
      </Script>
    </>
  );
}
