export const testBubblingEventInReact = {
  id: 102600,
  title: "Bubbling Event in React",
  questions: [
    {
      id: 102601,
      question: "Что такое всплытие событий (Event Bubbling) в React?",
      answer: `
**Всплытие событий (Event Bubbling):**
- Это механизм, при котором событие сначала обрабатывается на самом вложенном элементе, а затем "всплывает" вверх по дереву DOM, вызывая обработчики на родительских элементах.
- В React события также всплывают, но используются синтетические события (\`SyntheticEvent\`) для обеспечения кросс-браузерной совместимости.

**Пример:**
\`\`\`javascript
function handleParentClick() {
  console.log('Родительский элемент кликнут');
}

function handleChildClick(event) {
  console.log('Дочерний элемент кликнут');
}

function App() {
  return (
    <div onClick={handleParentClick}>
      <button onClick={handleChildClick}>Кликни меня</button>
    </div>
  );
}
\`\`\`

**Результат:**
1. Сначала выполняется \`handleChildClick\`.
2. Затем выполняется \`handleParentClick\`.
`,
    },
    {
      id: 102602,
      question: "Как остановить всплытие события в React?",
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

**Результат:**
- При клике на дочерний элемент событие не достигнет родителя.
`,
    },
    {
      id: 102603,
      question:
        "Что такое погружение событий (Event Capturing) и как оно работает в React?",
      answer: `
**Погружение событий (Event Capturing):**
- Это механизм, при котором событие сначала обрабатывается на самом верхнем уровне (родительском элементе), а затем "погружается" вниз по дереву DOM до целевого элемента.
- В React погружение событий можно использовать, передав третий аргумент \`true\` в \`addEventListener\`.

**Пример:**
\`\`\`javascript
function handleCapture(event) {
  console.log('Событие погружения:', event.target.tagName);
}

function App() {
  useEffect(() => {
    document.addEventListener('click', handleCapture, true);
    return () => {
      document.removeEventListener('click', handleCapture, true);
    };
  }, []);

  return (
    <div>
      <p>Кликните на этот текст</p>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102604,
      question:
        "Как работают синтетические события (`SyntheticEvent`) в React?",
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
      id: 102605,
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
    {
      id: 102606,
      question:
        "Как работать с событиями на динамически созданных элементах в React?",
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
      <button onClick={addItem}>Добавить элемент</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102607,
      question: "Как передавать параметры в обработчики событий в React?",
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
      id: 102608,
      question:
        "Как предотвратить всплытие события на нескольких уровнях в React?",
      answer: `
**Предотвращение всплытия:**
- Используйте \`stopPropagation\` на каждом уровне, где необходимо остановить всплытие.

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
      <div onClick={(event) => {
        event.stopPropagation();
        console.log('Средний элемент кликнут');
      }}>
        <button onClick={handleChildClick}>Кликни меня</button>
      </div>
    </div>
  );
}
\`\`\`

**Результат:**
- При клике на кнопку событие не достигнет среднего или родительского элемента.
`,
    },
  ],
};
