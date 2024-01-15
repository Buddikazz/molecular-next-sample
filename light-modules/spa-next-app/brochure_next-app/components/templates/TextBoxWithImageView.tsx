import { EditableArea } from '@magnolia/react-editor';

export interface TextBoxWithImageViewProps {
    textBox: object | null
    Image: object | null
}

const TextBoxWithImageView = ({
    Image = null, textBox = null,
}: TextBoxWithImageViewProps): JSX.Element => {
    return (
        <div className="flex flex-col-reverse lg:flex-row lg:items-center  my-4 bg-white">
            <div className=" lg:w-1/2 mx-8 mb-10 mt-6 text-center lg:text-start">
                {textBox && <EditableArea content={textBox} />}
            </div>
            <div className=" object-cover lg:w-3/4 justify-end">
                {Image && <EditableArea className="mx-auto" content={Image} />}
            </div>
        </div>
    );
}

export {
    TextBoxWithImageView
}