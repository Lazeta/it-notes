import { stringReplace } from "./StringReplace/stringReplace";

export const stringMethods = {
  id: 506,
  title: "Strings Methods",
  children: [
    {
      title: "1. Методы преобразования",
      type: "text",
      description: `
        <p>Эти методы используются для изменения регистра, удаления пробелов и других преобразований строк:</p>
      `,
      children: [
        {
          title: "toUpperCase()",
          type: "text",
          description: `
            <p><strong>toUpperCase()</strong>: Преобразует строку в верхний регистр.</p>
          `,
          code: `
const str = "hello";
console.log(str.toUpperCase()); // "HELLO"
          `,
        },
        {
          title: "toLowerCase()",
          type: "text",
          description: `
            <p><strong>toLowerCase()</strong>: Преобразует строку в нижний регистр.</p>
          `,
          code: `
const str = "WORLD";
console.log(str.toLowerCase()); // "world"
          `,
        },
        {
          title: "trim()",
          type: "text",
          description: `
            <p><strong>trim()</strong>: Удаляет пробелы в начале и конце строки.</p>
          `,
          code: `
const str = "   hello   ";
console.log(str.trim()); // "hello"
          `,
        },
        {
          title: "trimStart()",
          type: "text",
          description: `
            <p><strong>trimStart()</strong>: Удаляет пробелы только в начале строки.</p>
          `,
          code: `
const str = "   hello   ";
console.log(str.trimStart()); // "hello   "
          `,
        },
        {
          title: "trimEnd()",
          type: "text",
          description: `
            <p><strong>trimEnd()</strong>: Удаляет пробелы только в конце строки.</p>
          `,
          code: `
const str = "   hello   ";
console.log(str.trimEnd()); // "   hello"
          `,
        },
      ],
    },
    {
      title: "2. Методы поиска",
      type: "text",
      description: `
        <p>Эти методы используются для поиска подстроки или символов в строке:</p>
      `,
      children: [
        {
          title: "includes()",
          type: "text",
          description: `
            <p><strong>includes(substring)</strong>: Проверяет, содержится ли подстрока в строке. Возвращает <code>true</code> или <code>false</code>.</p>
          `,
          code: `
const str = "Hello, world!";
console.log(str.includes("world")); // true
console.log(str.includes("earth")); // false
          `,
        },
        {
          title: "startsWith()",
          type: "text",
          description: `
            <p><strong>startsWith(substring)</strong>: Проверяет, начинается ли строка с указанной подстроки.</p>
          `,
          code: `
const str = "Hello, world!";
console.log(str.startsWith("Hello")); // true
console.log(str.startsWith("world")); // false
          `,
        },
        {
          title: "endsWith()",
          type: "text",
          description: `
            <p><strong>endsWith(substring)</strong>: Проверяет, заканчивается ли строка на указанную подстроку.</p>
          `,
          code: `
const str = "Hello, world!";
console.log(str.endsWith("world!")); // true
console.log(str.endsWith("Hello")); // false
          `,
        },
        {
          title: "indexOf()",
          type: "text",
          description: `
            <p><strong>indexOf(substring)</strong>: Возвращает индекс первого вхождения подстроки. Если подстрока не найдена, возвращает <code>-1</code>.</p>
          `,
          code: `
const str = "Hello, world!";
console.log(str.indexOf("world")); // 7
console.log(str.indexOf("earth")); // -1
          `,
        },
        {
          title: "search()",
          type: "text",
          description: `
            <p><strong>search(regexp)</strong>: Ищет совпадение с регулярным выражением и возвращает индекс первого вхождения.</p>
          `,
          code: `
const str = "Hello, world!";
console.log(str.search(/world/)); // 7
console.log(str.search(/earth/)); // -1
          `,
        },
      ],
    },
    {
      title: "3. Методы разбиения и объединения",
      type: "text",
      description: `
        <p>Эти методы используются для разбиения строки на части или объединения нескольких строк:</p>
      `,
      children: [
        {
          title: "split()",
          type: "text",
          description: `
            <p><strong>split(separator)</strong>: Разбивает строку на массив подстрок по указанному разделителю.</p>
          `,
          code: `
const str = "apple,banana,cherry";
const fruits = str.split(",");
console.log(fruits); // ["apple", "banana", "cherry"]
          `,
        },
        {
          title: "concat()",
          type: "text",
          description: `
            <p><strong>concat(string)</strong>: Объединяет две или более строк в одну.</p>
          `,
          code: `
const str1 = "Hello, ";
const str2 = "world!";
const result = str1.concat(str2);
console.log(result); // "Hello, world!"
          `,
        },
      ],
    },
    {
      title: "4. Методы извлечения частей строки",
      type: "text",
      description: `
        <p>Эти методы используются для получения подстроки из строки:</p>
      `,
      children: [
        {
          title: "slice()",
          type: "text",
          description: `
            <p><strong>slice(start, end)</strong>: Извлекает часть строки от <code>start</code> до <code>end</code> (не включая <code>end</code>). Поддерживает отрицательные значения.</p>
          `,
          code: `
const str = "Hello, world!";
console.log(str.slice(0, 5)); // "Hello"
console.log(str.slice(-6)); // "world!"
          `,
        },
        {
          title: "substring()",
          type: "text",
          description: `
            <p><strong>substring(start, end)</strong>: Извлекает часть строки от <code>start</code> до <code>end</code>. Не поддерживает отрицательные значения.</p>
          `,
          code: `
const str = "Hello, world!";
console.log(str.substring(0, 5)); // "Hello"
console.log(str.substring(7)); // "world!"
          `,
        },
        {
          title: "substr()",
          type: "text",
          description: `
            <p><strong>substr(start, length)</strong>: Извлекает подстроку длиной <code>length</code>, начиная с позиции <code>start</code>. <em>(Устаревший метод.)</em></p>
          `,
          code: `
const str = "Hello, world!";
console.log(str.substr(0, 5)); // "Hello"
console.log(str.substr(7, 5)); // "world"
          `,
        },
      ],
    },
    {
      title: "5. Дополнительные методы",
      type: "text",
      description: `
        <p>Другие полезные методы строк:</p>
      `,
      children: [
        {
          title: "repeat()",
          type: "text",
          description: `
            <p><strong>repeat(count)</strong>: Повторяет строку указанное количество раз.</p>
          `,
          code: `
const str = "abc";
console.log(str.repeat(3)); // "abcabcabc"
          `,
        },
        {
          title: "padStart()",
          type: "text",
          description: `
            <p><strong>padStart(targetLength, padString)</strong>: Добавляет символы в начало строки, чтобы её длина достигла <code>targetLength</code>.</p>
          `,
          code: `
const str = "5";
console.log(str.padStart(3, "0")); // "005"
          `,
        },
        {
          title: "padEnd()",
          type: "text",
          description: `
            <p><strong>padEnd(targetLength, padString)</strong>: Добавляет символы в конец строки, чтобы её длина достигла <code>targetLength</code>.</p>
          `,
          code: `
const str = "5";
console.log(str.padEnd(3, "0")); // "500"
          `,
        },
        {
          title: "at()",
          type: "text",
          description: `
            <p><strong>at(index)</strong>: Возвращает символ по указанному индексу. Поддерживает отрицательные индексы для доступа с конца строки.</p>
          `,
          code: `
const str = "Hello, world!";
console.log(str.at(0)); // "H"
console.log(str.at(-1)); // "!"
          `,
        },
      ],
    },
    {
      title: "6. Замена и работа с символами",
      type: "text",
      description: `
        <p>Методы для замены подстрок и работы с символами:</p>
      `,
      children: [
        stringReplace,
        {
          title: "charAt()",
          type: "text",
          description: `
            <p><strong>charAt(index)</strong>: Возвращает символ по указанному индексу.</p>
          `,
          code: `
const str = "Hello";
console.log(str.charAt(1)); // "e"
          `,
        },
        {
          title: "charCodeAt()",
          type: "text",
          description: `
            <p><strong>charCodeAt(index)</strong>: Возвращает Unicode-код символа по указанному индексу.</p>
          `,
          code: `
const str = "A";
console.log(str.charCodeAt(0)); // 65
          `,
        },
      ],
    },
    {
      title: "7. Полезные ссылки",
      type: "text",
      description: `
        <p>Дополнительные материалы для изучения:</p>
      `,
      children: [
        {
          title: "Learn more about string methods",
          type: "link",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",
        },
        {
          title: "Interactive examples of string methods",
          type: "link",
          url: "https://javascript.info/string",
        },
      ],
    },
  ],
};
