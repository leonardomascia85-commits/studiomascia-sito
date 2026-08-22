export interface Service {
  slug: string;
  number: string;
  title: string;
  tag: string;
  homeSummary: string;
  description: string;
  items: string[];
}

export const SERVICES: Service[] = [
  {
    slug: "fiscale-e-tributaria",
    number: "01",
    title: "Consulenza fiscale e tributaria",
    tag: "Persone fisiche · Società",
    homeSummary:
      "Imposte sul reddito, IVA, tributi locali, detrazioni fiscali. Dichiarazioni per persone fisiche, società e associazioni.",
    description:
      "Assistenza completa in materia fiscale e tributaria per persone fisiche, società di persone e di capitali, enti non commerciali e associazioni. Pianificazione fiscale per ottimizzare il carico tributario nel rispetto della normativa vigente.",
    items: [
      "Dichiarazioni dei redditi (730, UNICO persone fisiche e società)",
      "Consulenza IVA e gestione adempimenti periodici",
      "Tributi locali: IMU, TARI, TASI",
      "Detrazioni e agevolazioni fiscali",
      "Pianificazione fiscale annuale e pluriennale",
      "Consulenza su successioni e donazioni",
    ],
  },
  {
    slug: "aziendale-e-finanziaria",
    number: "02",
    title: "Consulenza aziendale e finanziaria",
    tag: "PMI · Startup · Imprenditori",
    homeSummary:
      "Avvio attività, costituzione e liquidazione società, perizie di stima, valutazioni aziendali e rapporti con le banche.",
    description:
      "Supporto strategico per imprenditori e aziende in ogni fase del ciclo di vita aziendale: dalla costituzione allo sviluppo, fino alla ristrutturazione o cessazione. Analisi finanziaria e supporto nei rapporti con gli istituti di credito.",
    items: [
      "Avvio e costituzione di nuove attività",
      "Costituzione e trasformazione societaria",
      "Perizie di stima e valutazioni aziendali",
      "Supporto nei rapporti con banche e istituti finanziari",
      "Analisi economico-finanziaria e business plan",
      "Liquidazione e cessione di aziende",
    ],
  },
  {
    slug: "assistenza-tributaria",
    number: "03",
    title: "Assistenza tributaria",
    tag: "Contenziosi · Accertamenti",
    homeSummary:
      "Supporto nei contenziosi, difesa davanti alle Commissioni Tributarie e rapporti con l'Agenzia delle Entrate.",
    description:
      "Difesa del contribuente in ogni fase del contenzioso tributario, dall'accertamento fino ai gradi di giudizio davanti alle Corti di Giustizia Tributaria. Gestione dei rapporti con l'Agenzia delle Entrate e altri enti impositivi.",
    items: [
      "Assistenza in caso di accertamenti fiscali",
      "Ricorsi alla Corte di Giustizia Tributaria di 1° e 2° grado",
      "Istanze di accertamento con adesione e mediazione",
      "Ravvedimento operoso e definizioni agevolate",
      "Gestione comunicazioni e cartelle esattoriali",
      "Interpelli all'Agenzia delle Entrate",
    ],
  },
  {
    slug: "contabili-e-amministrativi",
    number: "04",
    title: "Servizi contabili e amministrativi",
    tag: "Contabilità · Paghe · Libri",
    homeSummary:
      "Tenuta contabilità, libri sociali, controllo economico-finanziario e affiancamento del personale amministrativo.",
    description:
      "Gestione completa della contabilità aziendale e degli adempimenti amministrativi periodici. Un supporto continuativo che permette all'imprenditore di concentrarsi sul proprio business, con la certezza che tutto sia in ordine.",
    items: [
      "Tenuta contabilità ordinaria e semplificata",
      "Redazione e deposito libri sociali obbligatori",
      "Liquidazioni IVA periodiche e dichiarazioni annuali",
      "Adempimenti INPS e INAIL",
      "Controllo economico-finanziario periodico",
      "Affiancamento del personale amministrativo interno",
    ],
  },
  {
    slug: "revisione-legale",
    number: "05",
    title: "Revisione legale dei conti",
    tag: "Collegio Sindacale · Revisori",
    homeSummary:
      "Collegio Sindacale, revisori legali e organi di gestione con piena indipendenza e professionalità.",
    description:
      "Attività di revisione legale dei conti e controllo contabile per società di capitali. Incarichi di Sindaco Revisore e componente del Collegio Sindacale, svolti con piena indipendenza e nel rispetto dei principi di revisione internazionali.",
    items: [
      "Revisione legale dei bilanci di esercizio",
      "Incarichi di Sindaco Revisore unico",
      "Componente del Collegio Sindacale",
      "Verifica della regolare tenuta della contabilità",
      "Relazioni di revisione e giudizi sul bilancio",
      "Controllo sulla conformità alla normativa vigente",
    ],
  },
  {
    slug: "bilanci-e-finanza-agevolata",
    number: "06",
    title: "Bilanci e finanza agevolata",
    tag: "Bilanci · Bandi · Contributi",
    homeSummary:
      "Redazione bilanci di esercizio, nota integrativa, deposito al Registro Imprese e consulenza su bandi e contributi PMI.",
    description:
      "Redazione professionale dei bilanci di esercizio e consulenza specializzata nella ricerca e gestione di contributi, bandi e agevolazioni per PMI. Un'area in cui lo studio vanta oltre 13 anni di esperienza concreta e risultati documentati.",
    items: [
      "Redazione bilanci ordinari, abbreviati e semplificati",
      "Nota integrativa e relazione sulla gestione",
      "Deposito al Registro delle Imprese",
      "Ricerca e analisi bandi nazionali e regionali",
      "Presentazione domande di contributo e agevolazione",
      "Rendicontazione e gestione post-concessione",
    ],
  },
];
