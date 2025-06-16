import { MathNumber } from "./MathNumber/MathNumber";
import { MathRoots } from "./MathRoots/MathRoots";
import { MathRounding } from "./MathRounding/MathRounding";

export const MathMethods = {
  id: 2537,
  title: "3. Math Methods (Математические методы)",
  children: [
    MathNumber,
    MathRounding,
    MathRoots,
    {
      id: 10003,
      title: "4. Полезные ссылки",
      children: [
        {
          title: "",
          type: "text",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math",
          link: "Learn more about Math methods",
        },
        {
          title: "",
          type: "text",
          url: "https://javascript.info/number#math-object",
          link: "Interactive examples of Math methods",
        },
      ],
    },
  ],
};
