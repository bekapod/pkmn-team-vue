import { z } from "zod";

export const Ability = z.object({
  name: z.string(),
  slug: z.string(),
  effect: z.string(),
  slot: z.number().optional().default(0),
  isHidden: z.boolean().optional().default(false),
});
export type Ability = z.infer<typeof Ability>;
