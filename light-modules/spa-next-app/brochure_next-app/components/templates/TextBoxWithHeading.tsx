import { EditableArea } from '@magnolia/react-editor';

export interface TextBoxProps {
    textBoxWithHeading: object|null
}

const TextBoxWithHeading=({
    textBoxWithHeading=null,
}:TextBoxProps): JSX.Element=>{
    return(
        <div className="bg-white p-2 mt-4 mb-4 px-0 xl:pl-40 xl:pr-40">
            {textBoxWithHeading && <EditableArea content={textBoxWithHeading}  />}
        
        </div>
    );
}

export {
    TextBoxWithHeading
}
