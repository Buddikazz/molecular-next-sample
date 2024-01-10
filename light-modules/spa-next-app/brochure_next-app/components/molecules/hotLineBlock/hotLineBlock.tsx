import Image from "next/image";
import { HeaderType } from "@/types/commonTypes";
import RightArrowPurpleIcon from "./../../../public/images/icons/arrow-right-purple-icon.svg";
import Styles from "./hotLine.module.css";

function HotLine(props: Readonly<{ header: HeaderType }>) {
  const { header } = props;
  return (
    <div
      className=" lg:pl-[20px] flex smallDesktop:max-w-[406px] lg:max-w-[385px] w-full lg:justify-between 
    justify-center pt-[7px] md:flex-row flex-col md:gap-y-0 gap-y-spacing-l"
      data-testid="hotLine-testid"
    >
      <div className="  ">
        <div
          className=" flex flex-col font-ciutadella md:items-end items-center lg:pr-spacing-m md:pr-spacing-l md:border-r 
        border-neutral-300"
        >
          <div className=" lg:leading-[21px] leading-[18.9px] lg:text-[20px] text-[18px] font-extrabold text-text-body lg:mb-[5px]">
            {header?.salesTeamText}
          </div>
          <div className=" lg:leading-[21px] leading-[37.4px] lg:text-xl text-[34px] font-extrabold text-text-title lg:mb-[10px]">
            {header?.salesTeaNumber}
          </div>
          <div
            className={` ${Styles.salesBlock} relative leading-[20px] text-[17px] font-medium 
            text-text-title flex`}
          >
            <Image
              className=" mr-[3px]"
              src={RightArrowPurpleIcon}
              alt="right arrow"
            />

            <div className=" underline ">{header?.salesTeamOpeningTime}</div>
            <div
              className={` ${Styles.tpDialogBox} absolute bg-dark-surface-accent-1-(main) 
              text-neutral-50 font-opensans top-[32px] w-[209px] z-[2] p-[15px] right-[-10px]`}
            >
              <div className=" font-bold leading-[17.6px] text-[#F9B002] mb-[10px]">
                {header?.openingTimesSalesTeamHeader}
              </div>
              <p
                className=" list-disc text-[14px] pl-[22px]"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: header?.openingTimesSalesTeam,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" ">
        <div className=" flex flex-col font-ciutadella lg:items-end md:items-start items-center lg:px-spacing-m pr-0 md:pl-spacing-l lg:border-r border-neutral-300">
          <div className=" lg:leading-[21px] leading-[18.9px] lg:text-[20px] text-[18px] font-extrabold text-text-body lg:mb-[5px]">
            {header?.CustomerServiceText}
          </div>
          <div className=" lg:leading-[21px] leading-[37.4px] lg:text-xl text-[34px] font-extrabold text-text-title lg:mb-[10px]">
            {header?.CustomerServiceNumber}
          </div>
          <div
            className={` ${Styles.customerBlock} relative leading-[20px] text-[17px] font-medium 
            text-text-title flex`}
          >
            <Image
              className=" mr-[3px]"
              src={RightArrowPurpleIcon}
              alt="right arrow"
            />
            <div className=" underline ">
              {header?.CustomerServiceOpeningTime}
            </div>
            <div
              className={` ${Styles.tpDialogBox} absolute bg-dark-surface-accent-1-(main) 
              text-neutral-50 font-opensans top-[32px] w-[209px] z-[2] p-[15px] right-[-16px]`}
            >
              <div className=" font-bold leading-[17.6px] text-[#F9B002] mb-[10px]">
                {header?.openingTimesCustomerServiceHeader}
              </div>
              <p
                className=" list-disc text-[14px] pl-[22px]"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: header?.openingTimesCustomerService,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotLine;
