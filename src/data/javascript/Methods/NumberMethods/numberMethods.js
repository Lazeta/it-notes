import { MathMethods } from "./MathMethods/MathMethods";
import { NumberFormation } from "./NumberFormation/NumberFormation";
import { NumberTransformationsType } from "./NumberTransformationsType/NumberTransformationsType";

export const numberMethods = {
  id: 507,
  title: "Numbers Methods",
  children: [
    NumberFormation,
    NumberTransformationsType,
    MathMethods,
    {
      id: 2563,
      title: "4. Полезные ссылки",
      children: [
        {
          title: "",
          type: "text",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",
          link: "Learn more about number methods",
        },
        {
          title: "",
          type: "text",
          url: "https://javascript.info/number",
          link: "Interactive examples of number methods",
        },
      ],
    },
  ],
};
