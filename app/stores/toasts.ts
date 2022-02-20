import { defineStore } from "pinia";

type Toast = {
  type: "success" | "error";
  title: string;
  content: string;
};

export const useToasts = defineStore("toasts", {
  state: () => {
    return {
      list: [] as Toast[],
    };
  },
  getters: {
    toast: state => {
      if (state.list.length > 0) {
        return state.list[state.list.length - 1];
      }

      return undefined;
    },
  },
  actions: {
    addToast(toast: Toast) {
      this.list.push(toast);
    },
    removeToast(toast: Toast) {
      this.list = this.list.filter(
        t =>
          t.type !== toast.type &&
          t.title !== toast.title &&
          t.content !== toast.content,
      );
    },
    reset() {
      this.list = [];
    },
  },
});
