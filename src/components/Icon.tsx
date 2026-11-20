import { Briefcase, ChartPie, GraduationCap, Store, type LucideProps } from "lucide-react";
import type { Product } from "@/content/products";

const map = { Briefcase, Store, GraduationCap, ChartPie };

export function ProductIcon({ name, ...props }: { name: Product["icon"] } & LucideProps) {
  const Cmp = map[name];
  return <Cmp strokeWidth={1.75} aria-hidden {...props} />;
}
