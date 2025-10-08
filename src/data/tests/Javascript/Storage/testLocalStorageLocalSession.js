export const testLocalStorageLocalSession = {
  id: 100725,
  title: "LocalStorage, SessionStorage",
  questions: [
    {
      id: 100726,
      question:
        "Что такое LocalStorage и SessionStorage в JavaScript и для чего они используются?",
      answer: `
      **LocalStorage**:
      - **Применение:** Хранит данные, доступные между сессиями.
      - **Размер:** Обычно ограничен до 5–10 МБ.
      - **Время жизни:** Данные сохраняются до тех пор, пока пользователь их не удалит.
      - **Доступ:** Доступен только для клиентских скриптов.

      **SessionStorage**:
      - **Применение:** Хранит данные, специфичные для одной сессии.
      - **Размер:** Обычно ограничен до 5–10 МБ.
      - **Время жизни:** Данные существуют лишь в течение одной вкладки браузера.
      - **Доступ:** Доступен только из текущей вкладки.

      **Пример использования:**
      \`\`\`javascript
      // LocalStorage
      localStorage.setItem('username', 'Alice');
      console.log(localStorage.getItem('username')); // "Alice"

      // SessionStorage
      sessionStorage.setItem('theme', 'dark');
      console.log(sessionStorage.getItem('theme')); // "dark"
      \`\`\`
      `,
    },
    {
      id: 100727,
      question:
        "Как можно использовать JSON для хранения сложных объектов в LocalStorage? Приведите пример.",
      answer: `
      **LocalStorage может сохранять только строки**, поэтому для работы с объектами, массивами и другими 
      сложными структурами данных используется сериализация в JSON (преобразование в строку) и парсинг 
      (восстановление из строки).

      **Сериализация (запись):**
      \`\`\`javascript
      const data = { name: "Alice", age: 25, hobbies: ["coding", "music"] };
      localStorage.setItem('userData', JSON.stringify(data));
      \`\`\`

      **Парсинг (чтение):**
      \`\`\`javascript
      const savedData = JSON.parse(localStorage.getItem('userData'));
      console.log(savedData); // { name: "Alice", age: 25, hobbies: ["coding", "music"] }
      \`\`\`
      `,
    },
    {
      id: 100728,
      question:
        "Как можно использовать паттерн обсервер для отслеживания изменений в данных, хранящихся в LocalStorage?",
      answer: `
      **Паттерн Наблюдатель** позволяет отслеживать изменения данных в LocalStorage и автоматически уведомлять 
      подписанные компоненты.

      **Пример реализации:**
      \`\`\`javascript
      class LocalStorageObserver {
        constructor() {
          this.listeners = [];
        }

        subscribe(callback) {
          this.listeners.push(callback);
        }

        notify(key, value) {
          this.listeners.forEach((listener) => listener(key, value));
        }

        setItem(key, value) {
          localStorage.setItem(key, value);
          this.notify(key, value);
        }

        getItem(key) {
          return localStorage.getItem(key);
        }
      }

      const storage = new LocalStorageObserver();

      // Подписка на изменения
      storage.subscribe((key, value) => {
        console.log(\`Key "\${key}" updated with value: "\${value}"\`);
      });

      // Изменение данных
      storage.setItem('theme', 'dark'); // Key "theme" updated with value: "dark"
      \`\`\`
      `,
    },
    {
      id: 100729,
      question: "В чём отличие хранения данных в local storage от куки?",
      answer: `
      **Отличия между LocalStorage и Cookies:**
      1. **Передача данных:** Cookies передаются на сервер при каждом запросе, в то время как данные LocalStorage — нет.
      2. **Объем хранилища:** LocalStorage имеет больший объем (обычно 5–10 МБ), в то время как Cookies ограничены 4 КБ.
      3. **Время жизни:** Cookies могут иметь срок действия, в то время как данные LocalStorage хранятся бессрочно (или удаляются вручную).
      4. **Доступ:** Cookies доступны как на стороне клиента, так и на стороне сервера, а LocalStorage — только на стороне клиента.

      **Пример использования:**
      \`\`\`javascript
      // Cookie
      document.cookie = "username=Alice; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/";

      // LocalStorage
      localStorage.setItem('username', 'Alice');
      \`\`\`
      `,
    },
    {
      id: 100730,
      question:
        "В чём отличие хранения данных в local storage от session storage?",
      answer: `
      **Отличия между LocalStorage и SessionStorage:**
      1. **Время жизни:** 
         - LocalStorage хранит данные бессрочно, пока они не будут удалены вручную.
         - SessionStorage хранит данные только в течение одной вкладки браузера (до закрытия вкладки).
      2. **Доступ:** 
         - LocalStorage доступен для всех вкладок одного домена.
         - SessionStorage доступен только для текущей вкладки.
      3. **Применение:** 
         - LocalStorage используется для долгосрочного хранения данных.
         - SessionStorage используется для временных данных, таких как состояние формы или фильтры.

      **Пример использования:**
      \`\`\`javascript
      // LocalStorage
      localStorage.setItem('theme', 'dark');

      // SessionStorage
      sessionStorage.setItem('sessionTheme', 'light');
      \`\`\`
      `,
    },
    {
      id: 100731,
      question: "Какие ограничения есть у LocalStorage и SessionStorage?",
      answer: `
      **Ограничения:**
      1. **Размер:** Обычно ограничен до 5–10 МБ (зависит от браузера).
      2. **Тип данных:** Может хранить только строки. Для хранения сложных данных требуется сериализация (JSON).
      3. **Безопасность:** Данные доступны только на стороне клиента, но могут быть уязвимы к XSS-атакам.
      4. **Производительность:** Не подходит для хранения больших объемов данных, так как это может замедлить работу приложения.
      `,
    },
    {
      id: 100732,
      question:
        "Как обеспечить безопасность данных в LocalStorage и SessionStorage?",
      answer: `
      **Меры безопасности:**
      1. **Защита от XSS-атак:** 
         - Используйте Content Security Policy (CSP) для блокировки вредоносных скриптов.
         - Не храните чувствительные данные (например, токены аутентификации) в LocalStorage.
      2. **Шифрование:** 
         - Шифруйте данные перед сохранением.
      3. **Минимизация данных:** 
         - Храните только необходимые данные.
      4. **Использование HTTP-only Cookies:** 
         - Для чувствительных данных используйте Cookies с флагом \`HttpOnly\`.

      **Пример шифрования:**
      \`\`\`javascript
      const encrypt = (data) => btoa(data); // Простое шифрование Base64
      const decrypt = (data) => atob(data);

      const sensitiveData = "secretToken";
      localStorage.setItem('token', encrypt(sensitiveData));

      const storedToken = decrypt(localStorage.getItem('token'));
      console.log(storedToken); // "secretToken"
      \`\`\`
      `,
    },
    {
      id: 100733,
      question: "Как очистить данные в LocalStorage и SessionStorage?",
      answer: `
      **Очистка данных:**
      - **LocalStorage:** 
        \`\`\`javascript
        localStorage.clear(); // Очищает все данные
        localStorage.removeItem('key'); // Удаляет конкретный ключ
        \`\`\`
      - **SessionStorage:** 
        \`\`\`javascript
        sessionStorage.clear(); // Очищает все данные
        sessionStorage.removeItem('key'); // Удаляет конкретный ключ
        \`\`\`
      `,
    },
  ],
};
