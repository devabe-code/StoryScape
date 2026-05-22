import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/styles";

const buttonVariants = {
  primary: "bg-ink text-paper hover:bg-moss",
  secondary: "border border-ink/15 bg-transparent text-ink hover:bg-white/60",
  ghost: "text-ink/75 hover:bg-ink/5 hover:text-ink",
} as const;

const buttonSizes = {
  sm: "h-10 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-5",
  icon: "h-10 w-10 p-0",
} as const;

type ButtonVariant = keyof typeof buttonVariants;
type ButtonSize = keyof typeof buttonSizes;

type ButtonClassOptions = {
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

function buttonClassName({ className, size = "md", variant = "primary" }: ButtonClassOptions) {
  return cn(
    "focus-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-md font-semibold transition-colors disabled:pointer-events-none disabled:opacity-55",
    buttonVariants[variant],
    buttonSizes[size],
    className
  );
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonClassOptions;

export function Button({ className, size, type = "button", variant, ...props }: ButtonProps) {
  return (
    <button className={buttonClassName({ className, size, variant })} type={type} {...props} />
  );
}

export type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonClassOptions & {
    children: ReactNode;
    href: string;
  };

export function ButtonLink({ className, href, size, variant, ...props }: ButtonLinkProps) {
  return <Link className={buttonClassName({ className, size, variant })} href={href} {...props} />;
}
