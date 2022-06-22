import { z } from "zod";
import type { AbilityFieldsFragment } from "@/graphql";

export const Ability = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  effect: z.string().optional(),
});
export type Ability = z.infer<typeof Ability>;

export const parseAbility = (ability: AbilityFieldsFragment) => {
  return Ability.parse({
    id: ability.id,
    name: ability.name,
    slug: ability.slug,
    effect: ability.effect ?? undefined,
  });
};
