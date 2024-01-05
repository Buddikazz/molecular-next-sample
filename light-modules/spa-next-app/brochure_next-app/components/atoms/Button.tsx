import { FaCaretRight } from "react-icons/fa";
export interface ButtonProps {
  styleClass?: string;
  name: string;
  type?: string;
  rounded?: boolean;
  hoverColor?: string;
  btnColor?: string;
  textColor?: string;
  isCaretRightIcon?: boolean;
}

export default function Button({
  styleClass = "",
  name = "",
  type = "primary",
  rounded = false,
  btnColor = "",
  textColor = "",
  hoverColor = "",
  isCaretRightIcon = false,
}: ButtonProps) {
  let buttonClasses = `${styleClass} border border-solid ${
    rounded ? "rounded" : ""
  } px-20 py-2 flex items-center justify-center`;

  if (type === "primary") {
    buttonClasses += ` bg-${btnColor} text-${textColor} hover:bg-${hoverColor}`;
  } else if (type === "secondary") {
    buttonClasses += ` bg-white text-${btnColor} border-${btnColor} hover:text-white hover:bg-${hoverColor}`;
  }

  const btnIconClass = ` text-xl mr-2`;

  return (
    <button className={buttonClasses}>
      {isCaretRightIcon && <FaCaretRight className={btnIconClass} />}
      {name}
    </button>
  );
}