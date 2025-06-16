export const DOM = {
  id: 220,
  title: "DOM (Документ Объект Модель)",
  children: [
    {
      title: "Что такое DOM?",
      type: "text",
      description: `
        <p><strong>DOM (Document Object Model)</strong> — это программный интерфейс, который представляет HTML- или XML-документ в виде дерева узлов. DOM позволяет программам и скриптам динамически взаимодействовать с содержимым, структурой и стилем документа.</p>
        <p>DOM является стандартом W3C и обеспечивает платформонезависимый способ работы с документами.</p>
      `,
    },
    {
      title: "Структура DOM",
      type: "text",
      description: `
        <p>DOM представляет собой дерево узлов, где каждый узел соответствует элементу, тексту или атрибуту в документе:</p>
        <ul>
          <li><strong>Элементы:</strong> HTML-теги, такие как <code><div></code>, <code><p></code>.</li>
          <li><strong>Текстовые узлы:</strong> Содержимое внутри тегов, например, текст в <code><p>Hello</p></code>.</li>
          <li><strong>Атрибуты:</strong> Дополнительные свойства элементов, например, <code>class="container"</code>.</li>
        </ul>
        <p>Пример DOM-дерева:</p>
        <pre><code><html>
  <head><title>Page</title></head>
  <body>
    <div id="app"></div>
  </body>
</html></code></pre>
      `,
    },
    {
      title: "Связь с HTML и CSS",
      type: "text",
      description: `
        <p>DOM тесно связан с HTML и CSS:</p>
        <ul>
          <li><strong>HTML:</strong> Определяет структуру документа, которая затем преобразуется в DOM.</li>
          <li><strong>CSS:</strong> Определяет внешний вид элементов. DOM предоставляет доступ к вычисленным стилям через API, например, <code>getComputedStyle</code>.</li>
          <li><strong>JavaScript:</strong> Является основным языком для манипуляции DOM.</li>
        </ul>
        <p>Пример связи:</p>
        <pre><code><style>
  .highlight { color: red; }
</style>

<div class="highlight">Text</div></code></pre>
        <p>JavaScript может изменить класс элемента, чтобы применить стиль:</p>
        <pre><code>element.classList.add('highlight');</code></pre>
      `,
    },
    {
      title: "Как браузер создает DOM",
      type: "text",
      description: `
        <p>Процесс создания DOM включает несколько этапов:</p>
        <ol>
          <li><strong>Парсинг HTML:</strong> Браузер читает HTML-документ и строит DOM-дерево.</li>
          <li><strong>Построение CSSOM:</strong> Браузер парсит CSS и создает CSS Object Model.</li>
          <li><strong>Объединение DOM и CSSOM:</strong> Создается Render Tree, который определяет, какие элементы будут отображаться на экране.</li>
          <li><strong>Layout:</strong> Вычисляются размеры и позиции элементов.</li>
          <li><strong>Painting:</strong> Элементы отрисовываются на экране.</li>
        </ol>
      `,
    },
    {
      title: "Преимущества и недостатки DOM",
      type: "text",
      description: `
        <p><strong>Преимущества:</strong></p>
        <ul>
          <li>Универсальный интерфейс для работы с документами.</li>
          <li>Позволяет динамически изменять содержимое и стили.</li>
          <li>Поддерживается всеми современными браузерами.</li>
        </ul>
        <p><strong>Недостатки:</strong></p>
        <ul>
          <li>Может быть медленным при частых изменениях из-за рефлоу и репейнтинга.</li>
          <li>Сложность работы с большими документами.</li>
        </ul>
      `,
    },
    {
      title: "",
      type: "text",
      url: "https://developer.mozilla.org/ru/docs/Web/API/Document_Object_Model",
      link: "MDN: DOM",
    },
  ],
};
