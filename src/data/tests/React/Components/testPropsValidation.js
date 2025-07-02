export const testPropsValidation = {
  id: 102775,
  title: "Props Validation (валидация пропсов)",
  questions: [
    {
      id: 102776,
      question: "Зачем нужна валидация пропсов в React?",
      answer: `
**Зачем нужна валидация пропсов:**
- Валидация пропсов помогает предотвратить ошибки, связанные с некорректными или отсутствующими данными.
- Улучшает читаемость кода и документацию компонентов.
- Позволяет разработчикам понимать, какие данные ожидаются в компоненте.

**Пример:**
\`\`\`javascript
import PropTypes from 'prop-types';

function Greeting({ name }) {
  return <p>Hello, {name}!</p>;
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};
\`\`\`
`,
    },
    {
      id: 102777,
      question: "Как использовать PropTypes для валидации пропсов?",
      answer: `
**Использование PropTypes:**
- \`PropTypes\` — это библиотека для проверки типов данных пропсов.
- Если тип данных не соответствует ожидаемому, React выведет предупреждение в консоль.

**Пример:**
\`\`\`javascript
import PropTypes from 'prop-types';

function UserProfile({ name, age, isAdmin }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Admin: {isAdmin ? 'Yes' : 'No'}</p>
    </div>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isAdmin: PropTypes.bool,
};
\`\`\`
`,
    },
    {
      id: 102778,
      question: "Какие типы данных можно валидировать с помощью PropTypes?",
      answer: `
**Типы данных для валидации:**
1. **Примитивные типы:**
   - \`PropTypes.string\`
   - \`PropTypes.number\`
   - \`PropTypes.bool\`
   - \`PropTypes.array\`
   - \`PropTypes.object\`
   - \`PropTypes.func\`
   - \`PropTypes.symbol\`

2. **Специальные типы:**
   - \`PropTypes.any\` — любое значение.
   - \`PropTypes.node\` — что угодно, что может быть отрендерено (строки, числа, элементы React).
   - \`PropTypes.element\` — один React-элемент.
   - \`PropTypes.instanceOf(SomeClass)\` — экземпляр определенного класса.

3. **Коллекции:**
   - \`PropTypes.arrayOf(PropTypes.number)\` — массив чисел.
   - \`PropTypes.objectOf(PropTypes.string)\` — объект, где значения — строки.

4. **Формы:**
   - \`PropTypes.shape({ ... })\` — объект с определенной формой.
   - \`PropTypes.exact({ ... })\` — строгая проверка формы объекта.

**Пример:**
\`\`\`javascript
const Component = ({ user }) => <div>{user.name}</div>;

Component.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
  }),
};
\`\`\`
`,
    },
    {
      id: 102779,
      question: "Что делать, если пропс является обязательным?",
      answer: `
**Обязательные пропсы:**
- Добавьте \`isRequired\` к типу данных.

**Пример:**
\`\`\`javascript
function Greeting({ name }) {
  return <p>Hello, {name}!</p>;
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};
\`\`\`
`,
    },
    {
      id: 102780,
      question: "Как задать значения по умолчанию для пропсов?",
      answer: `
**Значения по умолчанию:**
- Используйте \`defaultProps\`.

**Пример:**
\`\`\`javascript
function Greeting({ name }) {
  return <p>Hello, {name}!</p>;
}

Greeting.defaultProps = {
  name: 'Guest',
};

Greeting.propTypes = {
  name: PropTypes.string,
};
\`\`\`
`,
    },
    {
      id: 102781,
      question: "Можно ли валидировать пользовательские типы данных?",
      answer: `
**Валидация пользовательских типов:**
- Используйте \`PropTypes.oneOf\`, \`PropTypes.oneOfType\` или \`PropTypes.instanceOf\`.

**Пример:**
\`\`\`javascript
function Status({ status }) {
  return <p>Status: {status}</p>;
}

Status.propTypes = {
  status: PropTypes.oneOf(['active', 'inactive']).isRequired,
};
\`\`\`
`,
    },
    {
      id: 102782,
      question: "Как проверить, является ли пропс функцией?",
      answer: `
**Проверка функций:**
- Используйте \`PropTypes.func\`.

**Пример:**
\`\`\`javascript
function Button({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
\`\`\`
`,
    },
    {
      id: 102783,
      question: "Что такое TypeScript и как он заменяет PropTypes?",
      answer: `
**TypeScript:**
- Это язык программирования, который добавляет статическую типизацию в JavaScript.
- TypeScript заменяет \`PropTypes\` за счет явного указания типов данных.

**Пример:**
\`\`\`typescript
type User = {
  name: string;
  age: number;
  isAdmin?: boolean; // Необязательный пропс
};

const UserProfile: React.FC<User> = ({ name, age, isAdmin }) => (
  <div>
    <p>Name: {name}</p>
    <p>Age: {age}</p>
    <p>Admin: {isAdmin ? 'Yes' : 'No'}</p>
  </div>
);
\`\`\`
`,
    },
    {
      id: 102784,
      question: "Как обрабатывать ошибки при невалидных пропсах?",
      answer: `
**Обработка ошибок:**
- React выводит предупреждения в консоль при невалидных пропсах.
- Для более строгой проверки используйте TypeScript.

**Пример:**
\`\`\`javascript
function Greeting({ name }) {
  if (typeof name !== 'string') {
    console.error('Invalid prop type for "name". Expected a string.');
  }
  return <p>Hello, {name}!</p>;
}
\`\`\`
`,
    },
    {
      id: 102785,
      question: "Как проверить, является ли пропс массивом объектов?",
      answer: `
**Проверка массива объектов:**
- Используйте \`PropTypes.arrayOf\` с \`PropTypes.shape\`.

**Пример:**
\`\`\`javascript
function UserList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
\`\`\`
`,
    },
  ],
};
