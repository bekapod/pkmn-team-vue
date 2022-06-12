import { setActivePinia, createPinia } from "pinia";
import { useToasts } from "./toasts";

describe("useToasts", () => {
  const toast1 = {
    type: "success",
    title: "Toast 1",
    content: "Toast 1",
  } as const;
  const toast2 = {
    type: "error",
    title: "Toast 2",
    content: "Toast 2",
  } as const;

  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("adding a toast", () => {
    const toasts = useToasts();
    expect(toasts.list).toEqual([]);

    toasts.addToast(toast1);
    expect(toasts.list).toEqual([toast1]);

    toasts.addToast(toast2);
    expect(toasts.list).toEqual([toast1, toast2]);

    toasts.addToast(toast1);
    expect(toasts.list).toEqual([toast1, toast2, toast1]);
  });

  test("removing a toast", () => {
    const toasts = useToasts();
    expect(toasts.list).toEqual([]);

    toasts.addToast(toast1);
    toasts.addToast(toast2);
    toasts.addToast(toast1);
    expect(toasts.list).toEqual([toast1, toast2, toast1]);

    toasts.removeToast(toast2);
    expect(toasts.list).toEqual([toast1, toast1]);

    toasts.removeToast(toast1);
    expect(toasts.list).toEqual([]);

    toasts.removeToast(toast2);
    expect(toasts.list).toEqual([]);
  });
});
