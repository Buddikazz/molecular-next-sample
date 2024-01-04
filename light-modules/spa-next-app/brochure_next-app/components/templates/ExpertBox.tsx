import { EditableArea } from '@magnolia/react-editor';
export interface ExpertBoxProps {
    expertBoxHeadline: object | null,
    expertBoxImage: object | null,
    Background: any,
}

const ExpertBox = ({
    expertBoxHeadline = null,
    expertBoxImage = null,
    Background = null,
}: ExpertBoxProps): JSX.Element => {
    const bgColourSelectValue = Background?.['0']?.['bgColourSelect'] ?? 'purple';
    return (
        <>
            <div className='w-full h-full'>
                {Background && <EditableArea content={Background} />}
            </div>
            <div className={`bg-${bgColourSelectValue} flex flex-row items-center p-10`}>
                <div className='w-1/2'>
                    {expertBoxImage && <EditableArea content={expertBoxImage} />}
                </div>
                <div className='ml-0 mr-20 text-white '>
                    <div className='mb-8'>  {expertBoxHeadline && <EditableArea content={expertBoxHeadline} />}</div>
                </div>
            </div>
        </>
    );
}

export {
    ExpertBox
}
