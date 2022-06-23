import type { authInstance } from "@/lib";
import "pinia";

declare module "pinia" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export interface DefineStoreOptionsBase<S, Store> {
    debounce?: Partial<Record<keyof StoreActions<Store>, number>>;
  }

  export interface PiniaCustomProperties {
    auth: typeof authInstance;
  }
}
