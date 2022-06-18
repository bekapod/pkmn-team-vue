import { z } from "zod";

export const Ability = z.object({
  name: z.string(),
  slug: z.string(),
  effect: z.string(),
  slot: z.number(),
  isHidden: z.boolean(),
});
export type Ability = z.infer<typeof Ability>;
