export const testSyntheticEvent = {
  id: 102550,
  title: "SyntheticEvent (синтетическое событие)",
  questions: [
    {
      id: 102551,
      question: "Что такое SyntheticEvent?",
      answer: `
**SyntheticEvent:**
- Это кросс-браузерная обертка над нативными событиями браузера.
- React создает объект \`SyntheticEvent\`, чтобы обеспечить единообразное поведение событий во всех браузерах.
- Он имеет такой же интерфейс, как и нативные события, но с дополнительными возможностями для работы в React.

**Основные особенности:**
1. **Кросс-браузерность:**
   - \`SyntheticEvent\` абстрагирует различия между браузерами.
2. **Пул событий:**
   - React использует пул событий для оптимизации производительности. После выполнения обработчика событие очищается и возвращается в пул.
3. **Прекращение распространения:**
   - Для остановки распространения события используется метод \`stopPropagation\`.
4. **Отмена действия по умолчанию:**
   - Для отмены действия по умолчанию (например, перехода по ссылке) используется метод \`preventDefault\`.

**Пример:**
\`\`\`javascript
function handleClick(event) {
  console.log('Clicked!');
  event.stopPropagation(); // Остановка всплытия
  event.preventDefault();  // Отмена действия по умолчанию
}

function Button() {
  return <button onClick={handleClick}>Click me</button>;
}
\`\`\`
`,
    },
    {
      id: 102552,
      question: "Как работает пул событий в React?",
      answer: `
**Пул событий:**
- React повторно использует объекты \`SyntheticEvent\` для оптимизации производительности.
- После вызова обработчика событие очищается (его свойства становятся \`null\`) и возвращается в пул для повторного использования.

**Важно:**
- Если вам нужно сохранить данные из события (например, \`event.target.value\`), скопируйте их в переменную до завершения обработчика.

**Пример:**
\`\`\`javascript
function handleChange(event) {
  const value = event.target.value; // Сохраняем значение
  console.log(value);              // Используем его
}

function Input() {
  return <input type="text" onChange={handleChange} />;
}
\`\`\`
`,
    },
    {
      id: 102553,
      question: "Какие методы доступны в SyntheticEvent?",
      answer: `
**Методы SyntheticEvent:**
1. **stopPropagation():**
   - Останавливает всплытие события.
2. **preventDefault():**
   - Отменяет действие по умолчанию (например, переход по ссылке или отправку формы).
3. **persist():**
   - Удаляет событие из пула, позволяя использовать его асинхронно.
4. **nativeEvent:**
   - Возвращает нативное событие браузера.

**Пример использования методов:**
\`\`\`javascript
function handleLinkClick(event) {
  event.preventDefault(); // Отмена перехода по ссылке
  console.log('Link clicked, but navigation is prevented.');
}

function App() {
  return <a href="https://example.com " onClick={handleLinkClick}>Example</a>;
}
\`\`\`
`,
    },
    {
      id: 102554,
      question: "Как работать с нативными событиями в React?",
      answer: `
**Нативные события:**
- Если вам нужно получить доступ к нативному событию браузера, используйте свойство \`nativeEvent\` объекта \`SyntheticEvent\`.

**Пример:**
\`\`\`javascript
function handleNativeEvent(event) {
  console.log('SyntheticEvent:', event);
  console.log('Native Event:', event.nativeEvent);
}

function Button() {
  return <button onClick={handleNativeEvent}>Click me</button>;
}
\`\`\`

**Важно:**
- Рекомендуется использовать \`SyntheticEvent\`, так как он обеспечивает кросс-браузерную совместимость.
`,
    },
    {
      id: 102555,
      question: "Как передавать параметры в обработчики событий?",
      answer: `
**Передача параметров:**
- Используйте стрелочные функции или \`bind\` для передачи параметров в обработчики событий.

**Пример с использованием стрелочной функции:**
\`\`\`javascript
function handleClick(id, event) {
  console.log('Button ID:', id);
}

function Buttons() {
  return (
    <>
      <button onClick={(event) => handleClick(1, event)}>Button 1</button>
      <button onClick={(event) => handleClick(2, event)}>Button 2</button>
    </>
  );
}
\`\`\`

**Пример с использованием \`bind\`:**
\`\`\`javascript
function handleClick(id) {
  console.log('Button ID:', id);
}

function Buttons() {
  return (
    <>
      <button onClick={handleClick.bind(null, 1)}>Button 1</button>
      <button onClick={handleClick.bind(null, 2)}>Button 2</button>
    </>
  );
}
\`\`\`
`,
    },
    {
      id: 102556,
      question: "Как обрабатывать события на динамически созданных элементах?",
      answer: `
**Обработка событий на динамических элементах:**
- React автоматически управляет событиями через синтетическую систему событий.
- Нет необходимости вручную добавлять или удалять слушатели.

**Пример:**
\`\`\`javascript
function DynamicList() {
  const [items, setItems] = useState(['Item 1', 'Item 2']);

  const addItem = () => {
    setItems([...items, \`Item $\{items.length + 1}\`]);
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => console.log(item)}>
            {item}
          </li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102557,
      question: "Как остановить всплытие события?",
      answer: `
**Остановка всплытия:**
- Используйте метод \`stopPropagation\` объекта \`SyntheticEvent\`.

**Пример:**
\`\`\`javascript
function Child({ onClick }) {
  return (
    <div onClick={(event) => {
      event.stopPropagation();
      console.log('Child clicked');
    }}>
      Child
    </div>
  );
}

function Parent() {
  return (
    <div onClick={() => console.log('Parent clicked')}>
      Parent
      <Child />
    </div>
  );
}
\`\`\`

**Результат:**
- При клике на дочерний элемент событие не достигнет родителя.
`,
    },
    {
      id: 102558,
      question: "Как отменить действие по умолчанию?",
      answer: `
**Отмена действия по умолчанию:**
- Используйте метод \`preventDefault\` объекта \`SyntheticEvent\`.

**Пример:**
\`\`\`javascript
function handleFormSubmit(event) {
  event.preventDefault(); // Отмена отправки формы
  console.log('Form submitted, but default action is prevented.');
}

function Form() {
  return (
    <form onSubmit={handleFormSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\`
`,
    },
  ],
};
