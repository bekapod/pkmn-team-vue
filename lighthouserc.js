module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:8787/"],
      startServerCommand: "npm run start:worker-without-build",
    },
    assert: {
      preset: "lighthouse:recommended",
    },
    upload: {
      target: "lhci",
    },
  },
};
