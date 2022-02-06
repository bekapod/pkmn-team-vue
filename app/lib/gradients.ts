import { add, compose, divide, flatMap, join, multiply } from "lodash/fp";
import { getTypeColor, percentage } from "./general";

const getColourStopCss = (type: string, position: number) =>
  `${getTypeColor(type)} ${position}%`;

export const getTypeGradient = (types: string[]): string | null => {
  if (!types.length) return null;

  const colourWidth = divide(100, types.length);
  const getColourStop = compose(percentage, multiply(colourWidth));
  let index = 0;

  const gradientString = compose(
    join(", "),
    flatMap((type: string) => {
      const colourStops = [
        getColourStopCss(type, getColourStop(index)),
        getColourStopCss(type, getColourStop(add(1, index))),
      ];
      index = add(1, index);
      return colourStops;
    }),
  )(types);

  return `linear-gradient(90deg, ${gradientString})`;
};
