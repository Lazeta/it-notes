export const testHOCconnect = {
  id: 103350,
  title: "Higher-Order Components and connect (HOC и connect)",
  questions: [
    {
      id: 103351,
      question: "Что такое Higher-Order Component (HOC)?",
      answer: `
**Higher-Order Component (HOC):**
- Это паттерн в React, который позволяет повторно использовать логику компонентов.
- HOC — это функция, которая принимает компонент и возвращает новый компонент с дополнительными свойствами или поведением.

**Пример:**
\`\`\`javascript
function withLogging(Component) {
  return function (props) {
    console.log('Component rendered:', Component.name);
    return <Component {...props} />;
  };
}

const Button = (props) => <button>{props.label}</button>;
const LoggedButton = withLogging(Button);

// Использование:
<LoggedButton label="Click me" />;
\`\`\`
`,
    },
    {
      id: 103352,
      question: "Как работает функция connect в React-Redux?",
      answer: `
**Функция connect:**
- \`connect\` используется для подключения компонентов React к Redux store.
- Она создает новый компонент, который подписывается на изменения состояния Redux и передает данные в виде пропсов.

**Синтаксис:**
\`\`\`javascript
connect(mapStateToProps, mapDispatchToProps)(Component);
\`\`\`

**Пример:**
\`\`\`javascript
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
});

const Counter = ({ counter, increment }) => (
  <div>
    <p>Count: {counter}</p>
    <button onClick={increment}>Increment</button>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
\`\`\`
`,
    },
    {
      id: 103353,
      question: "Что делает mapStateToProps?",
      answer: `
**mapStateToProps:**
- Функция, которая извлекает данные из Redux store и передает их в компонент в виде пропсов.
- Вызывается каждый раз, когда состояние Redux изменяется.

**Пример:**
\`\`\`javascript
const mapStateToProps = (state) => ({
  user: state.user,
  isLoading: state.isLoading,
});
\`\`\`
`,
    },
    {
      id: 103354,
      question: "Что делает mapDispatchToProps?",
      answer: `
**mapDispatchToProps:**
- Функция, которая предоставляет доступ к действиям (actions) Redux через пропсы компонента.
- Позволяет отправлять действия в Redux store.

**Пример:**
\`\`\`javascript
const mapDispatchToProps = (dispatch) => ({
  login: (credentials) => dispatch(loginAction(credentials)),
  logout: () => dispatch(logoutAction()),
});
\`\`\`
`,
    },
    {
      id: 103355,
      question: "Какие аргументы принимает функция connect?",
      answer: `
**Аргументы connect:**
1. **mapStateToProps:** Преобразует состояние Redux в пропсы.
2. **mapDispatchToProps:** Преобразует диспетчеризацию действий в пропсы.
3. **mergeProps (опционально):** Объединяет пропсы из \`mapStateToProps\`, \`mapDispatchToProps\` и собственные пропсы компонента.
4. **options (опционально):** Дополнительные настройки (например, \`pure\` для оптимизации).

**Пример:**
\`\`\`javascript
connect(mapStateToProps, mapDispatchToProps, mergeProps, options);
\`\`\`
`,
    },
    {
      id: 103356,
      question: "Зачем нужны HOC в React?",
      answer: `
**Назначение HOC:**
1. **Повторное использование логики:**
   - Позволяет вынести общую логику в отдельную функцию.
2. **Расширение функциональности:**
   - Добавляет новые свойства или поведение к компоненту.
3. **Интеграция с библиотеками:**
   - Например, \`connect\` для работы с Redux.

**Пример:**
\`\`\`javascript
function withAuth(Component) {
  return function (props) {
    const isAuthenticated = checkAuth();
    if (!isAuthenticated) return <Redirect to="/login" />;
    return <Component {...props} />;
  };
}
\`\`\`
`,
    },
    {
      id: 103357,
      question: "Как тестировать компоненты, обернутые в HOC?",
      answer: `
**Тестирование HOC:**
- Тестируйте исходный компонент и результат после применения HOC.

**Пример:**
\`\`\`javascript
import { render } from '@testing-library/react';
import { withLogging } from './withLogging';
import Button from './Button';

test('renders logged button', () => {
  const LoggedButton = withLogging(Button);
  const { getByText } = render(<LoggedButton label="Click me" />);
  expect(getByText('Click me')).toBeInTheDocument();
});
\`\`\`
`,
    },
    {
      id: 103358,
      question: "Какие есть альтернативы HOC?",
      answer: `
**Альтернативы:**
1. **Render Props:**
   - Передача функции в качестве пропса для рендеринга.
2. **React Hooks:**
   - Использование хуков, таких как \`useSelector\` и \`useDispatch\`, вместо \`connect\`.
3. **Context API:**
   - Прямое использование контекста для управления состоянием.

**Пример с Hooks:**
\`\`\`javascript
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {counter}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 103359,
      question: "Как работает оптимизация в connect (pure)?",
      answer: `
**Оптимизация:**
- По умолчанию \`connect\` создает "чистый" компонент (\`pure: true\`).
- Компонент перерисовывается только при изменении пропсов или состояния.

**Пример:**
\`\`\`javascript
connect(mapStateToProps, mapDispatchToProps, null, { pure: false });
// Отключает оптимизацию
\`\`\`
`,
    },
    {
      id: 103360,
      question: "Как передать дополнительные пропсы в компонент через connect?",
      answer: `
**Передача пропсов:**
- Все собственные пропсы автоматически передаются в обернутый компонент.

**Пример:**
\`\`\`javascript
const Button = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);

const ConnectedButton = connect(null, mapDispatchToProps)(Button);

// Использование:
<ConnectedButton label="Click me" />;
\`\`\`
`,
    },
  ],
};
