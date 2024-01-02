import React from "react";

interface ParagraphProps {
  richText: string;
  colourTextSelect: any;
  sizeTextSelect: any;
  checkboxBold: any;
  checkboxUnderline: any;
  fontTypeSelect: any;
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
      } ${
        checkboxUnderline && " underline"
      } font-${fontTypeSelect} p-1`}
      dangerouslySetInnerHTML={{ __html: richText }}
    />
  );
}
