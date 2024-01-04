import { EditableArea } from '@magnolia/react-editor';
import { log } from 'console';

export interface ExpertBoxProps {
    expertBoxHeadline: object | null,
    expertBoxImage: object | null,
}

const ExpertBox = ({
    expertBoxHeadline = null,
    expertBoxImage = null,
}: ExpertBoxProps): JSX.Element => {

    return (
        <div className="bg-purple flex flex-row items-center p-10 pl-40 pr-40 2xl:pl-72 2xl:pr-72">
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
    ExpertBox
}
