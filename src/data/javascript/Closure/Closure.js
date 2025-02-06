export const Closure = {
  id: 135,
  title: "Closure / Замыкание",
  children: [
    {
      title: "1. Определение замыкания",
      type: "text",
      description: `
            <p>Замыкание - это функция, которая имеет доступ к своей внешней области видимости даже после завершения выполнения внешней функции.</p>
          `,
    },
    {
      title: "2. Как работает замыкание?",
      type: "text",
      description: `
            <p>Когда функция создаётся в JavaScript, она "захватывает" переменные из своей внешней области видимости. Даже если внешняя функция завершила выполнение, замыкание сохраняет ссылку на эти переменные.</p>
          `,
    },
    {
      title: "3. Пример замыкания",
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
      title: "4. Применение замыканий",
      type: "text",
      description: `
            <p>Замыкания часто используются для:</p>
            <ul>
              <li>Создания приватных переменных.</li>
              <li>Фабричных функций для создания функций с предустановленными значениями.</li>
              <li>Обработчиков событий, где необходимо сохранить состояние.</li>
            </ul>
          `,
    },
    {
      title: "5. Пример использования замыкания для приватных переменных",
      type: "text",
      description: `
            <p>Пример создания приватной переменной:</p>
          `,
      code: `
function createCounter() {
let count = 0; // Приватная переменная

return {
increment: function() {
  count++;
  return count;
},
decrement: function() {
  count--;
  return count;
},
getCount: function() {
  return count;
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
      title: "6. Замыкания и производительность",
      type: "text",
      description: `
            <p>Хотя замыкания мощный инструмент, они могут повлиять на производительность, если используются неправильно. Избыточное использование замыканий может привести к утечкам памяти, если ссылки на замыкания не освобождаются.</p>
          `,
    },
  ],
};
