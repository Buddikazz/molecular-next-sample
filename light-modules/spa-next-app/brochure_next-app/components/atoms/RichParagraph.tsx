import React from 'react';

interface RichParagraphProps{
  richText:string
}

export default function RichParagraph({
  richText
}:RichParagraphProps) {
  return <div className={`font-ciutadella`} dangerouslySetInnerHTML={{ __html: richText }} />;
}
