export const testJSXHandlers = {
  id: 102575,
  title: "JSX Handlers (обработчики JSX)",
  questions: [
    {
      id: 102576,
      question: "Что такое JSX Handlers (обработчики JSX)?",
      answer: `
**JSX Handlers (обработчики JSX):**
- Это функции, которые вызываются при событиях, связанных с элементами JSX.
- Обработчики событий в JSX пишутся в camelCase (например, \`onClick\`, \`onSubmit\`).

**Пример:**
\`\`\`javascript
function handleClick() {
  console.log('Клик!');
}

const element = <button onClick={handleClick}>Кликни меня</button>;
\`\`\`
`,
    },
    {
      id: 102577,
      question: "Как передавать параметры в обработчики событий?",
      answer: `
**Передача параметров:**
- Используйте стрелочные функции или \`bind\` для передачи параметров в обработчики событий.

**Пример с использованием стрелочной функции:**
\`\`\`javascript
function handleClick(id, event) {
  console.log('Нажата кнопка с ID:', id);
}

function Buttons() {
  return (
    <>
      <button onClick={(event) => handleClick(1, event)}>Кнопка 1</button>
      <button onClick={(event) => handleClick(2, event)}>Кнопка 2</button>
    </>
  );
}
\`\`\`

**Пример с использованием \`bind\`:**
\`\`\`javascript
function handleClick(id) {
  console.log('Нажата кнопка с ID:', id);
}

function Buttons() {
  return (
    <>
      <button onClick={handleClick.bind(null, 1)}>Кнопка 1</button>
      <button onClick={handleClick.bind(null, 2)}>Кнопка 2</button>
    </>
  );
}
\`\`\`
`,
    },
    {
      id: 102578,
      question: "Как остановить распространение события в JSX?",
      answer: `
**Остановка распространения:**
- Используйте метод \`stopPropagation\` объекта события.

**Пример:**
\`\`\`javascript
function handleChildClick(event) {
  event.stopPropagation();
  console.log('Дочерний элемент кликнут');
}

function Parent() {
  return (
    <div onClick={() => console.log('Родительский элемент кликнут')}>
      <div onClick={handleChildClick}>Дочерний элемент</div>
    </div>
  );
}
\`\`\`

**Результат:**
- При клике на дочерний элемент событие не достигнет родителя.
`,
    },
    {
      id: 102579,
      question: "Как отменить действие по умолчанию в JSX?",
      answer: `
**Отмена действия по умолчанию:**
- Используйте метод \`preventDefault\` объекта события.

**Пример:**
\`\`\`javascript
function handleFormSubmit(event) {
  event.preventDefault();
  console.log('Форма отправлена, но действие по умолчанию отменено.');
}

function Form() {
  return (
    <form onSubmit={handleFormSubmit}>
      <button type="submit">Отправить</button>
    </form>
  );
}
\`\`\`
`,
    },
    {
      id: 102580,
      question: "Как использовать стрелочные функции в JSX для обработчиков?",
      answer: `
**Стрелочные функции:**
- Позволяют определять обработчики событий непосредственно в JSX.
- Удобны для передачи параметров.

**Пример:**
\`\`\`javascript
function Button({ label }) {
  const handleClick = () => {
    console.log(\`Кликнули по кнопке: $\{label}\`);
  };

  return <button onClick={handleClick}>{label}</button>;
}

function App() {
  return (
    <>
      <Button label="Кнопка 1" />
      <Button label="Кнопка 2" />
    </>
  );
}
\`\`\`
`,
    },
    {
      id: 102581,
      question: "Как избежать создания новых функций на каждом рендере?",
      answer: `
**Избегание создания новых функций:**
- Используйте \`useCallback\` для мемоизации обработчиков событий.

**Пример:**
\`\`\`javascript
import React, { useCallback } from 'react';

function Button({ onClick, label }) {
  return <button onClick={onClick}>{label}</button>;
}

function Parent() {
  const handleClick = useCallback(() => {
    console.log('Клик!');
  }, []);

  return <Button onClick={handleClick} label="Кнопка" />;
}
\`\`\`

**Важно:**
- Без \`useCallback\` новая функция создается при каждом рендере, что может повлиять на производительность.
`,
    },
    {
      id: 102582,
      question: "Можно ли использовать анонимные функции в JSX?",
      answer: `
**Анонимные функции:**
- Да, можно, но это может повлиять на производительность, так как новая функция создается при каждом рендере.

**Пример:**
\`\`\`javascript
function Button() {
  return <button onClick={() => console.log('Клик!')}>Кликни меня</button>;
}
\`\`\`

**Рекомендация:**
- Для оптимизации используйте именованные функции или \`useCallback\`.
`,
    },
    {
      id: 102583,
      question: "Как работать с событиями формы в JSX?",
      answer: `
**События формы:**
- Основные события: \`onChange\` (для обработки изменений), \`onSubmit\` (для отправки формы).

**Пример:**
\`\`\`javascript
function Form() {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Отправленное значение:', value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit">Отправить</button>
    </form>
  );
}
\`\`\`
`,
    },
    {
      id: 102584,
      question: "Какие есть типы событий в JSX?",
      answer: `
**Типы событий:**
1. **Мышь:** \`onClick\`, \`onMouseEnter\`, \`onMouseLeave\`.
2. **Клавиатура:** \`onKeyDown\`, \`onKeyUp\`, \`onKeyPress\`.
3. **Формы:** \`onChange\`, \`onSubmit\`, \`onFocus\`, \`onBlur\`.
4. **Другие:** \`onScroll\`, \`onLoad\`, \`onError\`.

**Пример:**
\`\`\`javascript
function Example() {
  const handleKeyDown = (event) => {
    console.log('Нажата клавиша:', event.key);
  };

  return <input type="text" onKeyDown={handleKeyDown} />;
}
\`\`\`
`,
    },
    {
      id: 102585,
      question: "Как использовать синтетические события в JSX?",
      answer: `
**Синтетические события:**
- React оборачивает нативные события браузера в объект \`SyntheticEvent\`.
- Предоставляет кросс-браузерную совместимость.

**Пример:**
\`\`\`javascript
function handleClick(event) {
  console.log('Событие:', event);
  console.log('Тип события:', event.type); // 'click'
}

function Button() {
  return <button onClick={handleClick}>Кликни меня</button>;
}
\`\`\`
`,
    },
  ],
};
