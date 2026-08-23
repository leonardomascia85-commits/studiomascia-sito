"use server";

import { getResendClient } from "@/lib/email/resend";
import { STUDIO_INFO } from "@/lib/content/studio-info";

export type QuestionarioState = { success?: boolean; error?: string } | undefined;

const REQUISITI_FIELDS = [
  "eta",
  "statoOccupazionale",
  "residenza",
  "regione",
  "statoIniziativa",
  "gol",
  "cumulabilita",
] as const;

const PROGETTO_FIELDS = [
  "settore",
  "formaGiuridica",
  "soci",
  "piva",
  "investimento",
  "esperienza",
] as const;

const CONTATTO_FIELDS = ["name", "phone", "email"] as const;

const REQUIRED_FIELDS = [
  ...CONTATTO_FIELDS,
  ...REQUISITI_FIELDS,
  ...PROGETTO_FIELDS,
] as const;

const FIELD_LABELS: Record<(typeof REQUIRED_FIELDS)[number], string> = {
  name: "Nome e Cognome",
  phone: "Telefono",
  email: "Email",
  eta: "Età",
  statoOccupazionale: "Stato occupazionale",
  residenza: "Regione di residenza attuale",
  regione: "Regione dell'iniziativa",
  statoIniziativa: "Stato dell'iniziativa",
  gol: "Aderente al Programma GOL",
  cumulabilita: "Altri contributi già ricevuti",
  settore: "Settore del progetto",
  formaGiuridica: "Forma giuridica prevista",
  soci: "Da solo o con soci",
  piva: "Partita IVA già aperta",
  investimento: "Investimento previsto",
  esperienza: "Esperienza nel settore",
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
    `Requisiti del bando:\n${formatBlock(values, REQUISITI_FIELDS)}`,
    `Progetto:\n${formatBlock(values, PROGETTO_FIELDS)}`,
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
  } catch {
    return {
      error: `Impossibile inviare il questionario. Scrivici direttamente a ${STUDIO_INFO.email}.`,
    };
  }

  return { success: true };
}
