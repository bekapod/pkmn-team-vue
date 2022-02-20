module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\js$": "babel-jest",
  },
  coveragePathIgnorePatterns: [".stories.[tj]s"],
  moduleFileExtensions: ["vue", "js", "json", "ts"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(?!assets)(.*)$": "<rootDir>/app/$1",
    "^(.*).svg(.*)$": "<rootDir>/stub/svg.vue",
  },
};
