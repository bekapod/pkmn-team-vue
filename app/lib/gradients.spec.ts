import * as gradients from "./gradients";

describe("gradients lib", () => {
  describe(gradients.getTypeGradient, () => {
    it("returns a gradient of type colours", () => {
      expect(
        gradients.getTypeGradient(["electric", "psychic", "ghost", "electric"]),
      ).toBe(
        "linear-gradient(90deg, var(--colors-electric) 0%, var(--colors-electric) 25%, var(--colors-psychic) 25%, var(--colors-psychic) 50%, var(--colors-ghost) 50%, var(--colors-ghost) 75%, var(--colors-electric) 75%, var(--colors-electric) 100%)",
      );
    });
  });
});
