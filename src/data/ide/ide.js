import { PyCharm } from "./PyCharm/PyCharm";
import { SublimeText3 } from "./SublimeText3/SublimeText3";
import { VSCode } from "./VSCode/VSCode";
import { WebStorm } from "./WebStorm/WebStorm";

export const IDE = {
  id: 18,
  title: "IDE",
  children: [
    PyCharm,
    SublimeText3,
    VSCode,
    WebStorm,
  ],
};
