export interface NewsItem {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  excerpt: string;
  // Paragrafi del corpo articolo. Per contenuti originali dello Studio: testo
  // completo. Per estratti da fonti esterne: 2-4 frasi di sintesi, mai il
  // testo integrale dell'articolo originale (vedi `source`).
  body: string[];
  source?: { label: string; url: string };
}

export const NEWS: NewsItem[] = [
  {
    slug: "bilanci-2023-approvazione-entro-29-aprile",
    title: "Bilanci 2023: approvazione entro il 29 aprile",
    date: "2024-03-11",
    excerpt:
      "Il Codice civile prevede termini precisi per l'approvazione e il deposito del bilancio d'esercizio: ecco le scadenze e l'iter da rispettare.",
    body: [
      "Il Codice civile (art. 2364, comma 2 c.c.) prevede che le società di capitali devono procedere con l'approvazione del bilancio entro 120 giorni dalla chiusura dell'esercizio, oppure entro 180 giorni in caso di particolari esigenze.",
      "Il bilancio dell'esercizio chiuso al 31 dicembre 2023 andrà quindi approvato nell'ordinario termine del 29 aprile, essendo questo un anno bisestile.",
      "Successivamente, entro 30 giorni dall'approvazione, il bilancio deve essere depositato, con i relativi documenti allegati ed il verbale di approvazione, presso il Registro delle Imprese in cui ha sede legale la società.",
      "Secondo quanto stabilito dal codice civile, ordinariamente, entro 120 giorni dalla chiusura dell'esercizio le società di capitali devono convocare l'assemblea per l'approvazione del bilancio; in via straordinaria, e per determinati motivi, è consentito approvare il bilancio entro il più lungo termine di 180 giorni.",
      "Prima di essere approvato il bilancio percorre un iter obbligatorio: la redazione del progetto di bilancio e della relativa Relazione sulla gestione; la trasmissione dei suddetti documenti all'organo di controllo, ove presente; il deposito del bilancio presso la sede sociale per la presa visione da parte dei soci.",
      "Effettuati gli adempimenti su indicati secondo le rispettive scadenze, il bilancio viene approvato dall'assemblea dei soci, convocata con modalità diverse a seconda del tipo di società, ovvero Spa o Srl.",
    ],
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return NEWS.find((n) => n.slug === slug);
}

export function getSortedNews(): NewsItem[] {
  return [...NEWS].sort((a, b) => (a.date < b.date ? 1 : -1));
}
