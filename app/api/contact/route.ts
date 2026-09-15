import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const name = (payload.name ?? "").trim().slice(0, 200);
  const email = (payload.email ?? "").trim().slice(0, 200);
  const phone = (payload.phone ?? "").trim().slice(0, 60);
  const service = (payload.service ?? "").trim().slice(0, 200);
  const message = (payload.message ?? "").trim().slice(0, 5000);

  if (!name || !email || !message || !isValidEmail(email)) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  const subject = `Novo Lead - MFSoluçõesDigitais: ${name}`;
  const text = [
    `Nome: ${name}`,
    `E-mail: ${email}`,
    phone ? `Telefone/WhatsApp: ${phone}` : null,
    service ? `Serviço de interesse: ${service}` : null,
    "",
    "Mensagem:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const { error } = await resend.emails.send({
      from: "MFSoluçõesDigitais <onboarding@resend.dev>",
      to: siteConfig.email,
      replyTo: email,
      subject,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend exception:", err);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}
