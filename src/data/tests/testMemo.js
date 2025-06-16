export const testMemo = {
  id: 100650,
  title: "Memoization (мемоизация)",
  questions: [
    {
      id: 100651,
      question: "Что такое мемоизация?",
      answer: `
      **Мемоизация** — это техника оптимизации, при которой результаты вычислений сохраняются в кэше.
      Если функция вызывается с теми же входными данными, результат берется из кэша вместо повторного вычисления.

      **Пример:**
      \`\`\`javascript
      function memoize(fn) {
        const cache = {};
        return function (...args) {
          const key = JSON.stringify(args);
          if (cache[key]) {
            console.log('Используется кэш');
            return cache[key];
          }
          const result = fn(...args);
          cache[key] = result;
          return result;
        };
      }

      function add(a, b) {
        console.log('Выполняется вычисление');
        return a + b;
      }

      const memoizedAdd = memoize(add);

      console.log(memoizedAdd(2, 3)); // Выполняется вычисление, 5
      console.log(memoizedAdd(2, 3)); // Используется кэш, 5
      \`\`\`
      `,
    },
    {
      id: 100652,
      question: "Зачем нужна мемоизация?",
      answer: `
      **Цели мемоизации:**
      1. **Оптимизация производительности:**
         - Повторное использование результатов для одних и тех же входных данных.
         - Уменьшение количества вычислений.

      2. **Сокращение времени выполнения:**
         - Особенно полезно для рекурсивных функций (например, вычисление чисел Фибоначчи).

      3. **Экономия ресурсов:**
         - Уменьшение нагрузки на процессор и память.

      **Пример:**
      \`\`\`javascript
      function fibonacci(n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
      }

      const memoizedFibonacci = memoize(fibonacci);

      console.log(memoizedFibonacci(10)); // Быстрее благодаря кэшированию
      \`\`\`
      `,
    },
    {
      id: 100653,
      question: "Как реализовать мемоизацию в JavaScript?",
      answer: `
      **Реализация мемоизации:**
      - Создайте кэш (обычно объект).
      - При вызове функции проверяйте, есть ли результат в кэше.
      - Если результат есть, возвращайте его.
      - Если нет, выполняйте вычисления и сохраняйте результат в кэш.

      **Пример:**
      \`\`\`javascript
      function memoize(fn) {
        const cache = {};
        return function (...args) {
          const key = JSON.stringify(args);
          if (key in cache) {
            return cache[key];
          }
          const result = fn.apply(this, args);
          cache[key] = result;
          return result;
        };
      }

      function factorial(n) {
        if (n === 0) return 1;
        return n * factorial(n - 1);
      }

      const memoizedFactorial = memoize(factorial);

      console.log(memoizedFactorial(5)); // 120
      console.log(memoizedFactorial(5)); // Из кэша
      \`\`\`
      `,
    },
    {
      id: 100654,
      question: "Какие ограничения у мемоизации?",
      answer: `
      **Ограничения мемоизации:**
      1. **Память:**
         - Кэш занимает место в памяти, что может быть проблемой для больших объемов данных.

      2. **Изменяемые данные:**
         - Мемоизация работает только с чистыми функциями (без побочных эффектов).

      3. **Ключи кэша:**
         - Нужно правильно сериализовать аргументы для ключей кэша (например, массивы или объекты).

      **Пример проблемы:**
      \`\`\`javascript
      const memoizedFn = memoize((obj) => Object.keys(obj).length);

      console.log(memoizedFn({ a: 1 })); // Работает
      console.log(memoizedFn({ a: 1 })); // Не использует кэш (разные ссылки)
      \`\`\`
      `,
    },
    {
      id: 100655,
      question: "Как использовать мемоизацию в React?",
      answer: `
      **Мемоизация в React:**
      - В React мемоизация используется для оптимизации рендеринга компонентов.
      - Основные инструменты:
        - \`React.memo\` — для мемоизации функциональных компонентов.
        - \`useMemo\` — для мемоизации значений.
        - \`useCallback\` — для мемоизации функций.

      **Пример с \`React.memo\`:**
      \`\`\`javascript
      import React from 'react';

      const MyComponent = React.memo(({ value }) => {
        console.log('Rendered');
        return <div>{value}</div>;
      });

      export default function App() {
        const [count, setCount] = React.useState(0);

        return (
          <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <MyComponent value={count % 2 === 0 ? 'Even' : 'Odd'} />
          </div>
        );
      }
      \`\`\`
      - Компонент \`MyComponent\` перерисовывается только при изменении \`value\`.
      `,
    },
    {
      id: 100656,
      question:
        "Что такое динамическое программирование и как оно связано с мемоизацией?",
      answer: `
      **Динамическое программирование (DP):**
      - Метод решения задач, который разбивает их на подзадачи и решает каждую подзадачу один раз.
      - Часто использует мемоизацию для хранения промежуточных результатов.

      **Пример:**
      \`\`\`javascript
      function fibonacci(n, memo = {}) {
        if (n in memo) return memo[n];
        if (n <= 1) return n;
        memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
        return memo[n];
      }

      console.log(fibonacci(50)); // Эффективно благодаря DP и мемоизации
      \`\`\`
      `,
    },
  ],
};
