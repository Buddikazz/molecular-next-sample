/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ExpanderRenderer from "./ExpanderRenderer";
import ExpanderInteractive from "./ExpanderInteractive";

function Expander(props: any): React.JSX.Element {
  const renderer = <ExpanderRenderer {...props} />;
  const newProps = { ...props, renderer };
  return <ExpanderInteractive {...newProps} />;
}

export default Expander;
