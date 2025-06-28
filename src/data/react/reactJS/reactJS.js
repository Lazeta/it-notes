import { CacheReact } from "./CacheReact/CacheReact";
import { componentRerenders } from "./componentRerenders/componentRerendersReact";
import { FiberTree } from "./FiberTree/FiberTree";
import { hooks } from "./hooks/hooks";
import { memoization } from "./memoization/memoReact";
import { polymorphismInReact } from "./polymorphismInReact/polymorphismInReact";
import { PortalsReact } from "./PortalsReact/PortalsReact";
import { Props } from "./Props/Props";
import { PureComponent } from "./PureComponent/PureComponent";
import { TwoWayBinding } from "./TwoWayBinding/TwoWayBinding";
import { VirtualDom } from "./VirtualDom/VirtualDom";

export const reactJS = {
  id: 175,
  title: "React JS",
  children: [
    PortalsReact,
    Props,
    polymorphismInReact,
    PureComponent,
    hooks,
    memoization,
    componentRerenders,
    FiberTree,
    VirtualDom,
    CacheReact,
    TwoWayBinding,
    {
      title: "",
      type: "text",
      link: "React JS Drag to Select",
      url: "https://www.joshuawootonn.com/react-drag-to-select",
    },
  ],
};
