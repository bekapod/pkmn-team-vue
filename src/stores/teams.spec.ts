import { setActivePinia, createPinia, type PiniaPluginContext } from "pinia";
import { createApp } from "vue";
import { haunter } from "@/data/mocks";
import { debounceActions } from "@/lib";
import { useTeam } from "./team";
import { useTrainer } from "./trainer";
import { waitFor } from "@testing-library/vue";
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
