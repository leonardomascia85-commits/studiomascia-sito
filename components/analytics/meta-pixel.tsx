"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import {
  META_PIXEL_ID,
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

export function MetaPixel() {
  const pathname = usePathname();
  const consented = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [ready, setReady] = useState(false);
  const isFirstPageview = useRef(true);

  useEffect(() => {
    if (!ready || !window.fbq) return;
    if (isFirstPageview.current) {
      isFirstPageview.current = false;
      return;
    }
    window.fbq("track", "PageView");
  }, [pathname, ready]);

  if (!META_PIXEL_ID || !consented) return null;

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive" onLoad={() => setReady(true)}>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          alt=""
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
