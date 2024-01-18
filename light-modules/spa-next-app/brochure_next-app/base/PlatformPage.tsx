"use client";

import { EditablePage } from "@magnolia/react-editor";

// pages
import { StaysureBrochure } from "@/components/pages/StaysureBrochure";
import { BreadcumTestingPage } from "@/components/pages/BreadcumTestingPage";
// templates
import Expander from "@/components/atoms/Expander";
import Paragraph from "@/components/atoms/Paragraph";
import Image from "@/components/atoms/Image";
import Headline from "@/components/atoms/Headline";
import Button from "@/components/atoms/Button";
import CheckedIconContent from "@/components/atoms/CheckedIconContent";
import { AccordionView } from "@/components/templates/AccordionView";
import { TextBoxWithImageView } from "@/components/templates/TextBoxWithImageView";
import RichParagraph from "@/components/atoms/RichParagraph";
import { HeaderSteper } from "@/components/molecules/HeaderSteper";
import { NumberSteper } from "@/components/molecules/NumberSteper";
import { SteperView } from "@/components/templates/SteperView";
import Link from "@/components/atoms/Link";
import { StaysureColumnView } from "@/components/templates/StaysureColumnView";
import { ColumnItem } from "@/components/molecules/ColumnItem";
import { TableView } from "@/components/templates/TableView";
import TableItem from "@/components/atoms/TableItem";
import { TextBoxWithHeading } from "@/components/templates/TextBoxWithHeading";
import { HeroBanner } from "@/components/templates/HeroBanner";
import { CTABlockView } from "@/components/templates/CTABlock";
import HeroHeadline from "@/components/atoms/HeroHeadline";
import { TableHeader } from "@/components/organisms/TableHeader";
import { TableRow } from "@/components/molecules/TableRow";
import { ExpertBox } from "@/components/templates/ExpertBox";
import { TrustBlockView } from "@/components/templates/TrustBlockView";
import { TrustBlock } from "@/components/molecules/TrustBlock";
import { Jumplink } from "@/components/molecules/Jumplink";
import { JumplinksView } from "@/components/templates/JumplinksView";
import CheckedParagraph from "@/components/atoms/CheckedParagraph";
import { NavigationBlockView } from "@/components/templates/NavigationBlockView";
import { NavigationBlock } from "@/components/molecules/NavigationBlock";
import VideoComponent from "@/components/atoms/VideoComponent";
import { VideoView } from "@/components/templates/VideoView";
import { SupportTextBlock } from "@/components/molecules/SupportTextBlock";
import { SupportTextBoxView } from "@/components/templates/SupportTextBoxView";
import { PolicyTableView } from "@/components/templates/PolicyTableView";
import TableElement from "@/components/atoms/TableElement";
import { PopularArticle } from "@/components/molecules/PopularArticle";
import { PopularArticleView } from "@/components/templates/PopularArticleView";
import ColumnTextBoxView from "@/components/templates/ColumnTextBoxView";
import CaveatBlockView from "@/components/templates/CaveatBlockView";
import { FullWidthImageView } from "@/components/templates/FullWidthImageView";
import CTAButtonView from "@/components/templates/CTAButtonView";
import HeadingView from "@/components/templates/HeadingView";
import BlogDetailsView from "@/components/templates/BlogDetailsView";
import { StepsBox } from "@/components/molecules/StepsBox";
import { StepsBoxView } from "@/components/templates/StepsBoxView";
import NumberBox from "@/components/atoms/NumberBox";
import { PageProvider } from "@/context/PageContext";


// export interface MagnoliaPageWrapperProps{
//   templateAnnotations?:object|null,
//   page?:object|null,
// }

const PlatformPage = ({ props }: any): JSX.Element => {
  const config = {
    componentMappings: {
      //atom
      "atom:components/headline": Headline,
      "atom:components/paragraph": Paragraph,
      "atom:components/expander": Expander,
      "atom:components/rich-paragraph": RichParagraph,
      "atom:components/image": Image,
      "atom:components/link": Link,
      "atom:components/table-item": TableItem,
      "atom:components/table-element": TableElement,
      "atom:components/button": Button,
      "atom:components/checked-paragraph": CheckedParagraph,
      "atom:components/hero-headline": HeroHeadline,
      "atom:components/video": VideoComponent,
      "atom:components/number-box": NumberBox,
      //molecules
      "molecules:components/header-steper": HeaderSteper,
      "molecules:components/number-steper": NumberSteper,
      "molecules:components/column-item": ColumnItem,
      "molecules:components/navigation-block": NavigationBlock,
      "molecules:components/trust-block": TrustBlock,
      "molecules:components/jumplink": Jumplink,
      "molecules:components/support-text-box-element": SupportTextBlock,
      "molecules:components/table-row": TableRow,
      "molecules:components/popular-article": PopularArticle,
      "molecules:components/steps-box": StepsBox,
      //organisms
      "organisms:components/table-header": TableHeader,
      // pages
      "pages:pages/staysure-brochure": StaysureBrochure,
      "pages:pages/breadcum-testing-page": BreadcumTestingPage,
      // templates
      "templates:components/accordion-view": AccordionView,
      "templates:components/steper-view": SteperView,
      "templates:components/staysure-column-view": StaysureColumnView,
      "templates:components/textBoxWithImage-view": TextBoxWithImageView,
      "templates:components/table-view": TableView,
      "templates:components/textbox-with-heading": TextBoxWithHeading,
      "templates:components/hero-banner": HeroBanner,
      "templates:components/cta-block": CTABlockView,
      "templates:components/navigation-block-view": NavigationBlockView,
      "templates:components/expert-box": ExpertBox,
      "templates:components/trustBlock-view": TrustBlockView,
      "templates:components/jumplinks-view": JumplinksView,
      "templates:components/column-text-box-view": ColumnTextBoxView,
      "templates:components/video-view": VideoView,
      "templates:components/support-text-box-view": SupportTextBoxView,
      "templates:components/policy-table-view": PolicyTableView,
      "templates:components/caveat-block-view": CaveatBlockView,
      "templates:components/popular-article-view": PopularArticleView,
      "templates:components/full-width-image-view": FullWidthImageView,
      "templates:components/cta-button-view": CTAButtonView,
      "templates:components/heading-view": HeadingView,
      "templates:components/blog-details-view": BlogDetailsView,
      "templates:components/stepsbox-view": StepsBoxView,
    },
  };

  console.log("props.page=", props.page, props.templateAnnotations);
 
  console.log("path.nav", props.pagenav);
  return (
    <PageProvider page={props.page['@path']}>
      <div>
        {props.page && (
          <EditablePage
            content={props.page}
            config={config}
            templateAnnotations={props.templateAnnotations}
          />
        )}
      </div>
    </PageProvider>
  );
};

export default PlatformPage;
