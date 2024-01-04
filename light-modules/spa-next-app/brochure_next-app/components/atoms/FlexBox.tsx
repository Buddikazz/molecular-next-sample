import React from 'react';
import PropTypes from 'prop-types';

import {EditableComponent, ComponentHelper} from "@magnolia/react-editor";

export interface MagnoliaContent {
  '@nodes': string[],
}

export interface FlexBoxProps {
  content:MagnoliaContent|any
}


function FlexBox({content=null}:FlexBoxProps) {

  const componentNames = content?.['@nodes'];

  return (
    <div className="flex-box">
      {componentNames.map((name: string) => (
        <EditableComponent key={ComponentHelper.buildKey(content[name])} content={content[name]}/>
      ))}
    </div>
  );
}

FlexBox.propTypes = {
  content: PropTypes.object
};

export default FlexBox;
