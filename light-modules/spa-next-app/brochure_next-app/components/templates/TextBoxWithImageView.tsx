import { EditableArea } from '@magnolia/react-editor';

export interface TextBoxWithImageViewProps {
    textBox: object | null
    Image: object | null
}

const TextBoxWithImageView = ({
    Image = null, textBox = null,
}: TextBoxWithImageViewProps): JSX.Element => {
    return (
        <div className="flex flex-col-reverse md:flex-row  mt-4 mb-4">
            <div className=" md:w-1/2  mt-4 sm:mt-0 justify-start">
                {textBox && <EditableArea content={textBox} />}
            </div>
            <div className="sm:pr-4 md:w-3/4 pl-3 justify-end">
                {Image && <EditableArea className="mx-auto" content={Image} />}
            </div>
        </div>
    );
}

export {
    TextBoxWithImageView
}