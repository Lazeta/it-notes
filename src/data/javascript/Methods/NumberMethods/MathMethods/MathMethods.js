export const MathMethods = {
  id: 2537,
  title: "Math Methods (методы Math)",
  children: [
    {
      title: "1. Методы для работы с числами",
      type: "text",
      description: `
        <p>Эти методы используются для выполнения базовых математических операций:</p>
      `,
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
    },
    {
      title: "2. Методы округления",
      type: "text",
      description: `
        <p>Эти методы используются для округления чисел до целых значений:</p>
      `,
      children: [
        {
          title: "Math.round()",
          type: "text",
          description: `
            <p><strong>Math.round()</strong>: Округляет число до ближайшего целого.</p>
          `,
          code: `
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.4)); // 4
          `,
        },
        {
          title: "Math.floor()",
          type: "text",
          description: `
            <p><strong>Math.floor()</strong>: Округляет число вниз до ближайшего целого.</p>
          `,
          code: `
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(-4.1)); // -5
          `,
        },
        {
          title: "Math.ceil()",
          type: "text",
          description: `
            <p><strong>Math.ceil()</strong>: Округляет число вверх до ближайшего целого.</p>
          `,
          code: `
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(-4.9)); // -4
          `,
        },
      ],
    },
    {
      title: "3. Методы для работы с корнями и случайными числами",
      type: "text",
      description: `
        <p>Эти методы используются для вычисления корней и генерации случайных чисел:</p>
      `,
      children: [
        {
          title: "Math.sqrt()",
          type: "text",
          description: `
            <p><strong>Math.sqrt()</strong>: Возвращает квадратный корень числа.</p>
          `,
          code: `
console.log(Math.sqrt(16)); // 4
console.log(Math.sqrt(25)); // 5
          `,
        },
        {
          title: "Math.cbrt()",
          type: "text",
          description: `
            <p><strong>Math.cbrt()</strong>: Возвращает кубический корень числа.</p>
          `,
          code: `
console.log(Math.cbrt(27)); // 3
console.log(Math.cbrt(-8)); // -2
          `,
        },
        {
          title: "Math.random()",
          type: "text",
          description: `
            <p><strong>Math.random()</strong>: Генерирует случайное число от 0 (включительно) до 1 (не включительно).</p>
          `,
          code: `
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10)); // случайное число от 1 до 10
          `,
        },
      ],
    },
    {
      title: "4. Полезные ссылки",
      type: "text",
      description: `
        <p>Дополнительные материалы для изучения:</p>
      `,
      children: [
        {
          title: "Learn more about Math methods",
          type: "link",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math",
        },
        {
          title: "Interactive examples of Math methods",
          type: "link",
          url: "https://javascript.info/number#math-object",
        },
      ],
    },
  ],
};
