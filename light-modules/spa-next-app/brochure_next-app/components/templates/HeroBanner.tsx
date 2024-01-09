
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
    <div className="tb:flex lg:flex bg-purple ">
      <div className="flex flex-1  justify-center  tb:w-1/2 my-10  lg:w-1/2">
        <div className="max-w-xl flex flex-col justify-center tb:justify-start tb:items-start items-center px-5">
          <h1 className="font-semibold text-3xl md:text-3xl mt-5 leading-9 ">
            {" "}
            {heroHeadline && <EditableArea className="pb-4" content={heroHeadline} />}
          </h1>
          <div className="text-center tb:text-start leading-6 mb-2 md:mb-4">
            {heroSubTitle && <EditableArea content={heroSubTitle} />}
          </div>
          <ul className="mt-4 mb-5 md:mt-7 md:mb-5">
            {heroCheckedPara && <EditableArea content={heroCheckedPara} />}
          </ul>
          {heroButton && <EditableArea className="mt-5" content={heroButton} />}
        </div>
      </div>
      {heroImage && (
        <EditableArea
          className="flex-1 px-4 pb-10 tb:w-1/2 tb:flex tb:px-0 tb:pb-0"
          content={heroImage}
        />
      )}
    </div>
  );
}

export {
  HeroBanner
}
