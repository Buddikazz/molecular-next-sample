"use client"

import { EditablePage } from '@magnolia/react-editor';

// pages
import { StaysureBrochure } from '@/components/pages/StaysureBrochure';
// templates
import Expander from '@/components/atoms/Expander';
import Paragraph from '@/components/atoms/Paragraph';
import Headline from '@/components/atoms/Headline';
import Button from '@/components/atoms/Button';
import CheckedIconContent from '@/components/atoms/CheckedIconContent';
import { AccordionView } from '@/components/templates/AccordionView';
import RichParagraph from '@/components/atoms/RichParagraph';
import { HeaderSteper } from '@/components/molecules/HeaderSteper';
import { NumberSteper } from '@/components/molecules/NumberSteper';
import { SteperView } from '@/components/templates/SteperView';
import { TextBoxWithHeading } from '@/components/templates/TextBoxWithHeading';
// export interface MagnoliaPageWrapperProps{
//   templateAnnotations?:object|null,
//   page?:object|null,
// }

const PlatformPage = ({props}:any): JSX.Element => {

  const config = {
    componentMappings: {
      //atom
      'atom:components/headline': Headline,
      'atom:components/paragraph': Paragraph,
      'atom:components/expander': Expander,
      'atom:components/rich-paragraph': RichParagraph,
      'atom:components/button': Button,
      'atom:components/checked-paragraph': CheckedIconContent,
      //molecules
      'molecules:components/header-steper': HeaderSteper,
      'molecules:components/number-steper': NumberSteper,
      // pages
      'pages:pages/staysure-brochure': StaysureBrochure,
      // templates
      'templates:components/accordion-view':AccordionView,
      'templates:components/steper-view':SteperView,
      'templates:components/textbox-with-heading':TextBoxWithHeading,
    },
  };
console.log("props.page=", props.page,props.templateAnnotations);
  return (
      <div>
       {props.page && <EditablePage content={props.page} config={config} templateAnnotations={props.templateAnnotations} />}
     </div>
  );
}

export default PlatformPage