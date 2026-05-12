import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";
import { sendBudgetNotificationToTelegram } from "@/lib/telegram";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  audience?: string;
  modality?: string;
  contactTime?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;
  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const city = body.city?.trim() ?? "";
  const audience = body.audience?.trim() ?? "";
  const modality = body.modality?.trim() ?? "";
  const contactTime = body.contactTime?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { error: "Preencha todos os campos obrigatórios." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Informe um e-mail válido." }, { status: 400 });
  }

  const notification = { name, email, phone, city, audience, modality, contactTime, message };

  await Promise.allSettled([
    sendContactEmail(notification),
    sendBudgetNotificationToTelegram(notification),
  ]);

  return NextResponse.json({ ok: true });
}
