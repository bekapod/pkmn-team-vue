module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:8787"],
      startServerCommand:
        "npm run start:worker-without-build -- --binding SENTRY_DSN=$SENTRY_DSN --binding SENTRY_CLIENT_ID=$SENTRY_CLIENT_ID --binding SENTRY_CLIENT_SECRET=$SENTRY_CLIENT_SECRET",
    },
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        "uses-text-compression": "off",
        "csp-xss": "off",
        "apple-touch-icon": "off",
        "installable-manifest": "off",
        "maskable-icon": "off",
        "html-has-lang": "off",
        "meta-description": "off",
        "service-worker": "off",
        "splash-screen": "off",
        "themed-omnibox": "off",
        "unused-css-rules": "off",
        "unused-javascript": "off",
        "offscreen-images": "off",
      },
    },
    upload: {
      target: "lhci",
    },
  },
};
