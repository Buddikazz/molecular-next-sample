interface LinkProps {
  styleClass: string,
  url: string;
  text: string;
  marginLeft?: string;
  hoverTextColor?: string;
  colourTextSelect: any;
  sizeTextSelect: any;
  checkboxBold: any;
  checkboxUnderline: any;
  fontTypeSelect: any;
}

export default function Link({
  url,
  text,
  marginLeft,
  hoverTextColor,
  colourTextSelect,
  sizeTextSelect,
  checkboxBold,
  checkboxUnderline,
  fontTypeSelect,
}: LinkProps) {
  return (
    <a
      className={` ml-${marginLeft} hover:text-${hoverTextColor} 
      text-${colourTextSelect} text-${sizeTextSelect} font-${
        checkboxBold && "bold"
      } ${checkboxUnderline && " underline"} font-${fontTypeSelect}
      `}
      href={url}
    >
      {text}
    </a>
  );
}
