export const AsynchronousProgramming = {
  id: 132,
  title: "Asynchronous Programming",
  children: [
    {
      title: "Basics of async programming",
      type: "text",
      description: `
            <p><strong>Асинхронное программирование</strong> — это парадигма, позволяющая выполнять операции, не блокируя основной поток выполнения. Это особенно полезно для задач, которые могут занять продолжительное время, таких как сетевые запросы или операции с файлами.</p>
          `,
    },
    {
      title: "Key Concepts",
      type: "text",
      description: `
            <p>Основные концепции асинхронного программирования:</p>
            <ul>
              <li><strong>Callbacks</strong>: Функции обратного вызова, которые передаются в другие функции и вызываются после завершения асинхронной операции.</li>
              <li><strong>Promises</strong>: Объекты, представляющие результат асинхронной операции, которые могут быть в состоянии ожидания (pending), выполнены (fulfilled) или отклонены (rejected).</li>
              <li><strong>Async/Await</strong>: Синтаксический сахар над промисами, позволяющий писать асинхронный код, который выглядит как синхронный.</li>
            </ul>
          `,
    },
    {
      title: "Callback",
      type: "text",
      description: `
            <p>Пример использования колбеков:</p>
          `,
      code: `
function fetchData(callback) {
setTimeout(() => {
callback('Data received');
}, 1000);
}

fetchData((data) => {
console.log(data); // 'Data received'
});
          `,
    },
    {
      title: "Promise",
      type: "text",
      description: `
            <p>Пример использования промисов:</p>
          `,
      code: `
function fetchData() {
return new Promise((resolve, reject) => {
setTimeout(() => {
  resolve('Data received');
}, 1000);
});
}

fetchData().then(data => {
console.log(data); // 'Data received'
});
          `,
    },
    {
      title: "Async/Await",
      type: "text",
      description: `
            <p>Пример использования async/await:</p>
          `,
      code: `
async function fetchData() {
return new Promise((resolve) => {
  setTimeout(() => {
    resolve('Data received');
  }, 1000);
});
}

async function getData() {
const data = await fetchData();
console.log(data); // 'Data received'
}

getData();
          `,
    },
    {
      title: "Benefits of Asynchronous Programming",
      type: "text",
      description: `
            <p>Преимущества асинхронного программирования:</p>
            <ul>
              <li><strong>Улучшенная производительность</strong>: Не блокирует основной поток выполнения, что позволяет выполнять другие задачи.</li>
              <li><strong>Лучшая отзывчивость приложения</strong>: Пользовательский интерфейс остается активным во время выполнения длительных операций.</li>
              <li><strong>Упрощение кода</strong>: Использование async/await делает код более читаемым и понятным.</li>
            </ul>
          `,
    },
  ],
};
