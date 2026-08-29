"use server";

import { getResendClient } from "@/lib/email/resend";
import { STUDIO_INFO } from "@/lib/content/studio-info";

export type ValutazioneState = { success?: boolean; error?: string } | undefined;

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const MAX_FILES = 5;

export async function sendValutazione(
  _prevState: ValutazioneState,
  formData: FormData
): Promise<ValutazioneState> {
  const nome = String(formData.get("nome") || "").trim();
  const cognome = String(formData.get("cognome") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const messaggio = String(formData.get("messaggio") || "").trim();
  const consenso = formData.get("consenso");

  if (!nome || !cognome || !email) {
    return { error: "Compila nome, cognome ed email." };
  }
  if (!consenso) {
    return { error: "Devi accettare il trattamento dei dati personali per procedere." };
  }

  const files = formData
    .getAll("documenti")
    .filter((f): f is File => f instanceof File && f.size > 0);

  if (files.length > MAX_FILES) {
    return { error: `Puoi allegare al massimo ${MAX_FILES} file.` };
  }
  for (const file of files) {
    if (file.size > MAX_FILE_SIZE) {
      return { error: `Il file "${file.name}" supera i 10 MB consentiti.` };
    }
  }

  try {
    const attachments = await Promise.all(
      files.map(async (file) => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
      }))
    );

    const resend = getResendClient();
    const { error } = await resend.emails.send({
      from: `Sito Studio Mascia <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
      to: STUDIO_INFO.email,
      replyTo: email,
      subject: `Richiesta di valutazione — Contenzioso Tributario — ${nome} ${cognome}`,
      text: `Nuova richiesta di prima valutazione gratuita dalla pagina Contenzioso Tributario.\n\nNome: ${nome}\nCognome: ${cognome}\nEmail: ${email}\n\nMessaggio:\n${messaggio || "-"}\n\nDocumenti allegati: ${
        files.length > 0 ? files.map((f) => f.name).join(", ") : "nessuno"
      }`,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      return {
        error: `Impossibile inviare la richiesta. Scrivici direttamente a ${STUDIO_INFO.email}.`,
      };
    }
  } catch {
    return {
      error: `Impossibile inviare la richiesta. Scrivici direttamente a ${STUDIO_INFO.email}.`,
    };
  }

  return { success: true };
}
