export const testCORS = {
  id: 100050,
  title: "Тест по CORS",
  questions: [
    {
      id: 100051,
      question: "Что такое CORS?",
      answer: `<strong>CORS (Cross-Origin Resource Sharing — «совместное использование ресурсов между разными источниками»)</strong> — 
      это механизм, который позволяет веб-страницам запрашивать ресурсы с другого домена, отличного от домена, 
      с которого была загружена сама страница. По умолчанию, в целях безопасности, веб-браузеры ограничивают 
      кросс-доменные запросы с использованием так называемой политики одного источника (Same-Origin Policy). 
      CORS предоставляет веб-серверам возможность явно разрешать некоторые кросс-доменные запросы, сохраняя при этом безопасность.`,
    },
    {
      id: 100052,
      question: "Как работает CORS?",
      answer: `Когда веб-приложение пытается сделать запрос к ресурсу, который находится на другом домене (кросс-доменный запрос), 
      браузер автоматически добавляет к запросу заголовок \`Origin\`. Этот заголовок содержит домен, с которого был сделан запрос. 
      Веб-сервер проверяет этот заголовок и решает, разрешить ли запрос. Если сервер разрешает запросы из этого источника, он отвечает 
      с соответствующими CORS-заголовками:
      
      - \`Access-Control-Allow-Origin\`: Указывает, какие источники могут получать доступ к ресурсу.
      - \`Access-Control-Allow-Methods\`: Указывает, какие HTTP-методы разрешены.
      - \`Access-Control-Allow-Headers\`: Указывает, какие заголовки могут быть использованы в запросе.
      
      Пример:
      \`\`\`http
      GET /data HTTP/1.1
      Host: api.example.com
      Origin: https://frontend.example.com 

      HTTP/1.1 200 OK
      Access-Control-Allow-Origin: https://frontend.example.com 
      \`\`\`
      `,
    },
    {
      id: 100053,
      question: "Основные CORS-заголовки?",
      answer: `Основные CORS-заголовки:
      1. **Access-Control-Allow-Origin**: Указывает, какие источники могут получать доступ к ресурсу. Пример: \`*\` (все домены) или конкретный домен.
      2. **Access-Control-Allow-Methods**: Указывает, какие HTTP-методы разрешены. Пример: \`GET, POST, PUT, DELETE\`.
      3. **Access-Control-Allow-Headers**: Указывает, какие заголовки могут быть использованы в запросе. Пример: \`Content-Type, Authorization\`.
      4. **Access-Control-Allow-Credentials**: Указывает, разрешено ли использование учетных данных (например, куки). Пример: \`true\` или \`false\`.
      5. **Access-Control-Expose-Headers**: Указывает, какие заголовки могут быть доступны клиенту.`,
    },
    {
      id: 100054,
      question: "Проблемы с CORS",
      answer: `Проблемы с CORS:
      - **Слишком широкие разрешения**: Использование \`Access-Control-Allow-Origin: *\` может случайно разрешить небезопасные запросы.
      - **Неправильная настройка**: Некорректные заголовки могут привести к блокировке легитимных запросов.
      - **Безопасность**: Разрешение использования учетных данных (\`Access-Control-Allow-Credentials: true\`) без ограничений может создать уязвимости.
      
      Решение:
      - Тщательно настраивайте CORS-политики.
      - Используйте конкретные домены вместо \`*\`.
      - Проверяйте и тестируйте конфигурацию сервера.`,
    },
    {
      id: 100055,
      question: "Что такое предварительный запрос (preflight)?",
      answer: `Предварительный запрос (preflight) — это OPTIONS-запрос, который браузер отправляет перед основным запросом, если:
      - Запрос использует метод, отличный от GET, POST или HEAD.
      - Запрос содержит нестандартные заголовки (например, \`Authorization\`).
      - Тип содержимого отличается от \`application/x-www-form-urlencoded\`, \`multipart/form-data\` или \`text/plain\`.
      
      Сервер должен ответить на preflight-запрос, указав разрешенные методы, заголовки и другие параметры.
      
      Пример:
      \`\`\`http
      OPTIONS /data HTTP/1.1
      Host: api.example.com
      Access-Control-Request-Method: POST
      Access-Control-Request-Headers: Content-Type

      HTTP/1.1 200 OK
      Access-Control-Allow-Origin: https://frontend.example.com 
      Access-Control-Allow-Methods: POST, GET
      Access-Control-Allow-Headers: Content-Type
      \`\`\`
      `,
    },
    {
      id: 100056,
      question: "Разница между простыми и сложными запросами?",
      answer: `**Простые запросы**:
      - Методы: GET, POST, HEAD.
      - Заголовки: Только стандартные (например, \`Accept\`, \`Content-Type\` с типами \`application/x-www-form-urlencoded\`, \`multipart/form-data\`, \`text/plain\`).
      - Не требуют предварительного запроса (preflight).

      **Сложные запросы**:
      - Используют методы, отличные от GET, POST, HEAD (например, PUT, DELETE).
      - Содержат нестандартные заголовки (например, \`Authorization\`).
      - Требуют предварительного запроса (preflight).`,
    },
    {
      id: 100057,
      question: "Как настроить CORS на сервере?",
      answer: `Настройка CORS зависит от сервера. Вот примеры:
      - **Node.js (Express)**:
      \`\`\`javascript
      const cors = require('cors');
      app.use(cors({
        origin: 'https://frontend.example.com', 
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
      }));
      \`\`\`

      - **Nginx**:
      \`\`\`nginx
      add_header Access-Control-Allow-Origin "https://frontend.example.com"; 
      add_header Access-Control-Allow-Methods "GET, POST, OPTIONS";
      add_header Access-Control-Allow-Headers "Content-Type, Authorization";
      \`\`\`

      - **Apache**:
      \`\`\`apache
      Header set Access-Control-Allow-Origin "https://frontend.example.com" 
      Header set Access-Control-Allow-Methods "GET, POST, OPTIONS"
      Header set Access-Control-Allow-Headers "Content-Type, Authorization"
      \`\`\`
      `,
    },
  ],
};
