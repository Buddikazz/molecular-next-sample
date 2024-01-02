import React from 'react';
import { FaCheck } from 'react-icons/fa';

interface CheckedParagraphProps {
    richText: string,
    styleClass: string
}

export default function CheckedParagraph({
    richText,
    styleClass
}: CheckedParagraphProps) {
    return <li className='flex'>
        <div>
            <FaCheck className="fas fa-check mr-4 mt-2 text-xl text-orange" />
        </div>
        <div className={`Paragraph ${styleClass}`} dangerouslySetInnerHTML={{ __html: richText }} />
    </li>

}
