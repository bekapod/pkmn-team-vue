import { server } from "@/mocks/server";
import "@testing-library/jest-dom";
import "isomorphic-fetch";

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

beforeEach(() => {
  const toastTeleportTarget = document.createElement("div");
  toastTeleportTarget.setAttribute("id", "toast-teleport-target");

  document.body.appendChild(toastTeleportTarget);
});

afterEach(() => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, testing-library/no-node-access
  document.body.removeChild(document.getElementById("toast-teleport-target")!);

  server.resetHandlers();
});

afterAll(() => server.close());
