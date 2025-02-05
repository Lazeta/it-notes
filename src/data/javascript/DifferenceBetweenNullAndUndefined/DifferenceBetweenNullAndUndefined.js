export const DifferenceBetweenNullAndUndefined = {
  id: 209,
  title:
    "Difference between null and undefined / Разница между null и undefined",
  children: [
    {
      title: "Описание null и undefined",
      type: "text",
      description: `
            <p><strong>null</strong>: Это специальное значение, указывающее на отсутствие какого-либо объектного значения. Оно явно назначается переменной, чтобы показать, что эта переменная не содержит ничего.</p>
            <p><strong>undefined</strong>: Это значение автоматически назначается переменной, которая была объявлена, но не инициализирована. Также это происходит, если функция не возвращает значения.</p>
            <ul>
              <li>Оба значения представляют отсутствие значения, но в разных контекстах.</li>
            </ul>
          `,
      code: `
// Примеры null и undefined
let a = null;      // Явно задано значение null
let b;             // Не инициализирована, значение undefined

console.log(a);   // null
console.log(b);   // undefined

// Проверка типов
console.log(typeof a); // "object"
console.log(typeof b); // "undefined"
          `,
    },
    {
      title: "Сравнение null и undefined",
      type: "text",
      description: `
            <p>Важно понимать, что при нестрогом сравнении они равны друг другу:</p>
          `,
      code: `
console.log(null == undefined); // true (нестрогое сравнение)
console.log(null === undefined); // false (строгое сравнение)
          `,
    },
  ],
};
