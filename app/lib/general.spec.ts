import * as general from "./general";

describe("general lib", () => {
  describe(general.capitalize, () => {
    it("capitalises first letter of string", () => {
      expect(general.capitalize("hello")).toBe("Hello");
    });
  });

  describe(general.getTypeColor, () => {
    it("returns the colour variable for a type", () => {
      expect(general.getTypeColor("electric")).toBe("var(--colors-electric)");
    });
  });

  describe(general.percentage, () => {
    it("converts number to a percentage", () => {
      expect(general.percentage(102)).toBe(100);
      expect(general.percentage(75)).toBe(75);
    });
  });

  describe(general.sortBySlug, () => {
    it("sorts objects by slug property", () => {
      expect(
        general.sortBySlug([
          { slug: "pikachu" },
          { slug: "charmander" },
          { slug: "haunter" },
        ]),
      ).toStrictEqual([
        { slug: "charmander" },
        { slug: "haunter" },
        { slug: "pikachu" },
      ]);
    });
  });
});
