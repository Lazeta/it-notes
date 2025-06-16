export const matchMethods = {
  id: 2540,
  title: "Метод match()",
  children: [
    {
      title: "Определение",
      type: "text",
      description: `
        <p>Метод <code>match()</code> используется для поиска совпадений в строке с использованием регулярного выражения. Он возвращает массив с найденными совпадениями или <code>null</code>, если совпадения не найдены.</p>
      `,
    },
    {
      title: "Синтаксис",
      type: "text",
      description: `
        <p>Синтаксис метода <code>match()</code> выглядит следующим образом:</p>
      `,
      code: `
str.match(regexp);
      `,
    },
    {
      title: "Параметры",
      type: "text",
      description: `
        <p>Метод принимает один параметр:</p>
        <ul>
          <li><strong>regexp</strong>: Регулярное выражение, по которому производится поиск.</li>
        </ul>
      `,
    },
    {
      title: "Примеры использования",
      type: "text",
      description: `
        <p>Вот несколько примеров использования метода <code>match()</code>:</p>
      `,
      code: `
// 1. Поиск простого совпадения:
let str1 = "Hello, world!";
let result1 = str1.match(/world/);
console.log(result1); // Вывод: ["world"]

// 2. Поиск с флагом g:
let str2 = "The rain in Spain stays mainly in the plain.";
let result2 = str2.match(/in/g);
console.log(result2); // Вывод: ["in", "in", "in"]

// 3. Регистронезависимый поиск с флагом i:
let str3 = "Hello, World!";
let result3 = str3.match(/world/i);
console.log(result3); // Вывод: ["World"]

// 4. Получение информации о совпадениях:
let str4 = "The quick brown fox jumps over the lazy dog.";
let result4 = str4.match(/(quick|lazy)/);
console.log(result4); // Вывод: ["quick", "quick", index: 4, ... ]

// 5. Использование групп для извлечения данных:
let str5 = "2023-01-27";
let result5 = str5.match(/(\\d{4})-(\\d{2})-(\\d{2})/);
console.log(result5); // Вывод: ["2023-01-27", "2023", "01", "27", ... ]
      `,
    },
    {
      title: "Особенности",
      type: "text",
      description: `
        <p>Некоторые особенности метода <code>match()</code>:</p>
        <ul>
          <li>Если регулярное выражение не находит совпадений, метод вернёт <code>null</code>.</li>
          <li>Метод <code>match()</code> не изменяет исходную строку.</li>
          <li>Использование флага <code>g</code> возвращает массив всех совпадений, но не предоставляет информации о позициях совпадений.</li>
        </ul>
      `,
    },
  ],
};
