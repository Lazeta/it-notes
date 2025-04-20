export const errorHandling = {
  id: 528,
  title: "Error Handling / Обработка ошибок",
  children: [
    {
      title: "Базовый синтаксис try...catch",
      type: "text",
      description: `
          <p><strong>Обработка синхронных ошибок:</strong></p>
          <pre><code>try {
    // Код, который может выбросить ошибку
    const result = riskyOperation();
    console.log(result);
  } catch (error) {
    // Обработка ошибки
    console.error('Произошла ошибка:', error.message);
  } finally {
    // Код, который выполнится в любом случае
    console.log('Операция завершена');
  }</code></pre>
  
          <p><strong>Особенности:</strong></p>
          <ul>
            <li><code>try</code> — блок с потенциально опасным кодом</li>
            <li><code>catch</code> — обработчик ошибок (получает объект ошибки)</li>
            <li><code>finally</code> — выполняется всегда, даже если была ошибка</li>
          </ul>
        `,
    },
    {
      title: "Типы ошибок в JavaScript",
      type: "text",
      description: `
          <p><strong>Встроенные классы ошибок:</strong></p>
          <ul>
            <li><code>Error</code> — базовая ошибка</li>
            <li><code>SyntaxError</code> — синтаксическая ошибка</li>
            <li><code>TypeError</code> — неверный тип данных</li>
            <li><code>ReferenceError</code> — ссылка на несуществующую переменную</li>
            <li><code>RangeError</code> — значение вне допустимого диапазона</li>
            <li><code>URIError</code> — ошибка в URI-функциях</li>
          </ul>
    
          <p><strong>Примеры:</strong></p>
          <pre><code>// Error: базовая ошибка
    throw new Error('Это базовая ошибка.');
    
    // SyntaxError: синтаксическая ошибка
    eval('var a = ;'); // Ошибка в синтаксисе
    
    // TypeError: неверный тип данных
    null.function(); // Попытка вызвать метод у null
    
    // ReferenceError: ссылка на несуществующую переменную
    console.log(unknownVariable); // Переменная не определена
    
    // RangeError: значение вне допустимого диапазона
    new Array(-1); // Невозможно создать массив с отрицательной длиной
    
    // URIError: ошибка в URI-функциях
    decodeURIComponent('%'); // Неверный URI
    </code></pre>
        `,
    },
    {
      title: "Создание своих ошибок",
      type: "text",
      description: `
          <p><strong>Через конструктор Error:</strong></p>
          <pre><code>throw new Error('Сообщение об ошибке');</code></pre>
  
          <p><strong>Кастомные классы ошибок:</strong></p>
          <pre><code>class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = 'ValidationError';
    }
  }
  
  function validateInput(input) {
    if (!input) {
      throw new ValidationError('Пустой ввод');
    }
  }</code></pre>
  
          <p><strong>Проверка типа ошибки:</strong></p>
          <pre><code>try {
    validateInput('');
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log('Ошибка валидации:', error.message);
    } else {
      console.log('Неизвестная ошибка:', error);
    }
  }</code></pre>
        `,
    },
    {
      title: "Обработка асинхронных ошибок",
      type: "text",
      description: `
          <p><strong>Promise.catch():</strong></p>
          <pre><code>fetch('https://api.example.com/data')
    .then(response => response.json())
    .catch(error => console.error('Ошибка запроса:', error));</code></pre>
  
          <p><strong>Async/await с try...catch:</strong></p>
          <pre><code>async function loadData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Ошибка загрузки:', error);
      throw error; // Пробрасываем дальше
    }
  }</code></pre>
  
          <p><strong>Обработка нескольких Promise:</strong></p>
          <pre><code>Promise.all([promise1, promise2])
    .then(results => console.log(results))
    .catch(error => console.error('Один из запросов failed:', error));</code></pre>
        `,
    },
    {
      title: "Глобальная обработка ошибок",
      type: "text",
      description: `
          <p><strong>В браузере:</strong></p>
          <pre><code>// Непойманные ошибки
  window.addEventListener('error', (event) => {
    console.error('Глобальная ошибка:', event.error);
  });
  
  // Необработанные Promise
  window.addEventListener('unhandledrejection', (event) => {
    console.error('Необработанный Promise:', event.reason);
  });</code></pre>
  
          <p><strong>В Node.js:</strong></p>
          <pre><code>process.on('uncaughtException', (error) => {
    console.error('Непойманная ошибка:', error);
    process.exit(1); // Завершаем процесс
  });
  
  process.on('unhandledRejection', (reason, promise) => {
    console.error('Необработанный rejection:', reason);
  });</code></pre>
        `,
    },
    {
      title: "Паттерны обработки ошибок",
      type: "text",
      description: `
          <p><strong>1. Возврат объектов с ошибкой:</strong></p>
          <pre><code>function safeOperation() {
    try {
      return { data: riskyOperation() };
    } catch (error) {
      return { error: error.message };
    }
  }</code></pre>
  
          <p><strong>2. Оборачивание ошибок:</strong></p>
          <pre><code>class DatabaseError extends Error {
    constructor(originalError) {
      super('Database operation failed');
      this.original = originalError;
    }
  }
  
  try {
    db.query('...');
  } catch (error) {
    throw new DatabaseError(error);
  }</code></pre>
  
          <p><strong>3. Функции-валидаторы:</strong></p>
          <pre><code>function validateUser(user) {
    if (!user.name) throw new Error('Name is required');
    if (user.age < 18) throw new Error('Age must be 18+');
    return true;
  }</code></pre>
        `,
    },
    {
      title: "Лучшие практики",
      type: "text",
      description: `
          <ul>
            <li><strong>Всегда обрабатывайте ошибки</strong> — даже если "кажется, что их не будет"</li>
            <li><strong>Используйте конкретные типы ошибок</strong> — для точной диагностики</li>
            <li><strong>Логируйте ошибки</strong> — с контекстом и метаданными</li>
            <li><strong>Не подавляйте ошибки молча</strong> — пустой catch-блок это антипаттерн</li>
            <li><strong>Документируйте возможные ошибки</strong> — в JSDoc или TypeScript</li>
            <li><strong>Тестируйте обработку ошибок</strong> — как и основной функционал</li>
          </ul>
  
          <p><strong>Пример правильной обработки:</strong></p>
          <pre><code>async function getUser(id) {
    try {
      const response = await fetch(\`/api/users/\${id}\`);
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      return await response.json();
    } catch (error) {
      console.error(\`Failed to fetch user \${id}\`, error);
      throw new Error('Failed to load user data');
    }
  }</code></pre>
        `,
    },
  ],
};
