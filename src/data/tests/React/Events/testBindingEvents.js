export const testBindingEvents = {
  id: 102625,
  title: "Binding Events (привязка событий)",
  questions: [
    {
      id: 102626,
      question: "Что такое привязка событий (Event Binding)?",
      answer: `
**Привязка событий (Event Binding):**
- Это процесс связывания функции обработчика с определенным событием на элементе DOM или компоненте.
- В React события привязываются через JSX с использованием атрибутов, таких как \`onClick\`, \`onChange\` и другие.

**Пример в React:**
\`\`\`javascript
function handleClick() {
  console.log('Клик!');
}

function Button() {
  return <button onClick={handleClick}>Кликни меня</button>;
}
\`\`\`
`,
    },
    {
      id: 102627,
      question: "Как работает `this` при привязке событий в JavaScript?",
      answer: `
**Работа \`this\` при привязке событий:**
- В JavaScript значение \`this\` зависит от контекста вызова функции.
- Если обработчик события передается как ссылка на метод объекта, \`this\` может потерять связь с объектом.

**Пример проблемы:**
\`\`\`javascript
const button = document.querySelector('button');

const obj = {
  name: 'Button',
  handleClick() {
    console.log(this.name);
  },
};

button.addEventListener('click', obj.handleClick); // undefined
\`\`\`

**Решение:**
Используйте \`bind\`, стрелочные функции или привязку в конструкторе.

**Пример с \`bind\`:**
\`\`\`javascript
button.addEventListener('click', obj.handleClick.bind(obj));
\`\`\`

**Пример со стрелочной функцией:**
\`\`\`javascript
button.addEventListener('click', () => obj.handleClick());
\`\`\`
`,
    },
    {
      id: 102628,
      question: "Как привязать обработчик события в React?",
      answer: `
**Привязка обработчиков в React:**
1. **Стрелочные функции:**
   - Автоматически привязывают контекст.
2. **Методы класса:**
   - Требуют явной привязки через \`bind\` в конструкторе.
3. **Передача параметров:**
   - Используйте стрелочные функции или \`bind\`.

**Пример с классовым компонентом:**
\`\`\`javascript
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Клик!');
  }

  render() {
    return <button onClick={this.handleClick}>Кликни меня</button>;
  }
}
\`\`\`

**Пример с функциональным компонентом:**
\`\`\`javascript
function Button() {
  const handleClick = () => {
    console.log('Клик!');
  };

  return <button onClick={handleClick}>Кликни меня</button>;
}
\`\`\`
`,
    },
    {
      id: 102629,
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
      id: 102630,
      question: "Как удалить обработчик события?",
      answer: `
**Удаление обработчика:**
- В JavaScript используйте метод \`removeEventListener\`.
- В React обработчики автоматически удаляются при размонтировании компонента.

**Пример в JavaScript:**
\`\`\`javascript
function handleClick() {
  console.log('Клик!');
}

const button = document.querySelector('button');
button.addEventListener('click', handleClick);

// Удаление обработчика
button.removeEventListener('click', handleClick);
\`\`\`
`,
    },
    {
      id: 102631,
      question: "Как использовать делегирование событий?",
      answer: `
**Делегирование событий:**
- Это техника, при которой обработчик события добавляется на родительский элемент, а не на каждый дочерний элемент.
- Позволяет обрабатывать события для динамически созданных элементов.

**Пример:**
\`\`\`javascript
function handleParentClick(event) {
  if (event.target.tagName === 'BUTTON') {
    console.log('Кликнута кнопка:', event.target.textContent);
  }
}

function App() {
  return (
    <div onClick={handleParentClick}>
      <button>Кнопка 1</button>
      <button>Кнопка 2</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102632,
      question: "Как предотвратить действие по умолчанию в обработчике?",
      answer: `
**Предотвращение действия по умолчанию:**
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
      id: 102633,
      question: "Как остановить всплытие события?",
      answer: `
**Остановка всплытия:**
- Используйте метод \`stopPropagation\` объекта события.

**Пример:**
\`\`\`javascript
function handleChildClick(event) {
  event.stopPropagation();
  console.log('Дочерний элемент кликнут');
}

function handleParentClick() {
  console.log('Родительский элемент кликнут');
}

function App() {
  return (
    <div onClick={handleParentClick}>
      <button onClick={handleChildClick}>Кликни меня</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102634,
      question: "Как работают синтетические события в React?",
      answer: `
**Синтетические события (\`SyntheticEvent\`):**
- Это обертка над нативными событиями браузера, которая обеспечивает кросс-браузерную совместимость.
- После выполнения обработчика событие очищается и возвращается в пул для повторного использования.

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
    {
      id: 102635,
      question:
        "Какие методы доступны в объекте события (`SyntheticEvent`) в React?",
      answer: `
**Методы объекта события (\`SyntheticEvent\`):**
1. **stopPropagation():**
   - Останавливает всплытие события.
2. **preventDefault():**
   - Отменяет действие по умолчанию (например, переход по ссылке).
3. **persist():**
   - Удаляет событие из пула, позволяя использовать его асинхронно.
4. **nativeEvent:**
   - Возвращает нативное событие браузера.

**Пример:**
\`\`\`javascript
function handleLinkClick(event) {
  event.preventDefault(); // Отмена перехода по ссылке
  console.log('Ссылка кликнута, но переход отменен.');
}

function App() {
  return <a href="https://example.com " onClick={handleLinkClick}>Example</a>;
}
\`\`\`
`,
    },
  ],
};
