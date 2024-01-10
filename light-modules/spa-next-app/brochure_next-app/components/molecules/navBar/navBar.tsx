import { HeaderType } from "@/types/commonTypes";
import Styles from "./navBar.module.css";
import SubLinkItems from "./subLinkItems";

function NavBar({
  screenType,
  header,
}: Readonly<{
  screenType: "mobile" | "tablet" | "none" | "desktop";
  header: HeaderType;
}>) {
  const links = [
    {
      linkname: header?.travelInsurance,
      href: "https://www.staysure.co.uk/travel-insurance/",
      subLinks: [
        {
          linkname: header?.travelInsuranceMenu1,
          href: "https://www.staysure.co.uk/single-trip-insurance/",
        },
        {
          linkname: header?.travelInsuranceMenu2,
          href: "https://www.staysure.co.uk/annual-travel-insurance/",
        },
        {
          linkname: header?.travelInsuranceMenu3,
          href: "https://www.staysure.co.uk/medical-travel-insurance/",
        },
        {
          linkname: header?.travelInsuranceMenu4,
          href: "https://www.staysure.co.uk/coronavirus-travel-insurance/",
        },
        {
          linkname: header?.travelInsuranceMenu5,
          href: "https://www.staysure.co.uk/europe-travel-insurance/",
        },
        {
          linkname: header?.travelInsuranceMenu6,
          href: "https://www.staysure.co.uk/long-stay-travel-insurance/",
        },
        {
          linkname: header?.travelInsuranceMenu7,
          href: "https://www.staysure.co.uk/worldwide-travel-insurance/",
        },
        {
          linkname: header?.travelInsuranceMenu8,
          href: "https://www.staysure.co.uk/uk-travel-insurance/",
        },
        {
          linkname: header?.travelInsuranceMenu9,
          href: "https://www.staysure.co.uk/cruise-travel-insurance/",
        },
        {
          linkname: header?.travelInsuranceMenu10,
          href: "https://www.staysure.co.uk/winter-sports-travel-insurance/",
        },
        {
          linkname: header?.travelInsuranceMenu11,
          href: "https://www.staysure.co.uk/over-50-travel-insurance/",
        },
        {
          linkname: header?.travelInsuranceMenu12,
          href: "https://www.staysure.com/",
        },
      ],
    },
    {
      linkname: header?.otherProducts,
      href: "https://www.staysure.co.uk/products/",
    },
    {
      linkname: header?.whyStaysure,
      href: "https://www.staysure.co.uk/why-staysure/",
    },
    {
      linkname: header?.claims,
      href: "https://www.staysure.co.uk/claims/",
    },
    {
      linkname: header?.blog,
      href: "https://www.staysure.co.uk/category/lifestyle/",
    },
    {
      linkname: header?.help,
      href: "https://help.staysure.co.uk/hc/en-us",
      subLinks: [
        {
          linkname: header?.helpMenu1,
          href: "https://help.staysure.co.uk/hc/en-us",
        },
      ],
    },
  ];
  return (
    <nav
      className={` ${Styles.navBar} w-full h-auto lg:bg-neutral-50 bg-dark-surface-accent-1-(main)`}
      data-testid={`navBar-testid-${screenType}`}
    >
      <ul
        className=" lg:bg-neutral-50 bg-dark-surface-accent-1-(main) font-ciutadella lg:text-text-title text-neutral-50 lg:text-[20px] text-[18px] font-extrabold 
      lg:leading-[20px] leading-[19.8px] flex lg:flex-row flex-col lg:justify-between"
      >
        {links?.map((link) => (
          <li
            key={link.href}
            className={` ${
              link.subLinks && Styles.dropDown
            }  relative flex lg:flex-row flex-col lg:px-spacing-xs px-[12px] lg:py-spacing-m py-spacing-xs leading-[20px] cursor-pointer 
            hover:bg-dark-surface-accent-1-(main) hover:text-neutral-50 h-[inherit] lg:border-none border-b border-b-[#ffffff61]`}
          >
            {link.subLinks === undefined && (
              <div className=" flex w-full justify-between transition-all duration-200">
                <a href={link.href}>{link.linkname}</a>
              </div>
            )}

            {link.subLinks && (
              <SubLinkItems link={link} screenType={screenType} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
