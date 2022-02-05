import { render, screen } from "@testing-library/vue";
import PokeBall from "./PokeBall.vue";

test("render in an accessible element", () => {
  render(PokeBall, { props: { "aria-label": "Pokeball" } });
  expect(screen.getByLabelText("Pokeball")).toBeInTheDocument();
  expect(screen.getByLabelText("Pokeball").tagName).toBe("svg");
});
