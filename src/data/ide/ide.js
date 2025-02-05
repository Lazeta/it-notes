import { PyCharm } from "./PyCharm/PyCharm";
import { SublimeText3 } from "./SublimeText3/SublimeText3";
import { VSCode } from "./VSCode/VSCode";
import { WebStorm } from "./WebStorm/WebStorm";

export const IDE = {
  id: 700,
  title: "IDE",
  children: [
    VSCode,
    WebStorm,
    SublimeText3,
    PyCharm,
  ],
};
