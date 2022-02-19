import { z } from "zod";
import { MoveLearnMethod } from "@/graphql";
import { Move } from "./move";

export const TeamMemberMove = z.object({
  id: z.string(),
  slot: z.number(),
  levelLearnedAt: z.number(),
  learnMethod: z.nativeEnum(MoveLearnMethod),
  move: Move,
});
export type TeamMemberMove = z.infer<typeof TeamMemberMove>;
