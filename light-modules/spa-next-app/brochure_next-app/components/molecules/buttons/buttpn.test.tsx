import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { QuoteBtn, LoginBtn, CallBtn, MenuBtn } from "./buttons";

// test QuoteBtn renders
test("test QuoteBtn renders", () => {
  render(<QuoteBtn />);
  const quoteBtn = screen.getByTestId("quote-btn-testid");
  expect(quoteBtn).toBeInTheDocument();
});

// test QuoteBtn click
test("test QuoteBtn click", () => {
  render(<QuoteBtn />);
  const quoteBtn = screen.getByTestId("quote-btn-testid");
  expect(quoteBtn).toBeInTheDocument();

  window.open = jest.fn();

  fireEvent.click(quoteBtn);
  expect(window.open).toHaveBeenCalledTimes(1);
  expect(window.open).toHaveBeenCalledWith(
    "https://travelinsurance.staysure.co.uk/quote/policy-details",
    "_blank"
  );
});

// test LoginBtn renders
test("test LoginBtn renders", () => {
  render(<LoginBtn />);
  const loginBtn = screen.getByTestId("login-btn-testid");
  expect(loginBtn).toBeInTheDocument();
});

// test LoginBtn click
test("test LoginBtn click", () => {
  Object.defineProperty(window, "location", {
    value: {
      href: jest.fn(),
    },
    writable: true,
  });

  render(<LoginBtn />);
  const loginBtn = screen.getByTestId("login-btn-testid");
  expect(loginBtn).toBeInTheDocument();
  fireEvent.click(loginBtn);
  expect(window.location.href).toBe("https://my.staysure.co.uk/signin");
});

// test CallBtn renders
test("test CallBtn renders", () => {
  render(<CallBtn isOpen={() => {}} />);
  const callBtn = screen.getByTestId("call-btn-testid");
  expect(callBtn).toBeInTheDocument();
});

// test CallBtn click
test("test CallBtn click", () => {
  const isOpen = jest.fn();
  render(<CallBtn isOpen={isOpen} />);
  const callBtn = screen.getByTestId("call-btn-testid");
  expect(callBtn).toBeInTheDocument();
  fireEvent.click(callBtn);
  expect(isOpen).toHaveBeenCalledTimes(1);
});

// test MenuBtn renders
test("test MenuBtn renders", () => {
  render(<MenuBtn isOpen={() => {}} />);
  const menuBtn = screen.getByTestId("menu-btn-testid");
  expect(menuBtn).toBeInTheDocument();
});

// test MenuBtn click
test("test MenuBtn click", () => {
  const isOpen = jest.fn();
  render(<MenuBtn isOpen={isOpen} />);
  const menuBtn = screen.getByTestId("menu-btn-testid");
  expect(menuBtn).toBeInTheDocument();
  fireEvent.click(menuBtn);
  expect(isOpen).toHaveBeenCalledTimes(1);
});
