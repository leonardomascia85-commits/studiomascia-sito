"use server";

import { getResendClient } from "@/lib/email/resend";
import { STUDIO_INFO } from "@/lib/content/studio-info";

export type ContactState = { success?: boolean; error?: string } | undefined;

export async function sendContactMessage(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const company = String(formData.get("company") || "").trim();
  const topic = String(formData.get("topic") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message) {
    return { error: "Compila i campi obbligatori: nome, email e messaggio." };
  }

  try {
    const resend = getResendClient();
    const { error } = await resend.emails.send({
      from: `Sito Studio Mascia <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
      to: STUDIO_INFO.email,
      replyTo: email,
      subject: `Nuovo messaggio dal sito — ${topic || "Richiesta generica"}`,
      text: `Nome: ${name}\nEmail: ${email}\nAzienda/P.IVA: ${company || "-"}\nArgomento: ${topic || "-"}\n\nMessaggio:\n${message}`,
    });

    if (error) {
      return {
        error: `Impossibile inviare il messaggio. Scrivici direttamente a ${STUDIO_INFO.email}.`,
      };
    }
  } catch {
    return {
      error: `Impossibile inviare il messaggio. Scrivici direttamente a ${STUDIO_INFO.email}.`,
    };
  }

  return { success: true };
}
