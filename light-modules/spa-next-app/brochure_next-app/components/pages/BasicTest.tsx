import React from "react";
import { EditableArea } from "@magnolia/react-editor";

interface Props {
  header?: object | null;
  body?: object | null;
  footer?: object | null;
  heroBanner?: object | null;
}

const BasicTest = ({

  body = null,
  heroBanner=null,
}: Props): JSX.Element => {
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
};

export { BasicTest };
