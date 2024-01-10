import React, { useMemo, useState } from "react";
import Styles from "./navBar.module.css";

type Props = {
  link: {
    linkname: string;
    href: string;
    subLinks: {
      linkname: string;
      href: string;
    }[];
  };
  screenType: "mobile" | "tablet" | "none" | "desktop";
};
function SubLinkItems({ link, screenType }: Readonly<Props>) {
  const [isSubMenusOpen, setIsSubMenusOpen] = useState(false);

  const subMenuDisplay = useMemo(() => {
    if (screenType === "desktop") {
      return "hidden";
    }
    return isSubMenusOpen ? "block" : "hidden";
  }, [isSubMenusOpen, screenType]);

  return (
    <>
      <div
        className={`${Styles.navItems} flex w-full justify-between transition-all duration-200`}
        aria-hidden="true"
        data-testid={`subLinkItems-testid-${screenType}`}
        onClick={() => {
          setIsSubMenusOpen(!isSubMenusOpen);
        }}
      >
        <div className="lg:mr-[5px]" aria-hidden="true">
          {link.linkname}
        </div>
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" lg:mr-0 mr-[-3px]"
        >
          <path
            d="M15 11.6667L12 14.6667L9 11.6667"
            stroke="#522367"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {link.subLinks && (
        <div
          className={` ${
            screenType === "desktop" && Styles.subMenu
          } lg:absolute relative bg-dark-surface-accent-1-(main) text-neutral-50
                   smallDesktop:text-base text-[15px] font-normal lg:top-[57px] z-[2] left-0 ${subMenuDisplay} lg:mx-0 mx-[-12px]`}
          data-testid={`subLinkItems-list-testid-${screenType}`}
        >
          <ul>
            {link.subLinks.map((sublink) => (
              <li
                key={sublink.href}
                className=" flex w-full whitespace-nowrap pl-10px pr-12px lg:border-none border-t border-t-[#ffffff61] hover:underline"
              >
                <a
                  className=" lg:text-base text-[15px] tracking-[0.1px] py-[11px] px-spacing-s w-full smallDesktop:leading-[17.6px] 
                          leading-[16.5px] pl-spacing-xs"
                  href={sublink.href}
                >
                  {sublink.linkname}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default SubLinkItems;
