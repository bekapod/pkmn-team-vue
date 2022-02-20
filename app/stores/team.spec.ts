import { setActivePinia, createPinia } from "pinia";
import { createApp } from "vue";
import { useTeam } from "./team";

describe(useTeam, () => {
  beforeEach(() => {
    const app = createApp({});
    const pinia = createPinia();
    app.use(pinia);
    pinia.use(() => ({
      $nuxt: useNuxtApp(),
    }));
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
    await team.setTeamName("A new team name!");
    expect(team.id).toEqual("team-id");
    expect(team.name).toEqual("A new team name!");
  });
});
