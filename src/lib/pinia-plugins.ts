import type { PiniaPluginContext } from "pinia";
import { debounce } from "lodash";

export const debounceActions = ({ options, store }: PiniaPluginContext) => {
  if (options.debounce) {
    return Object.keys(options.debounce).reduce((debouncedActions, action) => {
      debouncedActions[action] = debounce(
        store[action],
        options.debounce?.[action]
      );

      return debouncedActions;
    }, {} as Record<string, ReturnType<typeof debounce>>);
  }
};
