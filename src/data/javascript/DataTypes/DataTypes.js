export const DataTypes = {
  id: 136,
  title: "Data types (Типы данных)",
  children: [
    {
      title: "1. Числа (Number)",
      type: "text",
      description: `
        <p><strong>Числа</strong> — это примитивный тип данных, используемый для представления как целых, так и дробных чисел.</p>
        <ul>
          <li><strong>Примеры:</strong> <code>42</code>, <code>3.14</code>.</li>
          <li><strong>Особенности:</strong>
            <ul>
              <li>Поддержка специальных значений: <code>Infinity</code>, <code>-Infinity</code>, <code>NaN</code>.</li>
              <li>Используется для математических операций (<code>+ - * / %</code>).</li>
            </ul>
          </li>
        </ul>
      `,
    },
    {
      title: "2. Строки (String)",
      type: "text",
      description: `
        <p><strong>Строки</strong> — это последовательности символов, используемые для работы с текстом.</p>
        <ul>
          <li><strong>Примеры:</strong> <code>"Hello, world!"</code>, <code>'JavaScript'</code>.</li>
          <li><strong>Методы:</strong>
            <ul>
              <li><code>length</code>: Возвращает длину строки.</li>
              <li><code>toUpperCase()</code>: Преобразует строку в верхний регистр.</li>
              <li><code>toLowerCase()</code>: Преобразует строку в нижний регистр.</li>
              <li><code>substring(start, end)</code>: Извлекает подстроку.</li>
            </ul>
          </li>
          <li><strong>Шаблонные строки:</strong> Используются для создания строк с интерполяцией переменных (<code>\`Привет, \${name}!\`</code>).</li>
        </ul>
      `,
    },
    {
      title: "3. Логические значения (Boolean)",
      type: "text",
      description: `
        <p><strong>Логические значения</strong> используются для представления истинности или ложности.</p>
        <ul>
          <li><strong>Примеры:</strong> <code>true</code>, <code>false</code>.</li>
          <li><strong>Использование:</strong>
            <ul>
              <li>Условные выражения: <code>if (value === true) { ... }</code>.</li>
              <li>Циклы: <code>while (condition) { ... }</code>.</li>
            </ul>
          </li>
          <li><strong>Преобразование в Boolean:</strong> Значения, такие как <code>0</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, преобразуются в <code>false</code>.</li>
        </ul>
      `,
    },
    {
      title: "4. Объекты (Object)",
      type: "text",
      description: `
        <p><strong>Объекты</strong> — это сложные структуры данных, которые могут содержать пары ключ-значение.</p>
        <ul>
          <li><strong>Примеры:</strong> <code>{ name: "Alice", age: 25 }</code>, <code>new Date()</code>.</li>
          <li><strong>Типы объектов:</strong>
            <ul>
              <li>Встроенные: <code>Array</code>, <code>Date</code>, <code>Math</code>.</li>
              <li>Пользовательские: Созданные с помощью литералов объектов или классов.</li>
            </ul>
          </li>
          <li><strong>Методы объектов:</strong> <code>Object.keys()</code>, <code>Object.values()</code>, <code>Object.entries()</code>.</li>
        </ul>
      `,
    },
    {
      title: "5. Массивы (Array)",
      type: "text",
      description: `
        <p><strong>Массивы</strong> — это специальный тип объекта, предназначенный для хранения упорядоченных коллекций значений.</p>
        <ul>
          <li><strong>Примеры:</strong> <code>[1, 2, 3]</code>, <code>["apple", "banana"]</code>.</li>
          <li><strong>Методы массивов:</strong>
            <ul>
              <li><code>push()</code>: Добавляет элемент в конец массива.</li>
              <li><code>pop()</code>: Удаляет последний элемент массива.</li>
              <li><code>map()</code>: Создает новый массив, применяя функцию к каждому элементу.</li>
              <li><code>filter()</code>: Фильтрует массив по условию.</li>
            </ul>
          </li>
        </ul>
      `,
    },
    {
      title: "6. Специальные значения",
      type: "text",
      description: `
        <p><strong>Специальные значения</strong> — это уникальные типы данных, используемые для обозначения особых случаев.</p>
        <ul>
          <li><strong>undefined:</strong> Переменная объявлена, но не инициализирована.</li>
          <li><strong>null:</strong> Явное указание на отсутствие значения.</li>
          <li><strong>Symbol:</strong> Уникальные идентификаторы, доступные с ES6.</li>
          <li><strong>BigInt:</strong> Целые числа произвольной длины, доступные с ES11.</li>
        </ul>
      `,
    },
    {
      title: "7. Примитивные и ссылочные типы",
      type: "text",
      description: `
        <p>В JavaScript типы данных делятся на два вида:</p>
        <ul>
          <li><strong>Примитивные типы:</strong> <code>Number</code>, <code>String</code>, <code>Boolean</code>, <code>undefined</code>, <code>null</code>, <code>Symbol</code>, <code>BigInt</code>.</li>
          <li><strong>Ссылочные типы:</strong> <code>Object</code>, <code>Array</code>, <code>Function</code>.</li>
        </ul>
        <p>Примитивные типы передаются по значению, а ссылочные — по ссылке.</p>
      `,
    },
    {
      title: "8. Проверка типов данных",
      type: "text",
      description: `
        <p>Для проверки типа данных можно использовать следующие методы:</p>
        <ul>
          <li><code>typeof</code>: Возвращает строку с типом данных (<code>typeof 42</code> → <code>"number"</code>).</li>
          <li><code>Array.isArray()</code>: Проверяет, является ли значение массивом.</li>
          <li><code>instanceof</code>: Проверяет принадлежность объекта к определенному классу.</li>
        </ul>
      `,
      code: `
console.log(typeof 42); // "number"
console.log(Array.isArray([1, 2, 3])); // true
console.log([] instanceof Array); // true
      `,
    },
  ],
};
