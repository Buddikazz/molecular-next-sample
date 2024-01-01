import React from 'react';
import {EditableArea} from "@magnolia/react-editor";

interface ListProps{
  items:any,
  metadata:any,
  styleClass:string
}


const List = (props:ListProps) => {
  const { items } = props;

  return (
    <>
      <div className='hint'>[LIST]</div>
      <ul className='List'>
        <EditableArea content={items} parentTemplateId={props.metadata['mgnl:template']}/>
      </ul>
    </>
  );
};

export default List;
