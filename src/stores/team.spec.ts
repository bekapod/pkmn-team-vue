import { setActivePinia, createPinia } from "pinia";
import { createApp } from "vue";
import { explosion, haunter, rest, substitute } from "@/data/mocks";
import { MoveLearnMethod } from "@/graphql";
import { debounceActions } from "@/lib";
import { useTeam } from "./team";
import { useTrainer } from "./trainer";

vitest.useFakeTimers();

describe("useTeam", () => {
  beforeEach(() => {
    const app = createApp({});
    const pinia = createPinia();
    pinia.use(debounceActions);
    app.use(pinia);
    setActivePinia(pinia);
  });

  test("getting a team", async () => {
    const team = useTeam();
    await team.get("team-id");
    expect(team.id).toEqual("team-id");
  });

  test("setting the team name", async () => {
    const team = useTeam();
    await team.get("team-id");
    await team.setName("A new team name!");
    expect(team.id).toEqual("team-id");
    expect(team.name).toEqual("A new team name!");
  });

  test("checking whether current trainer can edit", async () => {
    const trainer = useTrainer();
    const team = useTeam();
    await team.get("team-id");
    trainer.id = "TRA123";
    expect(team.canEdit).toBe(true);

    trainer.id = "TRA456";
    expect(team.canEdit).toBe(false);

    trainer.id = "";
    expect(team.canEdit).toBe(false);

    trainer.id = undefined;
    expect(team.canEdit).toBe(false);
  });

  test("updating team members", async () => {
    const team = useTeam();
    await team.get("team-id");
    team.removeMember(team.members[0].id);
    expect(team.dirty).toEqual(true);
    vitest.advanceTimersByTime(1000);
    team.addMember({
      pokemon: haunter,
    });
    expect(team.dirty).toEqual(true);
    vitest.runAllTimers();
    // @ts-ignore
    expect(window.allMswRequests.size).toBe(2);
    expect(team.id).toEqual("team-id");
    expect(team.members).toEqual([
      {
        id: "2",
        slot: 2,
        pokemon: expect.any(Object),
      },
      {
        id: expect.any(String),
        slot: 3,
        pokemon: expect.any(Object),
      },
    ]);
  });
});
