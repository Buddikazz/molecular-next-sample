
import { EditableArea } from '@magnolia/react-editor';

export interface AccordionViewProps {
    accordionView: object | null
}

const AccordionView = ({
    accordionView = null,
}: AccordionViewProps): JSX.Element => {
    return (
        <div className="bg-white mt-4 mb-4 p-4">
            {accordionView && <EditableArea content={accordionView} />}

        </div>
    );
}

export {
    AccordionView
}
