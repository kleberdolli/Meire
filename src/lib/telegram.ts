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

export async function sendBudgetNotificationToTelegram(
  payload: ContactNotification,
): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return false;
  }

  const lines = [
    "Nova solicitação de informações sobre atendimento",
    "",
    `Nome: ${payload.name}`,
    `E-mail: ${payload.email}`,
    `Telefone: ${payload.phone}`,
  ];

  if (payload.city) lines.push(`Cidade/Estado: ${payload.city}`);
  if (payload.modality)
    lines.push(`Modalidade: ${modalityLabel[payload.modality] ?? payload.modality}`);
  if (payload.contactTime) lines.push(`Melhor horário: ${payload.contactTime}`);

  lines.push("", `Mensagem: ${payload.message}`);

  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: lines.join("\n") }),
    },
  );

  return response.ok;
}
