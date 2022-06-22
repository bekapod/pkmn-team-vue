import { setActivePinia, createPinia, type PiniaPluginContext } from "pinia";
import { createApp } from "vue";
import { useTrainer } from "./trainer";

describe("useTrainer", () => {
  beforeEach(() => {
    const app = createApp({});
    const pinia = createPinia();
    pinia.use(({ store }: PiniaPluginContext) => {
      store.auth = {
        // eslint-disable-next-line
        // @ts-ignore
        getAccessTokenSilently: () => Promise.resolve("mock-token"),
      };
    });
    app.use(pinia);
    setActivePinia(pinia);
  });

  test("getting a trainer", async () => {
    const trainer = useTrainer();
    await trainer.getMe();
    expect(trainer.id).toEqual("TRA123");
    expect(trainer.username).toEqual("A user");
    expect(trainer.picture).toEqual(
      "https://placey.bekapod.codes/g/120/120/ffffff/000000"
    );
  });
});
