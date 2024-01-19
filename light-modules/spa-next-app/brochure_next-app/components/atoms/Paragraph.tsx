import React from "react";

interface ParagraphProps {
  richText: string;
  colourTextSelect: string;
  sizeTextSelect: string;
  checkboxBold: boolean;
  checkboxUnderline: boolean;
  fontTypeSelect: string;
}

export default function Paragraph({
  richText,
  colourTextSelect,
  sizeTextSelect,
  checkboxBold,
  checkboxUnderline,
  fontTypeSelect,
}: ParagraphProps) {
  return (
    <div
      className={`text-${colourTextSelect} text-${sizeTextSelect} font-${
        checkboxBold && "bold"
      } ${checkboxUnderline && " underline"} font-${fontTypeSelect} p-2`}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: richText }}
    />
  );
}
