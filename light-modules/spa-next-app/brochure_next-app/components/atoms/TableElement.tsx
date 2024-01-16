import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

interface TableElementProps {
  parentComponent: String;
  textColour: String;
  textSize: String;
  textAlign: String;
  checkboxBold: boolean;
  text: String;
  styleClass: String;
  background: String,
  fontTypeSelect: String;
  icon: String,
}

export default function TableElement({
  parentComponent = "tbody",
  textColour = 'black',
  textSize = 'sm',
  textAlign = 'center',
  text = "",
  icon = "",
  checkboxBold,
  styleClass = "",
  background = "white",
  fontTypeSelect,
}: TableElementProps) {
  return (
    <>
      {parentComponent === "tbody" ? <div
        className={`px-1 py-2  text-${textAlign} grid font-${fontTypeSelect} flex-1  border ${text === "" && icon === "" ? `border-transparent` : `border-gray-400`} ${styleClass} text-${textSize} text-${textColour} font-${checkboxBold && "bold"
          }`}
      >
        {icon === "" ? text : icon === "xIcon" ? <FaXmark className="justify-self-center text-l text-green-600 " /> : <FaCheck className="text-l justify-self-center text-green-600 " />}
      </div> : <div
        className={`px-1 py-2 rounded-md font-${fontTypeSelect} flex-1 text-${textAlign}  border ${text === "" ? `border-transparent bg-white` : `border-gray-500 bg-${background} `} ${styleClass} text-${textSize} text-${textColour} font-${checkboxBold && "bold"
          }`}
      >
        {text}
      </div>
      }</>

  );
}