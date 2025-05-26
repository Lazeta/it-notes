import { demo } from "./demo/demo";
import { IDE } from "./ide/ide";
import { Interview } from "./Interview/interview";
import { JavaScript } from "./javascript/javascript";
import { NextJs } from "./nextjs/nextJs";
import { Patterns } from "./patterns/patterns";
import { react } from "./react/react";
import { HTML_CSS } from "./htmlcss/htmlcss";
import { WebTechnology } from "./webTechnology/webTechnology";
import { gitParent } from "./git/gitParent";
import { stateManaging } from "./stateManaging/stateManaging";


export const data = {
  id: 1,
  title: "Sections",
  children: [
    WebTechnology,
    HTML_CSS,
    JavaScript,
    react,
    NextJs,
    stateManaging,
    Patterns,
    Interview,
    gitParent,
    IDE,
    demo,
  ],
};