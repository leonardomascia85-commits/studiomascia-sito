export interface NewsItem {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  excerpt: string;
  tags: string[];
  // Paragrafi del corpo articolo. Per contenuti originali dello Studio: testo
  // completo. Per estratti da fonti esterne: 2-4 frasi di sintesi, mai il
  // testo integrale dell'articolo originale (vedi `source`).
  body: string[];
  source?: { label: string; url: string };
}

export const TAGS = [
  "Bandi e Finanziamenti PMI",
  "Scadenze Fiscali",
  "Contenzioso Tributario",
  "Sovraindebitamento e Cartelle",
  "IVA",
  "Accertamenti e Controlli",
  "Resto al Sud",
  "Lavoro e Assunzioni",
  "Startup e Innovazione",
  "Bilanci",
  "Giurisprudenza Fiscale",
] as const;

export function tagToSlug(tag: string): string {
  return tag
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function slugToTag(slug: string): string | undefined {
  return TAGS.find((t) => tagToSlug(t) === slug);
}

export const NEWS: NewsItem[] = [
  {
    slug: "riordino-incentivi-imprese-2026",
    title: "Il riordino degli incentivi alle imprese in vigore dal 18 agosto",
    date: "2026-08-02",
    excerpt:
      "Il D.Lgs. 138/2026 riorganizza gli strumenti agevolativi gestiti dal MIMIT: non nuovi bonus, ma un riordino per ridurre sovrapposizioni.",
    tags: ["Bandi e Finanziamenti PMI"],
    body: [
      "Il D.Lgs. 138/2026, pubblicato in Gazzetta Ufficiale il 3 agosto 2026 ed entrato in vigore il 18 agosto, riorganizza gli strumenti agevolativi nazionali gestiti dal Ministero delle Imprese e del Made in Italy.",
      "È importante essere chiari su cosa non è questo provvedimento: non si tratta di un nuovo bonus né di uno stanziamento aggiuntivo di risorse. È un riordino normativo, cioè un intervento che riorganizza il modo in cui gli strumenti già esistenti sono classificati, gestiti e messi in relazione tra loro, senza introdurre nuove tipologie di aiuto.",
      "Il decreto concentra le misure esistenti attorno al Fondo per la Crescita Sostenibile, che diventa il contenitore unico di riferimento per gran parte degli interventi del MIMIT. Questa scelta risponde a un'esigenza avvertita da tempo da imprese e consulenti: la proliferazione di fondi, decreti attuativi e sportelli separati rendeva difficile orientarsi tra strumenti che, nella sostanza, perseguivano obiettivi molto simili.",
      "Il Fondo è articolato su quattro direttrici principali: ricerca, sviluppo e innovazione; nascita e crescita di nuove imprese; investimenti produttivi per la transizione verde e digitale; accesso al credito e ai mercati dei capitali. Ricondurre le misure a queste quattro macro-aree dovrebbe, nelle intenzioni del legislatore, ridurre le sovrapposizioni tra bandi che finora si rivolgevano alle stesse imprese con criteri leggermente diversi, generando confusione più che concorrenza tra strumenti.",
      "Per le imprese che oggi beneficiano di un bando già attivo, il punto pratico è rassicurante: le misure in corso restano valide secondo le regole con cui sono state pubblicate, bandi, decreti attuativi e scadenze già fissate non cambiano per effetto del riordino. Il decreto non ha effetto retroattivo sulle domande già presentate o in corso di istruttoria.",
      "Il discorso cambia per chi sta valutando se avviare oggi una nuova domanda su uno strumento minore o poco conosciuto: nei prossimi mesi è probabile un progressivo accorpamento delle misure più piccole all'interno delle quattro direttrici del Fondo, con il rischio che alcuni bandi di nicchia vengano sostituiti, modificati nei criteri o chiusi anticipatamente in vista della loro confluenza in un contenitore più ampio.",
      "Per un imprenditore o un professionista, la conseguenza pratica è che conviene monitorare gli aggiornamenti prima di impostare un piano di investimento che faccia leva su uno strumento agevolativo specifico, soprattutto se di importo contenuto o gestito da un ente diverso dal MIMIT centrale. Una verifica preventiva evita di scoprire, a domanda già presentata, che il bando è stato nel frattempo riassorbito in una misura diversa.",
      "Lo Studio Mascia segue con continuità l'evoluzione della normativa sugli incentivi alle imprese e può supportare i propri clienti nella scelta dello strumento più adatto al proprio progetto di investimento, verificando preventivamente la stabilità e la validità residua del bando individuato.",
    ],
    source: {
      label: "Ministero delle Imprese e del Made in Italy",
      url: "https://www.mimit.gov.it",
    },
  },
  {
    slug: "cartelle-esattoriali-sovraindebitamento-cosa-fare",
    title: "Cartelle esattoriali troppo alte? Ecco cosa si può fare",
    date: "2026-08-03",
    excerpt:
      "Non tutte le cartelle sono dovute per intero: vizi di notifica, termini scaduti e prescrizione possono renderle annullabili, in tutto o in parte.",
    tags: ["Sovraindebitamento e Cartelle", "Contenzioso Tributario"],
    body: [
      "Ricevere una cartella esattoriale genera quasi sempre la stessa reazione: pagare subito per chiudere la questione. È un istinto comprensibile, ma spesso controproducente, perché non tutte le cartelle sono dovute per intero, e in alcuni casi non sono dovute affatto.",
      "Prima di pagare conviene sempre verificare la cartella nel dettaglio. I vizi di notifica sono tra i motivi più frequenti di annullamento: se la notifica non è avvenuta secondo le regole previste, l'atto può essere contestato indipendentemente dal merito del debito sottostante.",
      "Un secondo profilo da controllare è la mancata indicazione del responsabile del procedimento: si tratta di un requisito formale ma sostanziale, perché la sua assenza priva il contribuente della possibilità di individuare un referente per chiarimenti e osservazioni, e la giurisprudenza lo considera in molti casi un vizio che invalida l'atto.",
      "Vanno poi controllati gli errori di calcolo — importi duplicati, sanzioni o interessi ricalcolati in modo scorretto — e soprattutto i termini di decadenza: l'Agenzia delle Entrate-Riscossione ha tempi precisi entro cui deve notificare le cartelle rispetto al momento in cui il ruolo è stato formato, e il loro superamento rende l'atto annullabile.",
      "Se dopo questa verifica emergono vizi fondati, il passo successivo è il ricorso, da presentare entro 60 giorni dalla notifica davanti alla Corte di Giustizia Tributaria di primo grado competente per territorio: un termine perentorio, che non ammette proroghe se non nei casi eccezionali previsti dalla legge, motivo per cui la verifica della cartella andrebbe fatta il prima possibile dopo averla ricevuta.",
      "Il discorso cambia quando il problema non è la singola cartella, magari fondata e corretta, ma l'insieme dei debiti accumulati nel tempo, che il contribuente non è più in grado di sostenere con le proprie risorse. In questi casi il Codice della Crisi d'Impresa e dell'Insolvenza mette a disposizione le procedure di sovraindebitamento, pensate proprio per chi — persona fisica, piccolo imprenditore o professionista — si trova in una situazione di difficoltà economica non temporanea.",
      "Queste procedure, attivate davanti al tribunale competente e con l'assistenza di un Organismo di Composizione della Crisi, possono portare a un piano di ristrutturazione del debito calibrato sulla reale capacità di rimborso del debitore, e in alcuni casi — verificati i presupposti di legge — anche all'azzeramento del debito residuo, sotto la protezione e il controllo del giudice.",
      "Distinguere i due percorsi è essenziale: contestare una cartella viziata è un'azione di merito che punta ad annullare un atto specifico, mentre il sovraindebitamento è uno strumento strutturale per chi ha più debiti di quanti può onorare. Nella nostra pagina dedicata al Contenzioso Tributario trovi la sintesi completa di questi percorsi e un modulo per inviarci i documenti per una prima valutazione gratuita della propria posizione.",
    ],
  },
  {
    slug: "resto-al-sud-2-0-a-chi-si-rivolge",
    title: "Resto al Sud 2.0: a chi si rivolge e come funziona",
    date: "2026-08-04",
    excerpt:
      "Il bando per chi vuole avviare un'attività nel Mezzogiorno tra i 18 e i 35 anni: voucher, contributo a fondo perduto e come richiederlo.",
    tags: ["Resto al Sud", "Bandi e Finanziamenti PMI"],
    body: [
      "Resto al Sud è, da anni, uno degli strumenti più conosciuti per chi vuole avviare un'attività nel Mezzogiorno, e la versione 2.0 ne conferma l'impostazione di fondo, aggiornandone i requisiti di accesso.",
      "Il bando si rivolge a chi ha tra i 18 e i 35 anni non ancora compiuti, e si trova in una condizione di inattività, inoccupazione o disoccupazione. Questo requisito anagrafico e occupazionale non è casuale: la misura nasce per offrire un'alternativa concreta all'emigrazione lavorativa dei giovani del Sud, trasformando la mancanza di un'occupazione in un'opportunità di autoimpiego.",
      "Le regioni ammesse sono Abruzzo, Basilicata, Calabria, Campania, Molise, Puglia, Sardegna e Sicilia: un'area che comprende gran parte del Mezzogiorno continentale e insulare, e che riflette la logica di coesione territoriale con cui la misura è stata storicamente concepita e più volte rifinanziata.",
      "Sul piano economico, il sostegno prevede due canali distinti a seconda delle dimensioni del progetto imprenditoriale: fino a 50.000 € come voucher, erogato al 100% a fondo perduto, per chi ha un progetto di taglia più contenuta, oppure fino a 200.000 € come contributo investimento, articolato in parte a fondo perduto e in parte tramite un finanziamento bancario agevolato. Questa seconda opzione consente di finanziare progetti più strutturati mantenendo comunque una componente non rimborsabile significativa.",
      "Un aspetto procedurale importante riguarda le modalità di accesso: la domanda si presenta con procedura a sportello, senza graduatoria per merito, e le risorse vengono assegnate in ordine cronologico fino a esaurimento della dotazione stanziata. Significa che, a parità di requisiti, chi presenta la domanda con un progetto già ben definito e documentato ha maggiori probabilità di vederla istruita positivamente prima che i fondi si esauriscano.",
      "Per chi valuta questa strada, il consiglio pratico è di non affrontare da soli la fase di predisposizione del business plan e della documentazione: un progetto imprenditoriale solido, con proiezioni economiche credibili e coerenti con l'attività che si intende avviare, è spesso l'elemento che fa la differenza in fase di valutazione, oltre a essere la base su cui poi si costruirà davvero l'attività.",
      "Assistiamo i nostri clienti in tutte le fasi del percorso: dalla verifica preliminare dei requisiti soggettivi e del progetto, alla predisposizione della domanda e del business plan, fino alla rendicontazione finale delle spese sostenute, un passaggio spesso sottovalutato ma determinante per non perdere il beneficio ottenuto. Trovi tutti i dettagli nella nostra pagina dedicata a Resto al Sud.",
    ],
  },
  {
    slug: "voucher-cloud-cybersecurity-pmi",
    title: "Voucher Cloud e Cybersecurity: 150 milioni per digitalizzare le PMI",
    date: "2026-08-05",
    excerpt:
      "Contributo a fondo perduto fino a 20.000 € per l'acquisto di servizi cloud e cybersicurezza: domande dal 10 novembre 2026.",
    tags: ["Bandi e Finanziamenti PMI"],
    body: [
      "La sicurezza informatica e la migrazione dei dati aziendali sul cloud sono ormai temi che riguardano anche le PMI più piccole, non solo le grandi aziende strutturate: basta un attacco informatico o una perdita di dati per bloccare l'operatività di uno studio o di un'azienda per giorni. Il Voucher Cloud e Cybersecurity nasce proprio per abbassare la soglia di accesso a questi investimenti.",
      "La misura mette a disposizione di PMI e lavoratori autonomi un contributo a fondo perduto pari al 50% della spesa sostenuta, con un importo che va da un minimo di 4.000 € a un massimo di 20.000 € per impresa. La soglia minima non è un dettaglio secondario: esclude i micro-interventi e orienta il voucher verso progetti di una certa consistenza, capaci di incidere davvero sul livello di protezione dei dati aziendali.",
      "Un elemento da tenere presente è che i servizi devono essere acquistati presso fornitori abilitati con apposito decreto: non basta rivolgersi a un qualsiasi fornitore di servizi informatici, occorre verificare preventivamente che il soggetto scelto rientri nell'elenco dei fornitori qualificati, pena la non ammissibilità della spesa al contributo.",
      "La dotazione complessiva della misura è di 150 milioni di euro, un importo significativo che testimonia quanto il tema della resilienza digitale delle PMI sia considerato prioritario a livello di politica industriale nazionale. Di questi fondi, 71 milioni sono riservati alle imprese di Abruzzo, Basilicata, Calabria, Campania, Molise, Puglia, Sardegna e Sicilia, a conferma dell'attenzione specifica riservata al riequilibrio territoriale anche su misure di carattere tecnologico e non solo infrastrutturale.",
      "Sul piano dei tempi, la precompilazione delle domande apre il 20 ottobre 2026, mentre lo sportello per l'invio effettivo parte dal 10 novembre 2026: un doppio passaggio che consente alle imprese di preparare con calma la pratica prima dell'apertura vera e propria dello sportello.",
      "Proprio perché le risorse si assegnano in ordine cronologico di presentazione, e non per graduatoria di merito, conviene iniziare a raccogliere la documentazione — preventivi dei fornitori abilitati, dati identificativi dell'impresa, requisiti dimensionali — con largo anticipo rispetto all'apertura dello sportello, per essere pronti a inviare la domanda nei primi minuti utili.",
      "Per un'impresa che non ha mai affrontato investimenti di questo tipo, un buon punto di partenza è una valutazione realistica del proprio livello di esposizione al rischio informatico e dello stato dell'infrastruttura dati esistente, in modo da individuare gli interventi davvero prioritari da finanziare con il voucher, invece di disperdere il contributo su interventi marginali.",
      "Lo Studio Mascia può affiancare l'impresa nella verifica dei requisiti di accesso, nella predisposizione della domanda e nel rispetto delle scadenze di precompilazione e invio, per non arrivare impreparati all'apertura dello sportello del 10 novembre.",
    ],
    source: { label: "MIMIT", url: "https://www.mimit.gov.it" },
  },
  {
    slug: "scoperta-imprenditoriale-II-sud",
    title: "Scoperta imprenditoriale II: 505 milioni per ricerca e sviluppo al Sud",
    date: "2026-08-06",
    excerpt:
      "Finanziamento agevolato e contributo a fondo perduto per progetti di ricerca industriale nelle regioni del Mezzogiorno: sportello dal 7 ottobre.",
    tags: ["Bandi e Finanziamenti PMI", "Startup e Innovazione"],
    body: [
      "Scoperta Imprenditoriale II si rivolge a un tipo di investimento più impegnativo e a più lungo termine rispetto ai voucher digitali: la ricerca industriale e lo sviluppo sperimentale, cioè quella fase in cui un'impresa prova a trasformare un'idea o una tecnologia in un prodotto o processo effettivamente utilizzabile sul mercato.",
      "La misura mette a disposizione oltre 505 milioni di euro, una dotazione tra le più consistenti dedicate alla ricerca applicata delle imprese del Mezzogiorno, per progetti coerenti con la Strategia Nazionale di Specializzazione Intelligente: in altre parole, non qualsiasi progetto di ricerca è ammissibile, ma solo quelli che si inseriscono nei settori e nelle tecnologie che la programmazione nazionale ha individuato come prioritari per lo sviluppo del territorio.",
      "Possono accedervi le imprese con sede o unità operativa in Basilicata, Calabria, Campania, Molise, Puglia, Sardegna e Sicilia: un requisito territoriale da verificare con attenzione, perché non è necessario avere la sede legale in una di queste regioni se si dispone di un'unità operativa idonea a ospitare il progetto di ricerca.",
      "Il sostegno economico combina due strumenti complementari: un finanziamento agevolato allo 0,80% di interesse, restituibile fino a 8 anni — un costo del denaro nettamente inferiore a quello di mercato — e un contributo a fondo perduto che arriva fino al 40% per le piccole imprese e al 35% per le medie. La differenziazione delle percentuali riflette la logica per cui le imprese di dimensioni minori, avendo minore capacità di autofinanziamento, ricevono una quota non rimborsabile più alta.",
      "Un progetto di ricerca industriale finanziato in questo modo richiede, più di un semplice acquisto di beni strumentali, una progettazione tecnica ed economica solida: occorre dimostrare la coerenza con la Strategia di Specializzazione Intelligente, la fattibilità tecnica del progetto e un piano economico-finanziario credibile per la restituzione della quota finanziata.",
      "Sul piano dei tempi, la precompilazione delle domande parte il 24 settembre 2026, con apertura dello sportello dalle ore 10:00 del 7 ottobre 2026: un intervallo di circa due settimane che consente di preparare con cura la documentazione tecnica, spesso più articolata di quella richiesta per i bandi di digitalizzazione.",
      "Per un'impresa che ha in cantiere un progetto di innovazione di prodotto o di processo, questa misura merita una valutazione attenta già nelle settimane precedenti l'apertura della precompilazione, perché i tempi di elaborazione di un piano di ricerca industriale credibile non sono brevi e vanno messi in conto con anticipo rispetto allo sportello.",
      "Lo Studio Mascia può supportare le imprese nella verifica preliminare dei requisiti di ammissibilità e nella predisposizione della parte economico-finanziaria del progetto, in coordinamento con i tecnici incaricati della parte scientifica e tecnologica.",
    ],
    source: { label: "MIMIT", url: "https://www.mimit.gov.it" },
  },
  {
    slug: "sviluppo-competenze-specialistiche-pmi",
    title: "Sviluppo competenze specialistiche delle PMI: seconda finestra dal 10 settembre",
    date: "2026-08-07",
    excerpt:
      "Contributo a fondo perduto per la formazione del personale su innovazione tecnologica e transizione verde e digitale nelle PMI del Mezzogiorno.",
    tags: ["Bandi e Finanziamenti PMI", "Lavoro e Assunzioni"],
    body: [
      "Molte PMI dispongono di macchinari e strumenti digitali avanzati, ma faticano a sfruttarne davvero il potenziale perché il personale non ha ricevuto una formazione specifica adeguata: la misura Sviluppo Competenze Specialistiche delle PMI nasce proprio per colmare questo divario, finanziando servizi di formazione del personale su innovazione tecnologica e transizione verde e digitale.",
      "Possono accedervi le micro, piccole e medie imprese con unità operativa in Basilicata, Calabria, Campania, Molise, Puglia, Sardegna e Sicilia: anche in questo caso il criterio è quello dell'unità operativa, non necessariamente della sede legale, un dettaglio che allarga la platea dei potenziali beneficiari alle imprese che hanno decentrato parte della propria attività in queste regioni.",
      "Una quota significativa delle risorse, pari al 40%, è riservata ai settori automotive, moda, tessile e mobile: comparti che il legislatore ha individuato come particolarmente esposti alla necessità di riqualificare rapidamente le competenze della forza lavoro, per effetto della transizione tecnologica e della concorrenza internazionale che li caratterizza.",
      "La misura è gestita da Invitalia per conto del MIMIT, nell'ambito del più ampio programma nazionale dedicato alla transizione verde e digitale: un dettaglio operativo utile, perché significa che la procedura di domanda segue gli standard e la piattaforma digitale con cui Invitalia gestisce anche altre misure, un elemento di familiarità per chi ha già avuto esperienza con altri bandi dell'ente.",
      "Investire in formazione specialistica, più che in beni strumentali, ha un ritorno meno immediato da misurare ma spesso più duraturo: un macchinario 4.0 o un software gestionale rendono davvero valore solo se il personale che li utilizza è in grado di sfruttarne appieno le funzionalità, e questo vale soprattutto per le trasformazioni legate a sostenibilità ambientale e digitalizzazione dei processi.",
      "La seconda finestra per la presentazione delle domande è aperta dalle ore 12:00 del 10 settembre alle ore 12:00 del 21 dicembre 2026: un arco temporale piuttosto ampio, che consente alle imprese di pianificare con calma il proprio piano formativo, individuando i fabbisogni reali del personale prima di presentare la domanda, invece di rincorrere una scadenza imminente.",
      "Per una PMI che sta valutando un investimento in tecnologia o in transizione ecologica, può avere senso programmare in parallelo anche un percorso di formazione del personale su questa misura, così da massimizzare l'efficacia dell'investimento tecnologico con competenze adeguate a gestirlo.",
      "Lo Studio Mascia può assistere l'impresa nella verifica dei requisiti di accesso e nell'individuazione del percorso formativo più coerente con il proprio settore, in particolare per le imprese operanti nei comparti automotive, moda, tessile e mobile a cui è riservata la quota maggiorata di risorse.",
    ],
    source: { label: "Invitalia", url: "https://www.invitalia.it" },
  },
  {
    slug: "investimenti-sostenibili-4-0-sud",
    title: "Investimenti Sostenibili 4.0 al Sud: contributi fino al 75%",
    date: "2026-08-08",
    excerpt:
      "447 milioni di euro per le PMI del Mezzogiorno che investono in progetti green e digitali: domande dal 6 ottobre 2026.",
    tags: ["Bandi e Finanziamenti PMI"],
    body: [
      "Tra le misure dedicate alle PMI del Mezzogiorno, Investimenti Sostenibili 4.0 si distingue per l'intensità di aiuto particolarmente elevata: una copertura complessiva fino al 75% della spesa ammissibile, un livello che difficilmente si trova in altri strumenti agevolativi nazionali.",
      "La misura si rivolge alle micro, piccole e medie imprese di Basilicata, Calabria, Campania, Molise, Puglia, Sardegna e Sicilia che investono in progetti a duplice natura, green e digitale: una combinazione che riflette la doppia transizione — ecologica e tecnologica — su cui è impostata gran parte della programmazione economica degli ultimi anni.",
      "La copertura del 75% è ripartita tra il 35% a fondo perduto e il 40% come finanziamento agevolato a tasso zero: una struttura mista che consente all'impresa di beneficiare di una quota non rimborsabile importante, pur mantenendo una componente di finanziamento che va comunque restituita, ma senza il peso degli interessi che normalmente gravano su un prestito bancario ordinario.",
      "La dotazione complessiva della misura è di circa 447,6 milioni di euro: una cifra rilevante, che tuttavia si scontra con una domanda altrettanto rilevante da parte delle imprese del territorio, come dimostra l'esperienza della precedente edizione.",
      "Nella precedente edizione, infatti, lo sportello si è esaurito in un solo giorno: un dato che dice molto sull'attrattività di questa misura e, soprattutto, sulla necessità di arrivare pronti al momento dell'apertura, perché non c'è margine per improvvisare la domanda dopo che lo sportello ha aperto.",
      "La precompilazione delle domande apre a settembre, con l'invio effettivo a partire dal 6 ottobre 2026: il periodo di precompilazione è il momento in cui l'impresa deve avere già pronta tutta la documentazione — piano di investimento, preventivi, requisiti dimensionali — perché una volta aperto lo sportello di invio, l'esperienza passata insegna che le risorse possono esaurirsi nel giro di poche ore.",
      "Per un'impresa interessata, il consiglio pratico più importante è quindi di natura organizzativa: definire il progetto di investimento, raccogliere preventivi e documentazione, e completare la precompilazione ben prima dell'apertura di ottobre, per non rischiare di restare esclusi da una misura così conveniente per un semplice ritardo procedurale.",
      "Lo Studio Mascia segue con attenzione i tempi di apertura di questa misura per i propri clienti del Mezzogiorno, per garantire che la documentazione sia pronta con il necessario anticipo rispetto allo sportello di ottobre.",
    ],
    source: { label: "MIMIT", url: "https://www.mimit.gov.it" },
  },
  {
    slug: "voucher-doppia-transizione-pmi",
    title: "Voucher Doppia Transizione: 150 milioni per digitale e sostenibilità",
    date: "2026-08-09",
    excerpt:
      "Contributo a fondo perduto fino al 70% per le PMI che investono in intelligenza artificiale, cloud, cybersicurezza e sostenibilità.",
    tags: ["Bandi e Finanziamenti PMI"],
    body: [
      "Il nome scelto per questa misura, Voucher Doppia Transizione, riassume bene il suo obiettivo: sostenere le PMI che devono affrontare contemporaneamente due grandi trasformazioni, quella digitale e quella della sostenibilità, spesso percepite come investimenti onerosi da rimandare.",
      "La misura mette a disposizione di micro, piccole e medie imprese iscritte al Registro Imprese ben 150 milioni di euro per investimenti in digitale — con particolare riferimento a intelligenza artificiale, cloud e cybersicurezza — e in sostenibilità, oltre a servizi di consulenza e formazione che accompagnano l'investimento tecnologico vero e proprio.",
      "L'inclusione di consulenza e formazione tra le voci finanziabili, e non solo l'acquisto di tecnologia, è un aspetto da non sottovalutare: molte PMI hanno difficoltà non tanto nel reperire gli strumenti digitali, quanto nel capire quali adottare e come integrarli nei propri processi, ed è proprio su questo affiancamento che il voucher consente di investire.",
      "Il contributo a fondo perduto arriva fino al 70% della spesa ammissibile: una percentuale elevata, che rende l'investimento particolarmente conveniente per le imprese che hanno rimandato l'aggiornamento tecnologico proprio per il timore dei costi da sostenere.",
      "Un elemento distintivo rispetto ad altre misure nazionali è il soggetto gestore: la misura è affidata alle Camere di Commercio territoriali, tramite la piattaforma ReStart di InfoCamere, e non a un ente centrale unico. Questa scelta organizzativa comporta una conseguenza pratica rilevante, che ogni impresa interessata deve tenere bene a mente.",
      "Sportelli, importi disponibili e scadenze variano infatti da Camera di Commercio a Camera di Commercio: due imprese in due province diverse possono trovarsi di fronte a regole, tempistiche e dotazioni finanziarie differenti, pur nell'ambito della stessa misura nazionale.",
      "La precompilazione delle domande è aperta dall'8 luglio 2026, ma proprio per la frammentazione territoriale della gestione, conviene verificare con attenzione le regole specifiche della propria Camera di Commercio di competenza prima di presentare la domanda, per evitare di basarsi su informazioni valide per un'altra provincia.",
      "Lo Studio Mascia può assistere le imprese nella verifica delle regole applicabili presso la propria Camera di Commercio territoriale e nella predisposizione della domanda, in particolare per gli investimenti in intelligenza artificiale, cloud e cybersicurezza a cui la misura dedica particolare attenzione.",
    ],
    source: { label: "pmi.it", url: "https://www.pmi.it" },
  },
  {
    slug: "credito-imposta-investimenti-agricoli",
    title: "Credito d'imposta al 40% per gli investimenti in agricoltura",
    date: "2026-08-10",
    excerpt:
      "Le imprese agricole, della pesca e dell'acquacoltura possono usare in compensazione un credito d'imposta sui beni strumentali 4.0.",
    tags: ["Bandi e Finanziamenti PMI"],
    body: [
      "Il settore primario è spesso percepito come lontano dalla digitalizzazione 4.0, ma la meccanizzazione avanzata, i sistemi di monitoraggio e i macchinari di precisione stanno diventando centrali anche in agricoltura, pesca e acquacoltura, ed è a questo tipo di investimento che si rivolge il credito d'imposta dedicato al settore.",
      "Le imprese agricole, della pesca e dell'acquacoltura che investono in nuovi beni strumentali 4.0, sia materiali che immateriali, possono beneficiare di un credito d'imposta pari al 40% del costo sostenuto, fino a un massimo di 1 milione di euro per impresa: un tetto che consente di finanziare anche investimenti di dimensioni significative, come l'acquisto di macchinari agricoli di ultima generazione o di software gestionali integrati.",
      "L'inclusione dei beni immateriali accanto a quelli materiali è un aspetto rilevante: non si tratta solo di trattori, impianti o attrezzature fisiche, ma anche di software, sistemi di gestione dei dati di produzione e strumenti digitali che permettono di ottimizzare i processi produttivi, un ambito spesso trascurato dalle imprese agricole più tradizionali.",
      "Sono agevolabili gli investimenti effettuati dal 1° gennaio 2026 al 28 settembre 2028, con la possibilità di una proroga al 30 giugno 2027 per chi, entro la fine del 2026, ha già un ordine accettato dal fornitore accompagnato da un acconto di almeno il 20% del costo: una condizione che premia le imprese che pianificano l'investimento con anticipo, anziché decidere all'ultimo momento.",
      "Un aspetto che rende questa misura particolarmente pratica rispetto a molti bandi è la sua natura automatica: non è necessario presentare una domanda a uno sportello, attendere una graduatoria o rispettare una dotazione limitata di fondi soggetta a esaurimento. Il credito si matura semplicemente rispettando i requisiti di legge sull'investimento effettuato.",
      "L'utilizzo avviene direttamente in compensazione tramite modello F24, il che significa che il beneficio si traduce in un risparmio immediato sui versamenti fiscali e contributivi correnti dell'impresa, senza dover attendere l'esito di un'istruttoria amministrativa.",
      "Per un'impresa agricola che sta pianificando un investimento in nuovi macchinari o in strumenti digitali di gestione della produzione, la raccomandazione pratica è verificare in anticipo, insieme al proprio commercialista, la corretta qualificazione del bene come 4.0 secondo i requisiti tecnici previsti, un passaggio da cui dipende la spettanza stessa del credito d'imposta.",
      "Lo Studio Mascia assiste le imprese del settore primario nella verifica dei requisiti tecnici dei beni acquistati, nel calcolo del credito maturato e nella sua corretta esposizione nel modello F24 e in dichiarazione dei redditi.",
    ],
    source: { label: "MIMIT", url: "https://www.mimit.gov.it" },
  },
  {
    slug: "maxi-deduzione-nuove-assunzioni",
    title: "Maxi-deduzione per le nuove assunzioni: come funziona fino al 2027",
    date: "2026-08-11",
    excerpt:
      "Chi assume a tempo indeterminato può dedurre il 20% in più del costo del personale, il 30% per le categorie protette.",
    tags: ["Lavoro e Assunzioni", "Scadenze Fiscali"],
    body: [
      "Assumere personale a tempo indeterminato comporta un costo che pesa sul conto economico dell'impresa per anni, non solo nel momento dell'assunzione: la maxi-deduzione nasce proprio per rendere questo costo fiscalmente più leggero, incentivando le imprese a stabilizzare la propria forza lavoro.",
      "Le imprese e i lavoratori autonomi che incrementano il numero di dipendenti a tempo indeterminato possono beneficiare di una maggiorazione deducibile del 20% del costo del nuovo personale assunto: significa che, oltre al costo del lavoro ordinariamente deducibile, l'impresa può dedurre un ulteriore 20% dello stesso costo, riducendo la base imponibile su cui si calcolano le imposte.",
      "La percentuale sale al 30% per le categorie protette, cioè per l'assunzione di lavoratori appartenenti alle categorie tutelate dalla normativa sul collocamento obbligatorio: una maggiorazione più significativa, pensata per incentivare in modo più marcato l'inclusione lavorativa di soggetti che incontrano maggiori difficoltà di inserimento nel mercato del lavoro.",
      "La misura si applica ai periodi d'imposta 2025, 2026 e 2027: un orizzonte temporale di tre anni che consente alle imprese di programmare le proprie politiche di assunzione con una prospettiva pluriennale, sapendo che il beneficio fiscale non è limitato a un solo esercizio.",
      "La condizione centrale per beneficiarne è che il numero di dipendenti a fine anno superi la media dell'anno precedente: non basta quindi una singola assunzione se, nello stesso periodo, si sono verificate altre cessazioni che riportano l'organico complessivo al livello di partenza o al di sotto. È l'incremento netto e strutturale dell'occupazione, non la singola assunzione isolata, a essere premiato.",
      "Un vantaggio pratico non trascurabile di questa misura è che non richiede alcuna domanda, alcuno sportello né alcuna dotazione di fondi soggetta a esaurimento: la maggiorazione si applica direttamente in sede di dichiarazione dei redditi, per tutte le imprese che, a consuntivo, rispettano i requisiti previsti.",
      "Questo però comporta anche una responsabilità in capo all'impresa e al proprio consulente: la verifica del requisito dell'incremento occupazionale va condotta con attenzione a fine esercizio, confrontando puntualmente la media dei dipendenti a tempo indeterminato dell'anno in corso con quella dell'anno precedente, per non applicare la maggiorazione senza averne davvero diritto, o al contrario per non perdere un beneficio spettante per un errore di calcolo.",
      "Lo Studio Mascia verifica per i propri clienti, in fase di predisposizione del bilancio e della dichiarazione dei redditi, la sussistenza dei requisiti per la maxi-deduzione e ne cura il corretto inserimento nella dichiarazione, valutando anche l'interazione con altre misure di sostegno alle assunzioni eventualmente fruite nello stesso periodo.",
    ],
  },
  {
    slug: "bonus-assunzioni-2026-giovani-donne-zes",
    title: "Bonus assunzioni 2026: esoneri contributivi per giovani, donne e ZES",
    date: "2026-08-12",
    excerpt:
      "Tre esoneri contributivi distinti per chi assume a tempo indeterminato entro il 31 dicembre 2026, fino al 100% dei contributi.",
    tags: ["Lavoro e Assunzioni", "Bandi e Finanziamenti PMI"],
    body: [
      "Per il 2026 il legislatore ha scelto di non concentrare gli incentivi all'occupazione in un'unica misura generalista, ma di declinarli in tre esoneri contributivi distinti, ciascuno rivolto a una platea specifica di lavoratori: una scelta che riflette obiettivi di politica del lavoro differenti, dall'occupazione giovanile alla parità di genere fino al riequilibrio territoriale.",
      "Tutti e tre gli esoneri condividono la stessa cornice temporale e lo stesso requisito di fondo: sono attivi per tutto il 2026, riguardano i datori di lavoro privati che assumono a tempo indeterminato, o trasformano un contratto a termine in indeterminato, entro il 31 dicembre 2026, e sono subordinati alla condizione di un incremento occupazionale, in coerenza con la logica già vista per la maxi-deduzione: il beneficio premia la crescita netta dell'organico, non la singola sostituzione.",
      "Il Bonus Giovani è dedicato ai lavoratori under 35 al momento dell'assunzione: una fascia d'età che continua a scontare tassi di disoccupazione superiori alla media, e per cui l'incentivo mira a rendere più conveniente, per il datore di lavoro, la scelta di un contratto stabile fin dal primo impiego.",
      "Il Bonus Donne è riservato alle donne classificate come svantaggiate o molto svantaggiate secondo i criteri normativi vigenti: una categoria che comprende, tra le altre, le donne prive di un impiego regolarmente retribuito da un certo periodo di tempo o residenti in aree con elevato tasso di disoccupazione femminile.",
      "Il Bonus ZES, infine, ha una platea più circoscritta sotto il profilo del datore di lavoro: si rivolge ai datori con un massimo di 10 dipendenti operanti nelle regioni della Zona Economica Speciale, che assumono lavoratori over 35 disoccupati da almeno 24 mesi. È un incentivo pensato per le realtà imprenditoriali di piccolissime dimensioni del Mezzogiorno, che spesso non hanno la forza economica per assumere lavoratori rimasti a lungo fuori dal mercato del lavoro.",
      "Sul piano economico, l'esonero arriva fino al 100% dei contributi previdenziali a carico del datore di lavoro, con l'esclusione dei premi INAIL che restano comunque dovuti per intero: un vantaggio che, per un'assunzione a tempo indeterminato, incide in modo significativo sul costo del lavoro nel medio periodo. Per il Bonus ZES è inoltre previsto un tetto di 650 € mensili per lavoratore, un limite da tenere presente nel calcolo di convenienza dell'assunzione.",
      "Per un'impresa che sta pianificando nuove assunzioni, conviene verificare in anticipo, caso per caso, quale dei tre bonus è applicabile al profilo del lavoratore che si intende assumere, perché i requisiti soggettivi sono diversi tra loro e, in alcune situazioni, possono anche sovrapporsi con altre misure di decontribuzione già in vigore, come la Decontribuzione Sud, rendendo necessaria una valutazione su quale combinazione di benefici sia effettivamente più conveniente e cumulabile.",
      "Lo Studio Mascia assiste le imprese nella verifica dei requisiti soggettivi del lavoratore e del datore di lavoro per l'accesso a ciascuno dei tre esoneri, e nella corretta gestione del flusso UniEmens necessario per beneficiarne.",
    ],
    source: { label: "INPS", url: "https://www.inps.it" },
  },
  {
    slug: "decontribuzione-sud-pmi-2026",
    title: "Decontribuzione Sud PMI: l'esonero contributivo nel 2026",
    date: "2026-08-13",
    excerpt:
      "Le imprese del Mezzogiorno con dipendenti a tempo indeterminato hanno diritto a uno sconto sui contributi previdenziali fino al 20%.",
    tags: ["Lavoro e Assunzioni", "Bandi e Finanziamenti PMI"],
    body: [
      "A differenza dei bonus assunzioni collegati a specifiche categorie di lavoratori, la Decontribuzione Sud è una misura strutturale e più ampia, pensata per abbassare stabilmente il costo del lavoro nelle regioni del Mezzogiorno, a beneficio di tutte le imprese private che vi occupano personale a tempo indeterminato, indipendentemente dal profilo del singolo dipendente.",
      "Possono beneficiarne le micro, piccole e medie imprese private con dipendenti a tempo indeterminato in Abruzzo, Basilicata, Calabria, Campania, Molise, Puglia, Sardegna e Sicilia, che hanno diritto a un esonero contributivo pari al 20% dei contributi previdenziali a carico del datore di lavoro, entro un tetto massimo di 125 € mensili per lavoratore.",
      "La percentuale del 20% rappresenta una riduzione rispetto al 25% applicato nel 2025: un dato che, letto isolatamente, potrebbe sembrare un ridimensionamento dell'agevolazione, ma va inquadrato nel contesto più ampio della sua evoluzione nel tempo.",
      "La misura, infatti, resta in vigore ed è stata prorogata fino al 2029, con percentuali progressivamente decrescenti negli anni: una modalità di uscita graduale pensata per evitare un brusco venir meno del sostegno e per dare alle imprese del Sud il tempo di adattare progressivamente la propria struttura dei costi, senza l'effetto shock di un'interruzione improvvisa.",
      "Per un'impresa meridionale, questo significa poter continuare a programmare la propria politica occupazionale sapendo che l'agevolazione, seppur in misura calante, accompagnerà ancora per diversi anni il costo del lavoro a tempo indeterminato, un orizzonte di pianificazione utile per chi valuta investimenti in organico di medio periodo.",
      "Sul piano operativo, la Decontribuzione Sud condivide con altre misure di questo tipo un vantaggio pratico rilevante: non serve presentare alcuna domanda né attendere l'esito di un'istruttoria. L'esonero si applica direttamente mese per mese in busta paga e nel flusso UniEmens, riducendo l'onere amministrativo per l'impresa rispetto a misure che richiedono invece una richiesta formale.",
      "Proprio perché l'esonero è automatico ma calcolato mese per mese, è importante che la gestione delle buste paga tenga costantemente aggiornata la percentuale applicabile e il tetto mensile per lavoratore, per evitare sia una sottostima del beneficio spettante sia, all'opposto, un'applicazione scorretta che potrebbe generare successivi recuperi contributivi da parte dell'INPS.",
      "Lo Studio Mascia segue l'evoluzione delle percentuali di decontribuzione applicabili anno per anno e verifica, per le imprese clienti con dipendenti nelle regioni del Mezzogiorno, la corretta applicazione dell'esonero nei flussi UniEmens e nella gestione del personale.",
    ],
    source: { label: "INPS", url: "https://www.inps.it" },
  },
  {
    slug: "smart-start-italia-startup-innovative",
    title: "Smart&Start Italia: il finanziamento a tasso zero per le startup innovative",
    date: "2026-08-14",
    excerpt:
      "Fino al 90% delle spese ammissibili a tasso zero, senza graduatorie né scadenze: la principale agevolazione nazionale per le startup.",
    tags: ["Startup e Innovazione", "Bandi e Finanziamenti PMI"],
    body: [
      "Chi avvia una startup innovativa si scontra spesso con lo stesso ostacolo: reperire capitale sufficiente per finanziare le prime fasi di sviluppo, quando il progetto non genera ancora ricavi stabili e le banche tradizionali sono restie a concedere credito. Smart&Start Italia è nata proprio per rispondere a questa esigenza, ed è oggi la principale misura nazionale dedicata a questo tipo di impresa.",
      "La misura è riservata alle startup innovative iscritte all'apposito registro speciale tenuto dalle Camere di Commercio, un requisito che presuppone il possesso dei parametri previsti dalla normativa sulle startup innovative in termini di oggetto sociale, spese in ricerca e sviluppo o titolarità di brevetti.",
      "Sono ammessi piani di impresa da 100.000 a 1,5 milioni di euro di spese ammissibili: un intervallo ampio, che consente alla misura di accompagnare sia progetti agli esordi sia startup già in una fase di crescita più consolidata, con piani di sviluppo più corposi.",
      "Il sostegno finanziario consiste in un finanziamento a tasso zero fino al 90% delle spese ammissibili: un livello di copertura molto elevato, che riduce in modo significativo il fabbisogno di capitale proprio o di terzi che i soci fondatori devono altrimenti reperire per avviare l'attività.",
      "Per le startup con sede nel Mezzogiorno è prevista una quota a fondo perduto del 30%, che si aggiunge al finanziamento a tasso zero: una componente non rimborsabile che rende la misura ancora più conveniente per chi sceglie di insediare la propria impresa innovativa nelle regioni del Sud, in linea con la logica di riequilibrio territoriale che caratterizza molte delle misure gestite da Invitalia.",
      "I tempi istruttori indicativi sono di 60 giorni: un orizzonte relativamente contenuto per una misura di finanziamento agevolato, importante da conoscere per chi deve pianificare la propria liquidità nelle fasi iniziali dell'attività, quando ogni mese di attesa può pesare sulla sostenibilità del progetto.",
      "L'aspetto forse più apprezzato da chi ha già presentato domanda su questa misura è la sua natura strutturale: è sempre aperta, le domande si valutano in ordine cronologico di arrivo, senza graduatorie comparative né scadenze da rispettare, tramite la piattaforma digitale di Invitalia. Questo significa che una startup può presentare domanda nel momento in cui il proprio progetto è davvero pronto, senza dover rincorrere una finestra temporale limitata.",
      "Per chi sta valutando di avviare una startup innovativa, un buon punto di partenza è verificare fin da subito, insieme al proprio consulente, il possesso dei requisiti per l'iscrizione al registro speciale, condizione indispensabile per accedere a Smart&Start e a molte altre agevolazioni dedicate a questo tipo di impresa. Lo Studio Mascia affianca gli aspiranti imprenditori innovativi in questa verifica preliminare e nella predisposizione del piano di impresa.",
    ],
    source: { label: "Invitalia", url: "https://www.invitalia.it" },
  },
  {
    slug: "voucher-3i-startup-microimprese",
    title: "Voucher 3I: fino a 4.000 € per brevettare la propria idea",
    date: "2026-08-15",
    excerpt:
      "Un contributo a fondo perduto per le spese di consulenza brevettuale rivolto a startup innovative e microimprese.",
    tags: ["Startup e Innovazione", "Bandi e Finanziamenti PMI"],
    body: [
      "Una delle spese più sottovalutate da chi sviluppa un'idea innovativa è la tutela della proprietà intellettuale: senza un brevetto correttamente depositato, un'invenzione può essere replicata da terzi senza conseguenze, vanificando anni di investimento in ricerca. Il Voucher 3I nasce per rendere accessibile anche alle realtà più piccole questo tipo di protezione, spesso percepita come costosa e riservata alle grandi imprese.",
      "La misura, gestita da Invitalia per conto del MIMIT, sostiene due categorie di beneficiari: le startup innovative iscritte al registro speciale, già incontrate a proposito di Smart&Start Italia, e le microimprese italiane in generale, nelle spese di consulenza necessarie per la tutela della proprietà intellettuale.",
      "Il contributo a fondo perduto copre due tipologie di attività distinte, ciascuna con un proprio tetto di spesa: le ricerche di anteriorità e il deposito della domanda di brevetto nazionale, fino a 3.000 € più IVA. Le ricerche di anteriorità sono un passaggio cruciale spesso trascurato: verificano che l'invenzione non sia già stata brevettata da altri, evitando di investire tempo e denaro in un deposito destinato a essere respinto o contestato.",
      "La seconda tipologia di spesa coperta è l'estensione internazionale del brevetto, fino a 4.000 € più IVA: un passaggio che diventa rilevante nel momento in cui l'impresa vuole proteggere la propria invenzione anche sui mercati esteri, non limitandosi alla sola tutela nazionale, tipicamente insufficiente per chi ha ambizioni di crescita oltre i confini italiani.",
      "Un elemento distintivo di questa misura, che la rende particolarmente accessibile, è l'assenza di una scadenza fissa: le domande si valutano a sportello, in base all'ordine di presentazione, fino a esaurimento della dotazione complessiva di 9 milioni di euro. Non ci sono quindi finestre temporali da rincorrere, ma resta comunque prudente non rimandare troppo la domanda, proprio per la logica di esaurimento delle risorse.",
      "Per una startup o una microimpresa che ha sviluppato un'invenzione o una soluzione tecnica originale, il voucher rappresenta un'occasione per affrontare con un costo contenuto un passaggio che, se rimandato, espone il progetto al rischio concreto di essere replicato da concorrenti più rapidi nel tutelarsi legalmente.",
      "Prima di avviare la procedura di deposito è comunque opportuno un confronto con un consulente in proprietà industriale, per valutare la reale brevettabilità dell'invenzione e la strategia di tutela più adatta al proprio settore e ai mercati di riferimento, un percorso che il voucher può contribuire a finanziare fin dalla fase preliminare della ricerca di anteriorità.",
      "Lo Studio Mascia può orientare le imprese clienti verso questa misura e verificarne i requisiti di accesso, coordinandosi con i consulenti in proprietà industriale per la parte tecnica del deposito brevettuale.",
    ],
    source: { label: "Invitalia", url: "https://www.invitalia.it" },
  },
  {
    slug: "fondo-garanzia-pmi-2026",
    title: "Fondo di Garanzia PMI: 140 miliardi per l'accesso al credito nel 2026",
    date: "2026-08-16",
    excerpt:
      "Coperture fino all'80% per chi investe, 50% per la liquidità: lo strumento che facilita l'accesso al credito bancario per le PMI.",
    tags: ["Bandi e Finanziamenti PMI", "Startup e Innovazione"],
    body: [
      "Molte PMI meritevoli non riescono a ottenere credito bancario non perché il progetto non sia valido, ma perché non dispongono di garanzie reali sufficienti da offrire alla banca. Il Fondo di Garanzia per le PMI nasce esattamente per colmare questo divario, intervenendo come garante pubblico al posto, o a fianco, delle garanzie che l'impresa non è in grado di offrire.",
      "Il meccanismo è semplice nella sua logica: il Fondo garantisce una quota del finanziamento richiesto dall'impresa, riducendo il rischio che la banca si assume nell'erogare il credito, e quindi aumentando la probabilità che il finanziamento venga concesso e, spesso, a condizioni migliori.",
      "Le percentuali di copertura variano in base alla finalità del finanziamento: fino all'80% per gli investimenti, una quota che sale proprio perché si tratta di operazioni di sviluppo dell'impresa considerate prioritarie; 50% per la liquidità, un supporto più contenuto ma comunque significativo per le esigenze di cassa correnti; fino all'80% per la Nuova Sabatini, il microcredito e le startup innovative, categorie a cui il legislatore riconosce un trattamento di favore analogo a quello degli investimenti.",
      "L'inclusione delle startup innovative tra le categorie con copertura all'80% è particolarmente rilevante: si tratta spesso di imprese giovani, senza uno storico creditizio consolidato né asset da offrire in garanzia, per le quali l'accesso al credito bancario ordinario sarebbe altrimenti quasi precluso.",
      "Il funzionamento del Fondo è stato prorogato per tutto il 2026, con un plafond di impegni fissato a 140 miliardi di euro dalla Legge di Bilancio: una cifra che dà la misura di quanto questo strumento sia centrale nel sistema di sostegno al credito delle imprese italiane, ben oltre la dimensione di un singolo bando a termine.",
      "A differenza delle misure che abbiamo visto finora, il Fondo di Garanzia non è uno strumento strutturale nel senso di essere sempre attivo e privo di scadenza, ma anche nel senso che la domanda non si presenta direttamente all'ente gestore: la richiesta di garanzia si inserisce all'interno della normale procedura di richiesta di finanziamento presso la banca o l'intermediario finanziario scelto, che è colui che poi attiva la garanzia del Fondo.",
      "Questo significa che, per un'impresa, il primo interlocutore resta sempre la propria banca di riferimento: è nel dialogo con l'istituto di credito che va segnalata la volontà di avvalersi della garanzia del Fondo, elemento che può incidere positivamente sulla valutazione della pratica di affidamento.",
      "Lo Studio Mascia supporta le imprese clienti nella predisposizione della documentazione economico-finanziaria da presentare in banca a supporto della richiesta di finanziamento assistito dalla garanzia del Fondo, un passaggio che spesso fa la differenza tra un'istruttoria rapida e una interlocuzione più lunga con l'istituto di credito.",
    ],
    source: { label: "Mediocredito Centrale", url: "https://www.fondidigaranzia.it" },
  },
  {
    slug: "nuova-sabatini-2026",
    title: "Nuova Sabatini: rifinanziata per il 2026 e il 2027",
    date: "2026-08-17",
    excerpt:
      "Contributo per l'acquisto di macchinari, impianti e beni strumentali: attiva a sportello, senza scadenza fissa.",
    tags: ["Bandi e Finanziamenti PMI"],
    body: [
      "Poche misure agevolative hanno accompagnato le PMI italiane con la continuità della Nuova Sabatini: nata più di un decennio fa, resta ancora oggi uno degli strumenti più utilizzati per finanziare l'acquisto di beni strumentali, segno che la sua impostazione ha retto bene al passare degli anni e delle diverse stagioni politiche.",
      "La misura sostiene le PMI che acquistano beni strumentali — macchinari, impianti, attrezzature — anche in chiave 4.0 e green, con un contributo che non copre direttamente il costo del bene, ma abbatte gli interessi sul finanziamento bancario o in leasing richiesto per acquistarlo.",
      "Questa impostazione, diversa da un contributo a fondo perduto diretto, ha un vantaggio pratico spesso sottovalutato: rende più semplice l'accesso al credito perché l'impresa presenta comunque una richiesta di finanziamento ordinaria alla banca, con il contributo statale che interviene ad abbattere il costo degli interessi, riducendo l'onere finanziario complessivo dell'operazione.",
      "L'estensione alla componente 4.0 e green consente inoltre di applicare la misura sia a investimenti tecnologicamente avanzati — macchinari interconnessi, sistemi di controllo digitale della produzione — sia a beni orientati alla sostenibilità ambientale, ampliando notevolmente la gamma di investimenti finanziabili rispetto a una misura pensata originariamente per i soli beni strumentali tradizionali.",
      "La misura è stata rifinanziata dalla Manovra 2026 con 200 milioni di euro per quest'anno e 450 milioni per il 2027: un rifinanziamento crescente nel tempo che conferma la centralità della Nuova Sabatini tra gli strumenti nazionali gestiti dal MIMIT, e che lascia presagire la sua stabilità anche negli anni a venire.",
      "È attiva a sportello, senza scadenza fissa: le domande restano aperte fino a esaurimento dei fondi stanziati, una modalità che consente all'impresa di programmare l'acquisto del bene strumentale in base alle proprie esigenze operative, senza dover attendere l'apertura di una finestra temporale limitata come accade per altre misure più competitive.",
      "Per una PMI che sta pianificando un rinnovo del parco macchine o l'acquisto di nuovi impianti produttivi, la Nuova Sabatini merita sempre una valutazione preliminare, proprio per la sua ampia platea di beni ammissibili e per la relativa semplicità della procedura, rispetto a misure più complesse dal punto di vista documentale.",
      "Lo Studio Mascia assiste le imprese nella verifica dei requisiti di ammissibilità del bene da acquistare e nella predisposizione della domanda, in coordinamento con l'istituto di credito o la società di leasing che eroga il finanziamento sottostante.",
    ],
    source: { label: "MIMIT", url: "https://www.mimit.gov.it" },
  },
  {
    slug: "modello-231-generico-controlli-antimafia",
    title: "Modello 231 \"generico\": non basta per superare i controlli antimafia",
    date: "2026-08-18",
    excerpt:
      "Una recente pronuncia della Cassazione chiarisce che un Modello 231 con solo principi generali non è sufficiente a dimostrare l'effettivo controllo dei rischi aziendali.",
    tags: ["Accertamenti e Controlli"],
    body: [
      "Molte imprese adottano un Modello 231 pensando che il solo fatto di possederne uno, magari acquistato come modello standard da adattare, sia sufficiente a mettersi al riparo da conseguenze in caso di controlli. Una recente pronuncia della Corte di Cassazione dimostra che non è affatto così.",
      "La Suprema Corte ha negato a un'impresa l'accesso al controllo giudiziario previsto dal Codice Antimafia — una misura che, in presenza di determinati indizi di infiltrazione criminale, consente all'impresa di continuare la propria attività sotto la vigilanza di un amministratore giudiziario, evitando conseguenze più drastiche come l'interdittiva antimafia — proprio perché il suo Modello 231, il modello organizzativo previsto dal D.Lgs. 231/2001, è stato ritenuto troppo generico.",
      "Il Modello 231 nasce per un motivo preciso: dimostrare che l'impresa si è dotata di un sistema di regole interne e controlli capace di prevenire la commissione di reati nell'interesse o a vantaggio della società, e che quindi, se un reato viene comunque commesso da un dipendente o da un amministratore, l'ente non ne risponde perché ha fatto tutto il possibile per prevenirlo.",
      "Nel caso esaminato, il modello riportava solo principi astratti e indicazioni generali sugli strumenti di controllo, senza scendere nel concreto delle procedure operative: mancavano protocolli specifici calibrati sui rischi effettivi dell'attività svolta da quella particolare azienda, mancavano criteri verificabili per la scelta e la verifica delle controparti commerciali, e soprattutto mancava la prova che l'organismo di vigilanza avesse davvero operato, e non fosse solo un organo previsto sulla carta.",
      "Questi tre elementi mancanti — protocolli su misura, criteri di selezione delle controparti, prova dell'attività dell'organismo di vigilanza — sono in realtà proprio quelli su cui si concentra normalmente la verifica, sia degli inquirenti sia dei giudici, quando devono valutare se un Modello 231 sia effettivamente idoneo o solo un documento formale privo di sostanza.",
      "Per le imprese, la lezione pratica è che un Modello 231 costruito su un template generico, magari riadattato da un altro settore senza un'analisi specifica dei rischi propri dell'attività, rischia di rivelarsi del tutto inutile proprio nel momento in cui servirebbe davvero, cioè in occasione di un controllo o di un procedimento giudiziario.",
      "Serve quindi non solo redigere il modello su misura per la propria attività, individuando i reati-presupposto realisticamente a rischio per quel tipo di impresa, ma anche far funzionare concretamente l'organismo di vigilanza, con riunioni periodiche, verbali che ne documentino l'attività e verifiche effettive sull'applicazione dei protocolli previsti, non solo sulla loro esistenza cartacea.",
      "Le imprese che hanno adottato un Modello 231 anni fa, senza più aggiornarlo, farebbero bene a verificarne l'attualità e la concretezza operativa prima che sia un controllo esterno a rivelarne le lacune, con conseguenze potenzialmente ben più gravi di un semplice aggiornamento documentale.",
    ],
  },
  {
    slug: "ricevute-pos-estratto-conto-sostituisce",
    title: "Ricevute POS: l'estratto conto bancario può sostituire l'archivio cartaceo",
    date: "2026-08-19",
    excerpt:
      "Una norma del 2026 riconosce piena validità alla documentazione bancaria in alternativa alle ricevute POS cartacee, se riporta il dettaglio delle operazioni.",
    tags: ["Accertamenti e Controlli"],
    body: [
      "Chiunque gestisca un'attività commerciale conosce il problema: scontrini e ricevute POS che si accumulano negli archivi, spesso su carta termica che sbiadisce nel tempo, rendendo difficile una loro consultazione a distanza di anni proprio nel momento in cui servirebbero, ad esempio in caso di verifica fiscale.",
      "L'art. 8 del Decreto-Legge 19/2026, convertito con modificazioni dalla Legge 50/2026, interviene proprio su questo aspetto, riconoscendo piena equivalenza tra la ricevuta POS cartacea e la documentazione bancaria: estratto conto, anche in formato digitale, o altra comunicazione rilasciata dall'istituto di credito.",
      "Si tratta di un cambiamento di prospettiva significativo: non è più necessario conservare fisicamente lo scontrino del terminale POS per ogni singola operazione, potendo fare affidamento sui dati che la banca già registra e conserva nei propri sistemi in modo affidabile e duraturo.",
      "La norma pone però una condizione precisa, che va rispettata perché l'equivalenza operi: il documento bancario deve riportare il dettaglio delle singole operazioni, con data, importo e beneficiario chiaramente identificabili, e deve essere conservato per almeno 10 anni, lo stesso termine previsto dal Codice civile per le scritture contabili in generale.",
      "Questo significa che non basta un estratto conto sommario o aggregato: per beneficiare della semplificazione occorre che la banca fornisca, o che l'impresa richieda, un documento sufficientemente analitico da ricostruire ogni singola transazione, con lo stesso livello di dettaglio che offrirebbe la ricevuta cartacea originale.",
      "Un altro aspetto rilevante è l'ambito di applicazione della norma: si applica a tutti i pagamenti tracciabili, e non solo a quelli effettuati verso la Pubblica Amministrazione, come talvolta accade per altre semplificazioni documentali di portata più limitata. È una semplificazione ad ampio raggio, pensata per l'uso quotidiano nei rapporti commerciali ordinari.",
      "Per un'impresa o un professionista che vuole ridurre l'archivio cartaceo aziendale, questa norma offre un'opportunità concreta di digitalizzazione, a condizione di organizzare per tempo un sistema di conservazione degli estratti conto bancari che sia effettivamente consultabile e completo per l'intero periodo decennale richiesto.",
      "Prima di eliminare del tutto gli archivi cartacei esistenti, è comunque prudente verificare con il proprio commercialista che la documentazione bancaria disponibile soddisfi realmente i requisiti di dettaglio richiesti dalla norma, per non trovarsi sprovvisti di prove adeguate in caso di un futuro controllo relativo a periodi già trascorsi.",
    ],
  },
  {
    slug: "partita-iva-unica-due-attivita-prova-contribuente",
    title: "Partita IVA unica per due attività: la prova spetta al contribuente",
    date: "2026-08-20",
    excerpt:
      "La Cassazione chiarisce chi deve dimostrare a quale attività appartiene un movimento bancario contestato dal Fisco.",
    tags: ["Accertamenti e Controlli", "IVA", "Giurisprudenza Fiscale"],
    body: [
      "Non è raro che un contribuente svolga più di un'attività economica sotto la stessa partita IVA: un professionista che affianca alla propria attività intellettuale anche una gestione agricola, o un artigiano che integra il proprio lavoro con un'attività commerciale connessa. Una recente ordinanza della Cassazione chiarisce chi deve dimostrare cosa quando il Fisco contesta i movimenti bancari di un soggetto in questa situazione.",
      "Con l'ordinanza n. 21095/2026, la Corte di Cassazione ha affrontato proprio il caso di un professionista che esercitava anche un'attività d'impresa agricola con un'unica partita IVA: una situazione che comporta, in caso di accertamento bancario, un problema pratico non banale, quello di attribuire ciascuna movimentazione all'una o all'altra attività.",
      "Quando l'Agenzia delle Entrate contesta movimenti bancari ritenuti non giustificati, la presunzione legale è tipicamente sfavorevole al contribuente: i versamenti non giustificati si considerano ricavi non dichiarati, salvo prova contraria. Il tema affrontato dalla Cassazione riguarda proprio come si articola questa prova contraria quando le attività economiche svolte dal contribuente sono due, con regole fiscali potenzialmente diverse.",
      "La Corte ha stabilito che, in questi casi, spetta al contribuente — e non all'Amministrazione finanziaria — indicare in modo analitico e dettagliato a quale delle due attività sia riconducibile ciascuna movimentazione bancaria contestata: non è sufficiente un'affermazione generica secondo cui il movimento riguarda l'una piuttosto che l'altra attività, ma serve una prova puntuale, operazione per operazione.",
      "Questo principio ribalta, di fatto, l'onere della chiarezza sul contribuente stesso: chi svolge due attività sotto la stessa partita IVA non può limitarsi a una gestione contabile indistinta e sperare, in caso di controllo, di poter ricostruire a posteriori a quale attività appartenga ciascun movimento. La ricostruzione deve poter avvenire con documenti alla mano, in modo puntuale.",
      "È un principio da tenere ben presente per chi gestisce più attività sotto la stessa partita IVA, situazione tutt'altro che infrequente tra i professionisti e i piccoli imprenditori italiani: la tenuta di una contabilità che distingua fin da subito, con chiarezza, le due gestioni economiche è la miglior difesa preventiva in caso di accertamento, molto più efficace di una ricostruzione fatta ex post con difficoltà quando l'atto di accertamento è già stato notificato.",
      "Nella pratica, questo significa organizzare conti correnti distinti per le due attività quando possibile, oppure, se il conto è unico, annotare sistematicamente la causale e la riconducibilità di ogni movimento rilevante, in modo da poter rispondere con puntualità a un'eventuale richiesta di chiarimenti dell'Agenzia delle Entrate.",
      "Lo Studio Mascia assiste i clienti che svolgono più attività sotto un'unica posizione fiscale nell'impostazione di una contabilità distinta e tracciabile, proprio per prevenire le difficoltà probatorie che questa pronuncia della Cassazione mette bene in luce.",
    ],
  },
  {
    slug: "contraddittorio-preventivo-schema-atto",
    title: "Contraddittorio preventivo: l'invito è valido anche senza lo \"schema di atto\"",
    date: "2026-08-21",
    excerpt:
      "La Corte di Giustizia Tributaria di Roma chiarisce che conta la sostanza dell'informazione fornita al contribuente, non l'etichetta formale del documento.",
    tags: ["Accertamenti e Controlli", "Giurisprudenza Fiscale", "Contenzioso Tributario"],
    body: [
      "Lo Statuto del contribuente ha rafforzato negli ultimi anni le garanzie procedurali a favore di chi è sottoposto a un controllo fiscale, tra cui l'obbligo per l'Agenzia delle Entrate di anticipare al contribuente, tramite uno \"schema di atto\", gli elementi su cui si fonda la contestazione, prima di emettere l'avviso di accertamento vero e proprio. Una recente sentenza chiarisce cosa succede quando questo passaggio non rispetta formalmente l'etichetta prevista dalla norma.",
      "Con la sentenza n. 8483/2026, la Corte di Giustizia Tributaria di Roma ha affrontato il caso di un contribuente che aveva ricevuto dall'Agenzia delle Entrate un invito al contraddittorio preventivo privo della dicitura formale \"schema di atto\", contestando quindi la validità della procedura seguita dall'ente impositore.",
      "I giudici romani hanno stabilito che l'invito al contraddittorio preventivo può assolvere la funzione dello \"schema di atto\" previsto dallo Statuto del contribuente anche senza recare formalmente questa dicitura: la denominazione del documento, da sola, non è decisiva ai fini della sua validità procedurale.",
      "Ciò che conta, secondo i giudici, è la sostanza dell'informazione: il documento deve consentire al contribuente di conoscere in modo sufficientemente chiaro e completo gli elementi della contestazione — i fatti, i rilievi, le norme applicate — e di esercitare compiutamente il diritto di difesa entro i 60 giorni previsti dalla legge per presentare osservazioni prima dell'emissione dell'atto definitivo.",
      "Questo approccio sostanzialistico, piuttosto che formalistico, riflette un principio più generale del diritto tributario: le garanzie procedurali servono a proteggere un interesse concreto del contribuente — poter conoscere e contestare le ragioni dell'accertamento — e non a imporre un vincolo puramente formale che, se disatteso solo nell'etichetta ma non nella sostanza, non pregiudica quell'interesse.",
      "Per chi riceve un invito dall'Agenzia delle Entrate, la precisazione è importante e va letta in due direzioni: da un lato, non ci si può illudere di contestare un atto solo perché privo della dicitura formale \"schema di atto\", se nella sostanza contiene tutti gli elementi necessari a comprendere la contestazione; dall'altro, un documento davvero carente nel contenuto informativo resta contestabile, indipendentemente da come viene denominato dall'ufficio.",
      "La conseguenza pratica per chi riceve un invito di questo tipo è quindi di concentrarsi, insieme al proprio consulente, sulla sostanza di quanto ricevuto — sono davvero indicati con chiarezza i rilievi e gli elementi a fondamento della contestazione? — piuttosto che cercare un vizio procedurale nell'etichetta del documento, una strategia difensiva che questa pronuncia rende più difficile da sostenere.",
      "Lo Studio Mascia assiste i propri clienti nella lettura e nella risposta agli inviti al contraddittorio preventivo ricevuti dall'Agenzia delle Entrate, valutando caso per caso se le osservazioni difensive più efficaci riguardino il merito della contestazione o, quando davvero fondati, i profili procedurali dell'atto ricevuto.",
    ],
  },
  {
    slug: "interpelli-agenzia-entrate-agosto-2026",
    title: "Ultimi interpelli dell'Agenzia delle Entrate: le risposte che possono interessarti",
    date: "2026-08-22",
    excerpt:
      "Quattro risposte recenti dell'Agenzia delle Entrate su temi che toccano da vicino imprese, professionisti e proprietari immobiliari.",
    tags: ["Accertamenti e Controlli", "IVA"],
    body: [
      "Gli interpelli dell'Agenzia delle Entrate sono uno strumento prezioso per orientarsi nella prassi fiscale: un contribuente pone un quesito su un caso concreto e l'Agenzia risponde con un'interpretazione ufficiale, che pur vincolando in via diretta solo il caso specifico, offre un orientamento utile a tutti coloro che si trovano in una situazione analoga. Ecco quattro risposte recenti che toccano da vicino situazioni comuni a imprese, professionisti e proprietari immobiliari.",
      "Superbonus e vendita di immobili in comproprietà (risposta n. 158/2026): quando un immobile è stato acquisito in parte per successione e in parte per acquisto, l'esclusione da plusvalenza in caso di vendita vale solo per la quota ereditata, non per l'intero immobile. Un secondo chiarimento riguarda le spese Superbonus: se sostenute da un solo comproprietario, non aumentano il costo fiscale riconosciuto in capo agli altri venditori che non le hanno sostenute personalmente. Per chi vende un immobile in comproprietà con una storia di acquisizione mista, questo significa calcolare la plusvalenza separatamente per ciascun comproprietario, tenendo conto di come e da chi sono state effettivamente sostenute le spese di ristrutturazione.",
      "Certificazione Unica e collaboratori forfettari (risposta n. 127/2026): l'esonero dalla Certificazione Unica per i compensi corrisposti a professionisti in regime forfettario vale solo se il compenso è documentato da fattura elettronica. Se invece il professionista beneficiario è esonerato dall'obbligo di fatturazione elettronica, la CU resta obbligatoria per il committente. È un chiarimento operativo importante per chi si occupa di adempimenti dei sostituti d'imposta, perché lega l'esonero da un adempimento a una condizione di fatto — l'effettiva emissione della fattura elettronica — che va sempre verificata caso per caso prima di considerare assolto l'obbligo di certificazione.",
      "IVA agevolata al 10% sulle ristrutturazioni (risposta n. 150/2026): l'aliquota ridotta non dipende da chi commissiona i lavori — proprietario, conduttore o altro soggetto avente titolo — ma dalla qualificazione urbanistica dell'intervento attribuita dal Comune. È quindi la natura oggettiva dell'intervento edilizio, così come qualificata nei titoli abilitativi comunali, a determinare l'aliquota applicabile, non le caratteristiche soggettive di chi paga la fattura: un aspetto da verificare sempre con il titolo edilizio alla mano prima di applicare l'aliquota ridotta in fattura.",
      "Risarcimenti per turni di lavoro non rispettati (risposta n. 156/2026): le somme risarcitorie corrisposte per pause non godute o buoni pasto non erogati hanno natura di risarcimento del danno subito dal lavoratore, non di sostitutivo di reddito da lavoro. Di conseguenza non sono tassabili. È una distinzione concettuale rilevante nel diritto tributario: solo le somme che sostituiscono un reddito che il lavoratore avrebbe altrimenti percepito sono tassate come tali, mentre un vero risarcimento del danno — per un pregiudizio subito, non per un mancato guadagno — resta fuori dal campo di applicazione dell'imposta sui redditi.",
      "Al di là del singolo caso, questi quattro interpelli condividono un filo conduttore utile da ricordare: l'Amministrazione finanziaria tende a guardare alla sostanza economica e fattuale delle situazioni — chi ha sostenuto una spesa, qual è la reale natura giuridica di una somma, come è qualificato un intervento — più che a criteri puramente formali o presuntivi. Conoscere questi orientamenti aiuta a impostare correttamente fin da subito la gestione fiscale di situazioni analoghe, evitando contestazioni successive.",
      "Lo Studio Mascia segue con continuità la prassi interpretativa dell'Agenzia delle Entrate e la mette a disposizione dei propri clienti per orientare correttamente operazioni immobiliari, rapporti di collaborazione, interventi edilizi agevolati e gestione del personale.",
    ],
    source: { label: "Agenzia delle Entrate", url: "https://www.agenziaentrate.gov.it" },
  },
  {
    slug: "fatturazione-elettronica-riforma-iva-vida",
    title: "Fatturazione elettronica e riforma IVA europea: cosa sta cambiando",
    date: "2026-08-23",
    excerpt:
      "L'Italia ha avviato il recepimento della riforma europea \"IVA nell'era digitale\" (ViDA): ecco la tempistica e cosa aspettarsi nei prossimi anni.",
    tags: ["IVA"],
    body: [
      "L'Italia è stata tra i primi paesi europei ad adottare la fatturazione elettronica obbligatoria su larga scala, con il Sistema di Interscambio (SDI) diventato ormai familiare a imprese e professionisti. Ora è l'Unione Europea a muoversi nella stessa direzione con la riforma ViDA, e l'Italia ha già avviato il percorso di adeguamento a questo nuovo quadro comune.",
      "Con la Legge 36/2026, pubblicata il 17 marzo scorso, l'Italia ha avviato il recepimento del pacchetto europeo ViDA (VAT in the Digital Age), l'iniziativa con cui la Commissione europea intende modernizzare il sistema IVA su scala continentale, puntando su digitalizzazione degli adempimenti e contrasto alla frode fiscale transfrontaliera.",
      "Per ora si tratta di una delega al Governo, cioè di un mandato del Parlamento a emanare i decreti attuativi entro binari e principi definiti dalla legge stessa: le misure attuative concrete sono attese dal 1° gennaio 2027, il che significa che, nell'immediato, non cambia nulla negli adempimenti quotidiani di imprese e professionisti.",
      "A livello europeo, la riforma prevede tappe scaglionate fino al 2030: dal 1° luglio di quell'anno, le fatture per operazioni intra-UE tra imprese (B2B) dovranno essere digitali e trasmesse entro 10 giorni dall'operazione, in sostituzione dell'attuale sistema di reverse charge basato su documentazione cartacea o comunque non standardizzata a livello comunitario.",
      "Questo cambiamento, quando entrerà pienamente a regime, uniformerà il modo in cui le imprese europee gestiscono le transazioni transfrontaliere, con l'obiettivo dichiarato di ridurre il cosiddetto \"VAT gap\", cioè il divario tra IVA teoricamente dovuta e IVA effettivamente riscossa dagli Stati membri, un fenomeno in cui le frodi legate alle operazioni intracomunitarie giocano un ruolo rilevante.",
      "Per le imprese italiane che già operano con l'estero, e in particolare per chi effettua abitualmente operazioni intra-UE, conviene iniziare a familiarizzare per tempo con la logica della riforma, anche se l'orizzonte attuativo pieno è ancora lontano: un cambiamento di questa portata richiede adeguamenti nei propri sistemi gestionali che è meglio pianificare con calma piuttosto che rincorrere all'ultimo momento.",
      "Nel frattempo, resta pienamente in vigore l'obbligo di fatturazione elettronica tramite SDI per tutti i titolari di partita IVA, incluso il regime forfettario dal 2024: un punto fermo su cui l'esperienza italiana già consolidata rappresenta, di fatto, un vantaggio competitivo per le imprese nostrane rispetto alla transizione che altri paesi europei dovranno affrontare da zero.",
      "Lo Studio Mascia seguirà l'evoluzione dei decreti attuativi della delega ViDA nei prossimi mesi, per informare tempestivamente i propri clienti, in particolare quelli con un volume significativo di operazioni intracomunitarie, sui nuovi adempimenti in arrivo dal 2027.",
    ],
    source: { label: "Gazzetta Ufficiale", url: "https://www.gazzettaufficiale.it" },
  },
  {
    slug: "testo-unico-adempimenti-accertamento-2027",
    title: "Testo Unico degli adempimenti e dell'accertamento: cosa cambia dal 2027",
    date: "2026-08-24",
    excerpt:
      "Un nuovo decreto codifica in un unico testo le regole su accertamento delle imposte sui redditi e anagrafe tributaria, dal 1° gennaio 2027.",
    tags: ["Accertamenti e Controlli"],
    body: [
      "Chiunque lavori quotidianamente con la normativa fiscale italiana conosce la sensazione di dover consultare fonti sparse su decreti risalenti a decenni diversi, ciascuno modificato e integrato più volte nel tempo. Il Testo Unico degli adempimenti e dell'accertamento nasce per porre rimedio a questa frammentazione, almeno per una delle aree più delicate del diritto tributario.",
      "Il D.Lgs. 5 agosto 2026, n. 141, in vigore dal 1° gennaio 2027, codifica in un unico Testo Unico — articolato in 368 articoli suddivisi in tre parti — le norme su adempimenti e accertamento, un'area del diritto tributario che tocca da vicino la vita quotidiana di ogni contribuente e professionista.",
      "Il provvedimento abroga gran parte di tre fonti normative storiche: il DPR 600/1973, che da oltre cinquant'anni disciplina l'accertamento delle imposte sui redditi; il DPR 605/1973, relativo all'anagrafe tributaria, cioè il sistema informativo su cui si basa gran parte dell'attività di controllo dell'Amministrazione finanziaria; e il D.Lgs. 218/1997, che regola l'accertamento con adesione, lo strumento con cui contribuente e ufficio possono definire in via concordata una controversia prima che sfoci in un contenzioso vero e proprio.",
      "È un provvedimento distinto dal Testo Unico IVA, di cui abbiamo parlato in un altro articolo, e ne rappresenta idealmente il completamento: insieme, i due testi unici costituiscono l'ultimo tassello del più ampio progetto di codificazione fiscale avviato con la riforma tributaria degli ultimi anni, un percorso che punta a rendere più organico e consultabile l'intero impianto normativo tributario italiano.",
      "Va detto con chiarezza cosa questo intervento non comporta: non si tratta di una riforma sostanziale delle regole sull'accertamento fiscale. Come per il Testo Unico IVA, l'operazione è principalmente di riordino e ricollocazione sistematica delle norme già esistenti, non di modifica dei loro contenuti sostanziali.",
      "Questo significa che i diritti e i doveri di contribuenti e professionisti nei confronti dell'Amministrazione finanziaria restano, nella sostanza, gli stessi già vigenti oggi. Cambia però la numerazione degli articoli: i riferimenti a cui per decenni ci si è abituati a fare riferimento — un certo articolo del DPR 600, un certo comma del DPR 605 — dovranno essere aggiornati con la nuova numerazione del Testo Unico.",
      "Per i professionisti, questo comporta un periodo di transizione in cui prestare particolare attenzione ai riferimenti normativi citati in atti, contratti, pareri e modulistica: un rimando all'articolo sbagliato, anche se sostanzialmente corretto nel contenuto, può generare confusione o contestazioni formali nella fase di passaggio tra vecchia e nuova numerazione.",
      "Lo Studio Mascia sta seguendo l'evoluzione di questo riordino normativo per aggiornare tempestivamente le proprie prassi interne e la modulistica utilizzata con i clienti, in modo da essere pienamente allineato alla nuova numerazione fin dalla sua entrata in vigore il 1° gennaio 2027.",
    ],
    source: { label: "Gazzetta Ufficiale", url: "https://www.gazzettaufficiale.it" },
  },
  {
    slug: "testo-unico-iva-2027",
    title: "Testo Unico IVA: la riforma in arrivo dal 2027",
    date: "2026-08-25",
    excerpt:
      "Dal 1° gennaio 2027 il DPR 633/1972 sarà sostituito da un nuovo Testo Unico IVA: cosa cambia (e cosa no) per imprese e professionisti.",
    tags: ["IVA"],
    body: [
      "Il DPR 633/1972 è, insieme al DPR 600/1973, uno dei pilastri storici del sistema tributario italiano: da oltre cinquant'anni disciplina l'imposta sul valore aggiunto, ed è stato modificato innumerevoli volte per adeguarsi all'evoluzione della normativa nazionale ed europea, fino a diventare un testo stratificato e non sempre agevole da consultare.",
      "Il D.Lgs. 19 gennaio 2026, n. 10 ha approvato il nuovo Testo Unico IVA, che dal 1° gennaio 2027 abrogherà e sostituirà integralmente lo storico DPR 633/1972: la fine di un'epoca sotto il profilo puramente formale del riferimento normativo, anche se — come vedremo — non sotto quello sostanziale.",
      "Si tratta infatti di un intervento compilativo: la finalità del legislatore non è quella di rivedere il funzionamento dell'IVA, ma di raccogliere in un testo organico e riordinato le tante disposizioni che, nel tempo, si erano sedimentate tra il DPR originario, decreti collegati e disposizioni sparse in altre fonti.",
      "Le regole sostanziali dell'IVA — esenzioni, aliquote, adempimenti dichiarativi e di fatturazione — restano quindi invariate: un contribuente che oggi applica correttamente l'aliquota ordinaria o un'esenzione specifica continuerà ad applicarla allo stesso modo dopo l'entrata in vigore del nuovo Testo Unico, senza dover rivedere le proprie prassi operative quotidiane.",
      "Ciò che cambia, e non è un dettaglio da poco per chi lavora quotidianamente con la materia, è la numerazione degli articoli: riferimenti normativi ormai diventati quasi automatici per commercialisti, avvocati tributaristi e funzionari dell'Agenzia delle Entrate — pensiamo a un articolo del DPR 633 citato ogni giorno in fatture, contratti o atti — dovranno essere riconvertiti nella nuova numerazione del Testo Unico.",
      "Questo passaggio di numerazione, per quanto solo formale, richiede un periodo di adattamento non banale: software gestionali, modulistica contrattuale, pareri professionali già predisposti e persino la prassi interpretativa consolidata dell'Agenzia delle Entrate faranno riferimento, negli anni a venire, sia alla vecchia sia alla nuova numerazione, con il rischio concreto di confusione durante la fase di transizione.",
      "Conviene quindi iniziare fin da ora a familiarizzare con il nuovo impianto del Testo Unico, magari partendo dalle disposizioni più utilizzate nella propria attività quotidiana, per non trovarsi impreparati quando, dal 1° gennaio 2027, il riferimento al DPR 633/1972 non sarà più valido.",
      "Nei prossimi mesi lo Studio Mascia seguirà con attenzione l'evoluzione della riforma e la relativa tabella di conversione tra vecchia e nuova numerazione, per aggiornare tempestivamente le pratiche e la documentazione dei propri clienti in vista dell'entrata in vigore del nuovo Testo Unico IVA.",
    ],
  },
  {
    slug: "scadenze-fiscali-fine-anno-2026",
    title: "Scadenze fiscali di fine anno: le date del 30 novembre e del 16 dicembre",
    date: "2026-08-26",
    excerpt:
      "Acconti d'imposta, IMU e liquidazioni IVA: il calendario delle scadenze principali tra novembre e dicembre 2026.",
    tags: ["Scadenze Fiscali", "IVA", "Sovraindebitamento e Cartelle"],
    body: [
      "Gli ultimi due mesi dell'anno sono, per contribuenti e imprese, tra i più densi di adempimenti fiscali: diverse scadenze convergono in un intervallo di poche settimane, ed è utile avere una mappa chiara di cosa scade e quando, per non arrivare impreparati.",
      "Il 30 novembre è la data chiave di questo periodo, perché concentra più adempimenti in un'unica scadenza: la seconda rata, o la rata unica, di acconto IRPEF, IRES e IRAP, un versamento che per molte imprese e professionisti rappresenta l'esborso più significativo dell'intero periodo di fine anno.",
      "Alla stessa data si aggiunge la liquidazione periodica IVA del terzo trimestre, obbligo che riguarda i soggetti che liquidano l'imposta con cadenza trimestrale, e l'imposta di bollo sulle fatture elettroniche relative allo stesso periodo: due adempimenti IVA che vanno gestiti in parallelo all'acconto delle imposte dirette, richiedendo un controllo puntuale della propria posizione contabile in quei giorni.",
      "Il 30 novembre è anche il termine per la terza rata della Rottamazione-quinquies, per chi ha aderito alla definizione agevolata e ha scelto il pagamento rateale: una scadenza che si somma alle altre già citate, e che per chi ha più posizioni debitorie aperte con il Fisco può rendere questa data particolarmente onerosa dal punto di vista della liquidità disponibile.",
      "Chiude l'anno fiscale il 16 dicembre, con tre ulteriori adempimenti da rispettare: il saldo IMU, cioè la seconda rata dell'imposta municipale, che comprende anche l'eventuale conguaglio dovuto in base alle aliquote definitivamente deliberate dai Comuni nel corso dell'anno; l'IVA mensile di novembre, per i soggetti in liquidazione mensile; e il versamento delle ritenute operate sui compensi corrisposti.",
      "Il conguaglio IMU sulle aliquote comunali merita un'attenzione particolare: poiché i Comuni possono deliberare le proprie aliquote anche successivamente al versamento dell'acconto di giugno, la seconda rata di dicembre è il momento in cui si regolarizza l'eventuale differenza, in più o in meno, rispetto a quanto versato in acconto sulla base delle aliquote dell'anno precedente.",
      "Con così tanti adempimenti concentrati in un arco temporale così ristretto, il rischio concreto per imprese e professionisti è quello di trovarsi, a ridosso delle scadenze, con un fabbisogno di liquidità superiore alle disponibilità immediate: una pianificazione finanziaria con un margine di anticipo, che tenga conto di tutte le scadenze in un'unica visione d'insieme, è la strategia più prudente per questo periodo dell'anno.",
      "Lo Studio Mascia predispone per i propri clienti un calendario fiscale personalizzato che raccoglie tutte le scadenze applicabili alla propria situazione, per consentire una pianificazione della liquidità coerente con gli impegni di fine anno, invece di subirli scadenza dopo scadenza.",
    ],
    source: { label: "Agenzia delle Entrate", url: "https://www.agenziaentrate.gov.it" },
  },
  {
    slug: "scadenze-fiscali-settembre-2026",
    title: "Scadenze fiscali di settembre 2026: dal 730 alla Rottamazione-quinquies",
    date: "2026-08-27",
    excerpt:
      "Il 30 settembre concentra diversi adempimenti importanti, mentre il Concordato Preventivo Biennale e il Modello Redditi slittano al 2 novembre.",
    tags: ["Scadenze Fiscali", "IVA", "Sovraindebitamento e Cartelle"],
    body: [
      "Dopo la pausa estiva, settembre segna il ritorno di una serie di adempimenti fiscali che meritano attenzione fin dai primi giorni del mese, per non arrivare impreparati alla scadenza principale di fine mese.",
      "Il 30 settembre 2026 è la data da segnare con più attenzione, perché concentra diversi obblighi tra loro molto diversi: scade il termine per l'invio telematico del Modello 730/2026, un adempimento che riguarda i lavoratori dipendenti e i pensionati che si avvalgono di questa modalità semplificata di dichiarazione dei redditi.",
      "Alla stessa data corrisponde la seconda rata della Rottamazione-quinquies per chi ha aderito alla definizione agevolata: un versamento che, per chi ha più rate in scadenza ravvicinata nel corso dell'anno, va inserito con attenzione nella propria pianificazione di liquidità di fine estate.",
      "Il 30 settembre è inoltre il termine per la liquidazione periodica IVA e per l'imposta di bollo sulle fatture elettroniche relative al trimestre, due adempimenti che riguardano in particolare i soggetti che liquidano l'IVA con cadenza trimestrale e che vanno gestiti in parallelo alla scadenza della rottamazione.",
      "Diverso il discorso per il Concordato Preventivo Biennale e per il Modello Redditi Persone Fisiche e Società di Persone, che slittano al 2 novembre 2026: uno slittamento che non dipende da una scelta discrezionale, ma dal semplice fatto che il termine ordinario del 31 ottobre cade di sabato, e la normativa fiscale prevede in questi casi il differimento al primo giorno feriale utile.",
      "Per chi ha aderito alla Rottamazione-quinquies, vale la pena avere sempre presente il calendario completo delle rate: la prima è scaduta il 31 luglio, la seconda cade il 30 settembre e la terza il 30 novembre 2026, con un interesse del 3% annuo che si applica su tutte le rate successive alla prima, un costo aggiuntivo da mettere in conto per chi ha scelto la rateazione anziché il pagamento in un'unica soluzione.",
      "Chi ha più rate di rottamazione in scadenza nell'arco dello stesso semestre, insieme agli altri adempimenti fiscali ordinari di fine anno, dovrebbe pianificare con particolare cura la propria liquidità, per evitare che la sovrapposizione di scadenze diverse — dichiarative, di liquidazione IVA e di definizione agevolata — generi tensioni di cassa evitabili con un minimo di programmazione anticipata.",
      "Lo Studio Mascia segue puntualmente il calendario fiscale dei propri clienti, incrociando le scadenze ordinarie con eventuali piani di rateazione in corso, in modo da offrire una visione unitaria degli impegni da onorare in ciascun periodo dell'anno.",
    ],
    source: { label: "Agenzia delle Entrate", url: "https://www.agenziaentrate.gov.it" },
  },
  {
    slug: "rottamazione-quinquies-scadenze-rate",
    title: "Rottamazione-quinquies: le rate e le scadenze da rispettare",
    date: "2026-08-28",
    excerpt:
      "Le domande si sono chiuse il 30 aprile 2026: ecco il calendario delle rate per chi ha aderito e le alternative per chi non l'ha fatto in tempo.",
    tags: ["Sovraindebitamento e Cartelle", "Scadenze Fiscali", "Contenzioso Tributario"],
    body: [
      "Le definizioni agevolate dei carichi fiscali, note al pubblico come \"rottamazioni\", si sono succedute negli anni con cadenza quasi periodica, e la Rottamazione-quinquies rappresenta l'ultima di questa serie di misure, introdotta dalla Legge di Bilancio 2026 con caratteristiche ormai familiari a chi ha seguito le edizioni precedenti.",
      "La misura riguarda la nuova definizione agevolata dei carichi affidati all'Agenzia delle Entrate-Riscossione tra il 2000 e il 2023: un arco temporale piuttosto ampio, che copre oltre vent'anni di ruoli, con azzeramento di sanzioni e interessi, il beneficio principale che rende queste misure sempre molto richieste da chi ha debiti fiscali arretrati.",
      "Le domande di adesione si sono chiuse il 30 aprile 2026: un termine ormai superato, che oggi rende attuale soprattutto la fase successiva della misura, cioè la corretta gestione del piano di pagamento da parte di chi ha aderito in tempo.",
      "Per chi ha aderito, il calendario delle rate prevede scadenze precise da rispettare con puntualità: la prima entro il 31 luglio, la seconda entro il 30 settembre e la terza entro il 30 novembre 2026, con un interesse del 3% annuo su tutte le rate successive alla prima, un costo aggiuntivo ma comunque contenuto rispetto ai vantaggi ottenuti in termini di sanzioni e interessi azzerati.",
      "È importante ricordare che, nelle rottamazioni, il mancato rispetto anche di una sola rata alla scadenza prevista comporta tipicamente la decadenza dal beneficio, con la conseguenza che l'intero debito residuo torna esigibile secondo le regole ordinarie, comprese le sanzioni e gli interessi originariamente azzerati: un rischio da tenere sempre bene in mente per chi ha aderito e sta gestendo il piano di rate.",
      "Per chi non ha aderito in tempo alla Rottamazione-quinquies, o per chi si trova con cartelle non incluse nel perimetro della definizione agevolata — magari perché relative a carichi affidati fuori dall'arco temporale 2000-2023 — restano comunque percorribili altre strade, distinte a seconda della natura del problema.",
      "Se il problema riguarda una cartella specifica, potenzialmente viziata, la strada è la verifica puntuale di eventuali vizi che ne rendono possibile l'annullamento — di notifica, di calcolo, di decadenza dei termini. Se invece il problema è l'insieme dei debiti accumulati, ormai insostenibile con le proprie risorse economiche, le procedure di sovraindebitamento previste dal Codice della Crisi d'Impresa e dell'Insolvenza restano lo strumento più adatto, con la possibilità di un piano di ristrutturazione calibrato sulla reale capacità di rimborso del debitore.",
      "Ne parliamo più diffusamente nella nostra pagina dedicata al Contenzioso Tributario, dove è possibile trovare una prima valutazione della propria situazione debitoria e individuare, con l'assistenza dello Studio Mascia, il percorso più adatto al caso specifico.",
    ],
    source: {
      label: "Agenzia delle Entrate-Riscossione",
      url: "https://www.agenziaentrateriscossione.gov.it",
    },
  },
  {
    slug: "cassazione-societa-comodo-rimborso-iva",
    title: "Società di comodo: la Cassazione apre al rimborso IVA",
    date: "2026-08-29",
    excerpt:
      "Con la sentenza n. 4151/2025 la Cassazione chiarisce che il mancato superamento del test di operatività non basta da solo a negare il rimborso IVA.",
    tags: ["Giurisprudenza Fiscale", "IVA", "Accertamenti e Controlli", "Contenzioso Tributario"],
    body: [
      "La disciplina delle società di comodo è da sempre uno dei terreni più delicati del rapporto tra Fisco e piccole imprese italiane: un meccanismo pensato per contrastare le società create solo per intestare beni senza svolgere una vera attività economica, che però rischia di colpire anche imprese reali attraversate da un periodo di difficoltà. Una recente sentenza della Cassazione interviene proprio su questo punto di frizione, con riferimento specifico all'IVA.",
      "La Corte di Cassazione, sezione tributaria, con la sentenza n. 4151 del 18 febbraio 2025, è tornata sul tema delle società di comodo, recependo espressamente i principi già affermati dalla Corte di Giustizia dell'Unione Europea nella causa C-341/22 (Feudi di San Gregorio, decisione del 7 marzo 2024): un dialogo tra giurisprudenza nazionale ed europea che rafforza, anziché indebolire, la portata del principio affermato.",
      "Il meccanismo interno della normativa sulle società di comodo, previsto dall'art. 30 della L. 724/1994, si basa su un test di operatività: se i ricavi effettivi dell'impresa non raggiungono una soglia calcolata applicando determinati coefficienti al valore degli asset patrimoniali, la società viene presunta \"non operativa\", con conseguenze fiscali penalizzanti, tra cui la possibile limitazione al rimborso o al riporto del credito IVA maturato.",
      "Il principio affermato dalla Cassazione è netto e va nella direzione di temperare l'automatismo di questo meccanismo: il diritto alla detrazione e al rimborso dell'IVA non può essere negato in modo automatico solo perché la società non supera il test di operatività. La presunzione di non operatività, pur ammessa dal diritto interno italiano, non può tradursi meccanicamente in una negazione dello status di soggetto passivo IVA basata su un mero criterio quantitativo di ricavi.",
      "La ragione di questo temperamento sta nella natura stessa dell'IVA, imposta armonizzata a livello europeo: il diritto alla detrazione è un principio cardine del sistema IVA comunitario, e una normativa nazionale non può comprimerlo sulla base di una presunzione automatica legata a un dato puramente quantitativo, senza lasciare al contribuente la possibilità concreta di dimostrare l'effettivo svolgimento di un'attività economica reale.",
      "Per le tante piccole imprese italiane classificate \"di comodo\" per ricavi sotto soglia — magari per un anno difficile sul piano commerciale, per investimenti in corso che non hanno ancora generato ricavi, o per cause di forza maggiore che hanno rallentato l'attività — questo orientamento rappresenta un argomento difensivo importante contro i dinieghi di rimborso o riporto del credito IVA motivati esclusivamente sul mancato superamento del test di operatività.",
      "Non significa che il test di operatività sia stato abolito, né che ogni società sotto soglia possa considerarsi automaticamente al riparo: significa che, in sede di contenzioso, la sola circostanza del mancato superamento del test non è più un argomento sufficiente, da solo, per negare il diritto al rimborso IVA, se l'impresa è in grado di dimostrare l'effettivo svolgimento di un'attività economica genuina.",
      "Chi ha ricevuto un diniego di rimborso o di riporto del credito IVA motivato solo sul mancato superamento del test di operatività può quindi valutare, con l'assistenza del proprio commercialista, se impugnare l'atto alla luce di questo orientamento, portando all'attenzione del giudice tributario elementi concreti che dimostrino la genuinità dell'attività svolta nonostante i ricavi sotto soglia.",
    ],
    source: { label: "Corte di Cassazione", url: "https://www.cortedicassazione.it" },
  },
  {
    slug: "cassazione-prescrizione-cartella-giudice-tributario",
    title: "Prescrizione dopo la cartella: decide il giudice tributario",
    date: "2026-08-29",
    excerpt:
      "Le Sezioni Unite chiariscono: se si eccepisce la prescrizione del debito tributario, anche dopo la cartella, competente è la Corte di Giustizia Tributaria.",
    tags: ["Giurisprudenza Fiscale", "Sovraindebitamento e Cartelle", "Contenzioso Tributario"],
    body: [
      "Una delle domande più frequenti, e insidiose, per chi si ritrova a dover contestare un debito tributario a distanza di anni dalla notifica della cartella originaria è a quale giudice rivolgersi: una scelta sbagliata può vanificare un'eccezione anche pienamente fondata nel merito. Le Sezioni Unite della Cassazione sono intervenute proprio per fare chiarezza su questo punto.",
      "Le Sezioni Unite civili della Cassazione, con l'ordinanza n. 2098 del gennaio 2025, hanno risolto un dubbio molto pratico e ricorrente nella prassi: quale giudice è competente quando il contribuente eccepisce che il credito tributario si è prescritto, o che la notifica della cartella è nulla, ma lo fa dopo che la cartella stessa è già stata notificata, magari in occasione di un successivo atto di riscossione, come un pignoramento o un'intimazione di pagamento?",
      "La risposta della Suprema Corte è netta: la competenza spetta alla Corte di Giustizia Tributaria, l'ex Commissione Tributaria, e non al giudice ordinario dell'esecuzione, che pure potrebbe a prima vista sembrare il foro naturale per contestare un atto esecutivo come un pignoramento.",
      "Il criterio guida individuato dalle Sezioni Unite è quello del \"petitum sostanziale\": ciò che conta, ai fini dell'individuazione del giudice competente, è la natura tributaria del credito contestato, non la fase processuale — di cognizione o di esecuzione — in cui l'eccezione di prescrizione o di nullità viene sollevata. Se il credito sottostante è di natura tributaria, resta tributaria la giurisdizione competente a deciderne la sorte, qualunque sia il momento in cui la contestazione viene sollevata.",
      "Questo principio ha una logica precisa: separare la natura sostanziale del rapporto giuridico controverso dalla veste puramente formale dell'atto con cui quella controversia si manifesta rischierebbe di creare una giurisdizione \"a macchia di leopardo\", diversa a seconda che il contribuente si difenda subito dopo la cartella o solo anni dopo, di fronte a un atto esecutivo successivo.",
      "È un punto decisivo, dalle conseguenze molto concrete, per chi riceve un pignoramento o un'intimazione di pagamento a distanza di anni da una cartella mai pagata, magari dimenticata o ritenuta ormai definita: rivolgersi al giudice sbagliato non è un errore recuperabile in corsa, ma porta all'inammissibilità del ricorso per errore di giurisdizione, con la perdita, nella sostanza, della possibilità di far valere l'eccezione nei termini.",
      "È un rischio concreto soprattutto per chi si difende da solo, magari basandosi su informazioni generiche trovate online, o con un'assistenza non specializzata nel contenzioso tributario: la materia della giurisdizione, apparentemente tecnica, può determinare l'esito dell'intera vicenda ancora prima che il giudice entri nel merito della prescrizione o della nullità eccepita.",
      "In questi casi conviene sempre farsi assistere da un professionista prima di presentare qualsiasi opposizione o ricorso, per individuare fin da subito la sede corretta ed evitare di far scadere i termini nel tentativo, poi rivelatosi inammissibile, di rivolgersi al giudice sbagliato. Lo Studio Mascia valuta, caso per caso, la corretta impostazione della difesa e il foro competente prima di avviare qualsiasi azione.",
    ],
    source: { label: "Corte di Cassazione", url: "https://www.cortedicassazione.it" },
  },
  {
    slug: "cassazione-prescrizione-sanzioni-interessi-cartella",
    title: "Cartelle: sanzioni e interessi si prescrivono in 5 anni",
    date: "2026-08-30",
    excerpt:
      "La Cassazione conferma: senza una sentenza definitiva alle spalle, sanzioni e interessi da cartella si prescrivono in 5 anni, non in 10.",
    tags: ["Giurisprudenza Fiscale", "Sovraindebitamento e Cartelle", "Contenzioso Tributario"],
    body: [
      "Un errore comune tra chi riceve una cartella esattoriale rimasta senza seguito per molti anni è pensare che, una volta divenuta definitiva per mancata impugnazione, il debito resti dovuto per intero e indefinitamente, salvo il termine ordinario di prescrizione di dieci anni valido per la generalità dei crediti. Un consolidato orientamento della Cassazione smentisce questa convinzione, almeno per la componente di sanzioni e interessi.",
      "Con l'ordinanza n. 7408 del 20 marzo 2025, la Cassazione ha ribadito un orientamento ormai consolidato, in linea con le precedenti ordinanze n. 2095/2023 e n. 24721/2024: quando una cartella esattoriale riguarda sanzioni e interessi, e non è fondata su una sentenza passata in giudicato, il termine di prescrizione applicabile è quinquennale — 5 anni — e non decennale.",
      "Il fondamento normativo di questa prescrizione breve è duplice: per le sanzioni si applica l'art. 20, comma 3 del D.Lgs. 472/1997, mentre per gli interessi trova applicazione l'art. 2948, n. 4 del Codice civile, che disciplina in generale la prescrizione quinquennale degli interessi. Sono quindi due norme distinte, ciascuna riferita alla propria componente del debito, a determinare il termine breve.",
      "Il punto forse più importante chiarito dalla Cassazione riguarda l'effetto della mancata impugnazione della cartella: il fatto che la cartella non sia stata contestata entro i 60 giorni previsti, e sia quindi divenuta definitiva, non trasforma automaticamente il termine di prescrizione breve in quello ordinario di 10 anni, come si potrebbe erroneamente pensare per analogia con altri ambiti del diritto civile.",
      "Questa conversione da prescrizione breve a prescrizione ordinaria, secondo la Cassazione, scatta solo in presenza di un titolo giudiziale definitivo, cioè una sentenza passata in giudicato che accerti il credito: la semplice definitività amministrativa di una cartella non impugnata non equivale, sotto questo profilo, a un accertamento giudiziale del debito.",
      "È una distinzione tecnica ma dalle conseguenze economiche molto concrete per chi ha vecchie cartelle mai impugnate, magari perché non vi erano vizi contestabili al momento della notifica, o semplicemente per disattenzione: anche se ormai definitive, la parte del debito relativa a sanzioni e interessi resta soggetta alla prescrizione breve di 5 anni, e se l'Agente della riscossione non ha compiuto, in quel periodo, validi atti interruttivi della prescrizione, quella componente del debito può essere eccepita come prescritta.",
      "Un atto interruttivo, per essere valido, deve essere stato notificato correttamente al debitore entro il termine quinquennale: la mera esistenza della cartella originaria, senza ulteriori atti successivi regolarmente notificati, non è sufficiente a mantenere in vita indefinitamente il diritto di riscuotere sanzioni e interessi.",
      "Per chi si trova a dover fronteggiare una vecchia cartella, magari riemersa a distanza di anni con un pignoramento o un'intimazione di pagamento, verificare con attenzione la data di notifica originaria e l'eventuale esistenza di validi atti interruttivi intervenuti nel tempo può fare una differenza concreta e significativa sull'importo effettivamente ancora dovuto, distinguendo la quota capitale — soggetta a regole proprie — dalla quota di sanzioni e interessi, spesso prescrivibile separatamente. Lo Studio Mascia effettua questo tipo di verifica per i propri clienti prima di procedere a qualsiasi pagamento o opposizione.",
    ],
    source: { label: "Corte di Cassazione", url: "https://www.cortedicassazione.it" },
  },
  {
    slug: "bilanci-2023-approvazione-entro-29-aprile",
    title: "Bilanci 2023: approvazione entro il 29 aprile",
    date: "2024-03-11",
    excerpt:
      "Il Codice civile prevede termini precisi per l'approvazione e il deposito del bilancio d'esercizio: ecco le scadenze e l'iter da rispettare.",
    tags: ["Bilanci", "Scadenze Fiscali"],
    body: [
      "L'approvazione del bilancio d'esercizio non è un semplice adempimento contabile, ma un vero e proprio procedimento scandito da termini precisi previsti dal Codice civile, il cui mancato rispetto può avere conseguenze rilevanti per amministratori e soci: conoscere questo iter con anticipo aiuta a evitare di ridursi all'ultimo momento utile.",
      "Il Codice civile, all'art. 2364, comma 2, prevede che le società di capitali debbano procedere con l'approvazione del bilancio entro 120 giorni dalla chiusura dell'esercizio, un termine ordinario pensato per lasciare all'organo amministrativo il tempo necessario a chiudere le scritture contabili e predisporre correttamente la documentazione di bilancio.",
      "La stessa norma prevede anche un termine più lungo, di 180 giorni, utilizzabile in presenza di particolari esigenze legate alla struttura e all'oggetto della società — ad esempio l'obbligo di redigere il bilancio consolidato, o particolari situazioni che richiedono un'istruttoria più approfondita — a condizione che tali esigenze siano espressamente indicate dagli amministratori nella relazione sulla gestione, o nella relazione allegata al bilancio nei casi in cui la relazione sulla gestione non sia richiesta.",
      "Applicando questa regola all'esercizio chiuso al 31 dicembre 2023, il bilancio andava approvato entro l'ordinario termine del 29 aprile, anziché il 30 aprile solitamente associato ai 120 giorni, proprio perché il 2024 è un anno bisestile e il calcolo dei giorni ne risente.",
      "Prima di arrivare all'assemblea che approva il bilancio, il documento percorre un iter obbligatorio articolato in più fasi: la redazione del progetto di bilancio e della relativa Relazione sulla gestione da parte dell'organo amministrativo; la trasmissione di questi documenti all'organo di controllo, quando presente, per la sua relazione di competenza; e infine il deposito del progetto di bilancio presso la sede sociale, per consentire ai soci di prenderne visione prima dell'assemblea.",
      "Questo passaggio attraverso l'organo di controllo e la sede sociale non è una formalità priva di conseguenze: è il momento in cui soci e, se presente, organo di controllo possono effettivamente esaminare i dati di bilancio prima di essere chiamati ad approvarlo, ed è quindi un presidio di trasparenza e di corretta informazione societaria.",
      "Solo dopo aver completato questi passaggi il bilancio viene sottoposto all'assemblea dei soci per l'approvazione, con modalità di convocazione che variano a seconda del tipo di società — diverse per una Spa rispetto a una Srl — ma che condividono comunque l'obiettivo di garantire ai soci un'adeguata informazione preventiva sull'ordine del giorno e sui documenti da esaminare.",
      "Una volta approvato, il bilancio deve essere depositato entro 30 giorni presso il Registro delle Imprese della sede legale della società, corredato dei documenti allegati e del verbale di approvazione: un adempimento che rende pubblico il bilancio e lo rende consultabile da terzi, un aspetto rilevante per la trasparenza verso banche, fornitori e altri soggetti interessati alla solidità economica dell'impresa.",
      "Rispettare puntualmente tutte queste scadenze — approvazione entro 120 o 180 giorni, deposito entro i successivi 30 — non è solo un obbligo formale: un bilancio approvato e depositato in ritardo può generare difficoltà nei rapporti con banche e fornitori, che spesso consultano proprio la tempestività dei depositi come indicatore della regolarità gestionale dell'impresa. Lo Studio Mascia segue l'intero iter di formazione del bilancio dei propri clienti, dalla predisposizione del progetto fino al deposito presso il Registro delle Imprese, per garantire il rispetto puntuale di tutte le scadenze previste dal Codice civile.",
    ],
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return NEWS.find((n) => n.slug === slug);
}

export function getSortedNews(): NewsItem[] {
  return [...NEWS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getNewsByTag(tag: string): NewsItem[] {
  return getSortedNews().filter((n) => n.tags.includes(tag));
}
