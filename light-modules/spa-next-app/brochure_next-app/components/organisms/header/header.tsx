import Image from "next/image";
import React, { useEffect } from "react";
import { HeaderType } from "@/types/commonTypes";
import HeaderLogo from "./../../../public/images/header-logo.svg";
import MobileHeaderLogo from "./../../../public/images/mobile-logo.svg";
import NavBar from "../../molecules/navBar/navBar";
import HotLine from "../../molecules/hotLineBlock/hotLineBlock";
import {
  QuoteBtn,
  LoginBtn,
  CallBtn,
  MenuBtn,
} from "../../molecules/buttons/buttons";
import Styles from "./header.module.css";
import useWindowSize from "@/hooks/useWindowSize/useWindowSize";

function Header() {
  const windowSize = useWindowSize();

  const [screenType, setScreenType] = React.useState<
    "desktop" | "tablet" | "mobile" | "none"
  >("none");

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isCallOpen, setIsCallOpen] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [header, setHeader] = React.useState<HeaderType>();
  useEffect(() => {
    if (windowSize && windowSize >= 904) {
      setScreenType("desktop");
    } else if (windowSize && windowSize >= 600) {
      setScreenType("tablet");
    } else if (windowSize && windowSize <= 599.98) {
      setScreenType("mobile");
    } else {
      setScreenType("none");
    }
  }, [windowSize]);

  const desktopHeader = () => {
    return (
      <div
        className=" relative flex flex-col justify-center items-center"
        data-testid="header-desktop-testid"
      >
        <div className=" max-w-[1200px] mx-auto my-0 w-[100%] relative ">
          <div
            className=" grid md:grid-cols-12 grid-cols-6 lg:gap-spacing-l gap-spacing-m 
          xl:mx-auto lg:mx-[72px] md:mx-[48px] mx-[24px]"
          >
            <div className=" col-span-12 flex justify-between gap-spacing-xs py-spacing-m">
              <div className=" xl:max-w-[320px] smallDesktop:max-w-[315px] lg:max-w-[230px] w-full">
                <a href="https://www.staysure.co.uk">
                  <Image src={HeaderLogo} alt="header logo" />
                </a>
              </div>
              <div className=" flex w-full justify-end pt-spacing-xxs">
                <HotLine header={header as HeaderType} />
                <div className=" pl-spacing-m flex flex-col font-ciutadella ">
                  <div
                    className=" font-semibold text-neutral-800 leading-[16.8px] mb-[2px] 
                  xl:text-base smallDesktop:text-[14px] text-[13px]"
                  >
                    {header?.beCoveredText}
                  </div>
                  <QuoteBtn buttopnText={header?.getAQuoteText as string} />
                  <LoginBtn buttopnText={header?.loginText as string} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" border-t-[1px] border-[#e5e5e5] max-w-[1390px] w-full" />
        <div className=" max-w-[1200px] mx-auto my-0 w-[100%] relative ">
          <div
            className=" grid md:grid-cols-12 grid-cols-6 lg:gap-spacing-l gap-spacing-m xl:mx-auto 
          lg:mx-[72px] md:mx-[48px] mx-[24px]"
          >
            <div className=" col-span-12 flex justify-between gap-spacing-xs">
              <NavBar header={header as HeaderType} screenType={screenType} />
            </div>
          </div>
        </div>
      </div>
    );
  };
  const tabletHeader = () => {
    return (
      <div
        className=" relative flex flex-col justify-center items-center gap"
        data-testid="header-mobile-testid"
      >
        <div
          className=" max-w-[1200px] mx-auto my-0 w-[100%] relative border-b-[1px]  
        border-[#e5e7eb] pb-[15px]"
        >
          <div
            className=" grid md:grid-cols-12 grid-cols-6 lg:gap-x-spacing-l gap-x-spacing-m 
          xl:mx-auto lg:mx-[72px] md:mx-[48px] mx-[16px] md:pt-0 pt-spacing-m"
          >
            {screenType === "tablet" && (
              <div className=" col-span-12">
                <div className=" max-w-[216px] w-full">
                  <a href="https://www.staysure.co.uk">
                    <Image src={HeaderLogo} alt="header logo" />
                  </a>
                </div>
              </div>
            )}

            <div className=" col-span-12 flex justify-between items-center relative lg:mb-0 mb-[15px]">
              <div className="">
                {screenType === "tablet" && (
                  <QuoteBtn buttopnText={header?.getAQuoteText as string} />
                )}
                {screenType === "mobile" && (
                  <a href="https://www.staysure.co.uk">
                    <Image src={MobileHeaderLogo} alt="header logo" />
                  </a>
                )}
              </div>
              <div
                className=" flex gap-x-spacing-xs lg:relative md:absolute relative right-0 
              lg:h-auto md:h-spacing-xxl h-auto "
              >
                <LoginBtn buttopnText={header?.loginText as string} />
                <CallBtn isOpen={(val) => setIsCallOpen(val)} />
                <MenuBtn
                  isOpen={(val: boolean) => {
                    setIsMenuOpen(val);
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className={`${"md:mt-[2px] max-w-[1200px] mx-auto my-0 w-[100%] bg-neutral-50 z-[2] h-auto"}`}
          >
            <div
              className="grid md:grid-cols-12 grid-cols-6 lg:gap-x-spacing-l gap-x-spacing-m 
                          xl:mx-auto lg:mx-[72px] md:mx-[48px] mx-[16px]"
            >
              <div className="col-span-12 flex flex-col">
                <div
                  data-testid="navBar-testid-mobile-hotline-btn-section"
                  className={`${
                    isCallOpen ? Styles.afterExpand : Styles.beforeExpand
                  } `}
                >
                  <div className="pb-spacing-l">
                    <HotLine header={header as HeaderType} />
                  </div>
                </div>

                <div
                  data-testid="navBar-testid-mobile-menu-btn-section"
                  className={`${
                    isMenuOpen ? Styles.afterExpand : Styles.beforeExpand
                  } `}
                >
                  <NavBar
                    header={header as HeaderType}
                    screenType={screenType}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {screenType === "desktop" && desktopHeader()}
      {(screenType === "mobile" || screenType === "tablet") && tabletHeader()}
    </>
  );
}

export default Header;
