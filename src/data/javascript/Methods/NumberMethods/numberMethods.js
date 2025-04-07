import { MathMethods } from "./MathMethods/MathMethods";

export const numberMethods = {
  id: 507,
  title: "Numbers Methods",
  children: [
    {
      title: "",
      type: "text",
      description:
        "1.toFixed(number) => форматирует число с использованием записи с фиксированной запятой. Аргументам принимает количество знаков после запяты.",
    },
    {
      title: "",
      type: "text",
      description:
        "2.parseFloat(string) => принимает строку в качестве аргумента и возвращает число с плавающей точной.",
    },
    {
      title: "",
      type: "text",
      description:
        "3.parseInt(string, radix) => принимает строку в качестве аргумента и возвращает целое число в соответствии с указанной системой счисления.",
    },
    {
      title: "",
      type: "text",
      description:
        "4.Number() => преобразовывает строку в числовой тип данных.",
    },
    {
      title: "toExponential()",
      type: "text",
      description: "<p>Преобразует число в экспоненциальное представление.</p>",
      code: "var x = 9.656; console.log(x.toExponential(2)); // '9.66e+0'",
    },
    {
      title: "toPrecision()",
      type: "text",
      description:
        "<p>Возвращает строку с числом, записанным с указанной длиной.</p>",
      code: "var x = 9.656; console.log(x.toPrecision(4)); // '9.656'",
    },
    MathMethods,
  ],
};
