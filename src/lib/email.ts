import nodemailer from "nodemailer";

type ContactNotification = {
  name: string;
  email: string;
  phone: string;
  city?: string;
  modality?: string;
  contactTime?: string;
  message: string;
};

const modalityLabel: Record<string, string> = {
  presencial: "Presencial",
  online: "Online",
  nao_sei: "Ainda não sei",
};

export async function sendContactEmail(
  payload: ContactNotification,
): Promise<boolean> {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? "587");
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const emailTo = process.env.EMAIL_TO ?? smtpUser;

  if (!smtpHost || !smtpUser || !smtpPass) {
    return false;
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const lines = [
    `<b>Nome:</b> ${payload.name}`,
    `<b>E-mail:</b> ${payload.email}`,
    `<b>Telefone:</b> ${payload.phone}`,
  ];

  if (payload.city) lines.push(`<b>Cidade/Estado:</b> ${payload.city}`);
  if (payload.modality)
    lines.push(
      `<b>Modalidade:</b> ${modalityLabel[payload.modality] ?? payload.modality}`,
    );
  if (payload.contactTime)
    lines.push(`<b>Melhor horário:</b> ${payload.contactTime}`);

  lines.push(`<br><b>Mensagem:</b><br>${payload.message.replace(/\n/g, "<br>")}`);

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;padding:24px;border:1px solid #e8dfd2;border-radius:12px">
      <h2 style="color:#4a3428;margin-top:0">Nova solicitação de informações sobre atendimento</h2>
      <p style="color:#6f5d4f;line-height:1.8">${lines.join("<br>")}</p>
      <hr style="border:none;border-top:1px solid #e8dfd2;margin:20px 0">
      <p style="color:#b8965e;font-size:12px">Psicóloga Meire Ribeiro · CRP 03/13940</p>
    </div>
  `;

  const info = await transporter.sendMail({
    from: `"Site Meire Ribeiro" <${smtpUser}>`,
    to: emailTo,
    subject: `Nova solicitação de atendimento — ${payload.name}`,
    html,
  });

  return !!info.messageId;
}
