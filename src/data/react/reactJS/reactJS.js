import { componentRerenders } from "./componentRerenders/componentRerendersReact";
import { hooks } from "./hooks/hooks";
import { memoization } from "./memoization/memoReact";
import { polymorphismInReact } from "./polymorphismInReact/polymorphismInReact";
import { PortalsReact } from "./PortalsReact/PortalsReact";

export const reactJS = {
  id: 175,
  title: "React JS",
  children: [
    PortalsReact,
    hooks,
    memoization,
    componentRerenders,
    polymorphismInReact,
    {
      title: "",
      type: "text",
      link: "React JS Drag to Select",
      url: "https://www.joshuawootonn.com/react-drag-to-select",
    },
  ],
};
