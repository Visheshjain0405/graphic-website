import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "gold-outline" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#E6C594]/50 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const variants = {
      primary:
        "bg-[#E6C594] text-[#08080A] hover:bg-[#f0d5a8] shadow-[0_0_20px_rgba(230,197,148,0.25)] hover:shadow-[0_0_30px_rgba(230,197,148,0.4)]",
      "gold-outline":
        "border border-[#E6C594]/40 text-[#F9F8F6] hover:border-[#E6C594] hover:bg-[#E6C594]/10 hover:text-[#E6C594]",
      secondary:
        "bg-[#111115] border border-white/10 text-[#F9F8F6] hover:border-white/25 hover:bg-[#17171F]",
      ghost:
        "text-[#8C8C9A] hover:text-[#F9F8F6] hover:bg-white/5",
    };

    const sizes = {
      sm: "text-xs px-4 py-2 gap-1.5",
      md: "text-sm px-6 py-3 gap-2",
      lg: "text-base px-8 py-4 gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
