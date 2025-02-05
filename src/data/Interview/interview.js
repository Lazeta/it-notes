import { Definitions } from "./Definitions/Definitions";
import { ThemeBackend } from "./ThemeBackend/ThemeBackend";
import { ThemeFrontend } from "./ThemeFrontend/ThemeFrontend";

export const Interview = {
  id: 600,
  title: "Interview",
  children: [
    ThemeFrontend,
    ThemeBackend,
    Definitions,
  ],
};
