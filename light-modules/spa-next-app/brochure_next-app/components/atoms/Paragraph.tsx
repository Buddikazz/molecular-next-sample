import React from 'react';

interface ParagraphProps{
  richText:string,
  styleClass:string
}

export default function Paragraph({
  richText,
  styleClass
}:ParagraphProps) {
  return <div className={`Paragraph ${styleClass} font-ciutadella p-1`} dangerouslySetInnerHTML={{ __html: richText }} />;
}
