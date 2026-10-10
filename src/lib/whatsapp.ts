const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? "5594984304844";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const MSG_AVALIACAO =
  "Olá! Gostaria de agendar uma avaliação neuropsicológica para meu filho(a).";

export const MSG_GERAL = "Olá! Gostaria de mais informações sobre o atendimento.";