"use client";

import { useActionState } from "react";
import {
  sendQuestionario,
  type QuestionarioState,
} from "@/app/resto-al-sud/questionario/actions";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
  ETA_OPTIONS,
  STATO_OCCUPAZIONALE_OPTIONS,
  REGIONE_OPTIONS,
  RESIDENZA_OPTIONS,
  GOL_OPTIONS,
  CUMULABILITA_OPTIONS,
  SETTORE_OPTIONS,
  STATO_INIZIATIVA_OPTIONS,
  FORMA_GIURIDICA_OPTIONS,
  SOCI_OPTIONS,
  PIVA_OPTIONS,
  INVESTIMENTO_OPTIONS,
  ESPERIENZA_OPTIONS,
} from "@/lib/content/questionario-resto-al-sud";

const fieldClass =
  "font-sans text-[15px] text-ink font-light px-[18px] py-3.5 border border-[#ddd6c8] bg-parchment outline-none focus:border-gold focus:bg-white transition-colors";
const labelClass = "text-[12px] tracking-[0.12em] uppercase text-muted";

function RadioGroup({
  name,
  options,
  cols = 2,
}: {
  name: string;
  options: readonly string[];
  cols?: 2 | 3;
}) {
  return (
    <div
      className={`grid gap-2.5 ${
        cols === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
      }`}
    >
      {options.map((opt) => (
        <label key={opt} className="cursor-pointer">
          <input
            type="radio"
            name={name}
            value={opt}
            required
            className="peer sr-only"
          />
          <span className="block text-center text-[14px] leading-snug px-4 py-3.5 border border-[#ddd6c8] bg-parchment text-ink font-light transition-colors peer-checked:bg-ink peer-checked:text-white peer-checked:border-ink peer-focus-visible:ring-2 peer-focus-visible:ring-gold">
            {opt}
          </span>
        </label>
      ))}
    </div>
  );
}

export function QuestionarioForm() {
  const [state, action, pending] = useActionState<QuestionarioState, FormData>(
    sendQuestionario,
    undefined
  );

  if (state?.success) {
    return (
      <div className="bg-[#f0f7f0] border border-gold px-6 py-4 text-[15px] text-ink max-w-[720px]">
        ✓ Grazie! Abbiamo ricevuto le tue risposte, ti contatteremo al più
        presto per valutare insieme la tua idea.
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-11 max-w-[720px]">
      <div>
        <Eyebrow>Requisiti del bando</Eyebrow>
      </div>

      <div className="flex flex-col gap-4">
        <span className={labelClass}>Quanti anni hai? *</span>
        <RadioGroup name="eta" options={ETA_OPTIONS} cols={3} />
      </div>

      <div className="flex flex-col gap-4">
        <span className={labelClass}>Qual è la tua condizione lavorativa attuale? *</span>
        <RadioGroup name="statoOccupazionale" options={STATO_OCCUPAZIONALE_OPTIONS} />
      </div>

      <div className="flex flex-col gap-4">
        <span className={labelClass}>In quale regione risiedi attualmente? *</span>
        <RadioGroup name="residenza" options={RESIDENZA_OPTIONS} cols={3} />
      </div>

      <div className="flex flex-col gap-4">
        <span className={labelClass}>In quale regione vuoi avviare il progetto? *</span>
        <RadioGroup name="regione" options={REGIONE_OPTIONS} cols={3} />
      </div>

      <div className="flex flex-col gap-4">
        <span className={labelClass}>A che punto sei con il progetto? *</span>
        <RadioGroup name="statoIniziativa" options={STATO_INIZIATIVA_OPTIONS} cols={3} />
      </div>

      <div className="flex flex-col gap-4">
        <span className={labelClass}>
          Aderisci al Programma GOL (Garanzia Occupabilità Lavoratori)? *
        </span>
        <RadioGroup name="gol" options={GOL_OPTIONS} cols={3} />
      </div>

      <div className="flex flex-col gap-4">
        <span className={labelClass}>
          Hai già ricevuto altri contributi per questa stessa iniziativa? *
        </span>
        <RadioGroup name="cumulabilita" options={CUMULABILITA_OPTIONS} cols={3} />
      </div>

      <div className="pt-2">
        <Eyebrow>Il tuo progetto</Eyebrow>
      </div>

      <div className="flex flex-col gap-4">
        <span className={labelClass}>Che tipo di attività vuoi avviare? *</span>
        <RadioGroup name="settore" options={SETTORE_OPTIONS} />
      </div>

      <div className="flex flex-col gap-4">
        <span className={labelClass}>Che forma giuridica pensi di usare? *</span>
        <RadioGroup name="formaGiuridica" options={FORMA_GIURIDICA_OPTIONS} cols={3} />
      </div>

      <div className="flex flex-col gap-4">
        <span className={labelClass}>Il progetto è... *</span>
        <RadioGroup name="soci" options={SOCI_OPTIONS} />
      </div>

      <div className="flex flex-col gap-4">
        <span className={labelClass}>Hai già una Partita IVA attiva? *</span>
        <RadioGroup name="piva" options={PIVA_OPTIONS} />
      </div>

      <div className="flex flex-col gap-4">
        <span className={labelClass}>Quanto pensi di investire complessivamente? *</span>
        <RadioGroup name="investimento" options={INVESTIMENTO_OPTIONS} cols={3} />
      </div>

      <div className="flex flex-col gap-4">
        <span className={labelClass}>
          Hai già esperienza lavorativa o di studio nel settore? *
        </span>
        <RadioGroup name="esperienza" options={ESPERIENZA_OPTIONS} cols={3} />
      </div>

      <div className="flex flex-col gap-5 pt-4 border-t border-line">
        <span className={labelClass}>
          Lasciaci i tuoi contatti, ti richiamiamo noi
        </span>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label className={labelClass} htmlFor="name">
              Nome e Cognome *
            </label>
            <input
              id="name"
              name="name"
              required
              placeholder="Mario Rossi"
              className={fieldClass}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className={labelClass} htmlFor="phone">
              Telefono *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="333 1234567"
              className={fieldClass}
            />
          </div>
          <div className="md:col-span-2 flex flex-col gap-2">
            <label className={labelClass} htmlFor="email">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="mario@esempio.it"
              className={fieldClass}
            />
          </div>
        </div>
      </div>

      {state?.error && <p className="text-[15px] text-red-700">{state.error}</p>}

      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          type="submit"
          disabled={pending}
          className="bg-ink text-white text-[13px] font-medium tracking-[0.1em] uppercase px-10 py-4 hover:bg-gold hover:text-ink transition-colors disabled:opacity-50"
        >
          {pending ? "Invio in corso…" : "Invia il questionario"}
        </button>
        <p className="text-[13px] text-[#aaa098] max-w-[400px] leading-relaxed">
          Inviando il modulo accetti il trattamento dei dati personali ai
          sensi del GDPR. I tuoi dati non saranno condivisi con terze parti.
        </p>
      </div>
    </form>
  );
}
