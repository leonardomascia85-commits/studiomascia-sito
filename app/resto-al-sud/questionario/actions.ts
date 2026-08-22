"use server";

import { getResendClient } from "@/lib/email/resend";
import { STUDIO_INFO } from "@/lib/content/studio-info";

export type QuestionarioState = { success?: boolean; error?: string } | undefined;

const REQUIRED_FIELDS = [
  "name",
  "phone",
  "email",
  "eta",
  "statoOccupazionale",
  "regione",
  "settore",
  "statoIniziativa",
  "formaGiuridica",
] as const;

const FIELD_LABELS: Record<(typeof REQUIRED_FIELDS)[number], string> = {
  name: "Nome e Cognome",
  phone: "Telefono",
  email: "Email",
  eta: "Età",
  statoOccupazionale: "Stato occupazionale",
  regione: "Regione",
  settore: "Settore del progetto",
  statoIniziativa: "Stato dell'iniziativa",
  formaGiuridica: "Forma giuridica prevista",
};

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

  const summary = REQUIRED_FIELDS.map(
    (field) => `${FIELD_LABELS[field]}: ${values[field]}`
  ).join("\n");

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
