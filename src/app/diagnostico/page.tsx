import type { Metadata } from "next";
import { Quiz } from "@/components/Quiz";

export const metadata: Metadata = {
  title: "Diagnóstico MD.IA | Descubra quanto sua clínica está perdendo",
  description:
    "Em 3 minutos, o diagnóstico aponta os gargalos da sua operação e calcula, em reais, quanto eles custam por mês.",
};

export default function DiagnosticoPage() {
  return <Quiz />;
}
