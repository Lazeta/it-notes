export const stringsAndTemplateLiterals = {
  id: 526,
  title: "Strings & Template Literals",
  children: [
    {
      title: "Базовые операции со строками",
      type: "text",
      description: `
          <p><strong>Создание строк:</strong></p>
          <pre><code>const str1 = 'Одинарные кавычки';
  const str2 = "Двойные кавычки";
  const str3 = \`Шаблонные литералы\`;</code></pre>
  
          <p><strong>Доступ к символам:</strong></p>
          <pre><code>'hello'[1]; // 'e'
  'hello'.charAt(1); // 'e'
  'hello'.at(-1); // 'o' (новый метод)</code></pre>
  
          <p><strong>Длина строки:</strong></p>
          <pre><code>'Привет'.length; // 6</code></pre>
        `,
    },
    {
      title: "Методы строк",
      type: "text",
      description: `
          <p><strong>Поиск в строке:</strong></p>
          <pre><code>'hello'.indexOf('l'); // 2
  'hello'.lastIndexOf('l'); // 3
  'hello'.includes('ell'); // true
  'hello'.startsWith('he'); // true
  'hello'.endsWith('lo'); // true</code></pre>
  
          <p><strong>Изменение строки:</strong></p>
          <pre><code>'Hello'.toLowerCase(); // 'hello'
  'hello'.toUpperCase(); // 'HELLO'
  ' hello '.trim(); // 'hello'
  'hello'.repeat(3); // 'hellohellohello'</code></pre>
  
          <p><strong>Извлечение подстроки:</strong></p>
          <pre><code>'hello'.slice(1, 4); // 'ell'
  'hello'.substring(1, 4); // 'ell'
  'hello'.substr(1, 3); // 'ell' (устаревший)</code></pre>
        `,
    },
    {
      title: "Шаблонные литералы (Template literals)",
      type: "text",
      description: `
          <p><strong>Многострочные строки:</strong></p>
          <pre><code>\`Первая строка
  Вторая строка
  Третья строка\`;</code></pre>
  
          <p><strong>Интерполяция переменных:</strong></p>
          <pre><code>const name = 'Анна';
  const age = 25;
  \`Меня зовут \${name} и мне \${age} лет.\`;
  // "Меня зовут Анна и мне 25 лет."</code></pre>
  
          <p><strong>Выражения внутри:</strong></p>
          <pre><code>\`Сумма: \${5 + 3}\`; // "Сумма: 8"
  \`Текущая дата: \${new Date().toLocaleDateString()}\`;</code></pre>
        `,
    },
    {
      title: "Тегированные шаблоны",
      type: "text",
      description: `
          <p><strong>Пользовательская обработка строк:</strong></p>
          <pre><code>function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
      return \`\${result}\${str}\${values[i] ? \`&lt;mark&gt;\${values[i]}&lt;/mark&gt;\` : ''}\`;
    }, '');
  }
  
  const name = 'Алексей';
  const age = 30;
  
  highlight\`Пользователь \${name}, возраст \${age}\`;
  // "Пользователь &lt;mark&gt;Алексей&lt;/mark&gt;, возраст &lt;mark&gt;30&lt;/mark&gt;"</code></pre>
  
          <p><strong>Применение:</strong></p>
          <ul>
            <li>Экранирование HTML</li>
            <li>Интернационализация</li>
            <li>Стилизация текста</li>
          </ul>
        `,
    },
    {
      title: "Полезные методы",
      type: "text",
      description: `
          <p><strong>Разделение и соединение:</strong></p>
          <pre><code>'a,b,c'.split(','); // ['a', 'b', 'c']
  ['a', 'b', 'c'].join('-'); // 'a-b-c'</code></pre>
  
          <p><strong>Проверка на соответствие:</strong></p>
          <pre><code>'123'.match(/\\d+/); // ['123', index: 0, ...]
  'hello'.search(/ell/); // 1</code></pre>
  
          <p><strong>Замена подстроки:</strong></p>
          <pre><code>'Hello world'.replace('world', 'everyone'); // 'Hello everyone'
  '2023-10-15'.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, '$3.$2.$1'); // '15.10.2023'</code></pre>
        `,
    },
    {
      title: "Юникод и строки",
      type: "text",
      description: `
          <p><strong>Суррогатные пары:</strong></p>
          <pre><code>'😂'.length; // 2 (суррогатная пара)
  '😂'.codePointAt(0); // 128514
  String.fromCodePoint(128514); // '😂'</code></pre>
  
          <p><strong>Нормализация:</strong></p>
          <pre><code>'é'.normalize('NFC').length; // 1
  'é'.normalize('NFC').length; // 1 (объединяет символы)</code></pre>
  
          <p><strong>Итерация по символам:</strong></p>
          <pre><code>for (const char of 'str😂') {
    console.log(char); // 's', 't', 'r', '😂'
  }</code></pre>
        `,
    },
    {
      title: "Практические примеры",
      type: "text",
      description: `
          <p><strong>Форматирование чисел:</strong></p>
          <pre><code>const price = 123456.789;
  \`Цена: \${price.toLocaleString('ru-RU')} руб.\`;
  // "Цена: 123 456,789 руб."</code></pre>
  
          <p><strong>Шаблоны для HTML:</strong></p>
          <pre><code>const items = ['Хлеб', 'Молоко', 'Яйца'];
  const html = \`
    &lt;ul&gt;
      \${items.map(item => \`&lt;li&gt;\${item}&lt;/li&gt;\`).join('')}
    &lt;/ul&gt;
  \`;</code></pre>
  
          <p><strong>Шаблонные строки как аргументы:</strong></p>
          <pre><code>function sql(strings, ...values) {
    // Безопасное формирование SQL-запроса
  }
  sql\`SELECT * FROM users WHERE id = \${userId}\`;</code></pre>
        `,
    },
  ],
};
