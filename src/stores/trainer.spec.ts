import { setActivePinia, createPinia } from "pinia";
import { createApp } from "vue";
import { useTrainer } from "./trainer";

describe("useTrainer", () => {
  beforeEach(() => {
    const app = createApp({});
    const pinia = createPinia();
    app.use(pinia);
    setActivePinia(pinia);
  });

  test("getting a trainer", async () => {
    const trainer = useTrainer();
    await trainer.getMe("");
    expect(trainer.id).toEqual("TRA123");
    expect(trainer.username).toEqual("A user");
    expect(trainer.picture).toEqual(
      "https://placey.bekapod.codes/g/120/120/ffffff/000000"
    );
  });
});
