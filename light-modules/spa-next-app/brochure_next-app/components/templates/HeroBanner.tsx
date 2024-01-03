
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
    return (<div className="lg:flex bg-purple">
    <div className="flex justify-center w-full px-6 mx-10 my-10 lg:w-1/2">
      <div className="max-w-xl">
        <h1 className="font-semibold text-2xl md:text-3xl mt-5 leading-9 ">
          {" "}
          {heroHeadline && <EditableArea className="pb-4" content={heroHeadline} />}
        </h1>
        <div className="text-base leading-6 mb-2 md:mb-4">
          {heroSubTitle && <EditableArea content={heroSubTitle} />}
        </div>
        <ul className="mt-4 mb-4 md:mt-7 md:mb-5">
          {heroCheckedPara && <EditableArea content={heroCheckedPara} />}
        </ul>
        {heroButton && <EditableArea className="mb-4" content={heroButton} />}
      </div>
    </div>

    {/* <div className="w-full h-64 lg:w-1/2 lg:h-auto"> */}
      {heroImage && (
        <EditableArea
        className="flex w-1/2"
          content={heroImage}
        />
      )}
    {/* </div> */}
  </div>
        
    );
}

export {
    HeroBanner
}
