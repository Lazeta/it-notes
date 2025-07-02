export const testFunctionalComponents = {
  id: 102875,
  title: "Functional Components (функциональные компоненты)",
  questions: [
    {
      id: 102876,
      question: "Что такое функциональные компоненты в React?",
      answer: `
**Функциональные компоненты:**
- Это простые JavaScript-функции, которые принимают пропсы и возвращают JSX.
- Они легковесны и проще в написании по сравнению с классовыми компонентами.

**Пример:**
\`\`\`javascript
function Greeting({ name }) {
  return <p>Hello, {name}!</p>;
}
\`\`\`
`,
    },
    {
      id: 102877,
      question: "Как использовать состояние в функциональных компонентах?",
      answer: `
**Использование состояния:**
- Используйте хук \`useState\`.

**Пример:**
\`\`\`javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102878,
      question: "Как выполнять побочные эффекты в функциональных компонентах?",
      answer: `
**Побочные эффекты:**
- Используйте хук \`useEffect\`.

**Пример:**
\`\`\`javascript
import { useEffect, useState } from 'react';

function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data ')
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}
\`\`\`
`,
    },
    {
      id: 102879,
      question: "Чем функциональные компоненты отличаются от классовых?",
      answer: `
**Отличия:**
1. **Синтаксис:**
   - Функциональные компоненты — это функции.
   - Классовые компоненты — это классы, наследуемые от \`React.Component\`.
2. **Состояние:**
   - В функциональных компонентах используется хук \`useState\`.
   - В классовых компонентах используется \`this.state\`.
3. **Жизненный цикл:**
   - В функциональных компонентах используются хуки, такие как \`useEffect\`.
   - В классовых компонентах используются методы жизненного цикла (\`componentDidMount\`, \`componentDidUpdate\` и т.д.).
4. **Производительность:**
   - Функциональные компоненты легче для оптимизации и понимания.

**Пример функционального компонента:**
\`\`\`javascript
function Example() {
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log('Component mounted or updated');
  }, [value]);

  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
}
\`\`\`

**Пример классового компонента:**
\`\`\`javascript
class Example extends React.Component {
  state = { value: '' };

  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate() {
    console.log('Component updated');
  }

  render() {
    return (
      <input
        value={this.state.value}
        onChange={(e) => this.setState({ value: e.target.value })}
      />
    );
  }
}
\`\`\`
`,
    },
    {
      id: 102880,
      question: "Как передать пропсы в функциональный компонент?",
      answer: `
**Передача пропсов:**
- Пропсы передаются как аргумент функции.

**Пример:**
\`\`\`javascript
function Greeting({ name }) {
  return <p>Hello, {name}!</p>;
}

function App() {
  return <Greeting name="Alice" />;
}
\`\`\`
`,
    },
    {
      id: 102881,
      question: "Как использовать контекст в функциональных компонентах?",
      answer: `
**Использование контекста:**
- Используйте хук \`useContext\`.

**Пример:**
\`\`\`javascript
import { createContext, useContext } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>;
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button style={{ background: theme }}>Themed Button</button>;
}

function App() {
  return (
    <ThemeProvider>
      <ThemedButton />
    </ThemeProvider>
  );
}
\`\`\`
`,
    },
    {
      id: 102882,
      question:
        "Как создать пользовательский хук для функционального компонента?",
      answer: `
**Создание пользовательского хука:**
- Пользовательские хуки — это функции, начинающиеся с префикса \`use\`.

**Пример:**
\`\`\`javascript
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setData(result));
  }, [url]);

  return data;
}

function App() {
  const data = useFetch('https://api.example.com/data ');

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}
\`\`\`
`,
    },
    {
      id: 102883,
      question: "Как оптимизировать функциональные компоненты?",
      answer: `
**Оптимизация:**
1. **Мемоизация значений:**
   - Используйте \`useMemo\` для кэширования вычислений.
2. **Мемоизация функций:**
   - Используйте \`useCallback\` для предотвращения лишних перерисовок.
3. **Разделение компонентов:**
   - Разделяйте логику на маленькие переиспользуемые компоненты.

**Пример мемоизации:**
\`\`\`javascript
import { useMemo, useCallback } from 'react';

function ExpensiveComponent({ data }) {
  const processedData = useMemo(() => {
    return data.map(item => item * 2);
  }, [data]);

  const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []);

  return (
    <div>
      {processedData.join(', ')}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102884,
      question: "Как работать с рефами в функциональных компонентах?",
      answer: `
**Работа с рефами:**
- Используйте хук \`useRef\`.

**Пример:**
\`\`\`javascript
import { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102885,
      question: "Как обрабатывать события в функциональных компонентах?",
      answer: `
**Обработка событий:**
- Передайте функцию в качестве обработчика события.

**Пример:**
\`\`\`javascript
function ClickHandler() {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return <button onClick={handleClick}>Click me</button>;
}
\`\`\`
`,
    },
    {
      id: 102886,
      question: "Какие преимущества у функциональных компонентов?",
      answer: `
**Преимущества:**
1. **Легкость использования:**
   - Проще писать и читать.
2. **Хуки:**
   - Упрощают управление состоянием и побочными эффектами.
3. **Производительность:**
   - Легче оптимизировать с помощью мемоизации.
4. **Переиспользование логики:**
   - Пользовательские хуки позволяют выносить логику в отдельные функции.

**Пример:**
\`\`\`javascript
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
\`\`\`
`,
    },
  ],
};
