import { renderHook } from "@testing-library/react";
import useMediaQuery, { getMatches } from "./useMediaQuery";

const responsiveWidth = (queryValue: string) => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: query === queryValue,
      media: query,
      addListener: () => {},
      removeListener: () => {},
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true,
    })),
  });
};

let windowSpy: jest.SpyInstance;
beforeEach(() => {
  windowSpy = jest.spyOn(globalThis, "window", "get");
});

afterEach(() => {
  windowSpy.mockRestore();
});

// test useMediaQuery for mobile and tablet
test("test useMediaQuery for mobile and tablet", () => {
  responsiveWidth("(max-width: 1023px)");
  const { result } = renderHook(() => useMediaQuery("(max-width: 1023px)"));
  expect(result.current).toBe(true);
});

// test useMediaQuery for dekstop
test("test useMediaQuery for dekstop", () => {
  responsiveWidth("(min-width: 1024px)");
  const { result } = renderHook(() => useMediaQuery("(max-width: 1023px)"));
  expect(result.current).toBe(false);
});

// test getMatches function for window undefined situation
test("test window undefined", () => {
  windowSpy.mockImplementation(() => undefined);
  const result = getMatches("(max-width: 1023px)");
  expect(result).toBe(false);
});
