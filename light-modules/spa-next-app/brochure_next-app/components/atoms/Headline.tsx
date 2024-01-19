interface HeadlineProps {
  text: string;
  colourTextSelect: string;
  sizeTextSelect: string;
  checkboxBold: boolean;
  checkboxUnderline: boolean;
  fontTypeSelect: string;
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
      className={`text-${colourTextSelect} text-${sizeTextSelect} font-${
        checkboxBold && "bold"
      } ${checkboxUnderline && " underline"} font-${fontTypeSelect} p-1`}
    >
      {text}
    </h2>
  );
}
