import { z } from "zod";

export const Type = z.object({
  name: z.string(),
  slug: z.string(),
  slot: z.number().optional().default(0),
});
export type Type = z.infer<typeof Type>;
