import React from "react";
import { FaCheck } from "react-icons/fa";

interface CheckedParagraphProps {
  richText: string;
  fontColor: string;
  checkedIconColor?: string;
  clickableLink?: string;
}

export default function CheckedParagraph({
  richText,
  fontColor,
  checkedIconColor,
  clickableLink,
}: CheckedParagraphProps) {
  const iconClass = `text-[16px] mr-4 text-${checkedIconColor}`;
  const content = (
    <div
      className={`Paragraph text-${fontColor}`}
      dangerouslySetInnerHTML={{ __html: richText }}
    />
  );
  return (
    <li className="flex justify-center font-light font-proximanova items-start tb:justify-start text-center tb:text-start">
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
