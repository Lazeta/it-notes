export const DifferenceBetweenScriptAsyncAndDefer = {
  title: "Разница между script, script async и script defer",
  children: [
    {
      title: "Загрузки скриптов",
      type: "text",
      description: `
    <p>Существует три способа подключения скриптов в HTML:</p>
    <ul>
      <li>&lt;script&gt;: Загружает и выполняет скрипт синхронно.</li>
      <li>&lt;script async&gt;: Загружает скрипт асинхронно, не блокируя загрузку страницы.</li>
      <li>&lt;script defer&gt;: Также загружает скрипт асинхронно, но гарантирует, что он будет выполнен после полной загрузки HTML.</li>
    </ul>
    <p>Пример:</p>
    `,
      code: `
<script src="script.js"></script>
<script async src="script-async.js"></script>
<script defer src="script-defer.js"></script>
    `,
    },
  ],
};
