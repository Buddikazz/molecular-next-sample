import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

interface TableElementProps {
  parentComponent: String;
  textColour: String;
  textSize: String;
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
        className={`px-1 py-2  text-center  grid font-${fontTypeSelect} flex-1  border ${text === "" && icon === "" ? `border-transparent` : `border-black`} ${styleClass} text-${textSize} text-${textColour} font-${checkboxBold && "bold"
          } align-center`}
      >
        {icon === "" ? text : icon === "xIcon" ? <FaXmark className="justify-self-center text-2xl text-black " /> : <FaCheck className="text-2xl justify-self-center text-black" />}
      </div> : <div
        className={`px-1 py-2 rounded-md bg-${background} font-${fontTypeSelect} flex-1 text-start  border ${text === "" ? `border-transparent` : `border-gray-500`} ${styleClass} text-${textSize} text-${textColour} font-${checkboxBold && "bold"
          }`}
      >
        {text}
      </div>
      }</>

  );
}