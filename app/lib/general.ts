import { equals, toUpper } from "lodash/fp";

export const percentage = (val: number): number => (val > 100 ? 100 : val);

export const capitalize = (word = ""): string =>
  `${toUpper(word.charAt(0))}${word.slice(1)}`;

export const getTypeColor = (type: string): string => `var(--colors-${type})`;

export const sortBySlug = <T extends { slug: string }>(types: T[]): T[] =>
  types.sort((x: T, y: T): -1 | 0 | 1 => {
    const xSlug = x.slug;
    const ySlug = y.slug;

    if (equals(xSlug, ySlug)) {
      return 0;
    }
    if (xSlug > ySlug) {
      return 1;
    }
    return -1;
  });

export const sortBySlot = <T extends { slot: number }>(items: T[]): T[] =>
  items.sort((x: T, y: T): -1 | 0 | 1 => {
    const xSlot = x.slot;
    const ySlot = y.slot;

    if (xSlot === ySlot) {
      return 0;
    }

    if (xSlot > ySlot) {
      return 1;
    }

    return -1;
  });

export const getPokemonSpriteUrl = (sprite?: string): string | undefined =>
  sprite
    ? `/sprites/${sprite.replace(
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
        "",
      )}`
    : undefined;

export const reorder = <T>(
  list: T[],
  startIndex: number,
  endIndex: number,
): T[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
