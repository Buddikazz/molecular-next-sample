import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from "./navBar";

// test NavBar render each screen type
test("test NavBar renders each screen type", () => {
  const screenTypes: ["mobile", "tablet", "none", "desktop"] = [
    "mobile",
    "tablet",
    "none",
    "desktop",
  ];
  screenTypes.forEach((screenType) => {
    const { getByTestId } = render(<NavBar screenType={screenType} />);
    expect(getByTestId(`navBar-testid-${screenType}`)).toBeInTheDocument();
  });
});
