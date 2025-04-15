export const DataTypes = {
  id: 136,
  title: "Data types",
  children: [
    {
      title: "1. Числа (Number)",
      type: "text",
      description: `
            <p>Характеристики чисел:</p>
            <ul>
              <li><strong>Тип данных</strong>: Представляют как целые, так и дробные числа.</li>
              <li><strong>Примеры</strong>: <code>42</code>, <code>3.14</code>.</li>
              <li><strong>Особенности</strong>: Поддерживают специальные значения, такие как <code>Infinity</code>, <code>-Infinity</code>, и <code>NaN</code> (не число).</li>
            </ul>
          `,
    },
    {
      title: "2. Строки (String)",
      type: "text",
      description: `
            <p>Характеристики строк:</p>
            <ul>
              <li><strong>Тип данных</strong>: Последовательность символов, используемая для представления текста.</li>
              <li><strong>Примеры</strong>: <code>"Hello, world!"</code>, <code>'JavaScript'</code>.</li>
              <li><strong>Методы</strong>: Строки имеют множество методов, таких как <code>length</code>, <code>substring()</code>, <code>toUpperCase()</code>.</li>
            </ul>
          `,
    },
    {
      title: "3. Логические значения (Boolean)",
      type: "text",
      description: `
            <p>Характеристики логических значений:</p>
            <ul>
              <li><strong>Тип данных</strong>: Представляют истинное (<code>true</code>) или ложное (<code>false</code>) значение.</li>
              <li><strong>Примеры</strong>: <code>true</code>, <code>false</code>.</li>
              <li><strong>Использование</strong>: Часто используются в условиях и циклах.</li>
            </ul>
          `,
    },
    {
      title: "4. Объекты (Object)",
      type: "text",
      description: `
            <p>Характеристики объектов:</p>
            <ul>
              <li><strong>Тип данных</strong>: Сложные структуры, которые могут содержать множество значений и методов.</li>
              <li><strong>Примеры</strong>: <code>{ name: "Alice", age: 25 }</code>, <code>new Date()</code>.</li>
              <li><strong>Типы объектов</strong>: Могут быть встроенными (Array, Date и т.д.) или пользовательскими.</li>
            </ul>
          `,
    },
    {
      title: "5. Массивы (Array)",
      type: "text",
      description: `
            <p>Характеристики массивов:</p>
            <ul>
              <li><strong>Тип данных</strong>: Специальный тип объекта, который хранит упорядоченные коллекции значений.</li>
              <li><strong>Примеры</strong>: <code>[1, 2, 3]</code>, <code>["apple", "banana"]</code>.</li>
              <li><strong>Методы</strong>: Массивы имеют множество методов, таких как <code>push()</code>, <code>pop()</code>, <code>map()</code>.</li>
            </ul>
          `,
    },
    {
      title: "6. Специальные значения",
      type: "text",
      description: `
            <p>Некоторые специальные значения:</p>
            <ul>
              <li><strong>undefined</strong>: Переменная, которая была объявлена, но не инициализирована.</li>
              <li><strong>null</strong>: Явное указание на отсутствие значения или объект.</li>
              <li><strong>Symbol</strong>: Уникальные и неизменяемые идентификаторы (доступны с ES6).</li>
              <li><strong>BigInt</strong>: Тип данных для работы с целыми числами произвольной длины (доступен с ES11).</li>
            </ul>
          `,
    },
  ],
};
