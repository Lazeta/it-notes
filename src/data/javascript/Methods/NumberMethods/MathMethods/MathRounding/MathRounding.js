export const MathRounding = {
  id: 10001,
  title: "2. Методы округления",
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
};
