"use client";

import { EditablePage } from "@magnolia/react-editor";

// pages
import { StaysureBrochure } from "@/components/pages/StaysureBrochure";
// templates
import Expander from "@/components/atom/Expander";
import Paragraph from "@/components/atom/Paragraph";
import Headline from "@/components/atom/Headline";
import { AccordionView } from "@/components/templates/AccordionView";
import RichParagraph from "@/components/atom/RichParagraph";
import { TableView } from "@/components/templates/TableView";
import Table from "@/components/atom/Table";
// import Table from "@/components/templates/Table";
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
      "atom:components/table": Table,
      //molecules
      // pages
      "pages:pages/staysure-brochure": StaysureBrochure,
      // templates
      "templates:components/accordion-view": AccordionView,
      "templates:components/table-view": TableView,
    },
  };
  console.log("props.page=", props.page, props.templateAnnotations);
  return (
    <div>
      {props.page && (
        <EditablePage
          content={props.page}
          config={config}
          templateAnnotations={props.templateAnnotations}
        />
      )}
    </div>
  );
};

export default PlatformPage;
