import { server } from "@/mocks/server";
import "@testing-library/jest-dom";
import "isomorphic-fetch";

// @ts-ignore
window.scrollTo = vitest.fn();

beforeAll(() => {
  server.listen({ onUnhandledRequest: "error" });
  server.events.on("request:start", (req) => {
    const { id } = req;
    // @ts-ignore
    window.allMswRequests.set(id, req);
  });
});

beforeEach(() => {
  const toastTeleportTarget = document.createElement("div");
  toastTeleportTarget.setAttribute("id", "toast-teleport-target");

  document.body.appendChild(toastTeleportTarget);

  // @ts-ignore
  window.allMswRequests = new Map();
});

afterEach(() => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, testing-library/no-node-access
  document.body.removeChild(document.getElementById("toast-teleport-target")!);

  server.resetHandlers();
});

afterAll(() => server.close());
