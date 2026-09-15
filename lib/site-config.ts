/**
 * Dados de contato e links do site.
 * TODO antes de publicar: confirme os dados abaixo.
 */
export const siteConfig = {
  brandName: "Marcelo Frohlich",
  brandTag: "Soluções Digitais",
  logoMark: "<MF/>",
  email: "m.frohlich5@gmail.com",
  // Formato: DDI + DDD + número, só dígitos.
  whatsappNumber: "5551997259004",
  linkedin: "https://www.linkedin.com/in/marcelofrohlich",
  github: "https://github.com/MarceloFrohlich",
  domain: "https://mfsolucoesdigitais.com.br",
};

export function whatsappLink(prefilledMessage: string) {
  if (!siteConfig.whatsappNumber) return null;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(prefilledMessage)}`;
}
