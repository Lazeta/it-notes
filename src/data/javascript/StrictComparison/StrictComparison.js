export const StrictComparison = {
  id: 167,
  title: "Strict comparison",
  children: [
    {
      title: "Использование строгого сравнения в JavaScript",
      type: "text",
      description: `
            <p>В JavaScript есть два типа сравнения: нестрогое (==) и строгое (===).</p>
            <ul>
              <li><strong>Нестрогое сравнение (==)</strong>: Приводит операнды к одному типу перед сравнением.</li>
              <li><strong>Строгое сравнение (===)</strong>: Сравнивает как значение, так и тип данных.</li>
            </ul>
            <p>Вот примеры использования строгого сравнения:</p>
          `,
      code: `
// Пример нестрогого сравнения
console.log(5 == '5'); // true
console.log(null == undefined); // true

// Пример строгого сравнения
console.log(5 === '5'); // false
console.log(null === undefined); // false

// Строгое сравнение с разными типами
console.log(1 === 1); // true
console.log(true === 1); // false
          `,
    },
  ],
};
