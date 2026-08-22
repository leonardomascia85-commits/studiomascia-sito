# Studio Mascia — Sito istituzionale

Sito vetrina dello Studio Mascia (Commercialisti e Revisori Legali, Palma
Campania). Contenuti migrati dal WordPress esistente (`www.studiomascia.com`).

Stack: Next.js (App Router, TypeScript) · Tailwind CSS · Resend (email dal
form contatti) · Vercel.

## Setup locale

1. Copia `.env.local.example` in `.env.local`.
2. Crea un account su [resend.com](https://resend.com), verifica un dominio
   (es. `studiomascia.com`) in **Domains**, poi genera una **API key** e
   incollala in `RESEND_API_KEY`. Imposta `RESEND_FROM_EMAIL` su un indirizzo
   di quel dominio (es. `noreply@studiomascia.com`).
   - Senza dominio verificato puoi testare con `onboarding@resend.dev`, ma
     Resend consegna solo all'email con cui ti sei registrato: non adatto alla
     produzione.
3. `npm install`
4. `npm run dev` → http://localhost:3000

## Contenuti

- `lib/content/services.ts` — le 6 aree di consulenza (usate in Homepage e
  Servizi)
- `lib/content/news.ts` — articoli News. Aggiungerne uno significa aggiungere
  una voce a questo array (titolo, data, estratto, corpo, eventuale fonte
  esterna) e pubblicare (`git push` → Vercel rifà il deploy).
- `lib/content/studio-info.ts` — indirizzo, email, PEC, orari (usati in
  Contatti e nel footer).

## Deploy

Collega il repo a Vercel, imposta le variabili d'ambiente
(`RESEND_API_KEY`, `RESEND_FROM_EMAIL`), poi in **Settings → Domains**
aggiungi `www.studiomascia.com` (o il dominio scelto) e configura il DNS
secondo le istruzioni di Vercel.
