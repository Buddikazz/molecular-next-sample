import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HotLine from "./hotLineBlock";

// test HotLine render
test("test HotLine renders", () => {
  render(<HotLine />);
  expect(screen.getByTestId("hotLine-testid")).toBeInTheDocument();
});
