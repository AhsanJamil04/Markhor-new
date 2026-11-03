export const SITE_URL = "https://markhorextreme.com";

// WhatsApp numbers for bulk deals. `number` is digits only (international format, no +),
// `display` is how it's shown on the page. The first one is used by the main buttons.
export const WHATSAPP_NUMBERS = [
  { number: "12265051433", display: "+1 (226) 505-1433" },
  { number: "15197292777", display: "+1 (519) 729-2777" },
];

const DEFAULT_MESSAGE =
  "Hi Markhor Extreme, I'm interested in a bulk order. Could you share pricing and availability?";

export function whatsappLink(number: string = WHATSAPP_NUMBERS[0].number, message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
