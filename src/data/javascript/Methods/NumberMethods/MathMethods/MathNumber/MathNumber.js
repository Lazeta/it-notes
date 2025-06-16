export const MathNumber = {
  id: 10000,
  title: "1. Методы для работы с числами",
  children: [
    {
      title: "Math.max()",
      type: "text",
      description: `
            <p><strong>Math.max()</strong>: Возвращает наибольшее значение из переданных аргументов.</p>
          `,
      code: `
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.max(-10, 0, 10)); // 10
          `,
    },
    {
      title: "Math.min()",
      type: "text",
      description: `
            <p><strong>Math.min()</strong>: Возвращает наименьшее значение из переданных аргументов.</p>
          `,
      code: `
console.log(Math.min(1, 2, 3)); // 1
console.log(Math.min(-10, 0, 10)); // -10
          `,
    },
    {
      title: "Math.abs()",
      type: "text",
      description: `
            <p><strong>Math.abs()</strong>: Возвращает абсолютное значение числа (модуль).</p>
          `,
      code: `
console.log(Math.abs(-5)); // 5
console.log(Math.abs(5)); // 5
          `,
    },
    {
      title: "Math.pow(base, exponent)",
      type: "text",
      description: `
            <p><strong>Math.pow(base, exponent)</strong>: Возвращает число, возведённое в указанную степень.</p>
          `,
      code: `
console.log(Math.pow(2, 3)); // 8 (2³)
console.log(Math.pow(5, 2)); // 25 (5²)
          `,
    },
  ],
};
