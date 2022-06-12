import { render, screen } from "@testing-library/vue";
import TypeTag from "./TypeTag.vue";
import { psychic } from "@/data/mocks";

const setup = () => render(TypeTag, { props: psychic });

test("renders type name", () => {
  setup();
  expect(screen.getByText("Psychic")).toBeInTheDocument();
});

test("adds type colour", () => {
  setup();
  expect(screen.getByText("Psychic")).toHaveStyle({
    "--type-color": "var(--colors-psychic)",
  });
});
