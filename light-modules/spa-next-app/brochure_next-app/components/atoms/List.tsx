/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { EditableArea } from "@magnolia/react-editor";

interface MetadataType {
  "mgnl:template": string;
}
interface ListProps {
  items: any;
  metadata: MetadataType;
}

function List(props: ListProps) {
  const { items } = props;

  return (
    <>
      <div className="hint">[LIST]</div>
      <ul className="List">
        <EditableArea
          content={items}
          parentTemplateId={props.metadata["mgnl:template"]}
        />
      </ul>
    </>
  );
}

export default List;
