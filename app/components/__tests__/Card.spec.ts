import { render, screen } from "@testing-library/vue";
import Card from "../Card.vue";

const setup = (props = {}) =>
  render(Card, {
    props: { to: "/some-page", ...props },
    slots: { heading: "Card title", default: "Some card content" },
  });

test("it renders the card link", () => {
  setup();
  expect(screen.getByRole("link", { name: "Card title" })).toHaveAttribute(
    "href",
    "/some-page",
  );
});

test("it renders the card heading", () => {
  setup();
  expect(
    screen.getByRole("heading", { name: "Card title" }),
  ).toBeInTheDocument();
});

test("it renders the card content", () => {
  setup();
  expect(screen.getByText("Some card content")).toBeInTheDocument();
});

test("it doesn't render an invalid gradient", () => {
  setup();
  expect(screen.getByRole("banner")).not.toHaveAttribute("style");
});

test("it can render a type gradient", async () => {
  setup({ types: ["electric", "electric", "psychic", "ghost"] });
  expect(screen.getByRole("banner")).toHaveStyle({
    "--type-gradient":
      "linear-gradient(90deg, var(--colors-electric) 0%, var(--colors-electric) 25%, var(--colors-electric) 25%, var(--colors-electric) 50%, var(--colors-psychic) 50%, var(--colors-psychic) 75%, var(--colors-ghost) 75%, var(--colors-ghost) 100%)",
  });
});
