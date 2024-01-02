import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...props
}) => {
  let buttonClasses =
    "border border-solid rounded px-4 py-2 min-w-[70%] max-w-max"; // Updated classes

  if (variant === "primary") {
    buttonClasses += " bg-white text-orange-500 border-orange-500";
  } else if (variant === "secondary") {
    buttonClasses += " bg-orange-500 text-white";
  }

  return (
    <button
      className={buttonClasses}
      onMouseEnter={(e) => {
        // Changing styles on hover
        if (variant === "primary") {
          e.currentTarget.classList.add("bg-orange-500", "text-white");
          e.currentTarget.classList.remove("bg-white", "text-orange-500");
        }
      }}
      onMouseLeave={(e) => {
        // Reverting styles on hover leave
        if (variant === "primary") {
          e.currentTarget.classList.add("bg-white", "text-orange-500");
          e.currentTarget.classList.remove("bg-orange-500", "text-white");
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
