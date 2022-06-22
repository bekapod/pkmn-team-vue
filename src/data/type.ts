import { z } from "zod";
import type { TypeFieldsFragment } from "@/graphql";

export const Type = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
});
export type Type = z.infer<typeof Type>;

export const parseType = (type: TypeFieldsFragment) => {
  return Type.parse({
    id: type.id,
    name: type.name,
    slug: type.slug,
  });
};
