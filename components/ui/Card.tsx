import type { ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/styles";

const cardVariants = {
  default: "border-ink/10 bg-white/55 shadow-sm",
  elevated: "border-ink/10 bg-white/55 shadow-soft",
  quiet: "border-ink/10 bg-white/65",
} as const;

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  as?: ElementType;
  variant?: keyof typeof cardVariants;
};

export function Card({
  as: Component = "div",
  className,
  variant = "default",
  ...props
}: CardProps) {
  return (
    <Component className={cn("rounded-lg border", cardVariants[variant], className)} {...props} />
  );
}
