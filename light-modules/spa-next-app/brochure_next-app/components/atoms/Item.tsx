import React from 'react';

interface ItemProps{
    text:any,
    metadata:any,
    styleClass:string
  }

const Item = (props:ItemProps) => <li className="Item">{props.text}</li>;

export default Item;
