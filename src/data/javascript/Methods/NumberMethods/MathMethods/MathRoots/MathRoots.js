export const MathRoots = {
  id: 10002,
  title: "3. Методы для работы с корнями и случайными числами",
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
};
