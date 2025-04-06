
import { CommonQuestionsList } from "./CommonQuestions/CommonQuestions";
import { HTMLCSS } from "./HTMLCSS/HTMLCSS";
import { JS } from "./JS/JS";
import { Network } from "./Network/Network";
import { ReactInterview } from "./ReactInterview/ReactInterview";
import { TypeScript } from "./TypeScript/TypeScript";

export const ThemeInterview = {
  id: 512,
  title: "Темы интервью 📚",
  children: [
    CommonQuestionsList,
    HTMLCSS,
    JS,
    Network,
    ReactInterview,
    TypeScript,
  ],
};
