/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */
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
  let buttonClasses = `block ${styleClass} justify-center flex flex-row border border-solid ${
    rounded ? "rounded" : ""
  } px-6 py-2 `;

  if (type === "primary") {
    buttonClasses += ` bg-${btnColor} text-${textColor} hover:bg-dark-orange border-${btnColor}`;
  } else if (type === "secondary") {
    buttonClasses += ` bg-white text-${textColor} border-orange hover:text-white hover:bg-${hoverColor}`;
  }

  // if (type === "primary") {
  //   buttonClasses += ` bg-orange text-orange hover:bg-orange`;
  // } else if (type === "secondary") {
  //   buttonClasses += ` bg-white text-orange border-orange hover:text-white hover:bg-dark-orange`;
  // }

  const btnIconClass = ` text-xl mr-2`;

  return (
    <button className={`${buttonClasses} flex justify-center`}>
      {isCaretRightIcon && <FaCaretRight className={btnIconClass} />}
      <div className="ml-4">{name}</div>
    </button>
  );
}
