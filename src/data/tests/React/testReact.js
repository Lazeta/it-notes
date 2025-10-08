export const testReact = {
  id: 101250,
  title: "React",
  questions: [
    {
      id: 101251,
      question: "Что такое React?",
      answer: `
      **React:**
      - Это JavaScript-библиотека для создания пользовательских интерфейсов.
      - Разработана Facebook (ныне Meta) и активно поддерживается сообществом.
      - Основная концепция — компонентный подход, где UI разбивается на независимые, переиспользуемые компоненты.

      **Основные особенности:**
      - Декларативный подход: описывает, как должен выглядеть интерфейс.
      - Однонаправленный поток данных: данные передаются от родительских компонентов к дочерним через props.
      - Виртуальный DOM: оптимизирует обновление интерфейса, минимизируя изменения в реальном DOM.

      **Пример простого компонента:**
      \`\`\`javascript
      function Greeting({ name }) {
        return <h1>Привет, {name}!</h1>;
      }

      function App() {
        return <Greeting name="Алиса" />;
      }
      \`\`\`
      `,
    },
    {
      id: 101252,
      question: "Что такое компонент в React?",
      answer: `
      **Компонент:**
      - Это независимая, переиспользуемая часть интерфейса.
      - Может быть функциональным или классовым.

      **Типы компонентов:**
      1. **Функциональные компоненты:**
         - Простые функции, которые возвращают JSX.
         \`\`\`javascript
         function Button({ label }) {
           return <button>{label}</button>;
         }
         \`\`\`

      2. **Классовые компоненты:**
         - Наследуются от \`React.Component\`.
         \`\`\`javascript
         class Counter extends React.Component {
           state = { count: 0 };

           increment = () => {
             this.setState({ count: this.state.count + 1 });
           };

           render() {
             return (
               <div>
                 <p>{this.state.count}</p>
                 <button onClick={this.increment}>Увеличить</button>
               </div>
             );
           }
         }
         \`\`\`
      `,
    },
    {
      id: 101253,
      question: "Что такое состояние (state) в React?",
      answer: `
      **State (состояние):**
      - Это объект, который хранит данные компонента, которые могут изменяться.
      - Изменение состояния вызывает перерисовку компонента.

      **Пример:**
      \`\`\`javascript
      function Counter() {
        const [count, setCount] = React.useState(0);

        return (
          <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Увеличить</button>
          </div>
        );
      }
      \`\`\`
      `,
    },
    {
      id: 101254,
      question: "Что такое пропсы (props)?",
      answer: `
      **Props (пропсы):**
      - Это объект, который используется для передачи данных от родительского компонента к дочернему.
      - Props являются неизменяемыми (read-only).

      **Пример:**
      \`\`\`javascript
      function Greeting({ name }) {
        return <h1>Привет, {name}!</h1>;
      }

      function App() {
        return <Greeting name="Алиса" />;
      }
      \`\`\`
      `,
    },
    {
      id: 101255,
      question: "Что такое хуки (hooks) в React?",
      answer: `
      **Хуки (hooks):**
      - Это функции, которые позволяют использовать состояние и другие возможности React в функциональных компонентах.
      - Появились в React 16.8.

      **Основные хуки:**
      1. **useState:**
         - Для управления состоянием.
         \`\`\`javascript
         const [count, setCount] = React.useState(0);
         \`\`\`

      2. **useEffect:**
         - Для выполнения побочных эффектов (например, запросы к API).
         \`\`\`javascript
         React.useEffect(() => {
           console.log('Компонент отрендерился');
         }, []);
         \`\`\`

      3. **useContext:**
         - Для работы с контекстом.
         \`\`\`javascript
         const value = React.useContext(MyContext);
         \`\`\`
      `,
    },
    {
      id: 101256,
      question: "Что такое Virtual DOM и как он работает?",
      answer: `
      **Virtual DOM:**
      - Это легковесное представление реального DOM.
      - React создает копию DOM в памяти и обновляет её при изменении состояния.
      - После этого React сравнивает новую версию Virtual DOM со старой (diffing algorithm) и обновляет только те части реального DOM, которые изменились.

      **Преимущества:**
      - Улучшает производительность за счет минимизации изменений в реальном DOM.
      - Упрощает работу с интерфейсом.
      `,
    },
    {
      id: 101257,
      question: "Что такое ключи (keys) в React?",
      answer: `
      **Keys (ключи):**
      - Это специальные атрибуты, которые помогают React идентифицировать элементы в списке.
      - Ключи должны быть уникальными среди соседних элементов.

      **Пример:**
      \`\`\`javascript
      const items = ['Яблоко', 'Банан', 'Вишня'];

      function App() {
        return (
          <ul>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        );
      }
      \`\`\`
      `,
    },
    {
      id: 101258,
      question: "Как работает жизненный цикл компонента?",
      answer: `
      **Жизненный цикл компонента:**
      - Определяет этапы существования компонента: монтирование, обновление и размонтирование.

      **Методы жизненного цикла (классовые компоненты):**
      1. **componentDidMount:**
         - Вызывается после первого рендера.
      2. **componentDidUpdate:**
         - Вызывается при каждом обновлении.
      3. **componentWillUnmount:**
         - Вызывается перед удалением компонента.

      **Хуки (функциональные компоненты):**
      - \`useEffect\` объединяет все три метода.
      \`\`\`javascript
      React.useEffect(() => {
        console.log('Component mounted or updated');

        return () => {
          console.log('Component will unmount');
        };
      }, []);
      \`\`\`
      `,
    },
    {
      id: 101259,
      question: "Что такое React Router и зачем он нужен?",
      answer: `
      **React Router:**
      - Это библиотека для маршрутизации в React-приложениях.
      - Позволяет создавать одностраничные приложения (SPA) с несколькими страницами.

      **Основные компоненты:**
      1. **BrowserRouter:**
         - Обертка для всего приложения.
      2. **Route:**
         - Определяет маршрут.
      3. **Link:**
         - Создает ссылку между страницами.

      **Пример:**
      \`\`\`javascript
      import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

      function App() {
        return (
          <BrowserRouter>
            <nav>
              <Link to="/">Главная</Link>
              <Link to="/about">О нас</Link>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </BrowserRouter>
        );
      }
      \`\`\`
      `,
    },
    {
      id: 101260,
      question: "Что такое контекст (context) в React?",
      answer: `
      **Context (контекст):**
      - Позволяет передавать данные через дерево компонентов без необходимости передавать props на каждом уровне.

      **Пример:**
      \`\`\`javascript
      const ThemeContext = React.createContext('light');

      function App() {
        return (
          <ThemeContext.Provider value="dark">
            <Toolbar />
          </ThemeContext.Provider>
        );
      }

      function Toolbar() {
        return <ThemedButton />;
      }

      function ThemedButton() {
        const theme = React.useContext(ThemeContext);
        return <button style={{ background: theme }}>Кнопка</button>;
      }
      \`\`\`
      `,
    },
  ],
};
