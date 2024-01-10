import React from "react";
import { EditableArea } from "@magnolia/react-editor";
import Header from "../organisms/header/header";

interface Props {
  header?: object | null;
  body?: object | null;
  footer?: object | null;
  heroBanner?: object | null;
}

const StaysureBrochure = ({
  header=null,
  body = null,
  heroBanner = null,
}: Props): JSX.Element => {
  return (
    <>
    <div className="flex flex-col">

      {header && <Header />}
    </div>
      <div className="flex">
        {heroBanner && (
          <EditableArea content={heroBanner} className="fullWidth" />
        )}
      </div>
      <div className="flex mb-10">
        {body && <EditableArea content={body} className="fullWidth" />}
      </div>
    </>
  );
};

export { StaysureBrochure };
