export const PureFunction = {
  id: 227,
  title: "PureFunction (чистая функция)",
  children: [
    {
      title: "Что такое чистая функция?",
      type: "text",
      description: `
        <p><strong>Чистая функция</strong> — это функция, которая:</p>
        <ul>
          <li>Всегда возвращает одинаковый результат для одних и тех же входных данных.</li>
          <li>Не имеет побочных эффектов (например, не изменяет глобальные переменные, не выполняет запросы к API).</li>
        </ul>
        <p>Чистые функции являются предсказуемыми, переиспользуемыми и легкими для тестирования.</p>
      `,
    },
    {
      title: "Пример чистой функции",
      type: "text",
      description: `
        <p>Пример простой чистой функции:</p>
      `,
      code: `
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Всегда возвращает 5
      `,
    },
    {
      title: "Пример нечистой функции",
      type: "text",
      description: `
        <p>Пример функции с побочными эффектами (нечистой):</p>
      `,
      code: `
let counter = 0;

function increment() {
  counter++; // Изменяет внешнее состояние
  return counter;
}

console.log(increment()); // 1
console.log(increment()); // 2
      `,
    },
    {
      title: "Признаки чистой функции",
      type: "text",
      description: `
        <p>Чистая функция должна соответствовать следующим характеристикам:</p>
        <ul>
          <li><strong>Детерминированность:</strong> Для одних и тех же входных данных всегда возвращается одинаковый результат.</li>
          <li><strong>Отсутствие побочных эффектов:</strong> Не изменяет внешние переменные, не выполняет запросы к API, не модифицирует DOM и т.д.</li>
          <li><strong>Иммутабельность:</strong> Вместо изменения данных создает новые.</li>
        </ul>
      `,
    },
    {
      title: "Преимущества чистых функций",
      type: "text",
      description: `
        <ul>
          <li><strong>Предсказуемость:</strong> Результат всегда одинаков для одних и тех же входных данных.</li>
          <li><strong>Легкость тестирования:</strong> Нет необходимости учитывать побочные эффекты или внешние зависимости.</li>
          <li><strong>Оптимизация:</strong> Их можно кэшировать (например, с помощью мемоизации).</li>
          <li><strong>Параллелизм:</strong> Можно безопасно выполнять в многопоточной среде.</li>
        </ul>
      `,
    },
    {
      title: "Чистые функции в React",
      type: "text",
      description: `
        <p>В React чистые функции часто используются для:</p>
        <ul>
          <li>Вычисления производных данных (например, с помощью <code>useMemo</code>).</li>
          <li>Работы с пропсами и состоянием (функциональные компоненты по своей сути должны быть чистыми).</li>
          <li>Создания логики приложения без побочных эффектов (например, в редьюсерах Redux).</li>
        </ul>
      `,
      code: `
import React, { useMemo } from 'react';

function Component({ data }) {
  // Чистая функция для вычисления суммы
  const total = useMemo(() => data.reduce((sum, item) => sum + item.value, 0), [data]);

  return <div>Total: {total}</div>;
}
      `,
    },
    {
      title: "Частые ошибки",
      type: "text",
      description: `
        <p><strong>1. Мутация данных:</strong></p>
        <pre><code>// Плохо: изменение входных данных
function updateArray(array) {
  array.push(42); // Мутирует массив
  return array;
}

// Лучше: создание нового массива
function updateArray(array) {
  return [...array, 42];
}</code></pre>

        <p><strong>2. Побочные эффекты:</strong></p>
        <pre><code>// Плохо: использование побочного эффекта
function calculateAndLog(a, b) {
  console.log('Calculating...');
  return a + b;
}

// Лучше: разделите логику и побочные эффекты
function calculate(a, b) {
  return a + b;
}

function log(message) {
  console.log(message);
}
</code></pre>
      `,
    },
    {
      title: "Продвинутые паттерны",
      type: "text",
      description: `
        <p><strong>1. Мемоизация:</strong></p>
        <pre><code>const memoizedAdd = (function () {
  const cache = {};
  return function (a, b) {
    const key = \`\${a},\${b}\`;
    if (key in cache) {
      console.log('Using cached result');
      return cache[key];
    }
    const result = a + b;
    cache[key] = result;
    return result;
  };
})();

console.log(memoizedAdd(2, 3)); // Вычисляет и кэширует
console.log(memoizedAdd(2, 3)); // Использует кэш
</code></pre>

        <p><strong>2. Композиция чистых функций:</strong></p>
        <pre><code>function multiply(a, b) {
  return a * b;
}

function addAndMultiply(a, b, c) {
  return multiply(add(a, b), c);
}

console.log(addAndMultiply(2, 3, 4)); // (2 + 3) * 4 = 20
</code></pre>
      `,
    },
    {
      title: "Дополнительные материалы",
      type: "text",
      description: `
        <p>Для более глубокого изучения:</p>
        <ul>
          <li><a href="https://ru.wikipedia.org/wiki/%D0%A7%D0%B8%D1%81%D1%82%D0%BE%D1%82%D0%B0_%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8"  target="_blank">Википедия: Чистые функции</a></li>
          <li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures"  target="_blank">MDN Web Docs: Замыкания и чистые функции</a></li>
          <li><a href="https://reactjs.org/docs/hooks-reference.html#usememo" target="_blank">React Documentation: useMemo</a></li> 
        </ul>
      `,
    },
  ],
};
