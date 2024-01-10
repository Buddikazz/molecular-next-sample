import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SubLinkItems from "./subLinkItems";

const link = {
  linkname: "Travel Insurance",
  href: "https://www.staysure.co.uk/travel-insurance/",
  subLinks: [
    {
      linkname: "Single Trip Travel Insurance",
      href: "https://www.staysure.co.uk/single-trip-insurance/",
    },
    {
      linkname: "Annual Travel Insurance",
      href: "https://www.staysure.co.uk/annual-travel-insurance/",
    },
    {
      linkname: "Medical Travel Insurance",
      href: "https://www.staysure.co.uk/medical-travel-insurance/",
    },
    {
      linkname: " COVID Travel Insurance",
      href: "https://www.staysure.co.uk/coronavirus-travel-insurance/",
    },
    {
      linkname: "Europe Travel Insurance",
      href: "https://www.staysure.co.uk/europe-travel-insurance/",
    },
    {
      linkname: "Long Stay Travel Insurance",
      href: "https://www.staysure.co.uk/long-stay-travel-insurance/",
    },
    {
      linkname: "Worldwide Travel Insurance",
      href: "https://www.staysure.co.uk/worldwide-travel-insurance/",
    },
    {
      linkname: "UK Travel Insurance",
      href: "https://www.staysure.co.uk/uk-travel-insurance/",
    },
    {
      linkname: "Cruise Travel Insurance",
      href: "https://www.staysure.co.uk/cruise-travel-insurance/",
    },
    {
      linkname: "Winter Sports Travel Insurance",
      href: "https://www.staysure.co.uk/winter-sports-travel-insurance/",
    },
    {
      linkname: "Over 50s Travel Insurance",
      href: "https://www.staysure.co.uk/over-50-travel-insurance/",
    },
    {
      linkname: "Expat Travel Insurance",
      href: "https://www.staysure.com/",
    },
  ],
};

// test SubLinkItems render for each screen type
test("test SubLinkItems renders for each screen type", () => {
  const screenTypes: ["mobile", "tablet", "none", "desktop"] = [
    "mobile",
    "tablet",
    "none",
    "desktop",
  ];
  screenTypes.forEach((screenType) => {
    const { getByTestId } = render(
      <SubLinkItems link={link} screenType={screenType} />
    );
    expect(
      getByTestId(`subLinkItems-testid-${screenType}`)
    ).toBeInTheDocument();
  });
});

// test SubLinkItems renders after click in mobile screen
test("test SubLinkItems renders after click in mobile screen", () => {
  const { getByTestId } = render(
    <SubLinkItems link={link} screenType="mobile" />
  );
  expect(getByTestId("subLinkItems-list-testid-mobile")).toHaveClass("hidden");
  fireEvent.click(getByTestId("subLinkItems-testid-mobile"));
  expect(getByTestId("subLinkItems-list-testid-mobile")).not.toHaveClass(
    "hidden"
  );
});
