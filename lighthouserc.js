module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:3000/"],
      startServerCommand: "npm start:worker-without-build",
    },
    assert: {
      preset: "lighthouse:recommended",
    },
    upload: {
      target: "lhci",
    },
  },
};
