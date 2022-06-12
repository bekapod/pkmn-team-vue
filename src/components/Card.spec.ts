import { render, screen } from "@testing-library/vue";
import Card from "./Card.vue";
import { globalPlugins } from "@/test-helpers";

const setup = (props = {}) =>
  render(Card, {
    props: { to: "/team/123", ...props },
    slots: { heading: "Card title", default: "Some card content" },
    global: {
      plugins: globalPlugins,
    },
  });

test("it renders the card link", () => {
  setup();
  expect(screen.getByRole("link", { name: "Card title" })).toHaveAttribute(
    "href",
    "/team/123"
  );
});

test("it renders the card heading", () => {
  setup();
  expect(
    screen.getByRole("heading", { name: "Card title" })
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
