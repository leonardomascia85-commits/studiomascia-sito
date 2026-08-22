import { Eyebrow } from "@/components/ui/eyebrow";
import { QuestionarioForm } from "@/components/questionario/questionario-form";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Questionario Resto al Sud",
  description:
    "Rispondi a poche domande veloci sulla tua età, condizione lavorativa e progetto: ti richiameremo per valutare insieme se puoi accedere al bando Resto al Sud 2.0.",
  path: "/resto-al-sud/questionario",
});

export default function QuestionarioPage() {
  return (
    <>
      <section className="bg-ink px-6 py-16 md:px-[60px] md:py-20 grid md:grid-cols-2 gap-10 md:gap-20 items-end">
        <div>
          <Eyebrow>Resto al Sud 2.0</Eyebrow>
          <h1 className="font-serif text-[34px] md:text-[52px] font-light text-white leading-[1.1] tracking-tight">
            Vuoi sapere se
            <br />
            puoi <em className="text-gold">partecipare?</em>
          </h1>
        </div>
        <p className="text-[15px] leading-relaxed text-white/55 border-l-2 border-gold/30 pl-6 font-light">
          Rispondi a poche domande veloci: ci servono per capire subito se il
          tuo profilo può accedere al bando e richiamarti già con le idee
          chiare.
        </p>
      </section>

      <section className="px-6 py-16 md:px-[60px] md:py-20 bg-white">
        <QuestionarioForm />
      </section>
    </>
  );
}
