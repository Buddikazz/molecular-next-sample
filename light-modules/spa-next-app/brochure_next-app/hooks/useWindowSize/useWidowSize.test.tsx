import { renderHook } from "@testing-library/react";
import { faker } from "@faker-js/faker";
import useWindowSize from "./useWindowSize";

function fireResize(width: number) {
  window.innerWidth = width;
  window.dispatchEvent(new Event("resize"));
}

// test useWindowSize
test("test useWindowSizeHook", () => {
  const width = faker.number.int({ min: 600, max: 2000 });
  fireResize(width);
  const { result } = renderHook(() => useWindowSize());
  expect(result.current).toBe(width);
});
