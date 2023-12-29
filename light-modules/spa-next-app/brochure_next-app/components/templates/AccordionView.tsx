
import { EditableArea } from '@magnolia/react-editor';

export interface AccordionViewProps {
    accordionView: object|null
}

const AccordionView=({
    accordionView=null,
}:AccordionViewProps): JSX.Element=>{
    return(
        <div className="bg-white p-2 m-8">
            {accordionView && <EditableArea content={accordionView}  />}
        
        </div>
    );
}

export {
    AccordionView
}
