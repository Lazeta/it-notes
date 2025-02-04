import { Definitions } from "./Definitions/Definitions";
import { ThemeBackend } from "./ThemeBackend/ThemeBackend";
import { ThemeFrontend } from "./ThemeFrontend/ThemeFrontend";

export const Interview = {
  title: "Interview",
  children: [
    ThemeFrontend,
    ThemeBackend,
    Definitions,
  ],
};
