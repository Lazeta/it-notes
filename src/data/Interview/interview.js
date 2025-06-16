import { Definitions } from "./Definitions/Definitions";
import { ThemeBackend } from "./ThemeBackend/ThemeBackend";
import { ThemeFrontend } from "./ThemeFrontend/ThemeFrontend";

export const Interview = {
  id: 17,
  title: "Interview",
  children: [
    Definitions,
    ThemeBackend,
    ThemeFrontend,
  ],
};
