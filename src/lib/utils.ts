export function cn(...classes: Array<string | undefined | null | false>): string {
  return classes.filter(Boolean).join(" ");
}

export function formatBRL(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}

// FALLBACK: mdia.cloud/diagnostico temporariamente fora.
// Todos os CTAs apontam pro WhatsApp enquanto o subdomínio nao volta.
// Quando voltar: descomentar o bloco original e apagar este.
export function diagnosticoUrl(section: string): string {
  const phone = "5511932169211";
  const text = encodeURIComponent(
    `Estou no site (${section}) e quero implementar a MD.IA na minha clínica.`,
  );
  return `https://wa.me/${phone}?text=${text}`;
}

// Original (quando mdia.cloud/diagnostico voltar):
// export function diagnosticoUrl(section: string): string {
//   const base = "https://mdia.cloud/diagnostico";
//   const params = new URLSearchParams({
//     utm_source: "lp",
//     utm_medium: "website",
//     utm_campaign: "diagnostico",
//     utm_content: section,
//   });
//   return `${base}?${params.toString()}`;
// }
