import React from "react";
import { FaCheck } from "react-icons/fa";

interface CheckedParagraphProps {
  richText: string;
  styleClass: string;
  checkedIconColor?: string;
  clickableLink?: string;
}

export default function CheckedParagraph({
  richText,
  styleClass,
  checkedIconColor,
  clickableLink,
}: CheckedParagraphProps) {
  const iconClass = `text-2xl mr-4 text-${checkedIconColor}`;
  const content = (
    <div
      className={`Paragraph ${styleClass}`}
      dangerouslySetInnerHTML={{ __html: richText }}
    />
  );

  return (
    <li className="flex">
      <div>
        <FaCheck className={iconClass} />
      </div>
      {clickableLink ? (
        <a href={clickableLink} className="underline">
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
}
