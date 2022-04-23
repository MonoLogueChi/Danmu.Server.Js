import { DenoWorkspace } from "https://denopkg.com/BentoumiTech/denox@master/src/interfaces.ts";

const workspace: DenoWorkspace = {
  scripts: {
    start: {
      file: "main.ts",
      deno_options: {
        "allow-net": ["localhost", "api.bilibili.com"],
        "allow-read": "./",
        importmap: "import_map.json",
      },
    },
  },
};

export { workspace };
