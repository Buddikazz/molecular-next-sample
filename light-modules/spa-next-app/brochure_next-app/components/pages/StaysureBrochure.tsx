
import React from 'react';
import { EditableArea } from '@magnolia/react-editor';


interface Props{
  header?: object|null,
  body?: object|null,
  footer?: object|null,
}

const StaysureBrochure = ({
  header=null,
  body=null,
  footer=null
}:Props): JSX.Element => {

  return (
    <div className="flex flex-col pl-52 pr-52 2xl:pl-72 2xl:pr-72"> 
      { body && <EditableArea content={body} className="fullWidth" /> }
    </div>
  ) 
};

export {
  StaysureBrochure
};