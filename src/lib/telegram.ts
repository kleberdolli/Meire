type BudgetNotification = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export async function sendBudgetNotificationToTelegram(
  payload: BudgetNotification,
): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return false;
  }

  const text = [
    "Nova solicitação de orçamento",
    "",
    `Nome: ${payload.name}`,
    `E-mail: ${payload.email}`,
    `Telefone: ${payload.phone}`,
    `Mensagem: ${payload.message}`,
  ].join("\n");

  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    },
  );

  return response.ok;
}
