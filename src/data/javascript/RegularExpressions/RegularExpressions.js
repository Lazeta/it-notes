export const RegularExpressions = {
  id: 161,
  title: "Regular Expressions / Регулярные выражения",
  children: [
    {
      title: "Определение",
      type: "text",
      description: `
            <p>Регулярное выражение (regex) — это последовательность символов, используемая для поиска, сопоставления и манипуляции строками. Регулярные выражения позволяют выполнять сложные шаблонные операции над текстом, такие как валидация данных, поиск и замена.</p>
          `,
    },
    {
      title: "Способы объявления регулярных выражений",
      type: "text",
      description: `
            <p>В JavaScript регулярные выражения можно объявлять двумя основными способами:</p>
          `,
    },
    {
      title: "Литеральный синтаксис",
      type: "text",
      description: `
            <p>Регулярное выражение можно создать с помощью литералов, заключённых в косые черты <code>/.../</code>.</p>
            <p>Пример:</p>
          `,
      code: `
const regex = /abc/;
          `,
    },
    {
      title: "Конструктор RegExp",
      type: "text",
      description: `
            <p>Регулярное выражение также можно создать с помощью конструктора <code>RegExp</code>. Это полезно, когда вам нужно динамически создавать регулярные выражения.</p>
            <p>Пример:</p>
          `,
      code: `
const regex = new RegExp('abc');
          `,
    },
    {
      title: "Примеры использования",
      type: "text",
      description: `
            <p>Вот несколько примеров использования регулярных выражений:</p>
          `,
    },
    {
      title: "Поиск совпадений",
      type: "text",
      description: `
            <p>Вы можете использовать регулярные выражения для поиска совпадений в строке:</p>
          `,
      code: `
const str = "Hello, world!";
const regex = /world/;
const result = str.match(regex);
console.log(result); // Вывод: ["world"]
          `,
    },
    {
      title: "Замена текста",
      type: "text",
      description: `
            <p>Регулярные выражения можно использовать для замены текста:</p>
          `,
      code: `
const str = "I like cats.";
const newStr = str.replace(/cats/, "dogs");
console.log(newStr); // Вывод: "I like dogs."
          `,
    },
    {
      title: "Валидация формата",
      type: "text",
      description: `
            <p>Регулярные выражения часто используются для проверки формата данных, например, адресов электронной почты:</p>
          `,
      code: `
const email = "example@example.com";
const regex = /^[\\w-.]+@[\\w-]+\\.[a-z]{2,}$/i;
console.log(regex.test(email)); // Вывод: true (если формат корректен)
          `,
    },
    {
      title: "Некоторые особенности регулярных выражений:",
      type: "text",
      description: `
            <ul>
              <li>Регулярные выражения могут быть регистронезависимыми с использованием флага <code>i</code>.</li>
              <li>Можно использовать флаги, такие как <code>g</code> (глобальный поиск) и <code>m</code> (многострочный режим).</li>
              <li>Регулярные выражения поддерживают группы, классы символов и квантификаторы.</li>
            </ul>
          `,
    },
    {
      title: "",
      type: "text",
      link: "MDN Web Docs (Mozilla Developer Network):",
      url: "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_expressions",
    },
    {
      title: "",
      type: "text",
      link: "Regex101:",
      url: "https://regex101.com",
    },
    {
      title: "",
      type: "text",
      link: "Regular-Expressions.info:",
      url: "https://www.regular-expressions.info",
    },
    {
      title: "",
      type: "text",
      link: "Mastering Regular Expressions (книга):",
      url: "https://www.oreilly.com/library/view/mastering-regular-expressions/9781491971700/",
    },
    {
      title: "",
      type: "text",
      link: "YouTube Tutorials:",
      url: "https://www.youtube.com/results?search_query=Regular+Expressions+tutorial",
    },
  ],
};
