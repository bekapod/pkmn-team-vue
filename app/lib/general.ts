export const percentage = (val: number): number => (val > 100 ? 100 : val);

export const getTypeColor = (type: string): string => `var(--colors-${type})`;

export const sortBySlug = <T extends { slug: string }>(types: T[]): T[] =>
  types.sort((x: T, y: T): -1 | 0 | 1 => {
    const xSlug = x.slug;
    const ySlug = y.slug;

    if (xSlug === ySlug) {
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

export function hasOwnProperty<X extends object, Y extends PropertyKey>(
  obj: X | null,
  prop: Y,
): obj is X & Record<Y, unknown> {
  return obj?.hasOwnProperty(prop) ?? false;
}
