// Pagina interna, non pubblica: appunti operativi sulla cessione a terzi
// del credito IVA. Argomento distinto dalla cessione dei crediti d'imposta
// edilizi (superbonus e simili): non confondere i due regimi.
// Verificare periodicamente soglie e prassi prima di usare questi dati
// con i clienti — alcuni punti restano da confermare sui testi primari
// (normattiva.it e agenziaentrate.gov.it non erano raggiungibili in fase
// di verifica), vedi le note segnalate.

export const PRINCIPIO_GENERALE = {
  title: "Cos'è la cessione del credito IVA",
  text: "La cessione a terzi del credito IVA è disciplinata dall'art. 5, comma 4-ter, D.L. 14 marzo 1988, n. 70 (conv. L. 154/1988), che richiama gli artt. 69 e 70 del R.D. 2440/1923 (contabilità generale dello Stato) sulla cessione dei crediti verso la Pubblica Amministrazione. Si applica inoltre la disciplina civilistica generale della cessione del credito (artt. 1260 e ss. c.c.). È un istituto distinto dalla compensazione orizzontale in F24 e dalla cessione dei crediti d'imposta edilizi (superbonus e simili, regime a parte).",
} as const;

export const CREDITO_CEDIBILE = {
  title: "Quale credito è cedibile",
  text: "È cedibile solo il credito IVA chiesto a rimborso, non il credito generico risultante dalla dichiarazione e destinato alla compensazione. Dall'1/1/2020, l'art. 12-sexies, comma 1, D.L. 34/2019 (Decreto Crescita) ha esteso la cedibilità anche ai crediti IVA infrannuali/trimestrali (modello TR) chiesti a rimborso, equiparandoli a quello annuale.",
  nota: "Il cessionario acquisisce solo il diritto a ottenere il rimborso: non può usare il credito in compensazione (principio di identità soggettiva tra chi matura il credito e chi lo compensa), salvo i casi particolari della liquidazione IVA di gruppo.",
} as const;

export const PROCEDURA = [
  {
    title: "Forma dell'atto",
    text: "Atto pubblico o scrittura privata autenticata (non è sufficiente una scrittura privata semplice), con indicazione precisa delle parti, del credito ceduto e degli estremi dell'istanza di rimborso a cui si riferisce.",
  },
  {
    title: "Notifica all'Agenzia delle Entrate",
    text: "Per essere opponibile all'Amministrazione finanziaria, l'atto va notificato all'ufficio dell'Agenzia delle Entrate competente per il domicilio fiscale del cedente.",
  },
  {
    title: "Notifica all'agente della riscossione",
    text: "L'atto va notificato anche all'agente della riscossione competente: la mancata notifica a uno dei due soggetti rende la cessione inopponibile all'Amministrazione finanziaria.",
  },
] as const;

export const VISTO_CONFORMITA = {
  title: "Visto di conformità sul rimborso",
  text: "Per le istanze di rimborso IVA superiori a 30.000 € (art. 38-bis DPR 633/1972) serve il visto di conformità sulla dichiarazione o sull'istanza da cui il credito emerge (o la sottoscrizione dell'organo di controllo), oppure in alternativa una garanzia patrimoniale. Sotto tale soglia non è richiesto.",
  attenzione: "Non confondere questa soglia con quella di 5.000 € prevista per la compensazione orizzontale in F24 (art. 1, comma 574, L. 147/2013): sono due soglie diverse, per due utilizzi diversi del credito IVA.",
} as const;

export const DOCUMENTI_NECESSARI = [
  "Dichiarazione IVA annuale o istanza TR con il credito chiesto a rimborso",
  "Visto di conformità (o sottoscrizione dell'organo di controllo) se il rimborso richiesto supera 30.000 €, oppure garanzia patrimoniale alternativa",
  "Atto pubblico o scrittura privata autenticata di cessione del credito",
  "Notifica dell'atto di cessione all'ufficio dell'Agenzia delle Entrate competente per il domicilio fiscale del cedente",
  "Notifica dell'atto di cessione all'agente della riscossione competente",
  "Documenti identificativi e visura camerale di cedente e cessionario",
  "Dichiarazione sostitutiva attestante l'assenza di vincoli sul credito (pignoramenti, sequestri, cessioni precedenti)",
] as const;

export const AVVISI = [
  {
    title: "Non è la cessione dei crediti d'imposta edilizi",
    text: "Questo istituto è distinto e non va confuso con il regime di cessione dei crediti d'imposta da bonus edilizi/superbonus (Circolari Agenzia Entrate 33/E-2022, 6/E-2024 e Piattaforma cessione crediti), che segue regole proprie.",
  },
  {
    title: "Punti da verificare sui testi primari",
    text: "Alcune fonti secondarie riportano date/dettagli lievemente diversi (es. la data del D.L. 70/1988) ed è emerso che manca un riscontro univoco su un canale telematico ufficiale dedicato alla notifica, distinto dalla notifica formale dell'atto: verificare direttamente su normattiva.it e agenziaentrate.gov.it prima di applicare questi dati a un caso concreto.",
  },
] as const;

export const NORMATIVA_REFS = [
  {
    title: "Art. 5, comma 4-ter, D.L. 14 marzo 1988, n. 70 (conv. L. 154/1988)",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:1988-03-14;70",
  },
  {
    title: "Art. 69-70 R.D. 2440/1923 — cessione crediti verso la P.A.",
    url: "https://www.codiceappalti.it/rd_2440_1923/Art__69/5866",
  },
  {
    title: "Agenzia delle Entrate — Risposta a interpello n. 278/2022 (cessione credito IVA)",
    url: "https://www.agenziaentrate.gov.it/portale/documents/20143/4419962/Risposta_278_19.05.2022.pdf/826937bb-2077-0a01-163b-0cf01ec71478",
  },
  {
    title: "Art. 12-sexies, D.L. 34/2019 — estensione cedibilità ai crediti trimestrali",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2019-04-30;34",
  },
  {
    title: "Art. 38-bis DPR 633/1972 — rimborsi IVA e soglia visto di conformità",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633",
  },
] as const;
