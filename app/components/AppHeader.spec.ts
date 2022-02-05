import { render, screen } from "@testing-library/vue";
import AppHeader from "./AppHeader.vue";

const setup = (props = {}) =>
  render(AppHeader, { props, slots: { default: "Some page" } });

test("render in an accessible element", () => {
  setup();
  expect(screen.getByRole("banner").tagName).toBe("HEADER");
});

test("renders a link to the dashboard", () => {
  setup();
  expect(screen.getByTitle("Dashboard")).toHaveAttribute("href", "/");
});

test("renders the page title in a h1", () => {
  setup();
  expect(screen.getByText("Some page").tagName).toBe("H1");
});

test("adds custom class names", () => {
  setup({ class: "some-custom-class" });
  expect(screen.getByRole("banner")).toHaveClass("some-custom-class");
});
