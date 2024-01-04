import { EditableArea } from '@magnolia/react-editor';

export interface BlogAuthorhipBoxProps {
    expertBoxHeadline: object | null,
    expertBoxImage: object | null,
}

const BlogAuthorhipBox = ({
    expertBoxHeadline = null,
    expertBoxImage = null,
}: BlogAuthorhipBoxProps): JSX.Element => {

    return (
        <div className="bg-light-gray flex flex-row items-center justify-center p-10">
            <div className='w-1/2'>
                {expertBoxImage && <EditableArea content={expertBoxImage} />}
            </div>
            <div className='ml-0 mr-20 text-white '>
                <div className='mb-8'>  {expertBoxHeadline && <EditableArea content={expertBoxHeadline} />}</div>
            </div>
        </div>
    );
}

export {
    BlogAuthorhipBox
}
