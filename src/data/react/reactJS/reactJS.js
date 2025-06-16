import { componentRerenders } from "./componentRerenders/componentRerendersReact";
import { FiberTree } from "./FiberTree/FiberTree";
import { hooks } from "./hooks/hooks";
import { memoization } from "./memoization/memoReact";
import { polymorphismInReact } from "./polymorphismInReact/polymorphismInReact";
import { PortalsReact } from "./PortalsReact/PortalsReact";
import { VirtualDom } from "./VirtualDom/VirtualDom";

export const reactJS = {
  id: 175,
  title: "React JS",
  children: [
    PortalsReact,
    hooks,
    memoization,
    componentRerenders,
    polymorphismInReact,
    FiberTree,
    VirtualDom,
    {
      title: "",
      type: "text",
      link: "React JS Drag to Select",
      url: "https://www.joshuawootonn.com/react-drag-to-select",
    },
  ],
};
