export const testContext = {
  id: 100975,
  title: "Context (контекст)",
  questions: [
    {
      id: 100976,
      question: "Что такое Context в React?",
      answer: `
      **Context** — это механизм в React, который позволяет передавать данные через дерево компонентов без необходимости передавать пропсы на каждом уровне.
      - Используется для глобальных данных, таких как темы, аутентификация или локализация.

      **Пример создания контекста:**
      \`\`\`javascript
      import React from 'react';

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
    {
      id: 100977,
      question: "Как создать контекст в React?",
      answer: `
      **Создание контекста:**
      - Используйте \`React.createContext(defaultValue)\`.
      - \`defaultValue\` используется, если компонент не обернут в провайдер.

      **Пример:**
      \`\`\`javascript
      const MyContext = React.createContext('default value');
      \`\`\`

      **Использование провайдера:**
      \`\`\`javascript
      <MyContext.Provider value={/* значение */}>
        {/* Дочерние компоненты */}
      </MyContext.Provider>
      \`\`\`
      `,
    },
    {
      id: 100978,
      question: "Как использовать контекст в функциональных компонентах?",
      answer: `
      **Использование контекста:**
      - В функциональных компонентах используйте хук \`useContext\`.

      **Пример:**
      \`\`\`javascript
      import React, { useContext } from 'react';

      const ThemeContext = React.createContext('light');

      function ThemedButton() {
        const theme = useContext(ThemeContext);
        return <button style={{ background: theme }}>Кнопка</button>;
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
      id: 100979,
      question: "Как использовать контекст в классовых компонентах?",
      answer: `
      **Использование контекста:**
      - В классовых компонентах используйте \`Context.Consumer\` или \`this.context\`.

      **Пример с \`Consumer\`:**
      \`\`\`javascript
      const ThemeContext = React.createContext('light');

      class ThemedButton extends React.Component {
        render() {
          return (
            <ThemeContext.Consumer>
              {(theme) => <button style={{ background: theme }}>Кнопка</button>}
            </ThemeContext.Consumer>
          );
        }
      }
      \`\`\`

      **Пример с \`this.context\`:**
      \`\`\`javascript
      const ThemeContext = React.createContext('light');

      class ThemedButton extends React.Component {
        static contextType = ThemeContext;
        render() {
          return <button style={{ background: this.context }}>Кнопка</button>;
        }
      }
      \`\`\`
      `,
    },
    {
      id: 100980,
      question: "Зачем нужен Context?",
      answer: `
      **Цели использования:**
      1. **Глобальные данные:**
         - Передача данных, которые нужны во многих компонентах (например, темы, пользовательские данные).
      2. **Упрощение кода:**
         - Избавление от необходимости передавать пропсы через множество уровней.
      3. **Динамические значения:**
         - Возможность обновлять значения контекста с помощью состояния.

      **Пример:**
      \`\`\`javascript
      const UserContext = React.createContext();

      function App() {
        const [user, setUser] = React.useState('Guest');
        return (
          <UserContext.Provider value={user}>
            <div>
              <Profile />
              <button onClick={() => setUser('Admin')}>Стать админом</button>
            </div>
          </UserContext.Provider>
        );
      }

      function Profile() {
        const user = React.useContext(UserContext);
        return <p>Пользователь: {user}</p>;
      }
      \`\`\`
      `,
    },
    {
      id: 100981,
      question: "Как обновить значение контекста?",
      answer: `
      **Обновление значения:**
      - Значение контекста можно обновить с помощью состояния (\`useState\`).

      **Пример:**
      \`\`\`javascript
      const ThemeContext = React.createContext();

      function App() {
        const [theme, setTheme] = React.useState('light');

        return (
          <ThemeContext.Provider value={theme}>
            <Toolbar />
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
              Сменить тему
            </button>
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
    {
      id: 100982,
      question: "Какие ограничения у Context?",
      answer: `
      **Ограничения:**
      1. **Перерисовка компонентов:**
         - Обновление контекста может вызвать перерисовку всех подписанных компонентов.
      2. **Сложность управления:**
         - При большом количестве контекстов может стать сложно управлять состоянием.
      3. **Необходимость провайдера:**
         - Если компонент не обернут в провайдер, он использует значение по умолчанию.

      **Решение:**
      - Используйте контекст только для глобальных данных.
      - Для сложного состояния рассмотрите использование сторонних библиотек (например, Redux).
      `,
    },
    {
      id: 100983,
      question: "Можно ли использовать несколько контекстов?",
      answer: `
      **Использование нескольких контекстов:**
      - Да, можно создавать и использовать несколько контекстов.

      **Пример:**
      \`\`\`javascript
      const ThemeContext = React.createContext('light');
      const UserContext = React.createContext('Guest');

      function App() {
        return (
          <ThemeContext.Provider value="dark">
            <UserContext.Provider value="Alice">
              <Layout />
            </UserContext.Provider>
          </ThemeContext.Provider>
        );
      }

      function Layout() {
        return (
          <div>
            <Sidebar />
            <Content />
          </div>
        );
      }

      function Sidebar() {
        const theme = React.useContext(ThemeContext);
        return <div style={{ background: theme }}>Sidebar</div>;
      }

      function Content() {
        const user = React.useContext(UserContext);
        return <p>Пользователь: {user}</p>;
      }
      \`\`\`
      `,
    },
    {
      id: 100984,
      question: "Что такое Consumer в контексте?",
      answer: `
      **Consumer:**
      - Компонент, который подписывается на изменения контекста.
      - Используется в классовых компонентах.

      **Пример:**
      \`\`\`javascript
      const ThemeContext = React.createContext('light');

      class ThemedButton extends React.Component {
        render() {
          return (
            <ThemeContext.Consumer>
              {(theme) => <button style={{ background: theme }}>Кнопка</button>}
            </ThemeContext.Consumer>
          );
        }
      }
      \`\`\`
      `,
    },
    {
      id: 100985,
      question: "Что такое Provider в контексте?",
      answer: `
      **Provider:**
      - Компонент, который предоставляет значение контекста своим дочерним компонентам.
      - Значение передается через пропс \`value\`.

      **Пример:**
      \`\`\`javascript
      const ThemeContext = React.createContext('light');

      function App() {
        return (
          <ThemeContext.Provider value="dark">
            <ThemedButton />
          </ThemeContext.Provider>
        );
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
