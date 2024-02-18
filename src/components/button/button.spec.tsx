import { createDOM } from "@builder.io/qwik/testing";
import { test, expect } from "vitest";
import { Button } from "./button";


test(`[Button Component]: Should render ⭐`, async () => {
  const { screen, render } = await createDOM();
  await render(<Button kind={"primary"} shape={"default"} size={"small"}>Hello</Button>);
  expect(screen.outerHTML).toContain("Hello");
  const div = screen.querySelector(".rounded") as HTMLElement;
});