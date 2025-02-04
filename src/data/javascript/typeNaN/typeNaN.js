export const typeNaN = {
  title: "NaN (Not-a-Number)",
  children: [
    {
      title: "Использование NaN в JavaScript",
      type: "text",
      description: `
            <p>NaN (Not-a-Number) — специальное значение в JavaScript, которое представляет собой результат вычисления, не являющегося числом.</p>
            <ul>
              <li>NaN является единственным значением, которое не равно ни одному числу, включая само себя.</li>
              <li>Для проверки на NaN в JavaScript следует использовать функцию <code>isNaN()</code> или <code>Number.isNaN()</code>.</li>
            </ul>
            <p>Вот примеры работы с NaN:</p>
          `,
      code: `
// Примеры, когда результатом является NaN
console.log(0 / 0); // NaN
console.log(Math.sqrt(-1)); // NaN
console.log(parseInt('abc')); // NaN

// Проверка на NaN
console.log(isNaN(NaN)); // true
console.log(isNaN('abc')); // true
console.log(isNaN(123)); // false

// Использование Number.isNaN
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN('abc')); // false
console.log(Number.isNaN(undefined)); // false
          `,
    },
  ],
};
