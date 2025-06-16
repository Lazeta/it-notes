export const NumberFormation = {
  id: 2560,
  title: "1. Форматирование чисел",
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
};
