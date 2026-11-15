type ContactMessage = { sender: string; phone: string; message: string };
type ValidationError = "replyRequired" | "invalidPhone" | "messageRequired";

export function validateContactMessage({
  sender,
  phone,
  message,
}: ContactMessage): ValidationError | undefined {
  if (!sender && !phone) return "replyRequired";
  const digits = phone.replace(/\D/g, "");
  if (
    phone &&
    (!/^\+?[\d\s().-]+$/.test(phone) || digits.length < 7 || digits.length > 15)
  )
    return "invalidPhone";
  if (!message) return "messageRequired";
}

export function buildContactMailto(
  email: string,
  subject: string,
  body: string,
) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
