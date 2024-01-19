interface LinkProps {
  url: string;
  text: string;
  marginLeft?: string;
  hoverTextColor?: string;
  colourTextSelect: string;
  sizeTextSelect: string;
  checkboxBold: boolean;
  checkboxUnderline: boolean;
  fontTypeSelect: string;
}

const defaultProps: Partial<LinkProps> = {
  marginLeft: undefined,
  hoverTextColor: undefined,
};

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
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
}

Link.defaultProps = defaultProps;
