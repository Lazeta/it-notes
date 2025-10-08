export const testRefs = {
  id: 102725,
  title: "Refs (ссылки)",
  questions: [
    {
      id: 102726,
      question: "Что такое Refs в React?",
      answer: `
**Refs (ссылки):**
- Это способ получить доступ к DOM-элементам или экземплярам компонентов.
- Используются для управления фокусом, текстовым выбором, медиа-проигрывателями и интеграции с библиотеками сторонних разработчиков.

**Пример создания Ref:**
\`\`\`javascript
import React, { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Установить фокус</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102727,
      question: "Как создать Ref в функциональном компоненте?",
      answer: `
**Создание Ref:**
- Используйте хук \`useRef\`.

**Пример:**
\`\`\`javascript
import React, { useRef } from 'react';

function Example() {
  const ref = useRef(null);

  const handleClick = () => {
    console.log(ref.current); // Доступ к DOM-элементу
  };

  return (
    <div>
      <div ref={ref}>Этот элемент доступен через ref</div>
      <button onClick={handleClick}>Проверить ref</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102728,
      question: "Как использовать Ref в классовых компонентах?",
      answer: `
**Использование Ref:**
- В классовых компонентах используйте \`React.createRef()\`.

**Пример:**
\`\`\`javascript
class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleFocus = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.inputRef} type="text" />
        <button onClick={this.handleFocus}>Установить фокус</button>
      </div>
    );
  }
}
\`\`\`
`,
    },
    {
      id: 102729,
      question: "Какие основные случаи использования Ref?",
      answer: `
**Основные случаи использования:**
1. **Управление фокусом:**
   - Установка фокуса на поле ввода.
2. **Текстовый выбор:**
   - Выделение текста в поле ввода.
3. **Интеграция с DOM:**
   - Прямой доступ к DOM-элементам.
4. **Анимации:**
   - Управление анимациями через DOM.
5. **Интеграция с библиотеками:**
   - Интеграция с внешними библиотеками, например, графическими.

**Пример управления фокусом:**
\`\`\`javascript
function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Установить фокус</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102730,
      question: "Что такое callback-refs и как они работают?",
      answer: `
**Callback-refs:**
- Это функция, которая вызывается с DOM-элементом или экземпляром компонента.
- Позволяет управлять рефами более гибко.

**Пример:**
\`\`\`javascript
function CallbackRefExample() {
  let inputElement = null;

  const setRef = (element) => {
    inputElement = element;
  };

  const handleFocus = () => {
    if (inputElement) {
      inputElement.focus();
    }
  };

  return (
    <div>
      <input ref={setRef} type="text" />
      <button onClick={handleFocus}>Установить фокус</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102731,
      question: "Как передать Ref в дочерний компонент?",
      answer: `
**Передача Ref:**
- Используйте \`React.forwardRef\`, чтобы передать Ref в дочерний компонент.

**Пример:**
\`\`\`javascript
const ChildComponent = React.forwardRef((props, ref) => {
  return <input ref={ref} type="text" />;
});

function ParentComponent() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <ChildComponent ref={inputRef} />
      <button onClick={handleFocus}>Установить фокус</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102732,
      question: "Можно ли использовать Ref для хранения изменяемых значений?",
      answer: `
**Да, можно:**
- \`useRef\` можно использовать для хранения изменяемых значений, которые не вызывают перерисовку компонента.

**Пример:**
\`\`\`javascript
function Counter() {
  const countRef = useRef(0);

  const increment = () => {
    countRef.current += 1;
    console.log('Current count:', countRef.current);
  };

  return <button onClick={increment}>Increment</button>;
}
\`\`\`
`,
    },
    {
      id: 102733,
      question: "В чем разница между State и Ref?",
      answer: `
**Разница между State и Ref:**
1. **State:**
   - Триггерит перерисовку компонента при изменении.
   - Используется для управляемых данных.
2. **Ref:**
   - Не вызывает перерисовку компонента.
   - Используется для прямого доступа к DOM или хранения изменяемых значений.

**Пример:**
\`\`\`javascript
function Example() {
  const [state, setState] = useState(0);
  const ref = useRef(0);

  const updateState = () => {
    setState((prev) => prev + 1); // Перерисовывает компонент
  };

  const updateRef = () => {
    ref.current += 1; // Не вызывает перерисовку
    console.log('Ref value:', ref.current);
  };

  return (
    <div>
      <p>State: {state}</p>
      <button onClick={updateState}>Update State</button>
      <button onClick={updateRef}>Update Ref</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102734,
      question: "Как использовать Ref с хуками?",
      answer: `
**Использование Ref с хуками:**
- Хук \`useRef\` предоставляет доступ к Ref в функциональных компонентах.

**Пример:**
\`\`\`javascript
function Timer() {
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      console.log('Timer tick');
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return <p>Check the console for timer ticks.</p>;
}
\`\`\`
`,
    },
    {
      id: 102735,
      question: "Как очистить Ref?",
      answer: `
**Очистка Ref:**
- Просто установите \`current\` свойство Ref в \`null\`.

**Пример:**
\`\`\`javascript
function ClearRef() {
  const ref = useRef(null);

  const clear = () => {
    ref.current = null;
    console.log('Ref cleared:', ref.current);
  };

  return (
    <div>
      <button onClick={clear}>Clear Ref</button>
    </div>
  );
}
\`\`\`
`,
    },
  ],
};
