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

export function diagnosticoUrl(section: string): string {
  const base = "https://mdia.cloud/diagnostico";
  const params = new URLSearchParams({
    utm_source: "lp",
    utm_medium: "website",
    utm_campaign: "diagnostico",
    utm_content: section,
  });
  return `${base}?${params.toString()}`;
}
