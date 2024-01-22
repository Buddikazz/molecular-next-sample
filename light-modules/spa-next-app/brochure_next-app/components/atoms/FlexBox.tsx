/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import PropTypes from "prop-types";

import { EditableComponent, ComponentHelper } from "@magnolia/react-editor";

export interface MagnoliaContent {
  "@nodes": string[];
}

export interface FlexBoxProps {
  content: MagnoliaContent | any;
}

function FlexBox({ content = null }: FlexBoxProps): React.JSX.Element {
  const componentNames = content?.["@nodes"];

  return (
    <div className="flex-box">
      {componentNames.map((name: string) => (
        <EditableComponent
          key={ComponentHelper.buildKey(content[name])}
          content={content[name]}
        />
      ))}
    </div>
  );
}

FlexBox.propTypes = {
  content: PropTypes.shape({
    "@nodes": PropTypes.arrayOf(PropTypes.string),
  }),
};

export default FlexBox;
