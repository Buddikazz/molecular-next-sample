import { EditableArea } from '@magnolia/react-editor';

export interface FullWidthImageViewProps {
    FullImage: object | null
}

const FullWidthImageView = ({ FullImage }: FullWidthImageViewProps) => {
    return (
        <div className="px-0 xl:pl-40 xl:pr-40 sm:w-auto md:w-3/4 pl-3 flex justify-end">
            {Image && <EditableArea className="mx-auto w-full" content={FullImage} />}
        </div>

    );
}

export { FullWidthImageView };