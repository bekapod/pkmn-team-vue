import type { FormKitConfig } from "@formkit/core";

const config: Partial<FormKitConfig> = {
  rootClasses(sectionKey, node) {
    const classConfig: Record<string, string | (() => string | undefined)> = {
      outer() {
        if (["text"].includes(node.props.type)) {
          return "flex flex-col";
        }
      },
      label: "text-indigo-400 text-sm font-bold uppercase",
      message:
        "w-full mt-3 p-2 pl-10 text-white text-sm font-normal flex items-center bg-red-vivid-500 bg-[url('/icons/exclamation-circle-outline.svg')] bg-[length:1.5rem_1.5rem] bg-no-repeat bg-[center_left_0.5rem] rounded-lg",
      input() {
        if (["text"].includes(node.props.type)) {
          return "w-full p-3 leading-10 md:max-w-3xl";
        }

        if (["submit"].includes(node.props.type)) {
          return "button button--primary";
        }
      },
    };

    function createClassObject(classesArray: string[] | string) {
      const classList: Record<string, boolean> = {};
      if (typeof classesArray !== "string") return classList;
      classesArray.split(" ").forEach(className => {
        classList[className] = true;
      });
      return classList;
    }

    const target = classConfig[sectionKey];
    if (typeof target === "string") {
      return createClassObject(target);
    } else if (typeof target === "function") {
      return createClassObject(target() ?? []);
    }

    return {};
  },
};

export default {
  config,
};
