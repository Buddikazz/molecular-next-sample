export interface ButtonProps {
  styleClass?: string;
  name: string;
  type?: string;
  rounded?: boolean;
  hoverColor?: string;
  btnColor?: string;
  textColor?: string;
}

export default function Button({
  styleClass = "",
  name = "",
  type = "primary",
  rounded = false,
  btnColor = "",
  textColor = "",
  hoverColor = "",
}: ButtonProps) {
  let buttonClasses = `${styleClass} border border-solid ${
    rounded ? "rounded" : ""
  } px-4 py-2 min-w-64`;

  if (type === "primary") {
    buttonClasses += ` bg-${btnColor} text-${textColor} hover:bg-${hoverColor}`;
  } else if (type === "secondary") {
    buttonClasses += ` bg-white text-${textColor} border-${btnColor} hover:text-white hover:bg-${hoverColor}`;
  }

  return (
    <button className={buttonClasses}>
      {type === "primary" && <i className="fas fa-caret-right mr-4"></i>}
      {name}
    </button>
  );
}
