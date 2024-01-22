import React from "react";

interface ItemProps {
  text: string;
}

function Item(props: ItemProps): React.JSX.Element {
  const { text } = props;
  return <li className="Item">{text}</li>;
}

export default Item;
