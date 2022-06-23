import { setupWorker } from "msw";
import { handlers } from "./handlers";

export const worker = setupWorker(...Object.values(handlers).flat());
