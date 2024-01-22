import React from "react";
import { EditableArea } from "@magnolia/react-editor";

interface Props {
  body: object | null;
  heroBanner: object | null;
}

function BasicTest({ body = null, heroBanner = null }: Props): JSX.Element {
  return (
    <>
      {heroBanner && (
        <EditableArea content={heroBanner} className="fullWidth" />
      )}
      <div className="flex mb-10">
        {body && <EditableArea content={body} className="fullWidth" />}
      </div>
    </>
  );
}

export default BasicTest;
