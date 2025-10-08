import { Definitions } from "./Definitions/Definitions";
import { JSQuestions } from "./JSQuestions/JSQuestions";
import { CommonQuestionsList } from "./CommonQuestions/CommonQuestions";
import { HTMLCSS } from "./HTMLCSS/HTMLCSS";
import { Network } from "./Network/Network";
import { ReactInterview } from "./ReactInterview/ReactInterview";
import { TypeScript } from "./TypeScript/TypeScript";

export const ThemeFrontend = {
  id: 195,
  title: "Theme Frontend",
  children: [
    Definitions,
    CommonQuestionsList,
    Network,
    HTMLCSS,
    JSQuestions,
    TypeScript,
    ReactInterview,
  ],
};
