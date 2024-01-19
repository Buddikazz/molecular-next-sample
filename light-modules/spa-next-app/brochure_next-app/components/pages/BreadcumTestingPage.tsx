import React from "react";
import { EditableArea } from "@magnolia/react-editor";
import { BreadcrumbItem } from "staysure-component-library";
import { usePageContext } from "@/context/PageContext";
import { Breadcrumb } from "../atoms/Breadcrumb";

interface Props {
  header?: object | null;
  body?: object | null;
  footer?: object | null;
  heroBanner?: object | null;
}

const BreadcumTestingPage = ({
  header = null,
  body = null,
  footer = null,
  heroBanner = null,
}: Props): JSX.Element => {

  const {page}  = usePageContext();
  // const pagePathInString = JSON.stringify(page);
  console.log("page props again", page);

  return (
    <>
      <div className="flex">
        {heroBanner && (
          <EditableArea content={heroBanner} className="fullWidth" />
        )}
      </div>
      {/* <BreadcrumbItem>children={"testbreadcum2"}</BreadcrumbItem> */}
      <Breadcrumb path={page} />
      <div className="flex flex-col pl-40 pr-40 2xl:pl-72 2xl:pr-72">
        {body && <EditableArea content={body} className="fullWidth" />}
      </div>
    </>
  );
};

export { BreadcumTestingPage };
