import React from "react";
import {EditableArea} from "@magnolia/react-editor";
export interface ExpanderRendererProps {
  expanderItems: any,
  metadata:any
}
function ExpanderRenderer(props:ExpanderRendererProps) {
  return <EditableArea className="text-black p-1 bg-white" content={props.expanderItems} parentTemplateId={props.metadata['mgnl:template']}/>;
}

export default ExpanderRenderer;
