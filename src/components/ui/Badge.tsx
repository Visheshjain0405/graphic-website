import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "gold" | "subtle" | "outline";
  children: React.ReactNode;
}

export function Badge({ className, variant = "gold", children, ...props }: BadgeProps) {
  const variants = {
    gold: "border border-[#E6C594]/30 bg-[#E6C594]/10 text-[#E6C594]",
    subtle: "border border-white/10 bg-white/5 text-[#8C8C9A]",
    outline: "border border-white/15 text-[#F9F8F6]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center text-[11px] font-mono tracking-widest uppercase px-3 py-1 rounded-full",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
