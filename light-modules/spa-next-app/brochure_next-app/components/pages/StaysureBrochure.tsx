import React from "react";
import { EditableArea } from "@magnolia/react-editor";
import { BreadcrumbItem } from "staysure-component-library";
import Breadcrumbs from "staysure-component-library";
import { BreadcrumbsItemProps } from "staysure-component-library/dist/components/breadcrumbs/breadcrumbsItem";

interface Props {
  header?: object | null;
  body?: object | null;
  footer?: object | null;
  heroBanner?: object | null;
}

const StaysureBrochure = ({
  header = null,
  body = null,
  footer = null,
  heroBanner = null,
}: Props): JSX.Element => {

  // const breadcrumbItems: BreadcrumbsItemProps[] = [
  //   { isCurrent: false, isDisabled: false, children: "Home", href: "/" },
  // ];


  return (
    <>
      <div className="flex">
        {heroBanner && (
          <EditableArea content={heroBanner} className="fullWidth" />
        )}
      </div>
      {/* <Breadcrumbs semanticColor="Light Background" spacing="comfortable" items={breadcrumbItems} /> */}
      <div className="flex flex-row">
        <BreadcrumbItem href="/home">Home</BreadcrumbItem>
        <BreadcrumbItem href="/about" isCurrent>Travel Insurance</BreadcrumbItem>
      </div>



      <div className="flex flex-col pl-40 pr-40 2xl:pl-72 2xl:pr-72">
        {body && <EditableArea content={body} className="fullWidth" />}
      </div>
    </>
  );
};

export { StaysureBrochure };
