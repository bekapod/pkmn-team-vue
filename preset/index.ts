import { resolve, dirname, relative } from "pathe";
import fse from "fs-extra";
import consola from "consola";
import chalk from "chalk";
import type { NitroPreset, NitroContext } from "@nuxt/nitro";

function hl(str: string) {
  return chalk.cyan(str);
}

function prettyPath(p: string, highlight = true) {
  p = relative(process.cwd(), p);
  return highlight ? hl(p) : p;
}

async function writeFile(file: string, contents: string, log = false) {
  await fse.mkdirp(dirname(file));
  await fse.writeFile(file, contents, "utf-8");
  if (log) {
    consola.info("Generated", prettyPath(file));
  }
}

const cloudflare: NitroPreset = {
  entry: "./preset/entry",
  node: false,
  minify: true,
  externals: false,
  inlineDynamicImports: true, // iffe does not support code-splitting
  ignore: ["wrangler.toml"],
  commands: {
    preview:
      "npx miniflare {{ output.serverDir }}/index.mjs --site {{ output.publicDir }}",
    deploy: "cd {{ output.serverDir }} && npx wrangler publish",
  },
  hooks: {
    async "nitro:compiled"({ output, _nuxt }: NitroContext) {
      await writeFile(
        resolve(output.dir, "package.json"),
        JSON.stringify({ private: true, main: "./server/index.mjs" }, null, 2),
      );
      await writeFile(
        resolve(output.dir, "package-lock.json"),
        JSON.stringify({ lockfileVersion: 1 }, null, 2),
      );
    },
  },
};

export default cloudflare;
