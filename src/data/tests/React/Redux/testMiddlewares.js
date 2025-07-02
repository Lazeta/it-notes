export const testMiddlewares = {
  id: 103325,
  title: "Middlewares (промежуточное ПО)",
  questions: [
    {
      id: 103326,
      question: "Что такое middleware?",
      answer: `
**Middleware:**
- Это функция, которая выполняется между получением запроса и отправкой ответа в приложении.
- Middleware может выполнять такие задачи, как проверка данных, логирование, обработка ошибок и т.д.

**Пример:**
\`\`\`javascript
function loggerMiddleware(req, res, next) {
  console.log(\`Request URL: \${req.url}\`);
  next(); // Передача управления следующему middleware
}
\`\`\`
`,
    },
    {
      id: 103327,
      question: "Как работает middleware в Express.js?",
      answer: `
**Middleware в Express.js:**
- Middleware — это функция с тремя параметрами: \`req\`, \`res\` и \`next\`.
- \`req\`: Объект запроса.
- \`res\`: Объект ответа.
- \`next\`: Функция, которая передает управление следующему middleware.

**Пример:**
\`\`\`javascript
const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('Middleware executed');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);
\`\`\`
`,
    },
    {
      id: 103328,
      question: "Какие бывают типы middleware?",
      answer: `
**Типы middleware:**
1. **Application-level middleware:**
   - Регистрируется на уровне приложения с помощью \`app.use()\` или \`app.METHOD()\`.

2. **Router-level middleware:**
   - Работает аналогично application-level, но регистрируется на уровне маршрутизатора.

3. **Error-handling middleware:**
   - Принимает четыре параметра: \`err\`, \`req\`, \`res\`, \`next\`.

4. **Built-in middleware:**
   - Встроенные middleware, такие как \`express.static\`, \`express.json\`.

5. **Third-party middleware:**
   - Используются сторонние библиотеки, например, \`morgan\`, \`helmet\`.

**Пример:**
\`\`\`javascript
// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
\`\`\`
`,
    },
    {
      id: 103329,
      question: "Как создать собственный middleware?",
      answer: `
**Создание middleware:**
- Middleware — это функция с параметрами \`req\`, \`res\` и \`next\`.

**Пример:**
\`\`\`javascript
function authMiddleware(req, res, next) {
  const authToken = req.headers.authorization;
  if (authToken === 'secret-token') {
    next(); // Продолжить выполнение
  } else {
    res.status(401).send('Unauthorized');
  }
}

app.use(authMiddleware);
\`\`\`
`,
    },
    {
      id: 103330,
      question: "Как использовать middleware для обработки ошибок?",
      answer: `
**Middleware для обработки ошибок:**
- Принимает четыре параметра: \`err\`, \`req\`, \`res\`, \`next\`.

**Пример:**
\`\`\`javascript
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: 'Internal Server Error' });
});
\`\`\`
`,
    },
    {
      id: 103331,
      question: "Как добавить middleware только для определенного маршрута?",
      answer: `
**Middleware для конкретного маршрута:**
- Middleware можно добавить непосредственно в маршрут.

**Пример:**
\`\`\`javascript
function validateUser(req, res, next) {
  if (req.query.user === 'admin') {
    next();
  } else {
    res.status(403).send('Access Denied');
  }
}

app.get('/admin', validateUser, (req, res) => {
  res.send('Welcome, Admin!');
});
\`\`\`
`,
    },
    {
      id: 103332,
      question: "Что делает метод app.use()?",
      answer: `
**app.use():**
- Регистрирует middleware для всех HTTP-методов и всех маршрутов.

**Пример:**
\`\`\`javascript
app.use((req, res, next) => {
  console.log('Global middleware');
  next();
});
\`\`\`
`,
    },
    {
      id: 103333,
      question: "Как использовать встроенные middleware в Express?",
      answer: `
**Встроенные middleware:**
- \`express.json()\`: Парсит JSON в теле запроса.
- \`express.urlencoded()\`: Парсит данные из формы.
- \`express.static()\`: Обслуживает статические файлы.

**Пример:**
\`\`\`javascript
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
\`\`\`
`,
    },
    {
      id: 103334,
      question: "Как тестировать middleware?",
      answer: `
**Тестирование middleware:**
- Используйте библиотеки, такие как \`supertest\` или \`jest\`.

**Пример:**
\`\`\`javascript
const request = require('supertest');
const express = require('express');

const app = express();

app.use((req, res, next) => {
  req.test = 'middleware works';
  next();
});

app.get('/', (req, res) => {
  res.send(req.test);
});

test('middleware test', async () => {
  const response = await request(app).get('/');
  expect(response.text).toBe('middleware works');
});
\`\`\`
`,
    },
    {
      id: 103335,
      question: "Как использовать сторонние middleware?",
      answer: `
**Сторонние middleware:**
- Установите библиотеку через npm и зарегистрируйте её.

**Пример:**
\`\`\`javascript
const morgan = require('morgan');

app.use(morgan('dev')); // Логирование запросов
\`\`\`
`,
    },
  ],
};
