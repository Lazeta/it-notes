export const testAsyncAwait = {
  id: 101425,
  title: "Async Await",
  questions: [
    {
      id: 101426,
      question: "Расскажи про async await",
      answer: `
**async и await:**
- Это синтаксический сахар, упрощающий написание асинхронного кода, основанного на промисах.
- \`async\` объявляет функцию как асинхронную и автоматически возвращает промис.
- \`await\` приостанавливает выполнение кода до завершения промиса, делая асинхронный код более читабельным и похожим на синхронный.

**Пример:**
\`\`\`javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data ');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
\`\`\`
`,
    },
    {
      id: 101427,
      question: "Как работает async?",
      answer: `
**async:**
- Преобразует функцию в асинхронную.
- Всегда возвращает промис. Если функция возвращает значение, оно автоматически оборачивается в промис.

**Пример:**
\`\`\`javascript
async function greet() {
  return "Hello, world!";
}

greet().then((message) => {
  console.log(message); // Hello, world!
});
\`\`\`
`,
    },
    {
      id: 101428,
      question: "Как работает await?",
      answer: `
**await:**
- Приостанавливает выполнение асинхронной функции до тех пор, пока промис не будет выполнен (resolved или rejected).
- Может использоваться только внутри функций, объявленных с \`async\`.

**Пример:**
\`\`\`javascript
async function waitForPromise() {
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve("Done!"), 1000);
  });

  const result = await promise;
  console.log(result); // Done! (после 1 секунды)
}

waitForPromise();
\`\`\`
`,
    },
    {
      id: 101429,
      question: "Как обрабатывать ошибки в async/await?",
      answer: `
**Обработка ошибок:**
- Используйте \`try...catch\` для перехвата ошибок, возникающих при выполнении асинхронного кода.

**Пример:**
\`\`\`javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data ');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchData();
\`\`\`
`,
    },
    {
      id: 101430,
      question: "Чем async/await лучше, чем промисы?",
      answer: `
**Преимущества async/await перед промисами:**
1. **Читаемость:** Код выглядит как синхронный, что упрощает его понимание.
2. **Удобство обработки ошибок:** \`try...catch\` работает так же, как в синхронном коде.
3. **Меньше вложенности:** Нет необходимости использовать цепочки \`then()\`, что делает код более плоским и менее запутанным.

**Пример сравнения:**

**С промисами:**
\`\`\`javascript
function fetchData() {
  return fetch('https://api.example.com/data ')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error('Error:', error.message);
    });
}
\`\`\`

**С async/await:**
\`\`\`javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data ');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}
\`\`\`
`,
    },
    {
      id: 101431,
      question: "Можно ли использовать async/await с forEach?",
      answer: `
**Нет, нельзя:**
- \`forEach\` не поддерживает асинхронные операции, так как он не дожидается завершения \`await\`.

**Альтернатива:**
- Используйте \`for...of\` или \`map\` с \`Promise.all\`.

**Пример с for...of:**
\`\`\`javascript
async function processItems(items) {
  for (const item of items) {
    const result = await processItem(item);
    console.log(result);
  }
}
\`\`\`

**Пример с map и Promise.all:**
\`\`\`javascript
async function processItems(items) {
  const results = await Promise.all(items.map(async (item) => {
    return await processItem(item);
  }));
  console.log(results);
}
\`\`\`
`,
    },
    {
      id: 101432,
      question: "Что такое параллельное выполнение в async/await?",
      answer: `
**Параллельное выполнение:**
- Выполнение нескольких асинхронных операций одновременно с помощью \`Promise.all\`.

**Пример:**
\`\`\`javascript
async function fetchAllData() {
  const [users, posts] = await Promise.all([
    fetch('https://api.example.com/users ').then((res) => res.json()),
    fetch('https://api.example.com/posts ').then((res) => res.json()),
  ]);

  console.log(users, posts);
}

fetchAllData();
\`\`\`
`,
    },
    {
      id: 101433,
      question: "Как отменить асинхронную операцию в async/await?",
      answer: `
**Отмена асинхронной операции:**
- Используйте \`AbortController\` для отмены запросов, таких как \`fetch\`.

**Пример:**
\`\`\`javascript
async function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const signal = controller.signal;

  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, { signal });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Request aborted');
    } else {
      console.error('Error:', error.message);
    }
  } finally {
    clearTimeout(timeoutId);
  }
}

fetchWithTimeout('https://api.example.com/data ', 3000);
\`\`\`
`,
    },
  ],
};
