import { EditableArea } from '@magnolia/react-editor';

export interface TextBoxProps {
    textBoxWithHeading: object|null
}

const TextBoxWithHeading=({
    textBoxWithHeading=null,
}:TextBoxProps): JSX.Element=>{
    return(
        <div className="bg-white p-2 mt-4 mb-4">
            {textBoxWithHeading && <EditableArea content={textBoxWithHeading} className='pr-11' />}
        
        </div>
    );
}

export {
    TextBoxWithHeading
}
