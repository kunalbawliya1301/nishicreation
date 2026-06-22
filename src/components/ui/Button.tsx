import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "gold" | "outline" | "text";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  variant = "outline",
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyle =
    "relative inline-flex items-center justify-center px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-500 ease-out overflow-hidden cursor-pointer select-none group";

  const variants = {
    gold: "bg-gold text-dark border border-gold hover:bg-gold-hover hover:border-gold-hover shadow-[0_4px_20px_rgba(200,169,107,0.15)]",
    outline:
      "bg-transparent text-cream border border-gold/40 hover:text-dark hover:border-gold",
    text: "bg-transparent text-cream border-none hover:text-gold tracking-[0.15em] px-0 py-2",
  };

  const buttonContent = (
    <>
      {/* Sliding background hover transition for outline button */}
      {variant === "outline" && (
        <span className="absolute inset-0 w-full h-full bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out -z-10" />
      )}
      <span className="relative z-10 flex items-center gap-2 transition-transform duration-300">
        {children}
      </span>
    </>
  );

  const combinedStyles = `${baseStyle} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {buttonContent}
    </button>
  );
}
