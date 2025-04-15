export const IIFE = {
  id: 150,
  title: "IIFE (Immediately Invoked Function Expression)",
  children: [
    {
      title: "Описание IIFE",
      type: "text",
      description: `
            <p>
              <strong>IIFE</strong>: Это функциональное выражение, которое выполняется сразу после его определения. Это позволяет создать локальную область видимости и изолировать переменные от глобальной области видимости.
            </p>
            <p>
              IIFE часто используется для организации кода и предотвращения загрязнения глобального пространства имен.
            </p>
          `,
      code: `
(function() {
var localVariable = 'I am local';
console.log(localVariable); // 'I am local'
})();

// console.log(localVariable); // Uncaught ReferenceError: localVariable is not defined
          `,
    },
    {
      title: "Синтаксис IIFE",
      type: "text",
      description: `
            <p>Стандартный синтаксис включает в себя определение функции, заключенное в круглые скобки, и сразу же вызываемое с использованием дополнительных круглых скобок.</p>
          `,
      code: `
(function() {
// Код здесь
})();

// Или с использованием стрелочной функции
(() => {
// Код здесь
})();
          `,
    },
    {
      title: "Преимущества использования IIFE",
      type: "text",
      description: `
            <p>
              <strong>Преимущества:</strong>
              <ul>
                <li>Изолированная область видимости для переменных.</li>
                <li>Предотвращение конфликтов переменных с глобальной областью видимости.</li>
                <li>Помогает безопасно избегать переменных, которые могут повлиять на другие скрипты.</li>
              </ul>
            </p>
          `,
      code: `
(function() {
var count = 0; // Локальная переменная, недоступная вне IIFE
console.log(count); // 0
})();

// console.log(count); // Uncaught ReferenceError: count is not defined
          `,
    },
  ],
};
