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
  name = "",
  type = "primary",
  rounded = false,
  btnColor = "",
  textColor = "",
  hoverColor = "",
}: ButtonProps) {
  let buttonClasses = `flex border  ${
    rounded ? "rounded" : ""
  } px-6 py-2 `;

  if (type === "primary") {
    buttonClasses += ` bg-${btnColor} text-${textColor} hover:bg-${hoverColor} border-${btnColor}`;
  } else if (type === "secondary") {
    buttonClasses += ` bg-white text-${textColor} border-orange hover:text-white hover:bg-${hoverColor}`;
  }

  return (
    <button className={buttonClasses+' text-center justify-center '}>
      {type === "primary" && <i className="fas fa-caret-right mr-4"></i>}
      {name}
    </button>
  );
}
