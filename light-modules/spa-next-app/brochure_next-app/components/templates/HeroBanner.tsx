
import { EditableArea } from '@magnolia/react-editor';

export interface HeroBannerProps {
    heroBanner: object | null,
    heroImage: object | null,
    heroHeadline: object | null,
    heroSubTitle: object | null,
    heroButton: object | null,
    heroCheckedPara: object | null,
}

const HeroBanner = ({
    heroImage = null,
    heroHeadline = null,
    heroSubTitle = null,
    heroButton = null,
    heroCheckedPara = null,
}: HeroBannerProps): JSX.Element => {
    return (
        <div className="md:flex">
            <div className="md:flex-1  bg-purple ">
                <div className='md:leading-9 w-full md:mt-24 md:ml-40 md:mr-40 text-white p-4 md:p-0 md:mb-4 mb-0'>
                    <h1 className='font-semibold text-2xl md:text-3xl leading-9 '> {heroHeadline && <EditableArea content={heroHeadline} />}</h1>
                    <div className='text-base leading-6 mb-2 md:mb-4'>
                        {heroSubTitle && <EditableArea content={heroSubTitle} />}
                    </div>
                    <ul className='mt-4 mb-4 md:mt-7 md:mb-5'>
                        {heroCheckedPara && <EditableArea content={heroCheckedPara} />}
                    </ul>
                    {heroButton && <EditableArea content={heroButton} />}
                </div>
            </div>
            {heroImage && <EditableArea className='md:flex-1 flex-col' content={heroImage} />}

        </div>
    );
}

export {
    HeroBanner
}
