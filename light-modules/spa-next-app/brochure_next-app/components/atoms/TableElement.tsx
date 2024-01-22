import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

interface TableElementProps {
  parentComponent: string;
  textColour: string;
  textSize: string;
  textAlign: string;
  checkboxBold: boolean;
  text: string;
  styleClass: string;
  background: string;
  fontTypeSelect: string;
  icon: string;
}

export default function TableElement({
  parentComponent = "tbody",
  textColour = "black",
  textSize = "sm",
  textAlign = "center",
  text = "",
  icon = "",
  checkboxBold,
  styleClass = "",
  background = "",
  fontTypeSelect,
}: TableElementProps) {
  // const renderContent = () => {
  //   let content;
  //   if (parentComponent === "tbody") {

  //      content = { <div
  //         className={`px-1 py-2 text-${textAlign} grid font-${fontTypeSelect} flex-1 border ${
  //           text === "" && icon === ""
  //             ? "border-transparent"
  //             : "border-gray-400"
  //         } ${styleClass} text-${textSize} text-${textColour} ${
  //           checkboxBold ? "font-bold" : ""
  //         }`}
  //       >
  //         if (icon === "") {text}
  //         else if (icon === "xIcon")
  //         {<FaXmark className="justify-self-center text-l text-green-600 " />}
  //         else
  //         <FaCheck className="text-l justify-self-center text-green-600 " />
  //       </div>
  //     )};
  //   } else {
  //     return (
  //       <div
  //         className={`px-1 py-2 rounded-md font-${fontTypeSelect} flex-1 text-${textAlign} border ${
  //           text === ""
  //             ? "border-transparent bg-white"
  //             : `border-gray-500 bg-${background}`
  //         } ${styleClass} text-${textSize} text-${textColour} ${
  //           checkboxBold ? "font-bold" : ""
  //         }`}
  //       >
  //         {text}
  //       </div>
  //     );
  //   }

  // };

  const contentComponent = () => {
    let content;

    if (
      parentComponent === "thead" ||
      (parentComponent === "tbody" && icon === "")
    ) {
      content = text;
    } else if (parentComponent === "tbody" && icon === "xIcon") {
      content = (
        <FaXmark className="justify-self-center text-l text-green-600 " />
      );
    } else if (parentComponent === "tbody" && icon === "checkIcon") {
      content = (
        <FaCheck className="text-l justify-self-center text-green-600 " />
      );
    }

    return content;
  };

  let styles;

  if (parentComponent === "thead") {
    if (text === "") {
      styles = `border-transparent bg-white`;
    } else {
      styles = `border-gray-500 bg-${background}`;
    }
  } else {
    styles =
      text === "" && icon === "" ? "border-transparent" : "border-gray-400";
  }

  return (
    <div
      className={`px-1 py-2  border flex-1 font-${fontTypeSelect} text-${textAlign} ${styles} ${styleClass} text-${textSize} text-${textColour} ${checkboxBold ? "font-bold" : ""} ${parentComponent === "thead" ? "rounded-md" : "grid"}`}
    >
      {contentComponent()}
    </div>
  );
}
