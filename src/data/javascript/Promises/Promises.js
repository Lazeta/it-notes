export const Promises = {
  id: 157,
  title: "Promise (Промисы)",
  children: [
    {
      title: "Определение",
      type: "text",
      description: `
        <p><strong>Promise</strong> — это объект, представляющий конечный результат асинхронной операции. Promise позволяет работать с асинхронным кодом более организованно, избегая так называемого "callback hell". Он может находиться в одном из трех состояний:</p>
        <ul>
          <li><strong>Ожидание (pending):</strong> начальное состояние; асинхронная операция не завершена.</li>
          <li><strong>Выполнено (fulfilled):</strong> операция завершена успешно, и promise возвращает результат.</li>
          <li><strong>Отклонено (rejected):</strong> операция завершена с ошибкой, и promise возвращает причину отказа.</li>
        </ul>
        <p>Промисы являются частью стандарта ECMAScript (ES6) и широко используются в современном JavaScript.</p>
      `,
    },
    {
      title: "Создание Promise",
      type: "text",
      description: `
        <p>Promise создается с помощью конструктора <code>Promise</code>, который принимает функцию с двумя аргументами: <code>resolve</code> и <code>reject</code>.</p>
        <p><strong>resolve:</strong> вызывается, когда операция завершена успешно.</p>
        <p><strong>reject:</strong> вызывается, когда операция завершена с ошибкой.</p>
      `,
      code: `
const myPromise = new Promise((resolve, reject) => {
  // Асинхронная операция
  const success = true; // Поменяйте на false для теста отклонения

  if (success) {
    resolve('Операция выполнена успешно!');
  } else {
    reject('Операция завершилась с ошибкой.');
  }
});
      `,
    },
    {
      title: "Использование then и catch",
      type: "text",
      description: `
        <p>Методы <code>then</code> и <code>catch</code> используются для обработки результатов промисов.</p>
        <p><strong>then:</strong> принимает два параметра: функцию, которая будет выполнена при успешном завершении промиса, и (необязательную) функцию для обработки ошибок.</p>
        <p><strong>catch:</strong> используется для обработки ошибок, отклоненных промисов.</p>
        <p><strong>finally:</strong> выполняется независимо от результата промиса (выполнено или отклонено).</p>
      `,
      code: `
myPromise
  .then(result => {
    console.log(result); // Вывод: "Операция выполнена успешно!"
  })
  .catch(error => {
    console.log(error); // Вывод: "Операция завершилась с ошибкой." (если success = false)
  })
  .finally(() => {
    console.log('Операция завершена.'); // Выполняется всегда
  });
      `,
    },
    {
      title: "Пример использования Promise",
      type: "text",
      description: `
        <p>Вот пример, который имитирует асинхронную операцию, такую как загрузка данных с сервера:</p>
      `,
      code: `
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "John" }; // Имитация данных
      const success = true; // Поменяйте на false для теста отклонения
      
      if (success) {
        resolve(data); // Успех
      } else {
        reject("Ошибка загрузки данных!"); // Неудача
      }
    }, 2000); // Операция завершится через 2 секунды
  });
}

fetchData()
  .then(data => {
    console.log("Данные получены:", data); // Вывод: "Данные получены: { id: 1, name: 'John' }"
  })
  .catch(error => {
    console.error(error); // Вывод ошибки, если операция не удалась
  });
      `,
    },
    {
      title: "Основные статические методы Promise",
      type: "text",
      description: `
        <p>Promise предоставляет несколько статических методов:</p>
        <ul>
          <li><strong>Promise.all(iterable):</strong> Ожидает выполнения всех переданных промисов и возвращает массив результатов. Если любой из промисов будет отклонен, возвращается ошибка.</li>
          <li><strong>Promise.allSettled(iterable):</strong> Ожидает выполнения всех переданных промисов и возвращает массив объектов с результатами (выполнено или отклонено) для каждого промиса.</li>
          <li><strong>Promise.any(iterable):</strong> Ожидает выполнения первого успешного промиса. Если все промисы будут отклонены, возвращается ошибка.</li>
          <li><strong>Promise.race(iterable):</strong> Ожидает выполнения первого завершенного промиса (выполнено или отклонено).</li>
          <li><strong>Promise.resolve(value):</strong> Возвращает промис, который выполнен с заданным значением.</li>
          <li><strong>Promise.reject(reason):</strong> Возвращает промис, который отклонен с заданной причиной.</li>
        </ul>
      `,
    },
    {
      title: "Пример использования Promise.all",
      type: "text",
      description: `
        <p><code>Promise.all</code> полезен, когда нужно выполнить несколько асинхронных операций и дождаться их завершения.</p>
      `,
      code: `
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});
const promise3 = fetch('https://api.example.com/data').then(response  => response.json());

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values); // [3, 'foo', {...}] (результаты всех промисов)
  })
  .catch(error => {
    console.error('Один из промисов завершился с ошибкой:', error);
  });
      `,
    },
    {
      title: "Заключение",
      type: "text",
      description: `
        <p>Промисы — это мощный инструмент для работы с асинхронным кодом в JavaScript. Они позволяют избежать "callback hell" и делают код более читаемым и организованным.</p>
        <p>Хотя промисы могут использоваться в React (например, при работе с API), они сами по себе являются частью языка JavaScript и не зависят от React.</p>
      `,
    },
  ],
};
