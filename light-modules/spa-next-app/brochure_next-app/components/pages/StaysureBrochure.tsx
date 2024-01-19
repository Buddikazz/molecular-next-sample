'use client';

import React from "react";
import { EditableArea } from "@magnolia/react-editor";
import { usePathname } from "next/navigation";
import { Breadcrumb } from "../atoms/Breadcrumb";
import { useRouter } from "next/router";
import { usePageContext } from "@/context/PageContext";

interface Props {
  body?: object | null;
  heroBanner?: object | null;
}

function StaysureBrochure({
  body = null,
  heroBanner = null,
}: Props): JSX.Element {

  // const path = usePathname();
  // console.log("current path name++++++++++",path);
  
  // console.log("path of the page/////")

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
      <Breadcrumb path={page} />
      <div className="flex flex-col px-0 xl:pl-52 xl:pr-52 bg-white">
        {body && <EditableArea content={body} className="fullWidth" />}
      </div>
    </>
  );
}

export default StaysureBrochure;
