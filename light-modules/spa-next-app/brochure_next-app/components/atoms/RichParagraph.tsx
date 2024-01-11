import React from 'react';

interface RichParagraphProps {
  richText: string
}

export default function RichParagraph({
  richText
}: RichParagraphProps) {
  return <li className='flex'>
    {/* <i className="fas fa-check mr-4 mt-2 text-xl text-orange"></i> */}
    <div className={`font-ciutadella`} dangerouslySetInnerHTML={{ __html: richText }} />
  </li>

}
