"use client"

import { EditablePage } from '@magnolia/react-editor';

// pages
import { StaysureBrochure } from '@/components/pages/StaysureBrochure';
// templates
import Expander from '@/components/atom/Expander';
import Paragraph from '@/components/atom/Paragraph';
import Image from '@/components/atom/Image';
import Headline from '@/components/atom/Headline';
import { AccordionView } from '@/components/templates/AccordionView';
import { TextBoxWithImageView } from '@/components/templates/TextBoxWithImageView';
import RichParagraph from '@/components/atom/RichParagraph';
// export interface MagnoliaPageWrapperProps{
//   templateAnnotations?:object|null,
//   page?:object|null,
// }

const PlatformPage = ({ props }: any): JSX.Element => {

  const config = {
    componentMappings: {
      //atom
      'atom:components/headline': Headline,
      'atom:components/paragraph': Paragraph,
      'atom:components/expander': Expander,
      'atom:components/rich-paragraph': RichParagraph,
      'atom:components/image': Image,
      //molecules
      // pages
      'pages:pages/staysure-brochure': StaysureBrochure,
      // templates
      'templates:components/accordion-view': AccordionView,
      'templates:components/textBoxWithImage-view': TextBoxWithImageView,

    },
  };
  console.log("props.page=", props.page, props.templateAnnotations);
  return (
    <div>
      {props.page && <EditablePage content={props.page} config={config} templateAnnotations={props.templateAnnotations} />}
    </div>
  );
}

export default PlatformPage