import { cn } from "@/lib/utils";
import { twMerge } from "tailwind-merge";

type H1Prop = {
  children: React.ReactNode;
  className?: string;
};
export default function H1({ children, className }: H1Prop) {
  return (
    <h1
      className={cn(
        " text-3xl font-bold tracking-tight lg:text-6xl ",
        className
      )}
    >
      {children}
    </h1>
  );
}
