import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CtaBanner } from "@/components/ui/cta-banner";

export const metadata: Metadata = {
  title: "Chi Siamo — Studio Mascia",
  description:
    "Studio di Commercialisti e Revisori Legali a Palma Campania. Dal 2012 al servizio di imprese e privati, con presenza personale del titolare su ogni pratica.",
};

const VALUES = [
  {
    num: "13+",
    title: "Anni di esperienza",
    text: "Dal 2012 al servizio di imprese e privati. Una storia costruita sulla fiducia e sulla continuità con i nostri clienti.",
  },
  {
    num: "100%",
    title: "Presenza personale",
    text: "Il titolare segue direttamente ogni cliente, senza intermediari. Ogni adempimento viene controllato con cura e puntualità.",
  },
  {
    num: "NAZ",
    title: "Clienti nazionali",
    text: "Serviamo PMI locali e aziende operanti a livello nazionale e internazionale, con la stessa dedizione e professionalità.",
  },
];

const CREDENTIALS = [
  { year: "2012", text: "Fondazione Studio Mascia a Palma Campania" },
  {
    year: "Albo",
    text: "Iscritto all'Albo dei Dottori Commercialisti e degli Esperti Contabili",
  },
  { year: "MEF", text: "Revisore Legale abilitato — Registro CNDCEC" },
  {
    year: "PMI",
    text: "Specialista in finanza agevolata e contributi per piccole e medie imprese",
  },
  {
    year: "INT",
    text: "Clienti nazionali e internazionali — consulenza societaria e contrattuale",
  },
];

const APPROACH = [
  {
    num: "01",
    title: "Ascolto e analisi",
    text: "Ogni rapporto inizia con un'analisi approfondita della situazione del cliente. Nessuna soluzione standardizzata: ogni caso è unico.",
  },
  {
    num: "02",
    title: "Consulenza su misura",
    text: "Elaboriamo strategie fiscali e aziendali personalizzate, sempre aggiornate alle ultime normative e opportunità disponibili.",
  },
  {
    num: "03",
    title: "Efficienza e puntualità",
    text: "Gli adempimenti vengono gestiti con precisione e nei tempi previsti. Nessuna scadenza viene mai trascurata.",
  },
  {
    num: "04",
    title: "Relazione continuativa",
    text: "Non siamo solo consulenti occasionali. Seguiamo i nostri clienti nel tempo, diventando un punto di riferimento stabile per la loro attività.",
  },
];

export default function ChiSiamoPage() {
  return (
    <>
      <section className="bg-ink px-6 py-16 md:px-[60px] md:py-24 grid md:grid-cols-2 gap-10 md:gap-20 items-end">
        <div>
          <Eyebrow>Chi siamo</Eyebrow>
          <h1 className="font-serif text-[38px] md:text-[56px] font-light text-white leading-[1.1] tracking-tight">
            Una consulenza
            <br />
            <em className="text-gold">di alto livello,</em>
            <br />
            ogni giorno.
          </h1>
        </div>
        <p className="text-[15px] leading-relaxed text-white/55 border-l-2 border-gold/30 pl-6 font-light">
          Lo Studio Mascia è uno studio di Commercialisti e Revisori Legali
          con sede a Palma Campania. Dal 2012 offriamo consulenza fiscale,
          societaria, contrattuale e contabile a clienti nazionali e
          internazionali, con rigore professionale e attenzione
          personalizzata.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-px bg-line">
        {VALUES.map((v) => (
          <div key={v.title} className="bg-cream px-8 py-12 md:px-10 md:py-[52px]">
            <div className="font-serif text-[48px] font-light text-gold leading-none mb-4">
              {v.num}
            </div>
            <h3 className="font-serif text-[22px] font-medium text-ink mb-3">
              {v.title}
            </h3>
            <p className="text-[13px] text-muted leading-relaxed font-light">
              {v.text}
            </p>
          </div>
        ))}
      </section>

      <section className="grid md:grid-cols-2">
        <div className="bg-ink px-6 py-16 md:px-[60px] md:py-24 flex flex-col justify-center">
          <Eyebrow>Il titolare</Eyebrow>
          <h2 className="font-serif text-[36px] md:text-[44px] font-light text-white leading-tight mb-2">
            Dr. Leonardo
            <br />
            Mascia
          </h2>
          <p className="text-[12px] tracking-[0.15em] uppercase text-white/40 mb-9">
            Dottore Commercialista · Revisore Legale
          </p>
          <p className="text-sm text-white/60 leading-relaxed font-light mb-9">
            Laureato in Economia e Commercio, iscritto all&apos;Albo dei
            Dottori Commercialisti e Revisori Contabili. Dal 2012 guida lo
            Studio Mascia con rigore professionale e attenzione costante alle
            esigenze di ogni cliente.
            <br />
            <br />
            Specializzato in consulenza fiscale, aziendale e in finanza
            agevolata per PMI. Segue personalmente ogni pratica, garantendo
            controllo puntuale di tutti gli adempimenti.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Consulente aziendale",
              "Tributarista",
              "Revisore legale",
              "Finanza agevolata",
            ].map((tag) => (
              <span
                key={tag}
                className="text-[11px] tracking-[0.12em] uppercase text-gold border border-gold/40 px-4 py-1.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white px-6 py-16 md:px-[60px] md:py-24 flex flex-col justify-center">
          <h3 className="font-serif text-[28px] font-normal text-ink mb-8">
            Titoli e abilitazioni
          </h3>
          <ul className="flex flex-col">
            {CREDENTIALS.map((c, i) => (
              <li
                key={c.text}
                className={`flex gap-5 py-5 border-b border-line ${
                  i === 0 ? "border-t" : ""
                }`}
              >
                <span className="font-serif text-sm text-gold min-w-[40px]">
                  {c.year}
                </span>
                <span className="text-[13px] text-[#3a3020] leading-snug font-light">
                  {c.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream px-6 py-16 md:px-[60px] md:py-24">
        <Eyebrow>Il nostro metodo</Eyebrow>
        <h2 className="font-serif text-[30px] md:text-[36px] font-light text-ink leading-tight mb-10 md:mb-12 max-w-lg">
          Come lavoriamo
          <br />
          con i nostri clienti
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {APPROACH.map((a) => (
            <div key={a.title} className="flex gap-6 items-start">
              <div className="w-12 h-12 min-w-[48px] border border-gold flex items-center justify-center font-serif text-xl text-gold">
                {a.num}
              </div>
              <div>
                <h4 className="font-serif text-xl font-medium text-ink mb-2">
                  {a.title}
                </h4>
                <p className="text-[13px] text-muted leading-relaxed font-light">
                  {a.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        variant="dark"
        title={
          <>
            Vuoi conoscerci
            <br />
            <em className="text-gold">di persona?</em>
          </>
        }
        buttonLabel="Contattaci ora"
        buttonHref="/contatti"
      />
    </>
  );
}
