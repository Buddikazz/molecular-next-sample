import { EditableArea } from '@magnolia/react-editor';

export interface TextBoxProps {
    textBoxWithHeading: object|null
}

const TextBoxWithHeading=({
    textBoxWithHeading=null,
}:TextBoxProps): JSX.Element=>{
    return(
        <div className="bg-white p-2 mt-4 mb-4 pl-40 pr-40 2xl:pl-72 2xl:pr-72">
            {textBoxWithHeading && <EditableArea content={textBoxWithHeading}  />}
        
        </div>
    );
}

export {
    TextBoxWithHeading
}
