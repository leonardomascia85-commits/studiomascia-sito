// Pagina interna, non pubblica: appunti operativi sul regime IVA per i
// medici. Verificare periodicamente soglie e scadenze (possono cambiare
// con la Legge di Bilancio) prima di usare questi dati con i clienti.

export const PRINCIPIO_GENERALE = {
  title: "Esenzione IVA delle prestazioni sanitarie",
  text: "Le prestazioni sanitarie di diagnosi, cura e riabilitazione rese alla persona nell'esercizio di professioni e arti sanitarie sono esenti da IVA ai sensi dell'art. 10, comma 1, n. 18 del DPR 633/1972. L'esenzione riguarda la prestazione con finalità terapeutica, non il soggetto che la rende: vale per il medico libero professionista, in forma individuale, associata o societaria.",
} as const;

export const ADEMPIMENTI = [
  {
    title: "Apertura Partita IVA",
    text: "Codice ATECO 86.21.00 (medico generico) o 86.22.xx (specialisti). Regime IVA esente ex art. 10 n. 18, salvo attività accessorie imponibili.",
  },
  {
    title: "Fatturazione senza addebito IVA",
    text: "La fattura riporta la dicitura \"operazione esente IVA ai sensi dell'art. 10, comma 1, n. 18 del DPR 633/1972\", senza aliquota né importo IVA.",
  },
  {
    title: "Imposta di bollo",
    text: "Le fatture esenti IVA di importo superiore a 77,47 € sono soggette a imposta di bollo di 2 €, a carico del cliente salvo diversa pattuizione.",
  },
  {
    title: "Dispensa dagli adempimenti (facoltativa)",
    text: "Chi effettua esclusivamente operazioni esenti art. 10 può chiedere la dispensa ex art. 36-bis DPR 633/1972 da fatturazione, registrazione, liquidazione e dichiarazione IVA, restando comunque tenuto a numerare e conservare le fatture di acquisto.",
  },
] as const;

export const CASI_PARTICOLARI = [
  {
    title: "Perizie medico-legali",
    text: "Le perizie e i pareri resi a compagnie assicurative o in ambito giudiziario, privi di finalità diagnostico-terapeutica per la persona esaminata, sono generalmente considerati imponibili IVA (principio dello \"scopo terapeutico principale\", art. 132 Direttiva 2006/112/CE e giurisprudenza CGUE) e non rientrano nell'esenzione dell'art. 10 n. 18. Non risulta una circolare dell'Agenzia delle Entrate dedicata specificamente al tema: verificare il caso concreto.",
  },
  {
    title: "Consulenze e attività non sanitarie",
    text: "Docenza, consulenze scientifiche, collaborazioni editoriali e attività prive di finalità di cura seguono il regime IVA ordinario (imponibile), salvo specifiche esenzioni previste per altri motivi.",
  },
] as const;

export const REGIME_FORFETTARIO = {
  intro:
    "Alternativa al regime ordinario, spesso scelta per la tassazione del reddito più che per l'IVA (già esente in regime ordinario per l'attività sanitaria). Soglie confermate per il 2026.",
  requisiti: [
    "Ricavi/compensi entro 85.000 € annui",
    "Uscita dal regime dall'anno successivo se si superano gli 85.000 €; uscita immediata nello stesso anno se si superano i 100.000 €",
    "Spese per lavoro accessorio, dipendenti e collaboratori entro 20.000 € annui",
    "Nessuna partecipazione contemporanea in società di persone, associazioni professionali o SRL trasparenti",
    "Reddito da lavoro dipendente (nell'anno precedente) non superiore a 35.000 €, salvo rapporto di lavoro cessato",
  ],
  vantaggi: [
    "Imposta sostitutiva del 15% (5% per i primi 5 anni, per le nuove attività in presenza dei requisiti) in luogo di IRPEF, addizionali e IRAP",
    "Nessuna liquidazione periodica né dichiarazione IVA",
    "Esonero dagli obblighi di fatturazione elettronica verso i consumatori finali",
  ],
} as const;

export const FATTURAZIONE_ELETTRONICA = {
  text: "Per le prestazioni sanitarie rese a persone fisiche i cui dati confluiscono nel Sistema Tessera Sanitaria (STS) vige il divieto — non un semplice esonero — di fatturazione elettronica tramite SdI: la fattura va emessa in modalità extra-SdI (cartacea o PDF), a tutela della riservatezza dei dati sanitari. Il paziente può opporsi all'invio dei dati al STS: in tal caso la prestazione va comunque documentata ma senza trasmissione al sistema.",
  nota: "Dai dati relativi al 2025 la trasmissione al STS è tornata annuale (non più semestrale), con scadenza al 31 gennaio dell'anno successivo — per il 2025 slittata al 2 febbraio 2026 (art. 12 D.Lgs. 8 gennaio 2024, n. 1; DM 29 ottobre 2025).",
} as const;

export const DETRAIBILITA_IVA = {
  title: "Detraibilità IVA sugli acquisti",
  text: "Essendo l'attività prevalentemente esente, la detrazione dell'IVA sugli acquisti (strumentazione, locazione dello studio, utenze) è fortemente limitata dal meccanismo del pro-rata (artt. 19 e 19-bis DPR 633/1972): in presenza di sole operazioni esenti, il pro-rata di detraibilità tende a zero. L'IVA sugli acquisti diventa quindi in gran parte un costo, deducibile ai fini reddituali ma non recuperabile ai fini IVA.",
} as const;

export const IRAP = {
  title: "IRAP e autonoma organizzazione",
  text: "Il medico libero professionista è soggetto a IRAP solo in presenza di autonoma organizzazione (studio strutturato, dipendenti, beni strumentali significativi eccedenti il minimo indispensabile). In assenza di tali elementi, secondo l'orientamento consolidato della giurisprudenza, l'attività può essere esclusa da IRAP.",
} as const;

export const AVVISO_TESTO_UNICO = {
  title: "In arrivo: nuova numerazione dal 2027",
  text: "Il D.Lgs. 19 gennaio 2026, n. 10 (Testo Unico IVA, in G.U. n. 24 del 30/1/2026) abroga e sostituisce il DPR 633/1972 a partire dal 1° gennaio 2027. È un intervento compilativo, che non cambia la sostanza delle regole ma rinumera gli articoli: gli artt. 10 n. 18 e 36-bis citati in questa pagina restano validi fino al 31/12/2026. Aggiornare i riferimenti con la nuova numerazione prima di quella data.",
} as const;

export const NORMATIVA_REFS = [
  {
    title: "DPR 26 ottobre 1972, n. 633 — Istituzione IVA (testo vigente fino al 2026)",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633",
  },
  {
    title: "Legge 23 dicembre 2014, n. 190 — Regime forfettario",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2014-12-23;190",
  },
  {
    title: "Agenzia delle Entrate — Contribuenti esonerati dalla dichiarazione IVA (art. 36-bis)",
    url: "https://www.agenziaentrate.gov.it/portale/contribuenti-esonerati-dalla-dichiarazione-iva",
  },
  {
    title: "Art. 132 Direttiva 2006/112/CE — esenzioni IVA prestazioni sanitarie (base UE dell'art. 10 n. 18)",
    url: "https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32006L0112",
  },
] as const;
