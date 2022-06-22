import { render, screen } from "@testing-library/vue";
import Move from "./Move.vue";
import { explosion, substitute } from "@/data/mocks";
import { MoveLearnMethod } from "@/graphql";

const setup = (props = {}) =>
  render(Move, {
    props: {
      ...substitute,
      ...props,
    },
  });

test("renders move name", () => {
  setup();
  expect(screen.getByText(substitute.name)).toBeInTheDocument();
});

test("renders move effect", () => {
  setup();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  expect(screen.getByText(substitute.effect!)).toBeInTheDocument();
});

test("renders move effect with effect chance", () => {
  setup({ effect: "Has a $effect_chance% chance", effectChance: 20 });
  expect(screen.getByText("Has a 20% chance")).toBeInTheDocument();
});

test("adds type gradient", () => {
  setup();
  expect(
    // eslint-disable-next-line testing-library/no-node-access
    screen.getByText(substitute.name).parentElement?.parentElement
  ).toHaveStyle({
    "--type-gradient":
      "linear-gradient(90deg, var(--colors-normal) 0%, var(--colors-normal) 50%, var(--colors-status) 50%, var(--colors-status) 100%)",
  });
});

test("renders move types", () => {
  setup();
  expect(screen.getByText(/normal/i)).toBeInTheDocument();
  expect(screen.getByText(/^status/i)).toBeInTheDocument();
});

test("renders move power & accuracy", () => {
  setup(explosion);
  // eslint-disable-next-line testing-library/no-node-access
  expect(screen.getByTitle("Power").nextElementSibling).toHaveTextContent(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
    explosion.power?.toString()!
  );
  // eslint-disable-next-line testing-library/no-node-access
  expect(screen.getByTitle("Accuracy").nextElementSibling).toHaveTextContent(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
    explosion.accuracy?.toString()!
  );
});

test("renders move learn method with level", () => {
  setup({ learnMethod: MoveLearnMethod.LevelUp, levelLearnedAt: 10 });
  expect(screen.getByText(/level up/i)).toContainHTML("10");
});

test("renders move learn method", () => {
  setup({ learnMethod: MoveLearnMethod.Egg });
  expect(screen.getByText(/egg/i)).toBeInTheDocument();
});

test("can render as alternative element", () => {
  setup({ as: "h1" });
  expect(screen.getByRole("heading")).toBeInTheDocument();
});
