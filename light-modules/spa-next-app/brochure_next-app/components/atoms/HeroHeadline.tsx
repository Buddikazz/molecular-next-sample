interface HeadlineProps {
  text: string;
  colourTextSelect: string;
  sizeTextSelect: string;
  checkboxBold: boolean;
  checkboxUnderline: boolean;
  fontTypeSelect: string;
}

export default function HeroHeadline({
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
      } ${checkboxUnderline && " underline"} font-${fontTypeSelect} p-1  leading-9`}
    >
      {text}
    </h2>
  );
}
