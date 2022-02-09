import { getTypeColor, percentage } from "./general";

const getColourStopCss = (type: string, position: number) =>
  `${getTypeColor(type)} ${position}%`;

export const getTypeGradient = (types: string[]): string | null => {
  if (!types.length) return null;

  const colourWidth = 100 / types.length;
  const getColourStop = (idx: number) => percentage(idx * colourWidth);

  const gradientString = types
    .flatMap((type, idx) => {
      return [
        getColourStopCss(type, getColourStop(idx)),
        getColourStopCss(type, getColourStop(idx + 1)),
      ];
    })
    .join(", ");

  return `linear-gradient(90deg, ${gradientString})`;
};
