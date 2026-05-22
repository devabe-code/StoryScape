import type { HTMLAttributes } from "react";
import { cn } from "@/lib/styles";

const badgeVariants = {
  mood: "bg-moss/10 text-moss",
  accent: "bg-ember/10 text-ember",
  neutral: "bg-ink/8 text-ink/70",
} as const;

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: keyof typeof badgeVariants;
};

export function Badge({ className, variant = "mood", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  );
}
