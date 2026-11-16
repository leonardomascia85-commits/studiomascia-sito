// Contenuti verificati sulla Circolare operativa Simest n. 4/394/2023
// (aggiornamento del 29 ottobre 2026) e sulle pagine ufficiali simest.it,
// Fondo 394/81 — misura "Transizione Digitale o Ecologica".

export const FINALITA =
  "Finanziamento agevolato (con possibile quota a fondo perduto) a valere sul Fondo 394/81, per investimenti nella transizione digitale e/o ecologica delle imprese italiane orientate ai mercati internazionali, con una parte destinabile anche al rafforzamento patrimoniale.";

export const CONDIZIONI = [
  {
    title: "Importo",
    text: "Minimo 10.000 €. Massimo: il minore tra il 35% dei ricavi medi degli ultimi due bilanci (voce A1) e il tetto per dimensione d'impresa — 500.000 € (micro impresa), 2.500.000 € (PMI, PMI innovative e start-up innovative), 5.000.000 € (altre imprese).",
  },
  {
    title: "Destinazione minima",
    text: "Almeno il 50% dell'importo deliberato va destinato a investimenti digitali e/o ecologici. Il restante (fino al 50%) può andare al rafforzamento patrimoniale, anche tramite aumento di capitale o finanziamento soci a controllate (entro 600.000 €).",
  },
  {
    title: "Quota a fondo perduto (cofinanziamento)",
    text: "Richiedibile in sede di domanda tra tre opzioni: 10%, 50% oppure 80% dell'importo, nel rispetto del plafond de minimis (Reg. UE 2831/2023) e delle disponibilità del Fondo per la Promozione Integrata.",
  },
  {
    title: "Durata",
    text: "6 anni, di cui 2 di preammortamento. Estesa a 8 anni (di cui 2 di preammortamento) per le imprese rientranti nelle categorie premiali (Balcani Occidentali, USA, imprese energivore/efficientate, aree colpite da eventi meteorologici eccezionali).",
  },
  {
    title: "Percentuali maggiorate per categorie specifiche",
    text: "La quota destinabile a rafforzamento patrimoniale può salire fino all'80% (imprese con interessi in Balcani Occidentali o USA) o fino al 90% (aree colpite da eventi meteorologici eccezionali, imprese energivore o in percorso di efficientamento energetico, misura \"Energia per la Competitività Internazionale\").",
  },
] as const;

export const CHI_PUO_ACCEDERE = [
  {
    title: "Sede e costituzione",
    text: "Sede legale e sede operativa in Italia, impresa regolarmente costituita e iscritta al Registro Imprese, in piena attività.",
  },
  {
    title: "Bilanci",
    text: "Almeno due bilanci di esercizi completi depositati (approvati o con termini di deposito scaduti), riferiti allo stesso soggetto richiedente. In assenza di obbligo di deposito, occorrono le dichiarazioni dei redditi degli ultimi due esercizi.",
  },
  {
    title: "Vocazione export",
    text: "Alternativamente: fatturato export ≥10% nell'ultimo esercizio; oppure almeno il 10% del fatturato totale verso imprese clienti esportatrici (ciascuna con fatturato export ≥3%); oppure, per imprese energivore o in percorso di efficientamento energetico, fatturato export ≥3%; oppure fatturato export ≥3% impegnandosi a destinare il 100% dell'intervento a spese in ambito Intelligenza Artificiale.",
  },
  {
    title: "Regolarità e affidabilità",
    text: "DURC regolare, nessun aiuto illegale non restituito, nessuna procedura concorsuale in corso o prevedibile, impresa non in difficoltà ai sensi del Reg. UE 651/2014, nessuna causa ostativa antimafia o ex d.lgs. 231/2001, Polizza Catastrofale assolta.",
  },
] as const;

export const SPESE_DIGITALI = [
  "Integrazione e sviluppo digitale dei processi aziendali",
  "Nuovi modelli organizzativi e gestionali in ottica digitale",
  "Attrezzature tecnologiche, programmi informatici e contenuti digitali",
  "Consulenze in ambito digitale (es. digital manager)",
  "Disaster recovery e business continuity",
  "Blockchain, limitatamente alla notarizzazione dei processi produttivi e gestionali",
  "Investimenti e formazione Industria 4.0 (cyber security, big data, cloud/fog computing, realtà virtuale e aumentata, robotica collaborativa, manifattura additiva, IoT)",
  "Certificazioni digitali e di innovazione digitale connesse agli investimenti",
  "Spese riconducibili all'Intelligenza Artificiale",
] as const;

export const SPESE_ECOLOGICHE = [
  "Investimenti per la sostenibilità ambientale e sociale (efficientamento energetico, idrico, mitigazione degli impatti climatici)",
  "Certificazioni ambientali connesse agli investimenti, inclusa la diagnosi energetica",
] as const;

export const SPESE_RAFFORZAMENTO = [
  "Investimenti per la solidità patrimoniale (immobilizzazioni materiali, immateriali escluso l'avviamento, finanziarie limitatamente ad aumenti di capitale o finanziamento soci a controllate)",
  "Consulenze professionali per la conformità alla normativa ambientale",
  "Consulenze per la presentazione e gestione della domanda e asseverazioni del Revisore, fino al 5% dell'importo deliberato e comunque non oltre 100.000 €",
] as const;

export const SPESE_ESCLUSE = [
  "Spese direttamente connesse all'attività di esportazione (es. commissioni sul venduto, rete di distribuzione)",
  "Spese commerciali correnti (assistenza post-vendita, trasporto, stoccaggio)",
  "Spese per attività correnti dell'impresa, incluso il personale",
  "Consulenze continuative o periodiche (fiscale, legale, pubblicità ordinaria)",
  "Spese nei settori esclusi dal Fondo o già coperte da altra agevolazione pubblica non cumulabile",
] as const;

export const DOCUMENTI_RICHIESTI = [
  "Visura camerale o documentazione equivalente",
  "Ultimi due bilanci approvati e depositati (o dichiarazioni dei redditi equivalenti con prospetti economico-patrimoniali)",
  "DURC in corso di validità",
  "Statuto societario",
  "Dati del legale rappresentante e del titolare effettivo",
  "Contratto di conto corrente dedicato, se già disponibile",
  "Casellario giudiziale del legale rappresentante",
  "Dichiarazioni sostitutive su esclusioni, normativa ambientale, aiuti di Stato, de minimis, AI Act e Polizza Catastrofale",
  "Documentazione a comprova del requisito export (fatture, dichiarazioni IVA o bilanci dei clienti esportatori, a seconda del requisito scelto)",
  "Programma degli investimenti/business plan",
] as const;

export const ITER_STEPS = [
  {
    num: "01",
    title: "Verifica dei requisiti",
    text: "Analizziamo bilanci, fatturato export e tipologia di investimento per individuare il requisito di accesso più adatto.",
  },
  {
    num: "02",
    title: "Raccolta documenti",
    text: "Bilanci, visura, DURC, statuto, dati del titolare effettivo e dichiarazioni sostitutive richieste dalla Circolare.",
  },
  {
    num: "03",
    title: "Domanda sul Portale Simest",
    text: "Compilazione e sottoscrizione digitale della domanda da parte del legale rappresentante, invio tramite il Portale Simest.",
  },
  {
    num: "04",
    title: "Istruttoria e delibera",
    text: "Simest valuta in ordine cronologico di arrivo, nei limiti delle disponibilità del Fondo 394/81; delibera del Comitato Agevolazioni.",
  },
  {
    num: "05",
    title: "Stipula, spese e rendicontazione",
    text: "Firma del contratto entro 3 mesi dall'esito, apertura del conto dedicato, sostenimento delle spese e rendicontazione (prima entro 12 mesi dalla stipula, finale a fine progetto).",
  },
] as const;

export const NORMATIVA_NOTE =
  "La misura opera a sportello, senza graduatorie: le domande sono istruite in ordine cronologico di arrivo nei limiti delle risorse disponibili del Fondo 394/81. Non risulta una scadenza generale di presentazione; valgono scadenze specifiche per alcune categorie premiali (es. imprese con interessi nei Balcani Occidentali, entro il 14 settembre 2026; alcune premialità energetiche, entro il 31 dicembre 2026). Verificare sempre la Circolare vigente e il Portale Simest.";

export const NORMATIVA_REFS = [
  {
    title: "Circolare operativa Simest n. 4/394/2023 (agg. 29/10/2026)",
    url: "https://www.simest.it/app/uploads/2026/11/Circolare-4-394-2023-DE-29.10.2026_sito.pdf",
  },
  {
    title: "Decreto 1° giugno 2023 — Disciplina Fondo 394/81",
    url: "https://www.simest.it/app/uploads/2023/09/DM-1-giugno-2023-Disciplina-Fondo-394.pdf",
  },
  {
    title: "Avviso in Gazzetta Ufficiale n. 164 del 15/07/2023",
    url: "https://www.simest.it/app/uploads/2023/09/Avviso-in-G.U.-n.-164-del-15.7.2023-su-pubblicazione-Circolari-operative-del-F.-394-e-Avvio-domande-dal-27-luglio-2023-ore-9..pdf",
  },
] as const;

export const FAQ = [
  {
    question: "Cos'è la misura \"Transizione Digitale o Ecologica\" di Simest?",
    answer:
      "È un finanziamento agevolato (con possibile quota a fondo perduto) a valere sul Fondo 394/81, destinato a imprese italiane con vocazione internazionale che vogliono investire nella transizione digitale e/o ecologica, con una parte dell'importo destinabile anche al rafforzamento patrimoniale.",
  },
  {
    question: "Quanto posso richiedere?",
    answer:
      "Minimo 10.000 €, massimo il minore tra il 35% dei ricavi medi degli ultimi due bilanci e il tetto per dimensione d'impresa: 500.000 € per le micro imprese, 2.500.000 € per PMI, PMI innovative e start-up innovative, 5.000.000 € per le altre imprese.",
  },
  {
    question: "È un prestito o un contributo a fondo perduto?",
    answer:
      "È principalmente un finanziamento agevolato. In sede di domanda si può però richiedere anche una quota a fondo perduto (cofinanziamento) pari al 10%, 50% o 80% dell'importo, nei limiti del regime de minimis e delle risorse disponibili.",
  },
  {
    question: "Come deve essere ripartito l'importo tra le diverse finalità?",
    answer:
      "Almeno il 50% dell'importo deliberato va destinato a investimenti digitali e/o ecologici. Il restante, fino al 50%, può finanziare il rafforzamento patrimoniale dell'impresa, anche tramite aumento di capitale o finanziamento soci a società controllate.",
  },
  {
    question: "Quali spese digitali sono ammesse?",
    answer:
      "Integrazione digitale dei processi aziendali, nuovi modelli organizzativi digitali, attrezzature tecnologiche e software, consulenze digitali, disaster recovery, blockchain per la notarizzazione di processi, investimenti Industria 4.0 (cyber security, cloud, realtà aumentata, robotica, IoT), certificazioni digitali e spese in ambito Intelligenza Artificiale.",
  },
  {
    question: "Quali spese ecologiche sono ammesse?",
    answer:
      "Investimenti per la sostenibilità ambientale e sociale, come l'efficientamento energetico e idrico e la mitigazione degli impatti climatici, oltre alle certificazioni ambientali e alla diagnosi energetica collegate agli investimenti.",
  },
  {
    question: "La mia impresa deve già esportare per accedere?",
    answer:
      "Serve soddisfare uno tra più requisiti alternativi legati all'export: fatturato export di almeno il 10% (o il 3% per imprese energivore/in efficientamento energetico), oppure una quota rilevante di fatturato verso clienti che a loro volta esportano. Verifichiamo insieme quale requisito si applica al tuo caso.",
  },
  {
    question: "Quali documenti servono per presentare la domanda?",
    answer:
      "Tra gli altri: gli ultimi due bilanci depositati, visura camerale, DURC, statuto societario, dati del titolare effettivo, dichiarazioni sostitutive su esclusioni/normativa ambientale/aiuti di Stato/de minimis, documentazione a comprova del requisito export e il programma degli investimenti. L'elenco esatto dipende dal tipo di impresa e dal requisito scelto.",
  },
  {
    question: "C'è una scadenza per presentare la domanda?",
    answer:
      "La misura è a sportello: le domande si valutano in ordine cronologico di arrivo fino a esaurimento delle risorse del Fondo 394/81, senza una scadenza generale fissa. Alcune categorie premiali hanno però termini propri (es. imprese con interessi nei Balcani Occidentali entro il 14 settembre 2026).",
  },
  {
    question: "Cosa succede dopo l'approvazione?",
    answer:
      "Il contratto va stipulato entro 3 mesi dalla comunicazione dell'esito. Le spese si sostengono tramite un conto corrente dedicato e vanno rendicontate: la prima rendicontazione entro 12 mesi dalla stipula, quella finale entro 30 giorni dal termine del periodo di realizzazione.",
  },
] as const;

export const SIMEST_PAGINA =
  "https://www.simest.it/per-le-imprese/finanziamenti-agevolati/finanziamenti-agevolati-internazionalizzazione/transizione-digitale-o-ecologica/";

// Stesso gestionale area-clienti usato per Resto al Sud.
export const AREA_CLIENTI_URL = "https://area-clienti.studiomascia.com/accedi";
