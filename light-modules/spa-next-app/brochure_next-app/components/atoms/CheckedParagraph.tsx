import React from "react";
import { FaCheck } from "react-icons/fa";

interface CheckedParagraphProps {
  richText: string;
  styleClass: string;
  checkedIconColor?: string;
}

export default function CheckedParagraph({
  richText,
  styleClass,
  checkedIconColor,
}: CheckedParagraphProps) {
  const iconClass = `text-2xl mr-4 text-${checkedIconColor}`;
  return (
    <li className="flex">
      <div>
        <FaCheck className={iconClass} />
      </div>
      <div
        className={`Paragraph ${styleClass}`}
        dangerouslySetInnerHTML={{ __html: richText }}
      />
    </li>
  );
}
