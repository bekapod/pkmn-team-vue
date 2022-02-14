import type { FormKitConfig } from "@formkit/core";

const config: Partial<FormKitConfig> = {
  rootClasses(sectionKey, node) {
    console.log({ sectionKey, node: node.props.type });
    const classConfig: Record<string, string | (() => string | undefined)> = {
      outer() {
        if (["text"].includes(node.props.type)) {
          return "flex flex-col";
        }
      },
      label: "text-indigo-400 text-sm font-bold uppercase",
      message:
        "w-full mt-2 p-2 pl-10 text-white text-sm font-normal flex items-center bg-red-vivid-500 bg-[url('/icons/exclamation-circle-outline.svg')] bg-[length:1.5rem_1.5rem] bg-no-repeat bg-[center_left_0.5rem] rounded-lg",
      input() {
        if (["text"].includes(node.props.type)) {
          return "w-full p-3 text-base leading-10 font-bold bg-white border-none md:max-w-3xl focus:ring-0 focus:outline-dashed focus:outline-2 focus:outline-cyan-vivid-600";
        }

        if (["submit"].includes(node.props.type)) {
          return "relative w-full sm:w-auto overflow-hidden text-white text-center uppercase border-none rounded-tl-lg rounded-br-lg shadow perspective transition-colors duration-300 ease-out disabled:bg-cool-grey-300 bg-pink-vivid-500 leading-10 py-3 px-6 text-lg font-bold";
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
