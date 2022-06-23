import { setupServer } from "msw/node";
import { handlers } from "./handlers";

export const server = setupServer(...Object.values(handlers).flat());
