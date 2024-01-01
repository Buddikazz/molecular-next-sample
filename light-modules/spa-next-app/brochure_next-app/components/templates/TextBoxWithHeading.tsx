import { EditableArea } from '@magnolia/react-editor';

export interface TextBoxProps {
    textBoxWithHeading: object|null
}

const TextBoxWithHeading=({
    textBoxWithHeading=null,
}:TextBoxProps): JSX.Element=>{
    return(
        <div className="bg-white p-2 m-8 ba">
            {textBoxWithHeading && <EditableArea content={textBoxWithHeading}  />}
        
        </div>
    );
}

export {
    TextBoxWithHeading
}
