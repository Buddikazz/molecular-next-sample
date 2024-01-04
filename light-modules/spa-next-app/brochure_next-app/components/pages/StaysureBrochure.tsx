import React from "react";
import { EditableArea } from "@magnolia/react-editor";

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
  return (
    <>
      <div className="flex">
        {heroBanner && (
          <EditableArea content={heroBanner} className="fullWidth" />
        )}
      </div>
      <div className="flex flex-col pl-40 pr-40 2xl:pl-72 2xl:pr-72">
        {body && <EditableArea content={body} className="fullWidth" />}
      </div>
    </>
  );
};

export { StaysureBrochure };
