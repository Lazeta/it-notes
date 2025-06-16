import { ReadMoreAboutMemoryLeaksClosures } from "./ReadMoreAboutMemoryLeaksClosures/ReadMoreAboutMemoryLeaksClosures";

export const Closure = {
  id: 135,
  title: "Closure (Замыкания)",
  children: [
    {
      title: "Определение замыкания",
      type: "text",
      description: `
            <p><strong>Замыкание (closure)</strong> — это функция, которая запоминает свою внешнюю (лексическую) область видимости (<code>scope</code>) и сохраняет доступ к переменным этой области, даже после того, как внешняя функция завершила выполнение.</p>
          `,
    },
    {
      title: "Как работает замыкание?",
      type: "text",
      description: `
            <p>Когда функция создаётся в JavaScript, она "захватывает" переменные из своей внешней области видимости. Даже если внешняя функция завершила выполнение, замыкание сохраняет ссылку на эти переменные.</p>
            <p>Это происходит благодаря тому, что JavaScript использует механизм <strong>лексической области видимости</strong>, где функции имеют доступ к переменным из контекста, в котором они были созданы.</p>
          `,
    },
    {
      title: "Зачем нам замыкание?",
      type: "text",
      description: `
            <p>Замыкания часто используются для:</p>
            <ul>
              <li><strong>Инкапсуляция данных (Data Encapsulation):</strong> Скрывает переменные от внешнего кода, создавая "приватные" свойства.</li>
              <li><strong>Сохранение состояния (State Persistence):</strong> Позволяет функции "помнить" данные между вызовами без глобальных переменных.</li>
              <li><strong>Функциональное программирование (Currying & FP):</strong> Каррирование (преобразование функции от многих аргументов в цепочку функций от одного аргумента). Создание функций с предустановленными параметрами (частичное применение).</li>
              <li><strong>Обработка событий (Event Handlers):</strong> Сохранение контекста (например, ID элемента) для асинхронных операций.</li>
              <li><strong>Модульный дизайн:</strong> Создание модулей с инкапсулированными данными и методами.</li>
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
            <p>Хотя замыкания — мощный инструмент, они могут повлиять на производительность, если используются неправильно:</p>
            <ul>
              <li><strong>Утечки памяти:</strong> Если замыкание сохраняет ссылки на большие объекты или DOM-элементы, это может привести к утечкам памяти.</li>
              <li><strong>Нагрузка на память:</strong> Замыкания хранят ссылки на внешние переменные, что увеличивает использование памяти.</li>
            </ul>
          `,
    },
    {
      title: "Распространённые ошибки при использовании замыканий",
      type: "text",
      description: `
            <p>При работе с замыканиями важно избегать следующих ошибок:</p>
            <ul>
              <li><strong>Неосвобожденные ссылки:</strong> Если замыкание продолжает ссылаться на большие объекты, они не будут удалены сборщиком мусора.</li>
              <li><strong>Перезапись переменных:</strong> В циклах или асинхронных операциях можно случайно перезаписать переменные, что приведёт к ошибкам.</li>
            </ul>
          `,
    },
    {
      title: "Пример ошибки с замыканиями в цикле",
      type: "text",
      description: `
            <p>Пример распространённой ошибки с замыканиями в цикле:</p>
          `,
      code: `
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // Вывод: 3, 3, 3
  }, 1000);
}
          `,
      explanation: `
            <p>Эта ошибка возникает потому, что переменная <code>i</code> является общей для всех итераций цикла. К моменту выполнения <code>setTimeout</code>, цикл уже завершился, и значение <code>i</code> равно 3.</p>
            <p>Исправление с помощью <code>let</code>:</p>
          `,
      fixedCode: `
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // Вывод: 0, 1, 2
  }, 1000);
}
          `,
    },
    ReadMoreAboutMemoryLeaksClosures,
  ],
};
