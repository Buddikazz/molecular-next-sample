"use client"

import { EditablePage } from '@magnolia/react-editor';

// pages
import { StaysureBrochure } from '@/components/pages/StaysureBrochure';
// templates
import Expander from '@/components/atoms/Expander';
import Paragraph from '@/components/atoms/Paragraph';
import Image from '@/components/atoms/Image';
import Headline from '@/components/atoms/Headline';
import Button from '@/components/atoms/Button';
import CheckedIconContent from '@/components/atoms/CheckedIconContent';
import { AccordionView } from '@/components/templates/AccordionView';
import { TextBoxWithImageView } from '@/components/templates/TextBoxWithImageView';
import RichParagraph from '@/components/atoms/RichParagraph';
import { HeaderSteper } from '@/components/molecules/HeaderSteper';
import { NumberSteper } from '@/components/molecules/NumberSteper';
import { SteperView } from '@/components/templates/SteperView';
import Link from '@/components/atoms/Link';
import { StaysureColumnView } from '@/components/templates/StaysureColumnView';
import { ColumnItem } from '@/components/molecules/ColumnItem';
import { TableView } from '@/components/templates/TableView';
import TableItem from '@/components/atoms/TableItem';
import { TextBoxWithHeading } from '@/components/templates/TextBoxWithHeading';

import { HeroBanner } from '@/components/templates/HeroBanner';

import { CTABlockView } from '@/components/templates/CTABlock';
import HeroHeadline from '@/components/atoms/HeroHeadline';
import { TableHeader } from '@/components/organisms/TableHeader';
import { TableRow } from '@/components/organisms/TableRow';
import { TrustBlockView } from '@/components/templates/TrustBlockView';
import { TrustBlock } from '@/components/molecules/TrustBlock';
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
      'atom:components/table-item': TableItem,
      'atom:components/button': Button,
      'atom:components/checked-paragraph': CheckedIconContent,
      'atom:components/hero-headline': HeroHeadline,
      //molecules
      'molecules:components/header-steper': HeaderSteper,
      'molecules:components/number-steper': NumberSteper,
      'molecules:components/column-item': ColumnItem,
      //organisms
      'organisms:components/table-header': TableHeader,
      'organisms:components/table-row': TableRow,
      'molecules:components/trust-block': TrustBlock,
      // pages
      'pages:pages/staysure-brochure': StaysureBrochure,
      // templates
      'templates:components/accordion-view': AccordionView,
      'templates:components/steper-view': SteperView,
      'templates:components/staysure-column-view': StaysureColumnView,
      'templates:components/textBoxWithImage-view': TextBoxWithImageView,
      'templates:components/table-view': TableView,
      'templates:components/textbox-with-heading':TextBoxWithHeading,
      'templates:components/hero-banner': HeroBanner,
      'templates:components/cta-block': CTABlockView,
      'templates:components/trustBlock-view': TrustBlockView,
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