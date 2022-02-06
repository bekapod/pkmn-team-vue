module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:8787/"],
      startServerCommand: "npm run start:worker-without-build",
    },
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        "uses-text-compression": "off",
        "csp-xss": "off",
      },
    },
    upload: {
      target: "lhci",
    },
  },
};
