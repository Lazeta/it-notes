export const testSetTimeout = {
  id: 101375,
  title: "SetTimeout",
  questions: [
    {
      id: 101376,
      question: "Что такое setTimeout и как он работает?",
      answer: `
**setTimeout:**
- Это встроенный метод JavaScript, который позволяет выполнить функцию через указанное количество миллисекунд.
- Функция выполняется только один раз.

**Синтаксис:**
\`\`\`javascript
setTimeout(callback, delay, arg1, arg2, ...);
\`\`\`
- \`callback\`: Функция, которая будет выполнена.
- \`delay\`: Задержка в миллисекундах.
- \`arg1, arg2, ...\`: Аргументы, передаваемые в функцию.

**Пример:**
\`\`\`javascript
setTimeout(() => {
  console.log('Hello after 2 seconds');
}, 2000);
\`\`\`
`,
    },
    {
      id: 101377,
      question: "Как отменить выполнение setTimeout?",
      answer: `
**Отмена setTimeout:**
- Для отмены используется метод \`clearTimeout\`, которому передается идентификатор таймера, возвращенный \`setTimeout\`.

**Пример:**
\`\`\`javascript
const timerId = setTimeout(() => {
  console.log('This will not run');
}, 3000);

clearTimeout(timerId); // Отменяет выполнение
\`\`\`
`,
    },
    {
      id: 101378,
      question: "Как передать аргументы в функцию через setTimeout?",
      answer: `
**Передача аргументов:**
- Аргументы можно передать после задержки в \`setTimeout\`.

**Пример:**
\`\`\`javascript
setTimeout((name, age) => {
  console.log(\`Name: \${name}, Age: \${age}\`);
}, 1000, 'Alice', 25);
// Вывод: Name: Alice, Age: 25
\`\`\`
`,
    },
    {
      id: 101379,
      question: "В чем разница между setTimeout и setInterval?",
      answer: `
**Разница:**
1. **setTimeout:**
   - Выполняет функцию **один раз** через указанное время.
2. **setInterval:**
   - Выполняет функцию **повторно** с указанным интервалом.

**Пример:**
\`\`\`javascript
// setTimeout:
setTimeout(() => {
  console.log('Runs once');
}, 1000);

// setInterval:
const intervalId = setInterval(() => {
  console.log('Runs repeatedly');
}, 1000);

setTimeout(() => clearInterval(intervalId), 5000); // Останавливает через 5 секунд
\`\`\`
`,
    },
    {
      id: 101380,
      question: "Как использовать setTimeout для создания цикла?",
      answer: `
**Создание цикла:**
- Можно использовать рекурсивный вызов \`setTimeout\` для создания цикла.

**Пример:**
\`\`\`javascript
function repeatLog(message, times, delay) {
  let count = 0;

  function log() {
    if (count < times) {
      console.log(message);
      count++;
      setTimeout(log, delay);
    }
  }

  log();
}

repeatLog('Hello', 5, 1000); // Логирует 'Hello' 5 раз с интервалом 1 секунда
\`\`\`
`,
    },
  ],
};
