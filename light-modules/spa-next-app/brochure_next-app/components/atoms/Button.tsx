export interface ButtonProps {
  styleClass?: string;
  name: string;
  // get button type from magnolia and it will be used to set button style
  type?: string;
}

export default function Button({
  styleClass = "",
  name = "",
  type = "primary",
}: ButtonProps) {
  //   const buttonClasses = `${styleClass} w-40 flex items-center justify-center h-10 rounded-md ${
  //     type === "outline"
  //       ? "bg-white text-orange hover:text-white border border-orange"
  //       : "bg-orange text-white"
  //   } text-18 cursor-pointer hover:bg-dark-orange `;

  let buttonClasses = `${styleClass} border border-solid rounded px-4 py-2 min-w-64 hover:bg-dark-orange`;

  if (type === "primary") {
    buttonClasses += " bg-orange text-white";
  } else if (type === "secondary") {
    buttonClasses += " bg-white text-orange border-orange hover:text-white";
  }

  return (
    <button className={buttonClasses}>
      {" "}
      {type === "primary" && <i className="fas fa-caret-right mr-4"></i>}
      {name}
    </button>
  );
}
