export const TextModule = {
  title: "Текст",
  children: [
    {
      title: "Заголовок текста с описанием",
      type: "text",
      description: `
            <p><code><strong>Set</strong></code> — это встроенный объект в JavaScript, который позволяет хранить коллекцию уникальных значений. Это означает, что в одном <code>Set</code> не может быть дубликатов. Значения могут быть любого типа, включая объекты и примитивы.</p>
          `,
    },
    {
      title: "",
      type: "text",
      description: `без заголовка просто описание = JSON.parse(text, reviver): Преобразует строку JSON в значение.`,
    },
    {
      title: "",
      type: "text",
      description: `без заголовка описание и ссылка = JSON.parse(text, reviver): Преобразует строку JSON в значение.`,
      link: "ссылка",
      url: "https://learn.javascript.ru/promise-basics",
    },
    {
      title: "Заголовок текста",
      type: "text",
      description: `
            <p><code><strong>Get</strong></code> — это встроенный объект в JavaScript, который позволяет получить значение свойства объекта по его имени.</p>
          `,
      link: "ссылка",
      url: "https://learn.javascript.ru/promise-basics",
    },
    {
      title: "",
      type: "text",
      description: `без заголовка описание и неверная ссылка = JSON.parse(text, reviver): Преобразует строку JSON в значение.`,
      link: "ссылка",
      url: "http:",
    },
  ],
};
