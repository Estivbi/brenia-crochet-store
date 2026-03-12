// src/utils/whatsapp.ts
// Utility functions for building WhatsApp URLs

/**
 * Builds a WhatsApp wa.me URL with an optional pre-filled message.
 *
 * @param phone     - Phone number without '+' (e.g. '34612345678')
 * @param [message] - Plain-text message (will be URI-encoded). If omitted or empty, no `text` query parameter is added.
 */
export function buildWhatsAppUrl(phone: string, message?: string): string {
  const baseUrl = `https://wa.me/${phone}`;
  if (message == null || message === '') {
    return baseUrl;
  }
  const encodedMessage = encodeURIComponent(message);
  return `${baseUrl}?text=${encodedMessage}`;
}

/**
 * Returns the appropriate WhatsApp message based on the supplied context.
 *
 * Priority: customMessage > productName > generic fallback
 */
export function buildWhatsAppMessage(opts: {
  productName?: string;
  currentURL?: string;
  customMessage?: string;
}): string {
  const { productName, currentURL, customMessage } = opts;

  if (customMessage) return customMessage;

  if (productName) {
    const urlPart = currentURL ? ` Vi este enlace: ${currentURL}` : '';
    return `¡Hola! Me interesa el ${productName}.${urlPart}`;
  }

  return '¡Hola! Me interesan vuestros bolsos de crochet artesanales';
}
