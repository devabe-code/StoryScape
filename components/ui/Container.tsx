import type { ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/styles";

const containerWidths = {
  default: "max-w-6xl",
  reader: "max-w-3xl",
  wide: "max-w-7xl",
} as const;

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  as?: ElementType;
  width?: keyof typeof containerWidths;
};

export function Container({
  as: Component = "div",
  className,
  width = "default",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn("mx-auto w-full px-4 sm:px-6", containerWidths[width], className)}
      {...props}
    />
  );
}
