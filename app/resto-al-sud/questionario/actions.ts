"use server";

import { getResendClient } from "@/lib/email/resend";
import { STUDIO_INFO } from "@/lib/content/studio-info";

export type QuestionarioState = { success?: boolean; error?: string } | undefined;

const VOUCHER_FIELDS = [
  "spesePreviste",
  "maggiorazione",
  "sedeOperativa",
  "speseSostenute",
  "contoDedicato",
  "erogazione",
  "tempistiche",
] as const;

const CONTATTO_FIELDS = ["name", "phone", "email"] as const;

const REQUIRED_FIELDS = [...CONTATTO_FIELDS, ...VOUCHER_FIELDS] as const;

const FIELD_LABELS: Record<(typeof REQUIRED_FIELDS)[number], string> = {
  name: "Nome e Cognome",
  phone: "Telefono",
  email: "Email",
  spesePreviste: "Spese previste con il voucher",
  maggiorazione: "Punta alla maggiorazione a 50.000 €",
  sedeOperativa: "Sede operativa disponibile per 4 anni",
  speseSostenute: "Spese o fatture già sostenute",
  contoDedicato: "Conto corrente dedicato",
  erogazione: "Modalità di erogazione preferita",
  tempistiche: "Consapevolezza delle scadenze",
};

function formatBlock(
  values: Record<(typeof REQUIRED_FIELDS)[number], string>,
  fields: readonly (typeof REQUIRED_FIELDS)[number][]
) {
  return fields.map((field) => `${FIELD_LABELS[field]}: ${values[field]}`).join("\n");
}

export async function sendQuestionario(
  _prevState: QuestionarioState,
  formData: FormData
): Promise<QuestionarioState> {
  const values = Object.fromEntries(
    REQUIRED_FIELDS.map((field) => [field, String(formData.get(field) || "").trim()])
  ) as Record<(typeof REQUIRED_FIELDS)[number], string>;

  const missing = REQUIRED_FIELDS.filter((field) => !values[field]);
  if (missing.length > 0) {
    return { error: "Rispondi a tutte le domande prima di inviare il questionario." };
  }

  const summary = [
    `Contatto:\n${formatBlock(values, CONTATTO_FIELDS)}`,
    `Voucher Resto al Sud:\n${formatBlock(values, VOUCHER_FIELDS)}`,
  ].join("\n\n");

  try {
    const resend = getResendClient();
    const { error } = await resend.emails.send({
      from: `Sito Studio Mascia <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
      to: STUDIO_INFO.email,
      replyTo: values.email,
      subject: `Nuovo questionario Resto al Sud — ${values.name}`,
      text: `Un contatto ha compilato il questionario di pre-valutazione Resto al Sud.\n\n${summary}`,
    });

    if (error) {
      return {
        error: `Impossibile inviare il questionario. Scrivici direttamente a ${STUDIO_INFO.email}.`,
      };
    }

    resend.emails
      .send({
        from: `Studio Mascia <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
        to: values.email,
        subject: "Abbiamo ricevuto le tue risposte — Studio Mascia",
        text: `Ciao ${values.name},\n\nabbiamo ricevuto le tue risposte al questionario Resto al Sud: ti contatteremo al più presto per valutare insieme la tua idea.\n\nA presto,\nStudio Mascia\n${STUDIO_INFO.address} · ${STUDIO_INFO.city}\n${STUDIO_INFO.email}`,
      })
      .catch(() => {});
  } catch {
    return {
      error: `Impossibile inviare il questionario. Scrivici direttamente a ${STUDIO_INFO.email}.`,
    };
  }

  return { success: true };
}
