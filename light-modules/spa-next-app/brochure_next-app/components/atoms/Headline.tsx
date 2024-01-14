interface HeadlineProps {
  text: string;
  colourTextSelect: any;
  sizeTextSelect: any;
  checkboxBold: any;
  checkboxUnderline: any;
  fontTypeSelect: any;
}

export default function Headline({
  text,
  colourTextSelect,
  sizeTextSelect,
  checkboxBold,
  checkboxUnderline,
  fontTypeSelect,
}: HeadlineProps) {
  return (
    <h2
      className={`text-purple text-xl font-bold false font-proximanova p-1text-${colourTextSelect} text-${sizeTextSelect} font-${
        checkboxBold && "bold"
      } ${checkboxUnderline && " underline"} font-${fontTypeSelect} p-1`}
    >
      {text}
    </h2>
  );
}
