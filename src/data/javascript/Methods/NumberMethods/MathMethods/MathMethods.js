export const MathMethods = {
  id: 2537,
  title: "Методы Math",
  children: [
    {
      title: "Math.max()",
      type: "text",
      description: "<p>Возвращает наибольшее значение.</p>",
      code: "console.log(Math.max(1, 2, 3)); // 3",
    },
    {
      title: "Math.min()",
      type: "text",
      description: "<p>Возвращает наименьшее значение.</p>",
      code: "console.log(Math.min(1, 2, 3)); // 1",
    },
    {
      title: "Math.random()",
      type: "text",
      description: "<p>Генерирует случайное число от 0 до 1.</p>",
      code: `
function getRandomInt(min, max) {
// генерация случайного целого числа
return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10)); // случайное число от 1 до 10
              `,
    },
    {
      title: "Math.round()",
      type: "text",
      description: "<p>Округляет число до ближайшего целого.</p>",
      code: "console.log(Math.round(4.6)); // 5",
    },
    {
      title: "5.Math.sqrt() => возвращает квадратный корень числа.",
      type: "text",
      description: "5.Math.sqrt() => возвращает квадратный корень числа.",
    },
    {
      title: "",
      type: "text",
      description: "6.Math.cbrt() => возвращает кубический корень числа.",
    },
    {
      title: "",
      type: "text",
      description: "7.Math.abs() => возвращает абсолютное значение числа.",
    },
    {
      title: "",
      type: "text",
      description: "8.Math.pow() => возвращает число, возведённое в степень.",
    },
  ],
};
