export const testProps = {
  id: 101200,
  title: "Props (пропсы)",
  questions: [
    {
      id: 101201,
      question: "Что такое props в React?",
      answer: `
      **Props (пропсы):**
      - Это объект, который используется для передачи данных от родительского компонента к дочернему.
      - Props являются неизменяемыми (read-only), то есть их нельзя изменять внутри дочернего компонента.

      **Пример:**
      \`\`\`javascript
      function Greeting(props) {
        return <h1>Привет, {props.name}!</h1>;
      }

      function App() {
        return <Greeting name="Алиса" />;
      }
      \`\`\`
      `,
    },
    {
      id: 101202,
      question: "Как передать пропсы в компонент?",
      answer: `
      **Передача пропсов:**
      - Пропсы передаются как атрибуты HTML-элементов.

      **Пример:**
      \`\`\`javascript
      function Button(props) {
        return <button>{props.label}</button>;
      }

      function App() {
        return <Button label="Нажми меня" />;
      }
      \`\`\`
      `,
    },
    {
      id: 101203,
      question: "Можно ли передавать функции через props?",
      answer: `
      **Передача функций:**
      - Да, функции можно передавать через props для обработки событий или выполнения логики.

      **Пример:**
      \`\`\`javascript
      function Button({ onClick, label }) {
        return <button onClick={onClick}>{label}</button>;
      }

      function App() {
        const handleClick = () => alert('Кнопка нажата!');
        return <Button label="Нажми меня" onClick={handleClick} />;
      }
      \`\`\`
      `,
    },
    {
      id: 101204,
      question: "Что такое defaultProps?",
      answer: `
      **defaultProps:**
      - Это свойство компонента, которое определяет значения по умолчанию для пропсов, если они не переданы.

      **Пример:**
      \`\`\`javascript
      function Greeting(props) {
        return <h1>Привет, {props.name}!</h1>;
      }

      Greeting.defaultProps = {
        name: 'Гость',
      };

      function App() {
        return (
          <>
            <Greeting /> {/* Выведет: 'Привет, Гость!' */}
            <Greeting name="Алиса" /> {/* Выведет: 'Привет, Алиса!' */}
          </>
        );
      }
      \`\`\`
      `,
    },
    {
      id: 101205,
      question: "Как проверить типы пропсов?",
      answer: `
      **PropTypes:**
      - Это библиотека для проверки типов пропсов. Помогает находить ошибки на этапе разработки.

      **Пример:**
      \`\`\`javascript
      import PropTypes from 'prop-types';

      function Greeting({ name }) {
        return <h1>Привет, {name}!</h1>;
      }

      Greeting.propTypes = {
        name: PropTypes.string.isRequired,
      };

      function App() {
        return <Greeting name="Алиса" />;
      }
      \`\`\`
      `,
    },
    {
      id: 101206,
      question: "Что такое children в props?",
      answer: `
      **children:**
      - Это специальный пропс, который позволяет передавать содержимое между открывающим и закрывающим тегами компонента.

      **Пример:**
      \`\`\`javascript
      function Card({ children }) {
        return <div className="card">{children}</div>;
      }

      function App() {
        return (
          <Card>
            <h1>Заголовок</h1>
            <p>Текст внутри карточки.</p>
          </Card>
        );
      }
      \`\`\`
      `,
    },
    {
      id: 101207,
      question: "Как использовать деструктуризацию props?",
      answer: `
      **Деструктуризация props:**
      - Упрощает доступ к значениям пропсов, извлекая их напрямую в параметры функции.

      **Пример:**
      \`\`\`javascript
      function Greeting({ name, age }) {
        return <h1>Привет, {name}! Тебе {age} лет.</h1>;
      }

      function App() {
        return <Greeting name="Алиса" age={25} />;
      }
      \`\`\`
      `,
    },
    {
      id: 101208,
      question: "Можно ли передавать объекты через props?",
      answer: `
      **Передача объектов:**
      - Да, объекты можно передавать через props для передачи сложных данных.

      **Пример:**
      \`\`\`javascript
      function UserInfo({ user }) {
        return (
          <div>
            <p>Имя: {user.name}</p>
            <p>Возраст: {user.age}</p>
          </div>
        );
      }

      function App() {
        const user = { name: 'Алиса', age: 25 };
        return <UserInfo user={user} />;
      }
      \`\`\`
      `,
    },
    {
      id: 101209,
      question: "Как работают defaultProps с деструктуризацией?",
      answer: `
      **defaultProps с деструктуризацией:**
      - Значения по умолчанию можно задать как в \`defaultProps\`, так и через параметры функции.

      **Пример:**
      \`\`\`javascript
      function Greeting({ name = 'Гость' }) {
        return <h1>Привет, {name}!</h1>;
      }

      Greeting.defaultProps = {
        name: 'Пользователь',
      };

      function App() {
        return (
          <>
            <Greeting /> {/* Выведет: 'Привет, Пользователь!' */}
            <Greeting name="Алиса" /> {/* Выведет: 'Привет, Алиса!' */}
          </>
        );
      }
      \`\`\`
      `,
    },
    {
      id: 101210,
      question: "Как работает переопределение пропсов?",
      answer: `
      **Переопределение пропсов:**
      - Если пропс передается явно, он переопределяет значение по умолчанию (\`defaultProps\`).

      **Пример:**
      \`\`\`javascript
      function Greeting({ name }) {
        return <h1>Привет, {name}!</h1>;
      }

      Greeting.defaultProps = {
        name: 'Гость',
      };

      function App() {
        return (
          <>
            <Greeting /> {/* Выведет: 'Привет, Гость!' */}
            <Greeting name="Алиса" /> {/* Выведет: 'Привет, Алиса!' */}
          </>
        );
      }
      \`\`\`
      `,
    },
  ],
};
