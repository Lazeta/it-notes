export const testClassComponents = {
  id: 102950,
  title: "Class Components (классовые компоненты)",
  questions: [
    {
      id: 102951,
      question: "Что такое классовые компоненты в React?",
      answer: `
**Классовые компоненты:**
- Это компоненты, созданные с использованием ES6-классов.
- Они наследуются от \`React.Component\` и содержат метод \`render()\`, который возвращает JSX.

**Пример:**
\`\`\`javascript
class Greeting extends React.Component {
  render() {
    return <p>Hello, {this.props.name}!</p>;
  }
}
\`\`\`
`,
    },
    {
      id: 102952,
      question: "Как использовать состояние в классовых компонентах?",
      answer: `
**Использование состояния:**
- Состояние хранится в свойстве \`state\`.
- Для обновления состояния используется метод \`this.setState()\`.

**Пример:**
\`\`\`javascript
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
\`\`\`
`,
    },
    {
      id: 102953,
      question: "Как передать пропсы в классовый компонент?",
      answer: `
**Передача пропсов:**
- Пропсы передаются как аргумент конструктора и доступны через \`this.props\`.

**Пример:**
\`\`\`javascript
class Greeting extends React.Component {
  render() {
    return <p>Hello, {this.props.name}!</p>;
  }
}

function App() {
  return <Greeting name="Alice" />;
}
\`\`\`
`,
    },
    {
      id: 102954,
      question:
        "Какие методы жизненного цикла существуют в классовых компонентах?",
      answer: `
**Методы жизненного цикла:**
1. **Монтирование:**
   - \`constructor()\`: Инициализация состояния.
   - \`componentDidMount()\`: Вызывается после монтирования компонента.
2. **Обновление:**
   - \`shouldComponentUpdate()\`: Определяет, нужно ли перерисовывать компонент.
   - \`componentDidUpdate()\`: Вызывается после обновления компонента.
3. **Размонтирование:**
   - \`componentWillUnmount()\`: Вызывается перед удалением компонента из DOM.

**Пример:**
\`\`\`javascript
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <p>Seconds: {this.state.seconds}</p>;
  }
}
\`\`\`
`,
    },
    {
      id: 102955,
      question: "Что такое shouldComponentUpdate и зачем он нужен?",
      answer: `
**shouldComponentUpdate:**
- Метод, который определяет, нужно ли перерисовывать компонент.
- Возвращает \`true\` (перерисовать) или \`false\` (не перерисовывать).

**Пример:**
\`\`\`javascript
class OptimizedComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.value !== this.props.value; // Перерисовка только при изменении props
  }

  render() {
    return <p>Value: {this.props.value}</p>;
  }
}
\`\`\`
`,
    },
    {
      id: 102956,
      question: "Как работают ошибки в классовых компонентах?",
      answer: `
**Обработка ошибок:**
- Метод \`componentDidCatch\` позволяет обрабатывать ошибки в дочерних компонентах.

**Пример:**
\`\`\`javascript
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error('Ошибка:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <p>Что-то пошло не так.</p>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <BrokenComponent />
    </ErrorBoundary>
  );
}
\`\`\`
`,
    },
    {
      id: 102957,
      question: "Чем классовые компоненты отличаются от функциональных?",
      answer: `
**Отличия:**
1. **Синтаксис:**
   - Классовые компоненты — это классы.
   - Функциональные компоненты — это функции.
2. **Состояние:**
   - В классовых компонентах используется \`this.state\`.
   - В функциональных компонентах используется хук \`useState\`.
3. **Жизненный цикл:**
   - В классовых компонентах используются методы жизненного цикла (\`componentDidMount\`, \`componentDidUpdate\` и т.д.).
   - В функциональных компонентах используются хуки (\`useEffect\`).
4. **Производительность:**
   - Функциональные компоненты легче для оптимизации.

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
`,
    },
    {
      id: 102958,
      question: "Как использовать контекст в классовых компонентах?",
      answer: `
**Использование контекста:**
- Используйте метод \`contextType\` или \`<Context.Consumer>\`.

**Пример с contextType:**
\`\`\`javascript
const ThemeContext = React.createContext();

class ThemedButton extends React.Component {
  static contextType = ThemeContext;

  render() {
    return <button style={{ background: this.context }}>Themed Button</button>;
  }
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}
\`\`\`

**Пример с Consumer:**
\`\`\`javascript
const ThemeContext = React.createContext();

class ThemedButton extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => <button style={{ background: theme }}>Themed Button</button>}
      </ThemeContext.Consumer>
    );
  }
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}
\`\`\`
`,
    },
    {
      id: 102959,
      question: "Какие есть недостатки у классовых компонентов?",
      answer: `
**Недостатки:**
1. **Сложность кода:**
   - Больше шаблонного кода по сравнению с функциональными компонентами.
2. **Оптимизация:**
   - Сложнее оптимизировать производительность.
3. **Хуки:**
   - Хуки недоступны в классовых компонентах.

**Пример сложного кода:**
\`\`\`javascript
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
\`\`\`
`,
    },
    {
      id: 102960,
      question: "Почему функциональные компоненты стали более популярными?",
      answer: `
**Причины популярности функциональных компонентов:**
1. **Хуки:**
   - Упрощают управление состоянием и побочными эффектами.
2. **Производительность:**
   - Легче оптимизировать с помощью мемоизации.
3. **Читаемость:**
   - Меньше шаблонного кода, проще читать и поддерживать.
4. **Переиспользование логики:**
   - Пользовательские хуки позволяют выносить логику в отдельные функции.

**Пример функционального компонента:**
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
