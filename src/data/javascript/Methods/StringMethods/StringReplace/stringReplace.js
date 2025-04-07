export const stringReplace = {
  title: "24.str.replace()",
  id: 2538,
  children: [
    {
      title: "Определение",
      type: "text",
      description: `
                <p>Метод <code>replace()</code> используется для замены части строки на другую строку. Он возвращает новую строку, в которой все (или первое) вхождения искомой подстроки заменены на указанную.</p>
              `,
    },
    {
      title: "Синтаксис",
      type: "text",
      description: `
                <p>Синтаксис метода <code>replace()</code> выглядит следующим образом:</p>
              `,
      code: `
        str.replace(searchValue, newValue);
              `,
    },
    {
      title: "Параметры",
      type: "text",
      description: `
                <p>Метод принимает два параметра:</p>
                <ul>
                  <li><strong>searchValue</strong>: Строка или регулярное выражение, определяющее, что нужно заменить.</li>
                  <li><strong>newValue</strong>: Строка, на которую нужно заменить <code>searchValue</code>.</li>
                </ul>
              `,
    },
    {
      title: "Примеры использования",
      type: "text",
      description: `
                <p>Вот несколько примеров использования метода <code>replace()</code>:</p>
              `,
      code: `
        1. Замена подстроки:
        let str1 = "Hello, world!";
        let newStr1 = str1.replace("world", "JavaScript");
        console.log(newStr1); // Вывод: "Hello, JavaScript!"
        
        2. Замена с использованием регулярного выражения:
        let str2 = "I like cats, cats are great.";
        let newStr2 = str2.replace(/cats/g, "dogs");
        console.log(newStr2); // Вывод: "I like dogs, dogs are great."
        
        3. Замена первого вхождения:
        let str3 = "one one one";
        let newStr3 = str3.replace("one", "two");
        console.log(newStr3); // Вывод: "two one one"
        
        4. Использование функции в качестве второго аргумента:
        let str4 = "I have 2 apples and 3 oranges.";
        let newStr4 = str4.replace(/\\d+/g, (match) => {
          return parseInt(match) * 2; // Умножаем каждое число на 2
        });
        console.log(newStr4); // Вывод: "I have 4 apples and 6 oranges."
              `,
    },
    {
      title: "Особенности",
      type: "text",
      description: `
                <p>Некоторые особенности метода <code>replace()</code>:</p>
                <ul>
                  <li>Метод не изменяет исходную строку; он возвращает новую.</li>
                  <li>Если <code>searchValue</code> — строка, замена будет регистронезависимой.</li>
                  <li>При использовании регулярного выражения с флагом <code>g</code> будут заменены все вхождения.</li>
                </ul>
              `,
    },
  ],
};
