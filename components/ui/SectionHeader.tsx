import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/styles";

export type SectionHeaderProps = HTMLAttributes<HTMLDivElement> & {
  action?: ReactNode;
  eyebrow?: string;
  heading: string;
  level?: 1 | 2 | 3;
  supportingText?: string;
};

export function SectionHeader({
  action,
  className,
  eyebrow,
  heading,
  level = 2,
  supportingText,
  ...props
}: SectionHeaderProps) {
  const HeadingTag = `h${level}` as const;

  return (
    <div
      className={cn("flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between", className)}
      {...props}
    >
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ember">{eyebrow}</p>
        ) : null}
        <HeadingTag
          className={cn(
            "font-serif leading-tight text-ink",
            level === 1 ? "mt-3 text-5xl" : "text-3xl"
          )}
        >
          {heading}
        </HeadingTag>
        {supportingText ? (
          <p className="mt-3 text-sm leading-6 text-ink/65 sm:text-base sm:leading-7">
            {supportingText}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
