import React from 'react'
import ExpanderRenderer from './ExpanderRenderer';
import ExpanderInteractive from './ExpanderInteractive';

function Expander(props:any) {

  console.log("props----------------------------------------",props)
  const renderer = <ExpanderRenderer {...props} />
  const newProps = {...props, renderer};
  return <ExpanderInteractive {...newProps} />;
}

export default Expander;
