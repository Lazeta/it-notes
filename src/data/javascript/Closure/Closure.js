import { ReadMoreAboutMemoryLeaksClosures } from "./ReadMoreAboutMemoryLeaksClosures/ReadMoreAboutMemoryLeaksClosures";

export const Closure = {
  id: 135,
  title: "Closure",
  children: [
    {
      title: "Определение замыкания",
      type: "text",
      description: `
            <p>Замыкание (closure) — это функция, которая запоминает свою внешнюю (лексическую) область видимости (scope) и сохраняет доступ к переменным этой области, даже после того, как внешняя функция завершила выполнение.</p>
          `,
    },
    {
      title: "Как работает замыкание?",
      type: "text",
      description: `
            <p>Когда функция создаётся в JavaScript, она "захватывает" переменные из своей внешней области видимости. Даже если внешняя функция завершила выполнение, замыкание сохраняет ссылку на эти переменные.</p>
          `,
    },
    {
      title: "Зачем нам замыкание?",
      type: "text",
      description: `
            <p>Замыкания часто используются для:</p>
            <ul>
              <li><strong>Инкапсуляция данных (Data Encapsulation)</strong> — cкрывает переменные от внешнего кода, создавая "приватные" свойства.</li>
              <li><strong>Сохранение состояния (State Persistence)</strong> — позволяет функции "помнить" данные между вызовами без глобальных переменных.</li>
              <li><strong>Функциональное программирование (Currying & FP)</strong> — Каррирование (преобразование функции от многих аргументов в цепочку функций от одного аргумента). Создание функций с предустановленными параметрами (частичное применение).</li>
              <li><strong>Обработка событий (Event Handlers)</strong> — Сохранение контекста (например, ID элемента) для асинхронных операций.</li>
            </ul>
          `,
    },
    {
      title: "Пример замыкания",
      type: "text",
      description: `
            <p>Пример замыкания:</p>
          `,
      code: `
function outerFunction() {
  let outerVar = 'I am outside!';

  function innerFunction() {
    console.log(outerVar); // Доступ к outerVar
  }

  return innerFunction;
}

const myInnerFunction = outerFunction();
myInnerFunction(); // Вывод: "I am outside!"
          `,
    },
    {
      title: "Пример использования замыкания для приватных переменных",
      type: "text",
      description: `
            <p>Пример создания приватной переменной:</p>
          `,
      code: `
function createCounter() {
  let _count = 0; // Условная приватная переменная
  // let #count = 0; // Настоящая приватная переменная

  return {
    increment: function() {
      _count++;
      return _count;
    },
    decrement: function() {
      _count--;
      return _count;
    },
    getCount: function() {
      return _count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2
console.log(counter.decrement()); // 1
          `,
    },
    {
      title: "Замыкания и производительность",
      type: "text",
      description: `
            <p>Хотя замыкания мощный инструмент, они могут повлиять на производительность, если используются неправильно. Избыточное использование замыканий может привести к утечкам памяти, если ссылки на замыкания не освобождаются.</p>
          `,
    },
    ReadMoreAboutMemoryLeaksClosures,
  ],
};
