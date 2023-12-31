"use client"

import { EditablePage } from '@magnolia/react-editor';

// pages
import { StaysureBrochure } from '@/components/pages/StaysureBrochure';
// templates
import Expander from '@/components/atoms/Expander';
import Paragraph from '@/components/atoms/Paragraph';
import Image from '@/components/atoms/Image';
import Headline from '@/components/atoms/Headline';
import { AccordionView } from '@/components/templates/AccordionView';
import { TextBoxWithImageView } from '@/components/templates/TextBoxWithImageView';
import RichParagraph from '@/components/atoms/RichParagraph';
import { HeaderSteper } from '@/components/molecules/HeaderSteper';
import { NumberSteper } from '@/components/molecules/NumberSteper';
import { SteperView } from '@/components/templates/SteperView';
import Link from '@/components/atoms/Link';
import { StaysureColumnView } from '@/components/templates/StaysureColumnView';
import { ColumnItem } from '@/components/molecules/ColumnItem';
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
      'atom:components/link': Link,
      //molecules
      'molecules:components/header-steper': HeaderSteper,
      'molecules:components/number-steper': NumberSteper,
      'molecules:components/column-item': ColumnItem,
      // pages
      'pages:pages/staysure-brochure': StaysureBrochure,
      // templates
      'templates:components/accordion-view':AccordionView,
      'templates:components/steper-view':SteperView,
      'templates:components/staysure-column-view':StaysureColumnView,
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