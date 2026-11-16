import { Eyebrow } from "@/components/ui/eyebrow";
import { QuestionarioSimestForm } from "@/components/questionario/questionario-simest-form";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Questionario Simest",
  description:
    "Rispondi a poche domande sul tuo progetto di transizione digitale o ecologica e sulla situazione export della tua azienda: ti richiameremo per valutare insieme l'accesso al finanziamento Simest.",
  path: "/simest/questionario",
});

export default function QuestionarioSimestPage() {
  return (
    <>
      <section className="bg-ink px-6 py-16 md:px-[60px] md:py-20 grid md:grid-cols-2 gap-10 md:gap-20 items-end">
        <div>
          <Eyebrow>Simest</Eyebrow>
          <h1 className="font-serif text-[34px] md:text-[52px] font-light text-white leading-[1.1] tracking-tight">
            Vuoi sapere se
            <br />
            puoi <em className="text-gold">accedere?</em>
          </h1>
        </div>
        <p className="text-[15px] leading-relaxed text-white/55 border-l-2 border-gold/30 pl-6 font-light">
          Rispondi a poche domande sul tuo progetto e sulla situazione export
          della tua azienda: ci servono per individuare subito il requisito
          di accesso più adatto e richiamarti con le idee chiare.
        </p>
      </section>

      <section className="px-6 py-16 md:px-[60px] md:py-20 bg-white">
        <QuestionarioSimestForm />
      </section>
    </>
  );
}
