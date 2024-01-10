import Image from "next/image";
import { useState } from "react";
import LoginSvg2 from "@/public/images/icons/login-svg2";
import LoginSvg1 from "@/public/images/icons/login-svg1";
import RightArrowIcon from "./../../../public/images/icons/right-arrow-white-icon.svg";
import Styles from "./buttons.module.css";
import PhoneIcon from "./../../../public/images/icons/phone.svg";
import MenuIcon from "./../../../public/images/icons/menu-icon.svg";
import CloseIcon from "./../../../public/images/icons/close-icon";

function QuoteBtn(props: Readonly<{ buttopnText: string }>) {
  const { buttopnText } = props;
  const handleQuoteButtonClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <button
      type="button"
      data-testid="quote-btn-testid"
      className=" flex bg-[#ea580c] hover:bg-[#ef7d0a] items-center py-[8px] smallDesktop:px-[12px] lg:px-[8px] pr-[20px] pl-[12px] rounded-radius-s h-[40px] mb-[5px]"
      onClick={() => {
        handleQuoteButtonClick(
          "https://travelinsurance.staysure.co.uk/quote/policy-details"
        );
      }}
    >
      <Image
        className=" smallDesktop:mr-[3px] lg:mr-[0] mr-[5px] "
        src={RightArrowIcon}
        alt=" arrow icon"
      />
      <span
        className=" smallDesktop:text-lg lg:text-[15px] text-lg font-semibold text-neutral-50 
      leading-[18px] font-ciutadella "
      >
        {buttopnText}
      </span>
    </button>
  );
}

function LoginBtn(props: Readonly<{ buttopnText: string }>) {
  const { buttopnText } = props;
  const handleLgInButtonClick = (link: string) => {
    window.location.href = link;
  };
  return (
    <button
      className={` ${Styles.loginBtn} flex items-center border-[2px] border-brand-purple-700 
    lg:rounded-radius-s justify-center py-[6px] lg:px-[10px] px-spacing-m 
    text-brand-purple-700 hover:text-neutral-50 hover:bg-dark-surface-accent-1-(main) 
    md:w-auto w-spacing-xxl md:h-auto h-spacing-xxl `}
      type="button"
      data-testid="login-btn-testid"
      onClick={() => handleLgInButtonClick("https://my.staysure.co.uk/signin")}
    >
      <LoginSvg1 className=" lg:mr-[5px] lg:block hidden" />
      <LoginSvg2 className=" lg:mr-[5px] lg:hidden block" />

      <span className=" font-semibold  leading-[16px] lg:block hidden">
        {buttopnText}
      </span>
    </button>
  );
}

function CallBtn({
  isOpen,
}: Readonly<{ isOpen: (val: boolean) => void | undefined }>) {
  const [isCallOpen, setIsCallOpen] = useState(false);
  return (
    <button
      onClick={() => {
        setIsCallOpen(!isCallOpen);
        if (isOpen && typeof isOpen === "function") {
          isOpen(!isCallOpen);
        }
      }}
      type="button"
      className=" flex items-center border-[2px] border-brand-purple-700 px-[12px] 
      md:w-auto w-spacing-xxl md:h-auto h-spacing-xxl"
      data-testid="call-btn-testid"
    >
      {!isCallOpen && (
        <Image src={PhoneIcon} alt="phone" className=" mr-[2px]" />
      )}
      <div className=" mr-spacing-xxs">
        {isCallOpen && <CloseIcon className="stroke-brand-purple-700" />}
      </div>
      <div
        className=" font-opensans text-[20px] font-semibold leading-[20px] uppercase 
      md:block hidden"
      >
        call
      </div>
    </button>
  );
}

function MenuBtn({
  isOpen,
}: Readonly<{ isOpen: (val: boolean) => void | undefined }>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <button
      onClick={() => {
        setIsMenuOpen(!isMenuOpen);
        if (isOpen && typeof isOpen === "function") {
          isOpen(!isMenuOpen);
        }
      }}
      type="button"
      data-testid="menu-btn-testid"
      className=" flex bg-dark-surface-accent-1-(main) items-center px-[12px] py-[8px] 
      md:w-auto w-spacing-xxl md:h-auto h-spacing-xxl"
    >
      <div className=" mr-spacing-xxs">
        <Image
          className={`${isMenuOpen && "hidden"} `}
          src={MenuIcon}
          alt="menu icon"
        />
        <CloseIcon className={`${!isMenuOpen && "hidden"} `} stroke="white" />
      </div>
      <div
        className=" font-opensans text-[20px] leading-[20px] uppercase text-neutral-50 
      font-semibold md:block hidden"
      >
        menu
      </div>
    </button>
  );
}

export { QuoteBtn, LoginBtn, CallBtn, MenuBtn };
