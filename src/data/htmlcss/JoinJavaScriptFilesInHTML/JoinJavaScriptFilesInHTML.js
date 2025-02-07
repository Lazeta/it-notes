export const JoinJavaScriptFilesInHTML = {
  id: 129,
  title: "Подключение JavaScript-скриптов в HTML",
  children: [
    {
      title: "1. Внешний скрипт (External Script)",
      type: "text",
      description: `
      <p>Подключение скрипта через отдельный файл:</p>
      <ul>
        <li><strong>Используемый тег</strong>: <code>&lt;script&gt;</code>.</li>
        <li><strong>Пример</strong>: 
          <code>&lt;script src="script.js"&gt;&lt;/script&gt;</code>.
        </li>
        <li><strong>Преимущества</strong>: Упрощает организацию кода и позволяет повторно использовать скрипты на нескольких страницах.</li>
      </ul>
    `,
    },
    {
      title: "2. Встроенный скрипт (Internal Script)",
      type: "text",
      description: `
      <p>Подключение скрипта непосредственно в документе:</p>
      <ul>
        <li><strong>Используемый тег</strong>: <code>&lt;script&gt;</code>.</li>
        <li><strong>Пример</strong>: 
          <code>&lt;script&gt; console.log('Hello, world!'); &lt;/script&gt;</code>.
        </li>
        <li><strong>Преимущества</strong>: Удобно для небольших скриптов, специфичных для одной страницы.</li>
      </ul>
    `,
    },
    {
      title: "Атрибуты тега <script>",
      type: "text",
      description: `
      <p>Основные атрибуты:</p>
      <ul>
        <li><strong>src</strong>: Указывает путь к внешнему JavaScript-файлу.</li>
        <li><strong>defer</strong>: Загружает скрипт после завершения парсинга HTML-документа. Работает только с внешними скриптами.</li>
        <li><strong>async</strong>: Загружает скрипт асинхронно, не блокируя парсинг HTML. Работает только с внешними скриптами.</li>
        <li><strong>type</strong>: Указывает тип скрипта (по умолчанию <code>text/javascript</code>). Например, для модулей можно использовать <code>type="module"</code>.</li>
        <li><strong>integrity</strong>: Используется для проверки целостности загружаемого файла с использованием Subresource Integrity (SRI).</li>
        <li><strong>crossorigin</strong>: Определяет, как браузер должен обрабатывать кросс-доменные запросы для загружаемого скрипта.</li>
      </ul>
    `,
    },
  ],
};
