import { EditableArea } from '@magnolia/react-editor';

export interface TextBoxWithImageViewProps {
    textBox: object | null
    Image: object | null
}

const TextBoxWithImageView = ({
    Image = null, textBox = null,
}: TextBoxWithImageViewProps): JSX.Element => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-center mt-4">
            <div className=" md:w-1/2  mt-4 sm:mt-0 mx-2">
                {textBox && <EditableArea content={textBox} />}
            </div>
            <div className="sm:pr-4 md:w-3/4 mx-2 justify-center">
                {Image && <EditableArea content={Image} />}
            </div>
        </div>
    );
}

export {
    TextBoxWithImageView
}