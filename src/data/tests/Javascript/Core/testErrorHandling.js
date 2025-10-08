export const testErrorHandling = {
  id: 102200,
  title: "Error Handling (обработка ошибок)",
  questions: [
    {
      id: 102201,
      question: "Что такое Error Handling (обработка ошибок)?",
      answer: `
**Error Handling (обработка ошибок):**
- Это процесс обнаружения, обработки и реагирования на ошибки в программе.
- Основная цель — предотвратить сбои приложения и предоставить полезную информацию для отладки.

**Основные подходы:**
1. **Try...Catch:**
   - Блок \`try\` используется для выполнения кода, который может вызвать ошибку.
   - Блок \`catch\` перехватывает ошибку и выполняет действия по её обработке.
2. **Finally:**
   - Блок \`finally\` выполняется независимо от того, была ли ошибка или нет.
3. **Throw:**
   - Используется для создания пользовательских ошибок.

**Пример:**
\`\`\`javascript
try {
  throw new Error('Something went wrong');
} catch (error) {
  console.error('Caught an error:', error.message);
} finally {
  console.log('This will run no matter what');
}
// Output:
// Caught an error: Something went wrong
// This will run no matter what
\`\`\`
`,
    },
    {
      id: 102202,
      question: "Как работает блок try...catch?",
      answer: `
**Блок try...catch:**
- \`try\`: Код внутри этого блока выполняется до тех пор, пока не возникнет ошибка.
- \`catch\`: Если ошибка возникает, управление передается в этот блок.
- \`finally\`: Этот блок выполняется всегда, независимо от наличия ошибки.

**Пример:**
\`\`\`javascript
try {
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error('Error occurred:', error.message);
} finally {
  console.log('Cleanup or logging here');
}
\`\`\`
`,
    },
    {
      id: 102203,
      question: "Как создать пользовательскую ошибку с помощью throw?",
      answer: `
**Создание пользовательской ошибки:**
- Используйте оператор \`throw\`, чтобы создать собственную ошибку.

**Пример:**
\`\`\`javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.error(error.message); // Division by zero is not allowed
}
\`\`\`
`,
    },
    {
      id: 102204,
      question: "Какие встроенные типы ошибок существуют в JavaScript?",
      answer: `
**Встроенные типы ошибок:**
1. **Error:** Базовый класс для всех ошибок.
2. **SyntaxError:** Ошибки синтаксиса.
3. **ReferenceError:** Ссылка на несуществующую переменную.
4. **TypeError:** Неверный тип данных.
5. **RangeError:** Число выходит за допустимый диапазон.
6. **EvalError:** Ошибки, связанные с функцией \`eval\`.
7. **URIError:** Ошибки при работе с URI.

**Пример:**
\`\`\`javascript
try {
  const array = new Array(-1); // RangeError
} catch (error) {
  console.error(error.name); // RangeError
  console.error(error.message); // Invalid array length
}
\`\`\`
`,
    },
    {
      id: 102205,
      question: "Как обрабатывать асинхронные ошибки?",
      answer: `
**Обработка асинхронных ошибок:**
1. **Promises:**
   - Используйте \`catch\` для обработки ошибок в промисах.

**Пример:**
\`\`\`javascript
fetch('https://example.com ')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .catch((error) => {
    console.error('Fetch error:', error.message);
  });
\`\`\`

2. **Async/Await:**
   - Используйте \`try...catch\` для обработки ошибок в асинхронных функциях.

**Пример:**
\`\`\`javascript
async function fetchData() {
  try {
    const response = await fetch('https://example.com ');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error.message);
  }
}
\`\`\`
`,
    },
    {
      id: 102206,
      question: "Что такое глобальный обработчик ошибок?",
      answer: `
**Глобальный обработчик ошибок:**
- Позволяет перехватывать необработанные ошибки в приложении.
- Полезен для логирования и предотвращения сбоев.

**Пример:**
\`\`\`javascript
window.addEventListener('error', (event) => {
  console.error('Global error:', event.message);
});

// Вызов ошибки
setTimeout(() => {
  throw new Error('Uncaught error');
}, 1000);
\`\`\`
`,
    },
    {
      id: 102207,
      question: "Как тестировать обработку ошибок?",
      answer: `
**Тестирование обработки ошибок:**
- Используйте библиотеки, такие как \`Jest\` или \`Mocha\`.

**Пример:**
\`\`\`javascript
function riskyFunction() {
  throw new Error('Test error');
}

test('handles errors correctly', () => {
  expect(() => riskyFunction()).toThrow('Test error');
});
\`\`\`
`,
    },
    {
      id: 102208,
      question: "Как использовать Error Boundaries в React?",
      answer: `
**Error Boundaries:**
- Это компоненты React, которые перехватывают ошибки в дочерних компонентах.
- Используются для отображения запасного UI вместо сбоя приложения.

**Пример:**
\`\`\`javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error caught by boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

// Использование:
<ErrorBoundary>
  <ChildComponent />
</ErrorBoundary>
\`\`\`
`,
    },
    {
      id: 102209,
      question: "Как логировать ошибки в production?",
      answer: `
**Логирование ошибок:**
- Используйте сторонние сервисы, такие как Sentry, LogRocket или Rollbar.

**Пример:**
\`\`\`javascript
window.addEventListener('error', (event) => {
  fetch('/log-error', {
    method: 'POST',
    body: JSON.stringify({
      message: event.message,
      stack: event.error.stack,
    }),
  });
});
\`\`\`
`,
    },
  ],
};
