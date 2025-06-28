export const testPromise = {
  id: 100175,
  title: "Promise (Промисы)",
  questions: [
    {
      id: 100176,
      question: "Что такое Promise?",
      answer: `
      **Promise** — это объект, представляющий результат асинхронной операции. Он может находиться в одном из трех состояний:
      - \`pending\` (ожидание): Начальное состояние.
      - \`fulfilled\` (выполнено успешно): Операция завершена успешно.
      - \`rejected\` (отклонено): Операция завершена с ошибкой.

      **Пример:**
      \`\`\`javascript
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Success!'), 1000);
      });

      promise.then((result) => console.log(result)); // Success!
      \`\`\`
      `,
    },
    {
      id: 100177,
      question: "Какие есть состояния у Promise?",
      answer: `
      **Состояния Promise:**
      1. **Pending (ожидание):** Начальное состояние, когда операция еще не завершена.
      2. **Fulfilled (выполнено успешно):** Состояние, когда операция успешно завершена.
      3. **Rejected (отклонено):** Состояние, когда произошла ошибка.

      **Пример:**
      \`\`\`javascript
      const promise = new Promise((resolve, reject) => {
        const success = true;
        if (success) {
          resolve('Operation completed successfully');
        } else {
          reject('Operation failed');
        }
      });

      promise
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
      \`\`\`
      `,
    },
    {
      id: 100178,
      question: "Зачем появились Promise?",
      answer: `
      **Причины появления Promise:**
      1. **Избежание "callback hell":** Промисы помогают организовать асинхронный код более читаемым образом.
      2. **Упрощение обработки ошибок:** Централизованная обработка ошибок через \`catch()\`.
      3. **Цепочки вызовов:** Возможность создавать цепочки методов (\`then()\`).

      **Пример без Promise (callback hell):**
      \`\`\`javascript
      fetchData(function (data) {
        processData(data, function (processedData) {
          saveData(processedData, function () {
            console.log('Data saved!');
          });
        });
      });
      \`\`\`

      **Пример с Promise:**
      \`\`\`javascript
      fetchData()
        .then(processData)
        .then(saveData)
        .then(() => console.log('Data saved!'))
        .catch((error) => console.error(error));
      \`\`\`
      `,
    },
    {
      id: 100179,
      question: "Какие методы есть у Promise?",
      answer: `
      **Методы Promise:**
      1. **then(onFulfilled, onRejected):**
         - Обрабатывает успешное выполнение или ошибку.
         \`\`\`javascript
         promise.then(
           (result) => console.log(result),
           (error) => console.error(error)
         );
         \`\`\`

      2. **catch(onRejected):**
         - Обрабатывает ошибки.
         \`\`\`javascript
         promise.catch((error) => console.error(error));
         \`\`\`

      3. **finally(onFinally):**
         - Выполняется независимо от результата.
         \`\`\`javascript
         promise.finally(() => console.log('Operation finished'));
         \`\`\`
      `,
    },
    {
      id: 100180,
      question: "Какими способами можно создать Promise?",
      answer: `
      **Создание Promise:**
      - Используется конструктор \`new Promise()\`, который принимает функцию с двумя аргументами: \`resolve\` и \`reject\`.

      **Пример:**
      \`\`\`javascript
      const promise = new Promise((resolve, reject) => {
        const success = true;
        if (success) {
          resolve('Resolved!');
        } else {
          reject('Rejected!');
        }
      });

      promise
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
      \`\`\`
      `,
    },
    {
      id: 100181,
      question: "Какие статические методы Promise знаешь?",
      answer: `
      **Статические методы Promise:**
      1. **Promise.all(iterable):**
         - Ждет выполнения всех промисов.
         \`\`\`javascript
         Promise.all([promise1, promise2])
           .then((results) => console.log(results))
           .catch((error) => console.error(error));
         \`\`\`

      2. **Promise.allSettled(iterable):**
         - Ждет завершения всех промисов (успешных или отклоненных).
         \`\`\`javascript
         Promise.allSettled([promise1, promise2]).then((results) => console.log(results));
         \`\`\`

      3. **Promise.race(iterable):**
         - Возвращает первый завершившийся промис.
         \`\`\`javascript
         Promise.race([promise1, promise2]).then((result) => console.log(result));
         \`\`\`

      4. **Promise.any(iterable):**
         - Возвращает первый успешно завершившийся промис.
         \`\`\`javascript
         Promise.any([promise1, promise2]).then((result) => console.log(result));
         \`\`\`

      5. **Promise.resolve(value):**
         - Создает успешно завершенный промис.
         \`\`\`javascript
         Promise.resolve('Resolved!').then((result) => console.log(result));
         \`\`\`

      6. **Promise.reject(reason):**
         - Создает отклоненный промис.
         \`\`\`javascript
         Promise.reject('Rejected!').catch((error) => console.error(error));
         \`\`\`
      `,
    },
    {
      id: 100182,
      question: "Что произойдёт, если я использую await вместо Promise?",
      answer: `
      **Работа \`await\`:**
      - Если \`await\` используется с чем-то, что не является промисом, JavaScript вернет это значение напрямую.

      **Пример:**
      \`\`\`javascript
      async function example() {
        const value = await 42; // Не промис, просто число
        console.log(value); // 42
      }

      example();
      \`\`\`
      `,
    },
    {
      id: 100183,
      question: "Где используются Promise?",
      answer: `
      **Применение Promise:**
      - Сетевые запросы (например, \`fetch\`).
      - Чтение/запись файлов.
      - Анимации.
      - Работа с базами данных.
      - Любые асинхронные операции.

      **Пример:**
      \`\`\`javascript
      fetch('https://api.example.com/data') 
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
      \`\`\`
      `,
    },
    {
      id: 100184,
      question: "В чём отличие async/await от Promise?",
      answer: `
      **Отличия:**
      1. **Async/await:**
         - Делает асинхронный код похожим на синхронный.
         - \`async\` автоматически оборачивает функцию в промис.
         - \`await\` приостанавливает выполнение до завершения промиса.

      2. **Promise:**
         - Требует явного использования методов \`then()\` и \`catch()\`.

      **Пример с Promise:**
      \`\`\`javascript
      function fetchData() {
        return fetch('https://api.example.com/data') 
          .then((response) => response.json())
          .catch((error) => console.error(error));
      }
      \`\`\`

      **Пример с async/await:**
      \`\`\`javascript
      async function fetchData() {
        try {
          const response = await fetch('https://api.example.com/data'); 
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      }
      \`\`\`
      `,
    },
    {
      id: 100185,
      question: "Можно ли перезапустить остановленный Promise?",
      answer: `
      **Нет, нельзя.**
      - Остановленный промис (завершенный или отклоненный) не может быть перезапущен.
      - Для повторного выполнения нужно создать новый промис.

      **Пример:**
      \`\`\`javascript
      const promise = new Promise((resolve) => resolve('Done!'));
      promise.then((result) => console.log(result)); // Done!

      // Перезапуск невозможен, нужно создать новый промис:
      const newPromise = new Promise((resolve) => resolve('Restarted!'));
      newPromise.then((result) => console.log(result)); // Restarted!
      \`\`\`
      `,
    },
    {
      id: 100186,
      question: "Сходство и отличия Observable от Promise?",
      answer: `
      **Observable vs Promise:**
      1. **Сходства:**
         - Оба используются для работы с асинхронными операциями.

      2. **Отличия:**
         - **Observable:** Может выдавать несколько значений во времени (поток данных).
         - **Promise:** Разрешается только один раз (одно значение или ошибка).

      **Пример с Promise:**
      \`\`\`javascript
      const promise = Promise.resolve('Single value');
      promise.then((value) => console.log(value)); // Single value
      \`\`\`

      **Пример с Observable (RxJS):**
      \`\`\`javascript
      const observable = new Observable((observer) => {
        observer.next('Value 1');
        observer.next('Value 2');
        observer.complete();
      });

      observable.subscribe((value) => console.log(value)); // Value 1, Value 2
      \`\`\`
      `,
    },
    {
      id: 100187,
      question: "Какая самая важная отличительная черта Promise?",
      answer: `
      **Отличительная черта Promise:**
      - Единый интерфейс для работы с асинхронными операциями.
      - Позволяет обрабатывать результаты будущих операций (успешные или ошибочные) через \`then()\` и \`catch()\`.

      **Пример:**
      \`\`\`javascript
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Future result'), 1000);
      });

      promise
        .then((result) => console.log(result)) // Future result
        .catch((error) => console.error(error));
      \`\`\`
      `,
    },
    {
      id: 100188,
      question: "Что использовали до Promise?",
      answer: `
      **До Promise:**
      - Колбэки (\`callbacks\`) были основным способом обработки асинхронных операций.
      - Это часто приводило к "callback hell" (вложенные колбэки).

      **Пример с колбэками:**
      \`\`\`javascript
      fetchData(function (data) {
        processData(data, function (processedData) {
          saveData(processedData, function () {
            console.log('Data saved!');
          });
        });
      });
      \`\`\`
      `,
    },
    {
      id: 100189,
      question: "К какой категории относятся Promise?",
      answer: `
      **Категория Promise:**
      - Промисы относятся к асинхронному программированию.
      - Они предоставляют удобный способ работы с асинхронными операциями.

      **Пример:**
      \`\`\`javascript
      const promise = new Promise((resolve) => setTimeout(() => resolve('Async!'), 1000));
      promise.then((result) => console.log(result)); // Async!
      \`\`\`
      `,
    },
    {
      id: 100190,
      question: "Как обработать ошибки в Promise?",
      answer: `
      **Обработка ошибок:**
      - Используйте \`catch()\` для централизованной обработки ошибок.
      - Можно также передать обработчик ошибок вторым аргументом в \`then()\`.

      **Пример:**
      \`\`\`javascript
      const promise = new Promise((resolve, reject) => {
        reject('Error occurred');
      });

      promise
        .then((result) => console.log(result))
        .catch((error) => console.error(error)); // Error occurred
      \`\`\`
      `,
    },
    {
      id: 100191,
      question: "Как создать цепочку промисов?",
      answer: `
      **Цепочка промисов:**
      - Метод \`then()\` возвращает новый промис, что позволяет создавать цепочки.

      **Пример:**
      \`\`\`javascript
      const promise = Promise.resolve(1);

      promise
        .then((value) => value + 1)
        .then((value) => value * 2)
        .then((value) => console.log(value)) // 4
        .catch((error) => console.error(error));
      \`\`\`
      `,
    },
  ],
};
