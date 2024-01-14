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
  // let buttonClasses = `${styleClass} justify-center flex flex-row border border-solid ${rounded ? "rounded" : ""
  //   } px-4 py-2 min-w-64`;

  let buttonClasses = ` block  mx-auto ${styleClass} justify-center flex flex-row border-solid ${
    rounded ? "rounded" : ""
  } px-2 py-2 min-w-40`;

  if (type === "primary") {
    buttonClasses += ` bg-${btnColor} text-${textColor} hover:bg-${hoverColor}`;
  } else if (type === "secondary") {
    buttonClasses += ` bg-white text-${btnColor} border-orange border-2  hover:text-white hover:bg-${hoverColor}`;
  }

  const btnIconClass = ` text-xl mr-2`;

  return (
    <button className={buttonClasses+" "}>
      {isCaretRightIcon && <FaCaretRight className={btnIconClass+ " "} />}
      {name}
    </button>
  );
}
