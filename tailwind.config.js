/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

const createCustomProperties = (theme, propertyName) => {
  const property = theme(propertyName);
  return Object.keys(property).reduce((all, name) => {
    if (typeof property[name] === "string") {
      return {
        ...all,
        [`--${propertyName}-${name}`]: property[name],
      };
    }

    return {
      ...all,
      ...Object.keys(property[name]).reduce(
        (subProperties, subPropertyName) => {
          return {
            ...subProperties,
            [`--${propertyName}-${name}-${subPropertyName}`]:
              property[name][subPropertyName],
          };
        },
        {},
      ),
    };
  }, {});
};

module.exports = {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
  ],
  theme: {
    screens: {
      sm: `${440 / 16}em`,
      md: `${768 / 16}em`,
      lg: `${980 / 16}em`,
      xl: `${1280 / 16}em`,
      "sm-max": { max: `${439 / 16}em` },
      "md-to-lg": { min: `${768 / 16}em`, max: `${1279 / 16}em` },
    },

    colors: {
      initial: "initial",
      inherit: "inherit",
      white: colors.white,
      indigo: {
        50: "#e0e8f9",
        100: "#bed0f7",
        200: "#98aeeb",
        300: "#7b93db",
        400: "#647acb",
        500: "#4c63b6",
        600: "#4055a8",
        700: "#35469c",
        800: "#2d3a8c",
        900: "#19216c",
      },
      "cyan-vivid": {
        50: "#e1fcf8",
        100: "#c1fef6",
        200: "#92fdf2",
        300: "#62f4eb",
        400: "#3ae7e1",
        500: "#1cd4d4",
        600: "#0fb5ba",
        700: "#099aa4",
        800: "#07818f",
        900: "#05606e",
      },
      "cool-grey": {
        50: "#f5f7fa",
        100: "#e4e7eb",
        200: "#cbd2d9",
        300: "#9aa5b1",
        400: "#7b8794",
        500: "#616e7c",
        600: "#52606d",
        700: "#3e4c59",
        800: "#323f4b",
        900: "#1f2933",
      },
      "pink-vivid": {
        50: "#ffe3ec",
        100: "#ffb8d2",
        200: "#ff8cba",
        300: "#f364a2",
        400: "#e8368f",
        500: "#da127d",
        600: "#bc0a6f",
        700: "#a30664",
        800: "#870557",
        900: "#620042",
      },
      "red-vivid": {
        50: "#ffe3e3",
        100: "#ffbdbd",
        200: "#ff9b9b",
        300: "#f86a6a",
        400: "#ef4e4e",
        500: "#e12d39",
        600: "#cf1124",
        700: "#ab091e",
        800: "#8a041a",
        900: "#610316",
      },
      "yellow-vivid": {
        50: "#fffbea",
        100: "#fff3c4",
        200: "#fce588",
        300: "#fadb5f",
        400: "#f7c948",
        500: "#f0b429",
        600: "#de911d",
        700: "#cb6e17",
        800: "#b44d12",
        900: "#8d2b0b",
      },
      "green-vivid": {
        50: "#e3f9e5",
        100: "#c1f2c7",
        200: "#91e697",
        300: "#51ca58",
        400: "#31b237",
        500: "#18981d",
        600: "#0f8613",
        700: "#0e7817",
        800: "#07600e",
        900: "#014807",
      },

      bug: "#a8b820",
      dark: "#705848",
      dragon: "#7038f8",
      electric: "#f8d030",
      fairy: "#ee99ac",
      fighting: "#c03028",
      fire: "#f08030",
      flying: "#a890f0",
      ghost: "#705898",
      grass: "#78c850",
      ground: "#e0c068",
      ice: "#98d8d8",
      normal: "#a8a878",
      poison: "#a040a0",
      psychic: "#f85888",
      rock: "#b8a038",
      shadow: "#604e82",
      steel: "#b8b8d0",
      unknown: "#68a090",
      water: "#6890f0",

      physical: "#c23616",
      special: "#192a56",
      status: "#7f8fa6",
    },

    fontFamily: {
      sans: ["Poppins", "Verdana", "sans-serif"],
    },

    extend: {
      zIndex: {
        "-1": "-1",
        1: "1",
        2: "2",
      },
      minHeight: {
        5: "calc(var(--baseline) * 1.5rem)",
        6: "calc(var(--baseline) * 2rem)",
        8: "calc(var(--baseline) * 3rem)",
        "screen-1/4": "25vh",
      },
      minWidth: {
        "250px": "250px",
      },
      scale: {
        200: "2",
      },
      animation: {
        "pulse-fade": "pulse-fade 2s linear infinite",
      },
      keyframes: {
        "pulse-fade": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.5" },
          "50%": { transform: "scale(1.1)", opacity: 1 },
        },
      },
      strokeWidth: {
        4: "4",
        5: "5",
      },
      fill: theme => ({
        white: theme("colors.white"),
        "red-vivid": theme("colors.red-vivid"),
      }),
      gridTemplateColumns: theme => ({
        md: `repeat(auto-fit, minmax(${theme("maxWidth.md")}, 1fr))`,
      }),
    },
  },
  plugins: [
    require("tailwindcss-children"),
    require("@tailwindcss/forms"),
    plugin(({ addBase, theme }) => {
      const customProperties = {
        ...createCustomProperties(theme, "spacing"),
        ...createCustomProperties(theme, "colors"),
      };

      addBase({
        ":root": customProperties,
      });
    }),
  ],
};
