import { CheckPropertiesOfObject } from "./CheckPropertiesOfObject/CheckPropertiesOfObject";
import { CopyJoinObject } from "./CopyJoinObject/CopyJoinObject";
import { CreateCompareObjects } from "./CreateCompareObjects/CreateCompareObjects";
import { FreezeSealObject } from "./FreezeSealObject/FreezeSealObject";
import { IterationOfObject } from "./IterationOfObject/IterationOfObject";

export const objectMethods = {
  id: 508,
  title: "Object Methods (методы объекта)",
  children: [
    IterationOfObject,
    CopyJoinObject,
    FreezeSealObject,
    CreateCompareObjects,
    CheckPropertiesOfObject,
    {
      id: 2569,
      title: "6. Полезные ссылки",
      children: [
        {
          title: "",
          type: "text",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",
          link: "Learn more about Object methods",
        },
        {
          title: "",
          type: "text",
          url: "https://javascript.info/object-methods",
          link: "Interactive examples of Object methods",
        },
      ],
    },
  ],
};
