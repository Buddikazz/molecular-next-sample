interface HeadlineProps {
  text: string;
  styleClass: string;
  checkboxBold: any;
  sizeTextSelect: any;
}

export default function Headline({
  text,
  styleClass,
  checkboxBold,
  sizeTextSelect,
}: HeadlineProps) {
  return (
    <h2
      className={`${styleClass} text-${sizeTextSelect} font-ciutadella p-1 font-${
        checkboxBold && "bold"
      } `}
    >
      {text}
    </h2>
  );
}
