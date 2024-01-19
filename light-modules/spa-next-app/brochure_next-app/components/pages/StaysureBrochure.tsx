/* eslint-disable react/require-default-props */
import React from "react";
import { EditableArea } from "@magnolia/react-editor";

interface Props {
  body?: object | null;
  heroBanner?: object | null;
}

function StaysureBrochure({
  body = null,
  heroBanner = null,
}: Props): JSX.Element {
  return (
    <>
      <div className="flex">
        {heroBanner && (
          <EditableArea content={heroBanner} className="fullWidth" />
        )}
      </div>
      <div className="flex flex-col px-0 xl:pl-52 xl:pr-52 bg-white">
        {body && <EditableArea content={body} className="fullWidth" />}
      </div>
    </>
  );
}

export default StaysureBrochure;
