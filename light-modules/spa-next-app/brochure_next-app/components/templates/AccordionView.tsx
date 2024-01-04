
import { EditableArea } from '@magnolia/react-editor';

export interface AccordionViewProps {
    accordionView: object|null
}

const AccordionView=({
    accordionView=null,
}:AccordionViewProps): JSX.Element=>{
    return(
        <div className="bg-white mt-4 mb-4 pl-40 pr-40 2xl:pl-72 2xl:pr-72">
            {accordionView && <EditableArea content={accordionView}  />}
        
        </div>
    );
}

export {
    AccordionView
}
