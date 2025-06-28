export const testScope = {
  id: 100775,
  title: "Scope (Область видимости)",
  questions: [
    {
      id: 100776,
      question: "Что такое Scope?",
      answer: `
      **Scope (область видимости):**
      - Определяет, где переменные и функции доступны в программе.
      - Обеспечивает организацию кода и предотвращает конфликты имен.

      **Пример:**
      \`\`\`javascript
      let globalVar = 'I am global';

      function example() {
        let localVar = 'I am local';
        console.log(globalVar); // Доступно
        console.log(localVar);  // Доступно
      }

      example();
      console.log(globalVar); // Доступно
      console.log(localVar);  // ReferenceError: localVar is not defined
      \`\`\`
      `,
    },
    {
      id: 100777,
      question: "Какие есть области видимости?",
      answer: `
      **Типы областей видимости:**
      1. **Глобальная область видимости:**
         - Переменные доступны везде в программе.
         \`\`\`javascript
         const globalVar = 'Global';
         function example() {
           console.log(globalVar); // Global
         }
         example();
         \`\`\`

      2. **Функциональная область видимости:**
         - Переменные, объявленные внутри функции, доступны только внутри этой функции.
         \`\`\`javascript
         function example() {
           const funcVar = 'Function scope';
           console.log(funcVar);
         }
         example();
         console.log(funcVar); // ReferenceError: funcVar is not defined
         \`\`\`

      3. **Блочная область видимости:**
         - Переменные, объявленные с помощью \`let\` и \`const\`, доступны только внутри блока (\`{ }\`).
         \`\`\`javascript
         if (true) {
           const blockVar = 'Block scope';
           console.log(blockVar); // Block scope
         }
         console.log(blockVar); // ReferenceError: blockVar is not defined
         \`\`\`
      `,
    },
    {
      id: 100778,
      question: "Как Scope влияет на разработку?",
      answer: `
      **Влияние Scope:**
      1. **Предотвращение конфликтов имен:**
         - Scope ограничивает доступ к переменным, предотвращая случайное переопределение.
         \`\`\`javascript
         let x = 10;
         function example() {
           let x = 20; // Локальная переменная
           console.log(x); // 20
         }
         example();
         console.log(x); // 10
         \`\`\`

      2. **Организация кода:**
         - Scope помогает структурировать код и изолировать переменные.

      3. **Отладка:**
         - Понимание Scope помогает находить ошибки, связанные с недоступностью переменных.
      `,
    },
    {
      id: 100779,
      question: "Scope в контексте замыкания",
      answer: `
      **Scope и замыкания:**
      - Замыкания позволяют функции сохранять доступ к переменным из внешней области видимости, 
        даже после завершения работы родительской функции.

      **Пример:**
      \`\`\`javascript
      function createCounter() {
        let count = 0;
        return function () {
          count++;
          return count;
        };
      }

      const counter = createCounter();
      console.log(counter()); // 1
      console.log(counter()); // 2
      \`\`\`
      `,
    },
    {
      id: 100780,
      question: "Чем отличаются var, let и const в контексте Scope?",
      answer: `
      **Различия:**
      1. **var:**
         - Имеет функциональную область видимости.
         - Подвержена hoisting.
         \`\`\`javascript
         if (true) {
           var x = 10;
         }
         console.log(x); // 10
         \`\`\`

      2. **let и const:**
         - Имеют блочную область видимости.
         - Не подвержены hoisting в том же виде, как \`var\`.
         \`\`\`javascript
         if (true) {
           let y = 20;
           const z = 30;
         }
         console.log(y); // ReferenceError: y is not defined
         console.log(z); // ReferenceError: z is not defined
         \`\`\`
      `,
    },
    {
      id: 100781,
      question: "Что такое лексический Scope?",
      answer: `
      **Лексический Scope:**
      - Scope определяется статически (во время написания кода), а не динамически (во время выполнения).
      - Функции имеют доступ к переменным из области видимости, в которой они были объявлены.

      **Пример:**
      \`\`\`javascript
      const outerVar = 'I am outside';

      function outerFunction() {
        const innerVar = 'I am inside';

        function innerFunction() {
          console.log(outerVar); // I am outside
          console.log(innerVar); // I am inside
        }

        innerFunction();
      }

      outerFunction();
      \`\`\`
      `,
    },
    {
      id: 100782,
      question: "Что такое TDZ (Temporal Dead Zone)?",
      answer: `
      **TDZ (Temporal Dead Zone):**
      - Это состояние, при котором переменные \`let\` и \`const\` недоступны до их объявления.
      - Они находятся в TDZ до момента инициализации.

      **Пример:**
      \`\`\`javascript
      console.log(a); // ReferenceError: Cannot access 'a' before initialization
      let a = 10;

      console.log(b); // ReferenceError: Cannot access 'b' before initialization
      const b = 20;
      \`\`\`
      `,
    },
  ],
};
