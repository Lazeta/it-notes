export const BaseTypeCycle = {
  id: 2570,
  title: "Основные виды циклов",
  children: [
    {
      title: "for",
      type: "text",
      description: `
            <p><strong>for</strong>: Повторяет блок кода определённое количество раз.</p>
          `,
      code: `
// Пример цикла for
for (let i = 0; i < 5; i++) {
  console.log("Итерация: " + i); // Выводит 0, 1, 2, 3, 4
}
          `,
    },
    {
      title: "while",
      type: "text",
      description: `
            <p><strong>while</strong>: Повторяет блок кода до тех пор, пока выполняется условие.</p>
          `,
      code: `
// Пример цикла while
let j = 0;
while (j < 5) {
  console.log("Итерация: " + j); // Выводит 0, 1, 2, 3, 4
  j++;
}
          `,
    },
    {
      title: "do while",
      type: "text",
      description: `
            <p><strong>do while</strong>: Повторяет блок кода до тех пор, пока выполняется условие. Гарантирует хотя бы одну итерацию.</p>
          `,
      code: `
// Пример цикла do while
let k = 0;
do {
  console.log("Итерация: " + k); // Выводит 0, 1, 2, 3, 4
  k++;
} while (k < 5);
          `,
    },
    {
      title: "for...of",
      type: "text",
      description: `
            <p><strong>for...of</strong>: Повторяет блок кода для каждого элемента в массиве или других итерируемых объектах.</p>
          `,
      code: `
// Пример цикла for...of
const arr = ['a', 'b', 'c'];
for (const item of arr) {
  console.log(item); // Выводит 'a', 'b', 'c'
}
          `,
    },
    {
      title: "forEach()",
      type: "text",
      description: `
            <p><strong>forEach()</strong>: Выполняет функцию для каждого элемента массива.</p>
          `,
      code: `
// Пример forEach()
const arr = ['a', 'b', 'c'];
arr.forEach((item, index) => {
  console.log(\`Индекс \${index}: \${item}\`); // Выводит 'Индекс 0: a', 'Индекс 1: b', 'Индекс 2: c'
});
          `,
    },
    {
      title: "for...in",
      type: "text",
      description: `
            <p><strong>for...in</strong>: Повторяет блок кода для каждого свойства в объекте.</p>
          `,
      code: `
// Пример цикла for...in
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(\`\${key}: \${obj[key]}\`); // Выводит 'a: 1', 'b: 2', 'c: 3'
}
          `,
    },
    {
      title: "break",
      type: "text",
      description: `
            <p><strong>break</strong>: Прерывает выполнение цикла.</p>
          `,
      code: `
// Пример использования break
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i); // Выводит 0, 1, 2, 3, 4
}
          `,
    },
    {
      title: "continue",
      type: "text",
      description: `
            <p><strong>continue</strong>: Прерывает текущую итерацию цикла и переходит к следующей.</p>
          `,
      code: `
// Пример использования continue
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i); // Выводит 0, 1, 3, 4
}
          `,
    },
  ],
};
