// Contenuti verificati (agosto 2026). Alcuni dettagli (es. termine di
// prescrizione del bollo auto, esito della circolare Agenzia Entrate 2026
// sul Codice della Crisi) restano da confermare caso per caso: non citarli
// come certezze assolute con i clienti.

export const PERCORSI = [
  {
    slug: "contenzioso",
    title: "Contenzioso Tributario",
    intro:
      "Hai ricevuto una cartella di pagamento, un accertamento o un avviso di addebito? Che tu sia un'azienda, un libero professionista o un privato, ti affianchiamo in ogni fase del contenzioso con l'Agenzia delle Entrate e gli altri enti impositivi.",
    items: [
      "Assistenza in caso di accertamenti fiscali",
      "Ricorsi alla Corte di Giustizia Tributaria di 1° e 2° grado",
      "Istanze di accertamento con adesione e mediazione tributaria",
      "Rateizzazione dei debiti con l'Agenzia delle Entrate-Riscossione",
      "Gestione di cartelle esattoriali e avvisi di addebito",
      "Difesa in ogni grado di giudizio",
    ],
    chiusura:
      "Una prima valutazione ci permette di capire subito se conviene fare ricorso, chiedere una rateizzazione o percorrere un'altra strada — a prescindere da chi sia il debitore.",
  },
  {
    slug: "sovraindebitamento",
    title: "Sovraindebitamento",
    intro:
      "Se i debiti hanno superato la tua capacità di pagarli, la legge ti offre una via d'uscita concreta: le procedure di sovraindebitamento permettono di ristrutturarli, rateizzarli o in alcuni casi azzerarli, con la protezione del tribunale.",
    chiusura:
      "Ti aiutiamo a costruire la pratica insieme a un Organismo di Composizione della Crisi (OCC) e a scegliere la procedura più adatta alla tua situazione.",
  },
  {
    slug: "annullamento-cartelle",
    title: "Analisi e Annullamento Cartelle",
    intro:
      "Prima di pagare, verifica se la cartella è davvero dovuta: molte presentano vizi di notifica, termini scaduti o errori che ne permettono l'annullamento totale o parziale.",
    chiusura:
      "Un'analisi tecnica della cartella richiede pochi giorni: se troviamo un vizio, presentiamo ricorso; se la cartella è corretta, te lo diciamo con altrettanta chiarezza.",
  },
] as const;

export const PROCEDURE_SOVRAINDEBITAMENTO = [
  {
    title: "Piano di ristrutturazione dei debiti del consumatore",
    text: "Per persone fisiche che hanno contratto debiti per scopi estranei alla propria attività d'impresa o professionale.",
  },
  {
    title: "Concordato minore",
    text: "Per piccoli imprenditori, professionisti e altri debitori non soggetti alle procedure concorsuali ordinarie.",
  },
  {
    title: "Liquidazione controllata",
    text: "Liquidazione del patrimonio del debitore sotto il controllo del tribunale, come alternativa quando le altre procedure non sono percorribili.",
  },
] as const;

export const ESDEBITAZIONE = {
  title: "Esdebitazione del debitore incapiente",
  text: "Per chi non ha alcuna capacità di offrire il pagamento, neppure parziale, ai creditori: libera dai debiti residui una sola volta nella vita, previa relazione dell'OCC sulla meritevolezza e sulle cause della crisi.",
  nota: "Nei 4 anni successivi al decreto, se sopravvengono utilità rilevanti (ad es. un'eredità pari ad almeno il 10% del passivo), vanno destinate ai creditori: in caso contrario il beneficio può essere revocato.",
} as const;

export const OCC_NOTA =
  "Tutte le procedure di sovraindebitamento richiedono la validazione di un tribunale e l'assistenza di un OCC (Organismo di Composizione della Crisi): lo studio prepara la pratica e vi accompagna, ma l'esito dipende dalla valutazione del tribunale, non è una decisione unilaterale del commercialista.";

export const MOTIVI_ANNULLAMENTO = [
  {
    title: "Vizi di notifica",
    text: "La cartella non è stata notificata correttamente (destinatario, modalità, relata di notifica).",
  },
  {
    title: "Responsabile del procedimento non indicato",
    text: "La mancata indicazione del responsabile del procedimento rende la cartella nulla (Corte Costituzionale, sentenza n. 377/2007).",
  },
  {
    title: "Vizi di motivazione",
    text: "La cartella non spiega in modo adeguato origine e composizione del debito richiesto.",
  },
  {
    title: "Errori di calcolo o duplicazioni",
    text: "Importi calcolati in modo errato, o lo stesso debito richiesto più di una volta.",
  },
  {
    title: "Decadenza",
    text: "La cartella non è stata notificata entro i termini di legge (art. 25 DPR 602/1973): entro il 31/12 del 3° anno successivo per la liquidazione automatica, del 4° anno per il controllo formale, del 2° anno successivo alla definitività dell'accertamento per i ruoli da accertamento.",
  },
  {
    title: "Prescrizione",
    text: "10 anni per i tributi erariali (IRPEF, IVA, IRAP); 5 anni per IMU, TASI, TARI, contributi INPS/INAIL e sanzioni amministrative. La cartella non trasforma da sola una prescrizione breve in decennale (Cassazione SS.UU. n. 23397/2016).",
  },
] as const;

export const TERMINI_RICORSO = {
  title: "Termini per agire",
  text: "Il ricorso contro una cartella va presentato entro 60 giorni dalla notifica, davanti alla Corte di Giustizia Tributaria di primo grado (le ex Commissioni Tributarie Provinciali, rinominate dalla riforma in vigore dal 16 settembre 2022). Il termine si sospende dall'1 al 31 agosto.",
} as const;

export const ROTTAMAZIONE_NOTA =
  "La Legge di Bilancio 2026 ha introdotto la Rottamazione-quinquies, ma la finestra per aderire si è chiusa il 30 aprile 2026 (pagamento in unica soluzione entro il 31 luglio 2026, oppure fino a 54 rate bimestrali in 9 anni per chi ha aderito in tempo). Se hai già aderito possiamo aiutarti a gestire il piano di rate; se non hai aderito restano percorribili le altre strade descritte in questa pagina.";

export const ITER_STEPS = [
  {
    num: "01",
    title: "Analisi del caso",
    text: "Esaminiamo cartelle, accertamenti o la situazione debitoria complessiva per capire cosa c'è in gioco.",
  },
  {
    num: "02",
    title: "Individuazione del percorso",
    text: "Cartelle con vizi → ricorso. Debiti sostenibili solo in parte → sovraindebitamento. Accertamenti o altre contestazioni → contenzioso tributario.",
  },
  {
    num: "03",
    title: "Azione",
    text: "Presentazione del ricorso entro i termini, avvio della procedura di sovraindebitamento più adatta, o gestione diretta del contenzioso.",
  },
  {
    num: "04",
    title: "Esito",
    text: "Decisione della Corte di Giustizia Tributaria o del tribunale competente: vi seguiamo fino alla chiusura della pratica.",
  },
] as const;

export const AVVISO_CLIENTE =
  "Non tutte le cartelle presentano vizi che ne permettono l'annullamento, e il sovraindebitamento è una procedura giudiziale il cui esito dipende dal tribunale: per questo iniziamo sempre con un'analisi del caso concreto, prima di indicare la strada più realistica.";

export const GUIDA_SITUAZIONE_DEBITORIA = {
  title: "Come scaricare la tua situazione debitoria",
  steps: [
    "Vai su agenziaentrateriscossione.gov.it e clicca su \"Area Riservata\".",
    "Accedi con SPID, CIE o CNS (professionisti e imprese possono usare anche le credenziali dell'Agenzia delle Entrate).",
    "Nel menu dell'area riservata seleziona il servizio \"Situazione debitoria – consulta e paga\".",
    "Troverai l'elenco di cartelle e avvisi (pagati, sospesi, da pagare): scarica il documento riepilogativo da allegare qui sotto.",
  ],
  nota: "Le voci del menu del portale possono cambiare nel tempo: se non trovi subito la sezione, la funzione di ricerca interna del sito ti aiuta a individuarla.",
  url: "https://www.agenziaentrateriscossione.gov.it",
} as const;

export const NORMATIVA_REFS = [
  {
    title: "D.Lgs. 12 gennaio 2019, n. 14 — Codice della Crisi d'Impresa e dell'Insolvenza",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2019-01-12;14",
  },
  {
    title: "Art. 25 DPR 29 settembre 1973, n. 602 — termini di notifica delle cartelle",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1973-09-29;602",
  },
  {
    title: "Agenzia delle Entrate — Annullamento, ricorso e sospensione della cartella",
    url: "https://www.agenziaentrate.gov.it/portale/schede/accertamenti/cartella-pagamento/annullamento-ricorso-sospensione-cittadini",
  },
  {
    title: "Agenzia delle Entrate-Riscossione — Rottamazione-quinquies",
    url: "https://www.agenziaentrateriscossione.gov.it/it/il-gruppo/lagenzia-comunica/novita/Legge-di-Bilancio-2026-in-arrivo-la-Rottamazione-quinquies/",
  },
] as const;
