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
            <div className='w-full h-full my-4 '>
                {Background && <EditableArea content={Background} />}
            </div>
            <div className={`bg-${bgColourSelectValue} flex flex-col items-center lg:items-start  md:flex-row md:items-start tb:flex-row tb:items-center p-10 md:py-10`}>
                <div className='md:w-1/2 tb:w-1/2 py-10 md:py-0'>
                    {expertBoxImage && <EditableArea content={expertBoxImage} />}
                </div>
                <div className='tb:ml-0 tb:mr-20 text-center md:text-start text-white md:w-1/2'>
                    <div className='mb-8'>  {expertBoxHeadline && <EditableArea content={expertBoxHeadline} />}</div>
                </div>
            </div>
        </>
    );
}

export {
    ExpertBox
}
