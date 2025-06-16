import { Git } from "./Git/git";
import { gitCommands } from "./gitCommands/gitCommands";
import { gitFlow } from "./gitFlow/gitFlow";

export const gitParent = {
    id: 20,
    title: "Git",
    children: [
      Git,
      gitCommands,
      gitFlow,
    ],
  };
  