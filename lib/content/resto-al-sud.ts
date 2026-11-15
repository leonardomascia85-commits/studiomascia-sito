// Contenuti verificati sulle fonti ufficiali Invitalia (stessi dati usati
// nel gestionale area-clienti — vedi studiomascia/lib/content).

export const PROGRAM_TYPES = [
  {
    title: "Voucher",
    amount: "Fino a 40.000 €",
    note: "100% a fondo perduto; elevabile a 50.000 € se almeno il 20% delle spese ammesse riguarda beni o servizi innovativi, tecnologico-digitali o di sostenibilità ambientale — va richiesto espressamente nella domanda",
  },
  {
    title: "Contributo investimento",
    amount: "Fino a 200.000 €",
    note: "Fondo perduto fino al 75% (quota fino a 120.000 €) e fino al 70% sulla parte tra 120.000 e 200.000 €; il resto tramite risorse proprie o finanziamento bancario",
  },
] as const;

export const FORME_AMMESSE = [
  "Impresa individuale / Lavoratore autonomo / Libero professionista",
  "Società",
  "Società cooperativa",
  "Società tra professionisti",
] as const;

export const REQUISITI = [
  {
    title: "Età",
    text: "Tra i 18 anni compiuti e i 35 non ancora compiuti, in condizione di inattività, inoccupazione o disoccupazione — oppure disoccupati aderenti al Programma GOL.",
  },
  {
    title: "Residenza / sede",
    text: "L'iniziativa va avviata e mantenuta in una delle regioni ammesse (vedi sotto); requisito verificato anche nei tre anni successivi all'erogazione.",
  },
  {
    title: "Requisiti oggettivi",
    text: "L'iniziativa dev'essere stata avviata nel mese precedente la data di presentazione della domanda ed essere inattiva a quella data — oppure non ancora avviata.",
  },
] as const;

export const REGIONI_AMMESSE = [
  "Abruzzo",
  "Basilicata",
  "Calabria",
  "Campania",
  "Molise",
  "Puglia",
  "Sardegna",
  "Sicilia",
] as const;

export const SPESE_AMMISSIBILI = [
  "Opere edili di ristrutturazione e manutenzione straordinaria (max 50% del piano investimenti)",
  "Macchinari, impianti, attrezzature e arredi nuovi di fabbrica",
  "Programmi informatici e servizi per tecnologie dell'informazione e telecomunicazione",
  "Immobilizzazioni immateriali",
  "Consulenze tecniche funzionali all'investimento",
] as const;

export const ITER_STEPS = [
  {
    num: "01",
    title: "Prerequisiti digitali",
    text: "SPID, CIE o CNS per accedere al portale Invitalia, firma digitale per gli allegati, PEC intestata al proponente.",
  },
  {
    num: "02",
    title: "Documentazione e business plan",
    text: "Raccolta documenti, DSAN sui requisiti, business plan — semplificato per il voucher, completo per il contributo.",
  },
  {
    num: "03",
    title: "Domanda sul portale Invitalia",
    text: "Compilazione online, controllo finale del PDF riepilogativo, firma digitale e invio definitivo.",
  },
  {
    num: "04",
    title: "Valutazione",
    text: "Invitalia valuta in ordine cronologico entro 60 giorni: verifica dei requisiti e colloquio con i proponenti.",
  },
  {
    num: "05",
    title: "Tutoring ed erogazione",
    text: "Tutoraggio tecnico-gestionale obbligatorio, erogazione del contributo e rendicontazione delle spese.",
  },
] as const;

export const NORMATIVA_NOTE =
  "Il vecchio regime Resto al Sud (DL 91/2017) si è chiuso il 14 ottobre 2025. Resto al Sud 2.0 è operativo dalle ore 12:00 del 15 ottobre 2025, con procedura a sportello: le domande sono valutate in ordine cronologico di arrivo, senza graduatorie, fino a esaurimento della dotazione di 356,4 milioni di euro.";

export const NORMATIVA_REFS = [
  {
    title: 'Decreto Legge n. 60 del 07/05/2024 ("Decreto Coesione")',
    url: "https://www.gazzettaufficiale.it/eli/id/2024/07/06/24A03521/sg",
  },
  {
    title: "Legge n. 95 del 04/07/2024",
    url: "https://www.gazzettaufficiale.it/eli/id/2024/07/06/24G00113/sg",
  },
  {
    title: "Decreto Ministeriale 11/07/2025",
    url: "https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2025-08-21&atto.codiceRedazionale=25A04699",
  },
  {
    title: "Decreto Direttoriale 08/10/2025",
    url: "https://www.invitalia.it/sites/invitalia.it/files/2025-10/Decreto%20Direttoriale%20dell%2708-10-2025%20PIA.pdf",
  },
] as const;

export const FAQ = [
  {
    question: "Qual è l'importo del voucher e cosa copre?",
    answer:
      "Il voucher è a fondo perduto fino a 40.000 €, elevabile a 50.000 € se almeno il 20% delle spese ammesse riguarda beni o servizi innovativi (tecnologico-digitali o di sostenibilità ambientale/risparmio energetico). La maggiorazione va richiesta espressamente in domanda: non si può aggiungere in un secondo momento.",
  },
  {
    question: "Quali spese posso coprire con il voucher?",
    answer:
      "Macchinari, impianti, attrezzature e arredi nuovi di fabbrica; programmi informatici e servizi ICT; immobilizzazioni immateriali come brevetti e licenze; consulenze tecnico-specialistiche; l'IVA, solo se non recuperabile. È ammesso anche un programma composto da un solo macchinario, se coerente con l'attività.",
  },
  {
    question: "Quali spese NON sono ammesse con il voucher?",
    answer:
      "Opere edili e impianti generali della sede (elettrico, idrico, gas), beni usati o ricondizionati. Valgono solo le fatture con data successiva alla presentazione della domanda.",
  },
  {
    question: "Devo avere una sede per l'attività? Posso prenderla in affitto?",
    answer:
      "Sì: la disponibilità dell'immobile va garantita per almeno 4 anni dalla firma del provvedimento di concessione. Sono ammessi affitto o comodato d'uso gratuito, purché il contratto sia registrato all'Agenzia delle Entrate.",
  },
  {
    question: "Come e quando arrivano i pagamenti?",
    answer:
      "Invitalia non anticipa le somme: rimborsa le spese sostenute e documentate, sempre tramite il conto corrente dedicato. L'erogazione può avvenire con un SAL (stato avanzamento lavori, facoltativo, tra il 30% e il 70% delle spese ammesse, non prima di 3 mesi dalla concessione) oppure con saldo unico al 100% a spese completate. I tempi di pagamento vanno dai 60 agli 80 giorni dalla richiesta.",
  },
  {
    question: "Quali scadenze devo rispettare dopo l'ammissione?",
    answer:
      "Il piano d'impresa va inviato entro 30 giorni dal provvedimento di ammissione, prima del primo incontro di tutoring. Le spese vanno completate entro 16 mesi, prorogabili fino a 20. La richiesta di saldo va presentata entro il 30 giugno 2028, pena la revoca. I beni acquistati non possono essere spostati, venduti o usati diversamente per 3 anni dal completamento.",
  },
  {
    question: "Posso partecipare se ho già un'attività avviata?",
    answer:
      "Solo a condizioni precise: l'iniziativa dev'essere stata avviata nel mese precedente la data della domanda ed essere inattiva a quella data, oppure non ancora avviata affatto. Un'attività già operativa da più tempo non rientra nei requisiti.",
  },
  {
    question: "E se ho già avuto un'attività simile che ho chiuso di recente?",
    answer:
      "Chi è stato titolare o socio di un'attività con lo stesso codice ATECO (fino alla terza cifra) di quella proposta, cessata nei 6 mesi precedenti la domanda, non è considerato in possesso dei requisiti.",
  },
  {
    question: "Ci sono settori esclusi dal bando?",
    answer:
      "Sì: sono escluse le attività di produzione primaria nei settori dell'agricoltura, della pesca e dell'acquacoltura.",
  },
  {
    question: "Posso presentare più domande per la stessa iniziativa?",
    answer:
      "No: per ciascuna iniziativa economica si può presentare una sola domanda di agevolazione. Le domande successive vengono annullate, salvo il caso in cui la prima sia stata respinta.",
  },
] as const;

export const INVITALIA_PAGINA =
  "https://www.invitalia.it/incentivi-e-strumenti/resto-al-sud-20";

// Da aggiornare quando il gestionale area-clienti sarà pubblicato online.
export const AREA_CLIENTI_URL = "https://area-clienti.studiomascia.com/accedi";
