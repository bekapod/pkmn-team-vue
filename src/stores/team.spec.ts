import { setActivePinia, createPinia } from "pinia";
import { createApp } from "vue";
import { useTeam } from "./team";
import { useTrainer } from "./trainer";

describe("useTeam", () => {
  beforeEach(() => {
    const app = createApp({});
    const pinia = createPinia();
    app.use(pinia);
    setActivePinia(pinia);
  });

  test("getting a team", async () => {
    const team = useTeam();
    await team.getTeam("team-id");
    expect(team.id).toEqual("team-id");
  });

  test("setting the team name", async () => {
    const team = useTeam();
    await team.getTeam("team-id");
    await team.setTeamName("A new team name!", "");
    expect(team.id).toEqual("team-id");
    expect(team.name).toEqual("A new team name!");
  });

  test("checking whether current trainer can edit", async () => {
    const trainer = useTrainer();
    const team = useTeam();
    await team.getTeam("team-id");
    trainer.id = "TRA123";
    expect(team.canEdit).toBe(true);

    trainer.id = "TRA456";
    expect(team.canEdit).toBe(false);

    trainer.id = "";
    expect(team.canEdit).toBe(false);

    trainer.id = undefined;
    expect(team.canEdit).toBe(false);
  });
});
