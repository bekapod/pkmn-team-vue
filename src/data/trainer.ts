import { z } from "zod";
import type { Maybe, TrainerFieldsFragment } from "@/graphql";

export const Trainer = z.object({
  id: z.string(),
  username: z.string(),
  picture: z.string().optional(),
});
export type Trainer = z.infer<typeof Trainer>;

export const parseTrainer = (
  trainer: Maybe<TrainerFieldsFragment> | undefined
): Trainer => {
  return Trainer.parse({
    id: trainer?.id,
    username: trainer?.username,
    picture: trainer?.picture ?? undefined,
  });
};
