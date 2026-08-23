import { Eyebrow } from "@/components/ui/eyebrow";
import { STUDIO_INFO } from "@/lib/content/studio-info";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR) e cookie policy dello Studio Mascia.",
  path: "/privacy",
});

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-line pt-10">
      <h2 className="font-serif text-2xl font-medium text-ink mb-4">{title}</h2>
      <div className="flex flex-col gap-4 text-[15px] text-[#3a3020] leading-relaxed font-light">
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-ink px-6 py-16 md:px-[60px] md:py-20">
        <Eyebrow>Trasparenza e dati personali</Eyebrow>
        <h1 className="font-serif text-[34px] md:text-[48px] font-light text-white leading-[1.1] tracking-tight max-w-2xl">
          Privacy e Cookie Policy
        </h1>
        <p className="text-[15px] text-white/55 mt-6 max-w-xl font-light">
          Informativa ai sensi degli artt. 13-14 del Regolamento UE 2016/679
          (GDPR), aggiornata al 23 agosto 2026.
        </p>
      </section>

      <section className="px-6 py-16 md:px-[60px] md:py-20 max-w-3xl flex flex-col gap-10">
        <Section title="1. Titolare del trattamento">
          <p>
            Il Titolare del trattamento dei dati è {STUDIO_INFO.founder},
            titolare dello {STUDIO_INFO.name}, con sede in{" "}
            {STUDIO_INFO.address}, {STUDIO_INFO.cap} {STUDIO_INFO.city} — P.IVA
            [da inserire].
          </p>
          <p>
            Per qualsiasi richiesta relativa al trattamento dei tuoi dati
            personali puoi scrivere a{" "}
            <a href={`mailto:${STUDIO_INFO.email}`} className="text-gold underline underline-offset-2">
              {STUDIO_INFO.email}
            </a>{" "}
            o via PEC a{" "}
            <a href={`mailto:${STUDIO_INFO.pec}`} className="text-gold underline underline-offset-2">
              {STUDIO_INFO.pec}
            </a>
            .
          </p>
        </Section>

        <Section title="2. Quali dati raccogliamo">
          <p>
            Raccogliamo i dati personali che ci fornisci volontariamente
            compilando i moduli presenti sul sito:
          </p>
          <ul className="flex flex-col gap-2 pl-5 list-disc">
            <li>
              <strong className="text-ink">Modulo Contatti:</strong> nome e
              cognome, email, azienda/P.IVA (facoltativo), argomento e
              contenuto del messaggio.
            </li>
            <li>
              <strong className="text-ink">Questionario Resto al Sud:</strong>{" "}
              nome e cognome, telefono, email, fascia d&apos;età, condizione
              lavorativa, regione di residenza e dell&apos;iniziativa, stato
              del progetto, adesione al Programma GOL, eventuali altri
              contributi già ricevuti, settore, forma giuridica, presenza di
              soci, Partita IVA, fascia di investimento ed esperienza nel
              settore.
            </li>
          </ul>
          <p>
            Non raccogliamo categorie particolari di dati (art. 9 GDPR) né
            dati di minori: i moduli sono rivolti a maggiorenni o a chi
            dichiara consapevolmente la propria età nell&apos;ambito della
            verifica dei requisiti di un bando pubblico.
          </p>
        </Section>

        <Section title="3. Finalità e base giuridica">
          <ul className="flex flex-col gap-2 pl-5 list-disc">
            <li>
              Rispondere alle richieste inviate tramite il modulo Contatti,
              anche in vista della stipula di un incarico professionale —
              base giuridica: esecuzione di misure precontrattuali (art. 6.1.b
              GDPR).
            </li>
            <li>
              Effettuare una prima valutazione dell&apos;idoneità ai requisiti
              del bando Resto al Sud 2.0 e ricontattarti telefonicamente per
              approfondire — base giuridica: consenso dell&apos;interessato
              (art. 6.1.a GDPR), espresso inviando il questionario.
            </li>
          </ul>
        </Section>

        <Section title="4. Conservazione dei dati">
          <p>
            I dati raccolti tramite i moduli del sito sono conservati per il
            tempo necessario a gestire la tua richiesta e, in caso di avvio di
            un rapporto professionale, per la durata dell&apos;incarico e nei
            termini previsti dagli obblighi fiscali e contabili di legge.
            I dati dei contatti che non danno seguito a un incarico vengono
            cancellati o anonimizzati entro 24 mesi dall&apos;ultimo contatto.
          </p>
        </Section>

        <Section title="5. Comunicazione e trasferimento dei dati">
          <p>
            I tuoi dati non vengono venduti né ceduti a terzi per finalità di
            marketing. Per il solo funzionamento tecnico del sito ci
            avvaliamo di fornitori che trattano i dati in qualità di
            responsabili del trattamento:
          </p>
          <ul className="flex flex-col gap-2 pl-5 list-disc">
            <li>
              <strong className="text-ink">Resend</strong> (Resend Inc., USA),
              per l&apos;invio delle email generate dai moduli del sito.
            </li>
            <li>
              <strong className="text-ink">Vercel Inc.</strong> (USA), per
              l&apos;hosting del sito.
            </li>
            <li>
              <strong className="text-ink">Meta Platforms Inc.</strong> (USA),
              solo se acconsenti ai cookie di profilazione — vedi la sezione
              Cookie qui sotto.
            </li>
          </ul>
          <p>
            Ove il fornitore abbia sede fuori dall&apos;Unione Europea, il
            trasferimento avviene sulla base delle Clausole Contrattuali
            Standard approvate dalla Commissione Europea.
          </p>
        </Section>

        <Section title="6. Cookie e strumenti di tracciamento">
          <p>
            Il sito utilizza esclusivamente cookie tecnici necessari al suo
            funzionamento, che non richiedono consenso.
          </p>
          <p>
            Con il tuo consenso esplicito, espresso tramite il banner
            presente sul sito, possiamo attivare il <strong className="text-ink">Meta Pixel</strong>,
            uno strumento di Meta Platforms Inc. che ci permette di misurare
            l&apos;efficacia delle nostre campagne pubblicitarie su Facebook e
            Instagram e di mostrarti annunci pertinenti. Puoi revocare il
            consenso in qualsiasi momento cancellando i dati di navigazione
            del browser per questo sito e ripetendo la scelta al banner
            successivo. Per maggiori informazioni consulta la{" "}
            <a
              href="https://www.facebook.com/privacy/policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline underline-offset-2"
            >
              informativa privacy di Meta
            </a>
            .
          </p>
        </Section>

        <Section title="7. I tuoi diritti">
          <p>
            In qualità di interessato hai diritto di chiedere in qualsiasi
            momento l&apos;accesso ai tuoi dati, la rettifica o la
            cancellazione degli stessi, la limitazione del trattamento, la
            portabilità dei dati e di opporti al trattamento (artt. 15-22
            GDPR), scrivendo a{" "}
            <a href={`mailto:${STUDIO_INFO.email}`} className="text-gold underline underline-offset-2">
              {STUDIO_INFO.email}
            </a>
            .
          </p>
          <p>
            Hai inoltre diritto di proporre reclamo all&apos;Autorità Garante
            per la Protezione dei Dati Personali (
            <a
              href="https://www.garanteprivacy.it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline underline-offset-2"
            >
              www.garanteprivacy.it
            </a>
            ) qualora ritenga che il trattamento violi la normativa vigente.
          </p>
        </Section>

        <Section title="8. Aggiornamenti">
          <p>
            Questa informativa può essere aggiornata nel tempo per riflettere
            modifiche normative o ai servizi utilizzati dal sito; la data di
            ultimo aggiornamento è indicata in cima alla pagina.
          </p>
        </Section>
      </section>
    </>
  );
}
