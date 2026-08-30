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
    slug: "riordino-incentivi-imprese-2026",
    title: "Il riordino degli incentivi alle imprese in vigore dal 18 agosto",
    date: "2026-08-02",
    excerpt:
      "Il D.Lgs. 138/2026 riorganizza gli strumenti agevolativi gestiti dal MIMIT: non nuovi bonus, ma un riordino per ridurre sovrapposizioni.",
    body: [
      "Il D.Lgs. 138/2026, pubblicato in Gazzetta Ufficiale il 3 agosto 2026 ed entrato in vigore il 18 agosto, riorganizza gli strumenti agevolativi nazionali gestiti dal Ministero delle Imprese e del Made in Italy.",
      "Non introduce nuovi incentivi, ma concentra le misure esistenti attorno al Fondo per la Crescita Sostenibile, articolato su quattro direttrici: ricerca, sviluppo e innovazione; nascita e crescita di nuove imprese; investimenti produttivi per la transizione verde e digitale; accesso al credito e ai mercati dei capitali.",
      "Per imprese e professionisti il punto pratico è che i bandi già attivi restano validi secondo le loro regole specifiche, ma nei prossimi mesi è probabile un progressivo accorpamento delle misure minori: vale la pena monitorare gli aggiornamenti prima di pianificare un investimento su strumenti di nicchia.",
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
    body: [
      "Prima di pagare una cartella esattoriale conviene verificarla: vizi di notifica, la mancata indicazione del responsabile del procedimento, errori di calcolo o termini di decadenza scaduti sono tra i motivi più comuni che ne permettono l'annullamento, totale o parziale.",
      "Il ricorso va presentato entro 60 giorni dalla notifica, davanti alla Corte di Giustizia Tributaria di primo grado competente.",
      "Se invece il problema non è la singola cartella ma l'insieme dei debiti accumulati, il Codice della Crisi mette a disposizione le procedure di sovraindebitamento, che possono arrivare a ristrutturare o, in alcuni casi, azzerare il debito, sotto la protezione del tribunale.",
      "Nella nostra pagina dedicata al Contenzioso Tributario trovi la sintesi completa dei tre percorsi possibili e un modulo per inviarci i documenti per una prima valutazione gratuita.",
    ],
  },
  {
    slug: "resto-al-sud-2-0-a-chi-si-rivolge",
    title: "Resto al Sud 2.0: a chi si rivolge e come funziona",
    date: "2026-08-04",
    excerpt:
      "Il bando per chi vuole avviare un'attività nel Mezzogiorno tra i 18 e i 35 anni: voucher, contributo a fondo perduto e come richiederlo.",
    body: [
      "Resto al Sud 2.0 sostiene chi ha tra i 18 e i 35 anni (non ancora compiuti), in condizione di inattività, inoccupazione o disoccupazione, e vuole avviare un'attività in una delle regioni ammesse: Abruzzo, Basilicata, Calabria, Campania, Molise, Puglia, Sardegna e Sicilia.",
      "Il sostegno può arrivare fino a 50.000 € come voucher (100% a fondo perduto) o fino a 200.000 € come contributo investimento, in parte a fondo perduto e in parte tramite finanziamento bancario agevolato.",
      "La domanda si presenta con procedura a sportello, senza graduatoria, fino a esaurimento della dotazione stanziata. Assistiamo i nostri clienti dalla verifica dei requisiti fino alla rendicontazione finale: trovi tutti i dettagli nella nostra pagina dedicata a Resto al Sud.",
    ],
  },
  {
    slug: "voucher-cloud-cybersecurity-pmi",
    title: "Voucher Cloud e Cybersecurity: 150 milioni per digitalizzare le PMI",
    date: "2026-08-05",
    excerpt:
      "Contributo a fondo perduto fino a 20.000 € per l'acquisto di servizi cloud e cybersicurezza: domande dal 10 novembre 2026.",
    body: [
      "Il Voucher Cloud e Cybersecurity mette a disposizione di PMI e lavoratori autonomi un contributo a fondo perduto pari al 50% della spesa, tra un minimo di 4.000 € e un massimo di 20.000 € per impresa, per l'acquisto di servizi cloud e cybersicurezza presso fornitori abilitati con decreto.",
      "La dotazione complessiva è di 150 milioni di euro, di cui 71 milioni riservati alle imprese di Abruzzo, Basilicata, Calabria, Campania, Molise, Puglia, Sardegna e Sicilia.",
      "La precompilazione delle domande apre il 20 ottobre 2026, con sportello per l'invio dal 10 novembre 2026. Conviene iniziare a raccogliere la documentazione con anticipo, perché le risorse si assegnano in ordine cronologico.",
    ],
    source: { label: "MIMIT", url: "https://www.mimit.gov.it" },
  },
  {
    slug: "scoperta-imprenditoriale-II-sud",
    title: "Scoperta imprenditoriale II: 505 milioni per ricerca e sviluppo al Sud",
    date: "2026-08-06",
    excerpt:
      "Finanziamento agevolato e contributo a fondo perduto per progetti di ricerca industriale nelle regioni del Mezzogiorno: sportello dal 7 ottobre.",
    body: [
      "Scoperta Imprenditoriale II mette a disposizione oltre 505 milioni di euro per progetti di ricerca industriale e sviluppo sperimentale coerenti con la Strategia Nazionale di Specializzazione Intelligente, promossi da imprese con sede o unità operativa in Basilicata, Calabria, Campania, Molise, Puglia, Sardegna e Sicilia.",
      "Il sostegno combina un finanziamento agevolato allo 0,80% (fino a 8 anni) con un contributo a fondo perduto che arriva fino al 40% per le piccole imprese e al 35% per le medie.",
      "La precompilazione delle domande parte il 24 settembre 2026, con apertura dello sportello dalle ore 10:00 del 7 ottobre 2026.",
    ],
    source: { label: "MIMIT", url: "https://www.mimit.gov.it" },
  },
  {
    slug: "sviluppo-competenze-specialistiche-pmi",
    title: "Sviluppo competenze specialistiche delle PMI: seconda finestra dal 10 settembre",
    date: "2026-08-07",
    excerpt:
      "Contributo a fondo perduto per la formazione del personale su innovazione tecnologica e transizione verde e digitale nelle PMI del Mezzogiorno.",
    body: [
      "La misura Sviluppo Competenze Specialistiche delle PMI finanzia servizi di formazione del personale su innovazione tecnologica e transizione verde e digitale, per micro, piccole e medie imprese con unità operativa in Basilicata, Calabria, Campania, Molise, Puglia, Sardegna e Sicilia.",
      "Il 40% delle risorse è riservato ai settori automotive, moda, tessile e mobile. La misura è gestita da Invitalia per conto del MIMIT nell'ambito del programma nazionale dedicato alla transizione verde e digitale.",
      "La seconda finestra per la presentazione delle domande è aperta dalle ore 12:00 del 10 settembre alle ore 12:00 del 21 dicembre 2026.",
    ],
    source: { label: "Invitalia", url: "https://www.invitalia.it" },
  },
  {
    slug: "investimenti-sostenibili-4-0-sud",
    title: "Investimenti Sostenibili 4.0 al Sud: contributi fino al 75%",
    date: "2026-08-08",
    excerpt:
      "447 milioni di euro per le PMI del Mezzogiorno che investono in progetti green e digitali: domande dal 6 ottobre 2026.",
    body: [
      "Investimenti Sostenibili 4.0 mette a disposizione delle micro, piccole e medie imprese di Basilicata, Calabria, Campania, Molise, Puglia, Sardegna e Sicilia una copertura fino al 75% della spesa ammissibile per progetti di investimento green e digitale, ripartita tra il 35% a fondo perduto e il 40% come finanziamento agevolato a tasso zero.",
      "La dotazione complessiva è di circa 447,6 milioni di euro. Nella precedente edizione lo sportello si è esaurito in un solo giorno: conviene quindi preparare la documentazione con largo anticipo.",
      "La precompilazione delle domande apre a settembre, con invio a partire dal 6 ottobre 2026.",
    ],
    source: { label: "MIMIT", url: "https://www.mimit.gov.it" },
  },
  {
    slug: "voucher-doppia-transizione-pmi",
    title: "Voucher Doppia Transizione: 150 milioni per digitale e sostenibilità",
    date: "2026-08-09",
    excerpt:
      "Contributo a fondo perduto fino al 70% per le PMI che investono in intelligenza artificiale, cloud, cybersicurezza e sostenibilità.",
    body: [
      "Il Voucher Doppia Transizione mette a disposizione di micro, piccole e medie imprese iscritte al Registro Imprese 150 milioni di euro per investimenti in digitale — intelligenza artificiale, cloud, cybersicurezza — e sostenibilità, oltre a servizi di consulenza e formazione.",
      "Il contributo a fondo perduto arriva fino al 70% della spesa. La gestione è affidata alle Camere di Commercio territoriali tramite la piattaforma ReStart di InfoCamere.",
      "La precompilazione delle domande è aperta dall'8 luglio 2026, ma sportelli, importi e scadenze variano da Camera di Commercio a Camera di Commercio: conviene verificare le regole della propria provincia prima di presentare domanda.",
    ],
    source: { label: "pmi.it", url: "https://www.pmi.it" },
  },
  {
    slug: "credito-imposta-investimenti-agricoli",
    title: "Credito d'imposta al 40% per gli investimenti in agricoltura",
    date: "2026-08-10",
    excerpt:
      "Le imprese agricole, della pesca e dell'acquacoltura possono usare in compensazione un credito d'imposta sui beni strumentali 4.0.",
    body: [
      "Le imprese agricole, della pesca e dell'acquacoltura che investono in nuovi beni strumentali 4.0, materiali e immateriali, possono beneficiare di un credito d'imposta pari al 40% del costo, fino a un massimo di 1 milione di euro per impresa.",
      "Sono agevolabili gli investimenti effettuati dal 1° gennaio 2026 al 28 settembre 2028, con possibile proroga al 30 giugno 2027 per chi entro fine 2026 ha un ordine accettato dal fornitore con acconto di almeno il 20%.",
      "È una misura automatica: non serve presentare domanda a un bando, il credito si utilizza direttamente in compensazione tramite modello F24.",
    ],
    source: { label: "MIMIT", url: "https://www.mimit.gov.it" },
  },
  {
    slug: "maxi-deduzione-nuove-assunzioni",
    title: "Maxi-deduzione per le nuove assunzioni: come funziona fino al 2027",
    date: "2026-08-11",
    excerpt:
      "Chi assume a tempo indeterminato può dedurre il 20% in più del costo del personale, il 30% per le categorie protette.",
    body: [
      "Le imprese e i lavoratori autonomi che incrementano il numero di dipendenti a tempo indeterminato possono beneficiare di una maggiorazione deducibile del 20% del costo del nuovo personale assunto, che sale al 30% per le categorie protette.",
      "La misura si applica ai periodi d'imposta 2025, 2026 e 2027, a condizione che il numero di dipendenti a fine anno superi la media dell'anno precedente.",
      "Non richiede alcuna domanda: la maggiorazione si applica direttamente in dichiarazione dei redditi, per chi rispetta i requisiti.",
    ],
  },
  {
    slug: "bonus-assunzioni-2026-giovani-donne-zes",
    title: "Bonus assunzioni 2026: esoneri contributivi per giovani, donne e ZES",
    date: "2026-08-12",
    excerpt:
      "Tre esoneri contributivi distinti per chi assume a tempo indeterminato entro il 31 dicembre 2026, fino al 100% dei contributi.",
    body: [
      "Sono attivi per tutto il 2026 tre esoneri contributivi per i datori di lavoro privati che assumono a tempo indeterminato, o trasformano un contratto a termine, entro il 31 dicembre 2026, a condizione di un incremento occupazionale.",
      "Il Bonus Giovani riguarda i lavoratori under 35; il Bonus Donne le donne svantaggiate o molto svantaggiate; il Bonus ZES i datori con massimo 10 dipendenti nelle regioni della Zona Economica Speciale che assumono over 35 disoccupati da almeno 24 mesi.",
      "L'esonero arriva fino al 100% dei contributi previdenziali a carico del datore (esclusi i premi INAIL), con un tetto di 650 € mensili per il Bonus ZES.",
    ],
    source: { label: "INPS", url: "https://www.inps.it" },
  },
  {
    slug: "decontribuzione-sud-pmi-2026",
    title: "Decontribuzione Sud PMI: l'esonero contributivo nel 2026",
    date: "2026-08-13",
    excerpt:
      "Le imprese del Mezzogiorno con dipendenti a tempo indeterminato hanno diritto a uno sconto sui contributi previdenziali fino al 20%.",
    body: [
      "Le micro, piccole e medie imprese private con dipendenti a tempo indeterminato in Abruzzo, Basilicata, Calabria, Campania, Molise, Puglia, Sardegna e Sicilia possono beneficiare di un esonero contributivo pari al 20% dei contributi previdenziali a carico del datore, con un tetto massimo di 125 € mensili per lavoratore.",
      "La percentuale è stata ridotta rispetto al 25% del 2025, ma la misura resta in vigore, prorogata fino al 2029 con percentuali progressivamente decrescenti.",
      "Non serve presentare domanda: l'esonero si applica direttamente mese per mese in busta paga e nel flusso UniEmens.",
    ],
    source: { label: "INPS", url: "https://www.inps.it" },
  },
  {
    slug: "smart-start-italia-startup-innovative",
    title: "Smart&Start Italia: il finanziamento a tasso zero per le startup innovative",
    date: "2026-08-14",
    excerpt:
      "Fino al 90% delle spese ammissibili a tasso zero, senza graduatorie né scadenze: la principale agevolazione nazionale per le startup.",
    body: [
      "Smart&Start Italia è la principale misura nazionale per le startup innovative iscritte al registro speciale, con piani di impresa da 100.000 a 1,5 milioni di euro di spese ammissibili.",
      "Offre un finanziamento a tasso zero fino al 90% delle spese ammissibili, con una quota a fondo perduto del 30% per le startup con sede nel Mezzogiorno. I tempi istruttori indicativi sono di 60 giorni.",
      "È una misura strutturale, sempre aperta: le domande si valutano in ordine cronologico, senza graduatorie né scadenze, tramite la piattaforma digitale di Invitalia.",
    ],
    source: { label: "Invitalia", url: "https://www.invitalia.it" },
  },
  {
    slug: "voucher-3i-startup-microimprese",
    title: "Voucher 3I: fino a 4.000 € per brevettare la propria idea",
    date: "2026-08-15",
    excerpt:
      "Un contributo a fondo perduto per le spese di consulenza brevettuale rivolto a startup innovative e microimprese.",
    body: [
      "Il Voucher 3I, gestito da Invitalia per conto del MIMIT, sostiene startup innovative iscritte al registro speciale e microimprese italiane nelle spese di consulenza per la tutela della proprietà intellettuale.",
      "Il contributo a fondo perduto copre le ricerche di anteriorità e il deposito della domanda di brevetto nazionale, fino a 3.000 € più IVA, e l'estensione internazionale del brevetto, fino a 4.000 € più IVA.",
      "La misura è attiva senza scadenza fissa: le domande si valutano a sportello, fino a esaurimento della dotazione di 9 milioni di euro.",
    ],
    source: { label: "Invitalia", url: "https://www.invitalia.it" },
  },
  {
    slug: "fondo-garanzia-pmi-2026",
    title: "Fondo di Garanzia PMI: 140 miliardi per l'accesso al credito nel 2026",
    date: "2026-08-16",
    excerpt:
      "Coperture fino all'80% per chi investe, 50% per la liquidità: lo strumento che facilita l'accesso al credito bancario per le PMI.",
    body: [
      "Il Fondo di Garanzia per le PMI facilita l'accesso al credito bancario garantendo una quota del finanziamento richiesto: fino all'80% per gli investimenti, 50% per la liquidità, e fino all'80% per la Nuova Sabatini, il microcredito e le startup innovative.",
      "Il funzionamento è stato prorogato per tutto il 2026, con un plafond di impegni fissato a 140 miliardi di euro dalla Legge di Bilancio.",
      "È uno strumento strutturale, sempre attivo: la domanda si presenta tramite la banca o l'intermediario finanziario che eroga il credito, non direttamente all'ente gestore.",
    ],
    source: { label: "Mediocredito Centrale", url: "https://www.fondidigaranzia.it" },
  },
  {
    slug: "nuova-sabatini-2026",
    title: "Nuova Sabatini: rifinanziata per il 2026 e il 2027",
    date: "2026-08-17",
    excerpt:
      "Contributo per l'acquisto di macchinari, impianti e beni strumentali: attiva a sportello, senza scadenza fissa.",
    body: [
      "La Nuova Sabatini sostiene le PMI che acquistano beni strumentali — macchinari, impianti, attrezzature, anche in chiave 4.0 e green — con un contributo che abbatte gli interessi sul finanziamento richiesto.",
      "La misura è stata rifinanziata dalla Manovra 2026 con 200 milioni di euro per quest'anno e 450 milioni per il 2027, a conferma della sua centralità tra gli strumenti nazionali gestiti dal MIMIT.",
      "È attiva a sportello, senza scadenza fissa: le domande restano aperte fino a esaurimento dei fondi stanziati.",
    ],
    source: { label: "MIMIT", url: "https://www.mimit.gov.it" },
  },
  {
    slug: "modello-231-generico-controlli-antimafia",
    title: "Modello 231 \"generico\": non basta per superare i controlli antimafia",
    date: "2026-08-18",
    excerpt:
      "Una recente pronuncia della Cassazione chiarisce che un Modello 231 con solo principi generali non è sufficiente a dimostrare l'effettivo controllo dei rischi aziendali.",
    body: [
      "Una recente pronuncia della Corte di Cassazione ha negato a un'impresa l'accesso al controllo giudiziario previsto dal Codice Antimafia, ritenendo il suo Modello 231 (il modello organizzativo previsto dal D.Lgs. 231/2001) troppo generico.",
      "Il modello riportava solo principi astratti e indicazioni generali degli strumenti di controllo, senza protocolli concreti calibrati sui rischi specifici dell'azienda, senza criteri verificabili per la scelta delle controparti commerciali e senza prova dell'effettiva operatività dell'organismo di vigilanza.",
      "Per le imprese è un promemoria pratico: avere un Modello 231 non basta, serve che sia costruito su misura e che l'organismo di vigilanza lavori davvero, con verbali e attività documentate.",
    ],
  },
  {
    slug: "ricevute-pos-estratto-conto-sostituisce",
    title: "Ricevute POS: l'estratto conto bancario può sostituire l'archivio cartaceo",
    date: "2026-08-19",
    excerpt:
      "Una norma del 2026 riconosce piena validità alla documentazione bancaria in alternativa alle ricevute POS cartacee, se riporta il dettaglio delle operazioni.",
    body: [
      "L'art. 8 del Decreto-Legge 19/2026, convertito con modificazioni dalla Legge 50/2026, riconosce piena equivalenza tra la ricevuta POS cartacea e la documentazione bancaria — estratto conto, anche digitale, o altra comunicazione dell'istituto di credito.",
      "La condizione è che il documento riporti il dettaglio delle singole operazioni (data, importo, beneficiario) e venga conservato per almeno 10 anni, come previsto per le scritture contabili dal Codice civile.",
      "La norma si applica a tutti i pagamenti tracciabili, non solo verso la Pubblica Amministrazione, ed è una semplificazione utile per chi vuole ridurre l'archivio cartaceo in azienda.",
    ],
  },
  {
    slug: "partita-iva-unica-due-attivita-prova-contribuente",
    title: "Partita IVA unica per due attività: la prova spetta al contribuente",
    date: "2026-08-20",
    excerpt:
      "La Cassazione chiarisce chi deve dimostrare a quale attività appartiene un movimento bancario contestato dal Fisco.",
    body: [
      "Con l'ordinanza n. 21095/2026, la Corte di Cassazione ha affrontato il caso di un professionista che esercitava anche un'attività d'impresa agricola con un'unica partita IVA.",
      "La Corte ha stabilito che, in questi casi, spetta al contribuente indicare in modo analitico e dettagliato a quale delle due attività sia riconducibile ciascuna movimentazione bancaria contestata, fornendo una prova puntuale e non generica.",
      "È un principio da tenere presente per chi gestisce più attività sotto la stessa partita IVA: una contabilità che distingua chiaramente le due gestioni è la miglior difesa in caso di accertamento.",
    ],
  },
  {
    slug: "contraddittorio-preventivo-schema-atto",
    title: "Contraddittorio preventivo: l'invito è valido anche senza lo \"schema di atto\"",
    date: "2026-08-21",
    excerpt:
      "La Corte di Giustizia Tributaria di Roma chiarisce che conta la sostanza dell'informazione fornita al contribuente, non l'etichetta formale del documento.",
    body: [
      "Con la sentenza n. 8483/2026, la Corte di Giustizia Tributaria di Roma ha stabilito che l'invito al contraddittorio preventivo può assolvere la funzione dello \"schema di atto\" previsto dallo Statuto del contribuente anche senza recare formalmente questa dicitura.",
      "Ciò che conta, secondo i giudici, è che il documento consenta al contribuente di conoscere gli elementi della contestazione e di esercitare compiutamente il diritto di difesa entro i 60 giorni previsti.",
      "Una precisazione importante per chi riceve un invito dall'Agenzia delle Entrate: la sostanza dell'informazione ricevuta conta più dell'etichetta formale del documento.",
    ],
  },
  {
    slug: "interpelli-agenzia-entrate-agosto-2026",
    title: "Ultimi interpelli dell'Agenzia delle Entrate: le risposte che possono interessarti",
    date: "2026-08-22",
    excerpt:
      "Quattro risposte recenti dell'Agenzia delle Entrate su temi che toccano da vicino imprese, professionisti e proprietari immobiliari.",
    body: [
      "Superbonus e vendita di immobili in comproprietà (risposta n. 158/2026): se un immobile è stato acquisito in parte per successione e in parte per acquisto, l'esclusione da plusvalenza vale solo per la quota ereditata. Le spese Superbonus sostenute da un solo comproprietario non aumentano il costo fiscale degli altri venditori che non le hanno sostenute.",
      "Certificazione Unica e collaboratori forfettari (risposta n. 127/2026): l'esonero dalla CU per i compensi a professionisti in regime forfettario vale solo se il compenso è documentato da fattura elettronica. Se il professionista è esonerato dall'e-fattura, la CU resta obbligatoria.",
      "IVA agevolata al 10% sulle ristrutturazioni (risposta n. 150/2026): l'aliquota ridotta non dipende da chi commissiona i lavori, ma dalla qualificazione urbanistica dell'intervento attribuita dal Comune.",
      "Risarcimenti per turni di lavoro non rispettati (risposta n. 156/2026): le somme risarcitorie per pause non godute o buoni pasto non erogati sono un risarcimento del danno subito, non un sostitutivo di reddito: non sono quindi tassabili.",
    ],
    source: { label: "Agenzia delle Entrate", url: "https://www.agenziaentrate.gov.it" },
  },
  {
    slug: "fatturazione-elettronica-riforma-iva-vida",
    title: "Fatturazione elettronica e riforma IVA europea: cosa sta cambiando",
    date: "2026-08-23",
    excerpt:
      "L'Italia ha avviato il recepimento della riforma europea \"IVA nell'era digitale\" (ViDA): ecco la tempistica e cosa aspettarsi nei prossimi anni.",
    body: [
      "Con la Legge 36/2026, pubblicata il 17 marzo scorso, l'Italia ha avviato il recepimento del pacchetto europeo ViDA (VAT in the Digital Age). Per ora si tratta di una delega al Governo: le misure attuative sono attese dal 1° gennaio 2027.",
      "A livello europeo, la riforma prevede tappe fino al 2030: dal 1° luglio di quell'anno, le fatture per operazioni intra-UE tra imprese (B2B) dovranno essere digitali e trasmesse entro 10 giorni dall'operazione, in sostituzione dell'attuale reverse charge cartaceo.",
      "Nel frattempo, resta pienamente in vigore l'obbligo di fatturazione elettronica tramite SDI per tutti i titolari di partita IVA, incluso il regime forfettario dal 2024.",
    ],
    source: { label: "Gazzetta Ufficiale", url: "https://www.gazzettaufficiale.it" },
  },
  {
    slug: "testo-unico-adempimenti-accertamento-2027",
    title: "Testo Unico degli adempimenti e dell'accertamento: cosa cambia dal 2027",
    date: "2026-08-24",
    excerpt:
      "Un nuovo decreto codifica in un unico testo le regole su accertamento delle imposte sui redditi e anagrafe tributaria, dal 1° gennaio 2027.",
    body: [
      "Il D.Lgs. 5 agosto 2026, n. 141, in vigore dal 1° gennaio 2027, codifica in un unico Testo Unico — 368 articoli in tre parti — le norme su adempimenti e accertamento, abrogando gran parte del DPR 600/1973 (accertamento delle imposte sui redditi), del DPR 605/1973 (anagrafe tributaria) e del D.Lgs. 218/1997 (accertamento con adesione).",
      "È un provvedimento distinto dal Testo Unico IVA, e rappresenta l'ultimo tassello del progetto di codificazione fiscale avviato con la riforma tributaria degli ultimi anni.",
      "Come per il Testo Unico IVA, si tratta principalmente di un riordino: le regole sostanziali restano nella sostanza le stesse, ma cambia la numerazione degli articoli a cui fare riferimento.",
    ],
    source: { label: "Gazzetta Ufficiale", url: "https://www.gazzettaufficiale.it" },
  },
  {
    slug: "testo-unico-iva-2027",
    title: "Testo Unico IVA: la riforma in arrivo dal 2027",
    date: "2026-08-25",
    excerpt:
      "Dal 1° gennaio 2027 il DPR 633/1972 sarà sostituito da un nuovo Testo Unico IVA: cosa cambia (e cosa no) per imprese e professionisti.",
    body: [
      "Il D.Lgs. 19 gennaio 2026, n. 10 ha approvato il nuovo Testo Unico IVA, che dal 1° gennaio 2027 abrogherà e sostituirà lo storico DPR 633/1972.",
      "Si tratta di un intervento compilativo: le regole sostanziali dell'IVA — esenzioni, aliquote, adempimenti — restano invariate. Cambia però la numerazione degli articoli, con cui converrà familiarizzare per non confondersi nei riferimenti normativi.",
      "Nei prossimi mesi seguiremo l'evoluzione della riforma per aggiornare tempestivamente le pratiche dei nostri clienti con la nuova numerazione.",
    ],
  },
  {
    slug: "scadenze-fiscali-fine-anno-2026",
    title: "Scadenze fiscali di fine anno: le date del 30 novembre e del 16 dicembre",
    date: "2026-08-26",
    excerpt:
      "Acconti d'imposta, IMU e liquidazioni IVA: il calendario delle scadenze principali tra novembre e dicembre 2026.",
    body: [
      "Il 30 novembre è una data chiave di fine anno: seconda rata, o rata unica, di acconto IRPEF, IRES e IRAP, oltre alla liquidazione periodica IVA del terzo trimestre e all'imposta di bollo sulle fatture elettroniche dello stesso periodo. La stessa data è anche il termine per la terza rata della Rottamazione-quinquies, per chi ha aderito e opta per il pagamento rateale.",
      "Chiude l'anno il 16 dicembre, con il saldo IMU (seconda rata, comprensivo di eventuale conguaglio sulle aliquote comunali), l'IVA mensile di novembre e il versamento delle ritenute.",
      "Come sempre in questo periodo conviene pianificare la liquidità con un margine di anticipo, per evitare di trovarsi a ridosso delle scadenze con più adempimenti concentrati nello stesso giorno.",
    ],
    source: { label: "Agenzia delle Entrate", url: "https://www.agenziaentrate.gov.it" },
  },
  {
    slug: "scadenze-fiscali-settembre-2026",
    title: "Scadenze fiscali di settembre 2026: dal 730 alla Rottamazione-quinquies",
    date: "2026-08-27",
    excerpt:
      "Il 30 settembre concentra diversi adempimenti importanti, mentre il Concordato Preventivo Biennale e il Modello Redditi slittano al 2 novembre.",
    body: [
      "Il 30 settembre 2026 è una data da segnare: scade il termine per l'invio telematico del Modello 730/2026, la seconda rata della Rottamazione-quinquies per chi ha aderito, oltre alla liquidazione periodica IVA e all'imposta di bollo sulle fatture elettroniche del trimestre.",
      "Il Concordato Preventivo Biennale e il Modello Redditi Persone Fisiche e Società di Persone slittano invece al 2 novembre 2026, poiché il termine ordinario del 31 ottobre cade di sabato.",
      "Per chi ha aderito alla Rottamazione-quinquies vale la pena ricordare il calendario delle rate: la prima è scaduta il 31 luglio, la seconda cade il 30 settembre e la terza il 30 novembre 2026, con un interesse del 3% annuo su tutte le rate successive alla prima.",
    ],
    source: { label: "Agenzia delle Entrate", url: "https://www.agenziaentrate.gov.it" },
  },
  {
    slug: "rottamazione-quinquies-scadenze-rate",
    title: "Rottamazione-quinquies: le rate e le scadenze da rispettare",
    date: "2026-08-28",
    excerpt:
      "Le domande si sono chiuse il 30 aprile 2026: ecco il calendario delle rate per chi ha aderito e le alternative per chi non l'ha fatto in tempo.",
    body: [
      "La Legge di Bilancio 2026 ha introdotto la Rottamazione-quinquies, la nuova definizione agevolata dei carichi affidati all'Agenzia delle Entrate-Riscossione tra il 2000 e il 2023, con azzeramento di sanzioni e interessi.",
      "Le domande di adesione si sono chiuse il 30 aprile 2026. Per chi ha aderito, il calendario delle rate prevede la prima entro il 31 luglio, la seconda entro il 30 settembre e la terza entro il 30 novembre 2026, con un interesse del 3% annuo su tutte le rate successive alla prima.",
      "Per chi non ha aderito in tempo, o ha cartelle non incluse nella rottamazione, restano percorribili altre strade: la verifica di eventuali vizi che rendono la cartella annullabile, oppure — per chi non riesce più a sostenere il debito complessivo — le procedure di sovraindebitamento previste dal Codice della Crisi. Ne parliamo nella nostra pagina dedicata al Contenzioso Tributario.",
    ],
    source: {
      label: "Agenzia delle Entrate-Riscossione",
      url: "https://www.agenziaentrateriscossione.gov.it",
    },
  },
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
