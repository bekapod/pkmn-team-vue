import { setActivePinia, createPinia } from "pinia";
import { createApp } from "vue";
import { useTeams } from "./teams";

vitest.useFakeTimers();

describe("useTeams", () => {
  beforeEach(() => {
    const app = createApp({});
    const pinia = createPinia();
    app.use(pinia);
    setActivePinia(pinia);
  });

  test("getting teams", async () => {
    const teams = useTeams();
    await teams.get();
    expect(teams.list).toHaveLength(2);
  });
});
