import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "default" | "large";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  children: ReactNode;
};

const base =
  "inline-flex items-center justify-center font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary";

const sizes: Record<ButtonSize, string> = {
  default: "gap-3 rounded-[32px] px-6 py-3 text-lg leading-normal",
  large: "gap-6 rounded-[48px] px-12 py-6 text-2xl leading-[1.4]",
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-0 bg-secondary text-bg hover:bg-secondary-hover",
  secondary:
    "border-2 border-secondary bg-transparent text-secondary hover:bg-secondary-muted",
  tertiary:
    "border-0 bg-transparent text-neutral hover:text-secondary-dark",
};

export function Button({
  variant = "primary",
  size = "default",
  icon,
  children,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon ? (
        <span
          className={`flex shrink-0 items-center justify-center [&_img]:size-full ${
            size === "large" ? "size-8" : "size-6"
          }`}
        >
          {icon}
        </span>
      ) : null}
      <span>{children}</span>
    </button>
  );
}
