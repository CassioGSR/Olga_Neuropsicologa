const WHATSAPP_NUMBER = "5594984304844";

export function whatsappLink(message: string) {
return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const MSG_AVALIACAO =
"Olá! Gostaria de agendar uma avaliação neuropsicológica para meu filho.";