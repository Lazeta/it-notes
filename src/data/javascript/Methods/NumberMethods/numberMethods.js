import { MathMethods } from "./MathMethods/MathMethods";

export const numberMethods = {
  id: 507,
  title: "Numbers Methods",
  children: [
    {
      title: "1. Форматирование чисел",
      type: "text",
      description: `
        <p>Эти методы используются для форматирования чисел в различных представлениях:</p>
      `,
      children: [
        {
          title: "toFixed(digits)",
          type: "text",
          description: `
            <p><strong>toFixed(digits)</strong>: Форматирует число с фиксированным количеством знаков после запятой. Возвращает строку.</p>
          `,
          code: `
const num = 9.656;
console.log(num.toFixed(2)); // "9.66"
console.log(num.toFixed(0)); // "10"
          `,
        },
        {
          title: "toExponential(fractionDigits)",
          type: "text",
          description: `
            <p><strong>toExponential(fractionDigits)</strong>: Преобразует число в экспоненциальное представление с указанным количеством знаков после запятой. Возвращает строку.</p>
          `,
          code: `
const num = 9.656;
console.log(num.toExponential(2)); // "9.66e+0"
console.log(num.toExponential(4)); // "9.6560e+0"
          `,
        },
        {
          title: "toPrecision(precision)",
          type: "text",
          description: `
            <p><strong>toPrecision(precision)</strong>: Возвращает строку с числом, записанным с указанной точностью (общее количество цифр). Если число слишком велико или мало, используется экспоненциальная запись.</p>
          `,
          code: `
const num = 9.656;
console.log(num.toPrecision(4)); // "9.656"
console.log(num.toPrecision(2)); // "9.7"
console.log((1234.5).toPrecision(2)); // "1.2e+3"
          `,
        },
      ],
    },
    {
      title: "2. Преобразование типов",
      type: "text",
      description: `
        <p>Эти методы используются для преобразования строк в числа или наоборот:</p>
      `,
      children: [
        {
          title: "Number(value)",
          type: "text",
          description: `
            <p><strong>Number(value)</strong>: Преобразует значение в числовой тип данных. Если преобразование невозможно, возвращает <code>NaN</code>.</p>
          `,
          code: `
console.log(Number("123")); // 123
console.log(Number("12.34")); // 12.34
console.log(Number("abc")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
          `,
        },
        {
          title: "parseFloat(string)",
          type: "text",
          description: `
            <p><strong>parseFloat(string)</strong>: Преобразует строку в число с плавающей точкой. Игнорирует всё после первого нечислового символа.</p>
          `,
          code: `
console.log(parseFloat("12.34")); // 12.34
console.log(parseFloat("12.34abc")); // 12.34
console.log(parseFloat("abc12.34")); // NaN
          `,
        },
        {
          title: "parseInt(string, radix)",
          type: "text",
          description: `
            <p><strong>parseInt(string, radix)</strong>: Преобразует строку в целое число в соответствии с указанной системой счисления (<code>radix</code>). По умолчанию <code>radix = 10</code>.</p>
          `,
          code: `
console.log(parseInt("10", 10)); // 10 (десятичная система)
console.log(parseInt("10", 2)); // 2 (двоичная система)
console.log(parseInt("FF", 16)); // 255 (шестнадцатеричная система)
console.log(parseInt("12.34")); // 12 (дробная часть игнорируется)
          `,
        },
      ],
    },
    {
      title: "3. Математические методы",
      type: "text",
      description: `
        <p>Эти методы предоставляют математические операции и функции для работы с числами:</p>
      `,
      children: [MathMethods],
    },
    {
      title: "4. Полезные ссылки",
      type: "text",
      description: `
        <p>Дополнительные материалы для изучения:</p>
      `,
      children: [
        {
          title: "Learn more about number methods",
          type: "link",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",
        },
        {
          title: "Interactive examples of number methods",
          type: "link",
          url: "https://javascript.info/number",
        },
      ],
    },
  ],
};
