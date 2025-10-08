export const testLifecycleMethods = {
  id: 102850,
  title: "Lifecycle Methods (методы жизненного цикла)",
  questions: [
    {
      id: 102851,
      question: "Что такое методы жизненного цикла в React?",
      answer: `
**Методы жизненного цикла:**
- Это специальные методы, которые вызываются на определенных этапах существования компонента.
- Используются для управления состоянием, побочными эффектами и обновлениями.

**Основные этапы жизненного цикла:**
1. **Монтирование (Mounting):**
   - Компонент создается и добавляется в DOM.
2. **Обновление (Updating):**
   - Компонент обновляется при изменении состояния или пропсов.
3. **Размонтирование (Unmounting):**
   - Компонент удаляется из DOM.

**Пример:**
\`\`\`javascript
class Example extends React.Component {
  componentDidMount() {
    console.log('Компонент смонтирован');
  }

  render() {
    return <p>Пример жизненного цикла</p>;
  }
}
\`\`\`
`,
    },
    {
      id: 102852,
      question: "Какие методы относятся к этапу монтирования?",
      answer: `
**Методы монтирования:**
1. **constructor():**
   - Вызывается при создании компонента.
   - Используется для инициализации состояния.
2. **static getDerivedStateFromProps():**
   - Обновляет состояние на основе пропсов.
3. **render():**
   - Определяет, что отрендерить.
4. **componentDidMount():**
   - Вызывается после монтирования компонента.
   - Используется для API-запросов и подписок.

**Пример:**
\`\`\`javascript
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    fetch('https://api.example.com/data ')
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    return <div>{this.state.data ? JSON.stringify(this.state.data) : 'Loading...'}</div>;
  }
}
\`\`\`
`,
    },
    {
      id: 102853,
      question: "Какие методы относятся к этапу обновления?",
      answer: `
**Методы обновления:**
1. **static getDerivedStateFromProps():**
   - Обновляет состояние на основе новых пропсов.
2. **shouldComponentUpdate():**
   - Определяет, нужно ли перерисовывать компонент.
3. **render():**
   - Определяет, что отрендерить.
4. **getSnapshotBeforeUpdate():**
   - Сохраняет информацию перед обновлением DOM.
5. **componentDidUpdate():**
   - Вызывается после обновления компонента.

**Пример:**
\`\`\`javascript
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count % 2 === 0; // Перерисовка только при четном значении
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Предыдущее состояние:', prevState.count);
  }

  render() {
    return <p>Count: {this.state.count}</p>;
  }
}
\`\`\`
`,
    },
    {
      id: 102854,
      question: "Какие методы относятся к этапу размонтирования?",
      answer: `
**Методы размонтирования:**
1. **componentWillUnmount():**
   - Вызывается перед удалением компонента из DOM.
   - Используется для очистки (например, отмены подписок).

**Пример:**
\`\`\`javascript
class Timer extends React.Component {
  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(() => console.log('Tick'), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId); // Очистка таймера
  }

  render() {
    return <p>Таймер запущен</p>;
  }
}
\`\`\`
`,
    },
    {
      id: 102855,
      question: "Как заменить методы жизненного цикла с помощью хуков?",
      answer: `
**Замена методов жизненного цикла:**
1. **componentDidMount → useEffect с пустым массивом зависимостей:**
   - Запускается один раз после монтирования.
2. **componentDidUpdate → useEffect с зависимостями:**
   - Запускается при изменении указанных зависимостей.
3. **componentWillUnmount → функция очистки в useEffect:**
   - Выполняется перед размонтированием.

**Пример:**
\`\`\`javascript
import { useEffect, useState } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setCount((prev) => prev + 1), 1000);

    return () => clearInterval(intervalId); // Очистка
  }, []);

  return <p>Count: {count}</p>;
}
\`\`\`
`,
    },
    {
      id: 102856,
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
      id: 102857,
      question: "Что такое getSnapshotBeforeUpdate и как он работает?",
      answer: `
**getSnapshotBeforeUpdate:**
- Вызывается перед обновлением DOM.
- Возвращает значение (snapshot), которое передается в \`componentDidUpdate\`.

**Пример:**
\`\`\`javascript
class ScrollingList extends React.Component {
  listRef = React.createRef();

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevProps.items.length < this.props.items.length) {
      return this.listRef.current.scrollHeight; // Сохраняем высоту
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      this.listRef.current.scrollTop += this.listRef.current.scrollHeight - snapshot;
    }
  }

  render() {
    return (
      <div ref={this.listRef} style={{ overflow: 'auto', height: '100px' }}>
        {this.props.items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    );
  }
}
\`\`\`
`,
    },
    {
      id: 102858,
      question: "Как использовать componentDidCatch для обработки ошибок?",
      answer: `
**componentDidCatch:**
- Метод для обработки ошибок в дочерних компонентах.
- Позволяет отображать резервный UI.

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
      id: 102859,
      question:
        "Что такое PureComponent и как он связан с shouldComponentUpdate?",
      answer: `
**PureComponent:**
- Класс, который автоматически реализует поверхностное сравнение пропсов и состояния.
- Аналогично \`shouldComponentUpdate\`, но без необходимости ручного кода.

**Пример:**
\`\`\`javascript
class MyComponent extends React.PureComponent {
  render() {
    return <p>{this.props.value}</p>;
  }
}
\`\`\`
`,
    },
    {
      id: 102860,
      question:
        "Какие есть альтернативы shouldComponentUpdate в функциональных компонентах?",
      answer: `
**Альтернативы:**
1. **React.memo:**
   - Поверхностно сравнивает пропсы функционального компонента.
2. **useMemo:**
   - Кэширует значения для оптимизации.

**Пример React.memo:**
\`\`\`javascript
const MyComponent = React.memo(function MyComponent({ value }) {
  return <p>{value}</p>;
});
\`\`\`

**Пример useMemo:**
\`\`\`javascript
function ExpensiveComponent({ data }) {
  const processedData = useMemo(() => {
    return data.map(item => item * 2);
  }, [data]);

  return <div>{processedData.join(', ')}</div>;
}
\`\`\`
`,
    },
  ],
};
