declare global {
  interface Window {
    _linkedin_partner_id?: string;
    _linkedin_data_partner_ids?: string[];
    lintrk?: ((...args: unknown[]) => void) & { q?: unknown[] };
  }
}

export const LINKEDIN_PARTNER_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;
export const LINKEDIN_CONVERSION_ID = process.env.NEXT_PUBLIC_LINKEDIN_CONVERSION_ID;

export function trackLinkedInConversion() {
  if (typeof window === "undefined" || typeof window.lintrk !== "function") return;
  if (!LINKEDIN_CONVERSION_ID) return;
  window.lintrk("track", { conversion_id: LINKEDIN_CONVERSION_ID });
}
