module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\js$": "babel-jest",
  },
  moduleFileExtensions: ["vue", "js", "json", "ts"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "~~/(.*)$": "<rootDir>/$1",
    "~/(.*)$": "<rootDir>/app/$1",
  },
};
