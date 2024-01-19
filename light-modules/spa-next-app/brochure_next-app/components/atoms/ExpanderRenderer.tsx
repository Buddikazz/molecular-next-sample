/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { EditableArea } from "@magnolia/react-editor";

export interface ExpanderRendererProps {
  expanderItems: any;
  metadata: any;
}
function ExpanderRenderer(props: ExpanderRendererProps) {
  return (
    <EditableArea
      className="text-black p-1 bg-white"
      // eslint-disable-next-line react/destructuring-assignment
      content={props.expanderItems}
      // eslint-disable-next-line react/destructuring-assignment
      parentTemplateId={props.metadata["mgnl:template"]}
    />
  );
}

export default ExpanderRenderer;
