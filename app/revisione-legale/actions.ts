"use server";

import { getResendClient } from "@/lib/email/resend";
import { STUDIO_INFO } from "@/lib/content/studio-info";

export type PreventivoState = { success?: boolean; error?: string } | undefined;

export async function sendPreventivoRevisione(
  _prevState: PreventivoState,
  formData: FormData
): Promise<PreventivoState> {
  const nome = String(formData.get("nome") || "").trim();
  const cognome = String(formData.get("cognome") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const azienda = String(formData.get("azienda") || "").trim();
  const ricaviAttivo = String(formData.get("ricaviAttivo") || "").trim();
  const commercialista = String(formData.get("commercialista") || "").trim();
  const messaggio = String(formData.get("messaggio") || "").trim();
  const consenso = formData.get("consenso");

  const utmSource = String(formData.get("utm_source") || "").trim();
  const utmMedium = String(formData.get("utm_medium") || "").trim();
  const utmCampaign = String(formData.get("utm_campaign") || "").trim();

  if (!nome || !cognome || !email) {
    return { error: "Compila nome, cognome ed email." };
  }
  if (!consenso) {
    return { error: "Devi accettare il trattamento dei dati personali per procedere." };
  }

  try {
    const resend = getResendClient();
    const { error } = await resend.emails.send({
      from: `Sito Studio Mascia <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
      to: STUDIO_INFO.email,
      replyTo: email,
      subject: `Richiesta preventivo — Revisione legale dei conti — ${nome} ${cognome}`,
      text: `Nuova richiesta di preventivo dalla pagina Revisione Legale dei Conti.

Nome: ${nome}
Cognome: ${cognome}
Email: ${email}
Azienda / P.IVA: ${azienda || "-"}
Ricavi/attivo approssimativi: ${ricaviAttivo || "-"}
Commercialista che richiede un revisore indipendente: ${commercialista || "-"}

Messaggio:
${messaggio || "-"}

Provenienza campagna:
utm_source: ${utmSource || "-"}
utm_medium: ${utmMedium || "-"}
utm_campaign: ${utmCampaign || "-"}`,
    });

    if (error) {
      return {
        error: `Impossibile inviare la richiesta. Scrivici direttamente a ${STUDIO_INFO.email}.`,
      };
    }

    resend.emails
      .send({
        from: `Studio Mascia <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
        to: email,
        subject: "Abbiamo ricevuto la tua richiesta — Studio Mascia",
        text: `Ciao ${nome},\n\nabbiamo ricevuto la tua richiesta di preventivo per la revisione legale dei conti: ti risponderemo entro 48 ore.\n\nA presto,\nStudio Mascia\n${STUDIO_INFO.address} · ${STUDIO_INFO.city}\n${STUDIO_INFO.email}`,
      })
      .catch(() => {});
  } catch {
    return {
      error: `Impossibile inviare la richiesta. Scrivici direttamente a ${STUDIO_INFO.email}.`,
    };
  }

  return { success: true };
}
