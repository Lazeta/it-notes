export const Props = {
  id: 225,
  title: "Props (Пропсы)",
  children: [
    {
      title: "Что такое props?",
      type: "text",
      description: `
        <p><strong>Props</strong> (сокращение от <em>properties</em>) — это объект, который содержит данные, передаваемые от родительского компонента к дочернему. Пропсы являются неизменяемыми (<em>immutable</em>), то есть их нельзя изменять внутри дочернего компонента.</p>
        <p>Основные характеристики:</p>
        <ul>
          <li>Передаются от родителя к потомку.</li>
          <li>Неизменяемы (только для чтения).</li>
          <li>Могут содержать любые данные: строки, числа, объекты, функции и т.д.</li>
        </ul>
      `,
    },
    {
      title: "Синтаксис",
      type: "text",
      description: `
        <pre><code>// Родительский компонент
function ParentComponent() {
  return <ChildComponent name="Alice" age={30} />;
}

// Дочерний компонент
function ChildComponent(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}</code></pre>
      `,
    },
    {
      title: "Деструктуризация props",
      type: "text",
      description: `
        <p>Для удобства работы с пропсами можно использовать деструктуризацию. Это делает код более читаемым.</p>
      `,
      code: `
// Без деструктуризации
function ChildComponent(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

// С деструктуризацией
function ChildComponent({ name, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
      `,
    },
    {
      title: "Передача функций через props",
      type: "text",
      description: `
        <p>Пропсы могут содержать функции, что позволяет родительскому компоненту управлять поведением дочернего компонента.</p>
      `,
      code: `
// Родительский компонент
function ParentComponent() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return <ChildComponent onClick={handleClick} />;
}

// Дочерний компонент
function ChildComponent({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}
      `,
    },
    {
      title: "Default Props",
      type: "text",
      description: `
        <p>Если пропсы не переданы, можно задать значения по умолчанию с помощью <code>defaultProps</code>.</p>
      `,
      code: `
function Greeting(props) {
  return <p>Hello, {props.name}!</p>;
}

Greeting.defaultProps = {
  name: 'Guest'
};

// Использование
function App() {
  return (
    <>
      <Greeting name="Alice" /> <!-- Выведет: Hello, Alice! -->
      <Greeting /> <!-- Выведет: Hello, Guest! -->
    </>
  );
}
      `,
    },
    {
      title: "PropTypes",
      type: "text",
      description: `
        <p><strong>PropTypes</strong> — это библиотека для проверки типов данных, передаваемых через props. Она помогает избежать ошибок и обеспечивает корректность данных.</p>
      `,
      code: `
import PropTypes from 'prop-types';

function Greeting({ name, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired, // Обязательная строка
  age: PropTypes.number               // Число (необязательное)
};

// Использование
function App() {
  return <Greeting name="Alice" age={30} />;
}
      `,
    },
    {
      title: "Children (Дети)",
      type: "text",
      description: `
        <p><strong>children</strong> — это специальный проп, который позволяет передавать содержимое между открывающим и закрывающим тегом компонента.</p>
      `,
      code: `
function Card({ children }) {
  return <div className="card">{children}</div>;
}

// Использование
function App() {
  return (
    <Card>
      <h1>Title</h1>
      <p>This is some content inside the card.</p>
    </Card>
  );
}
      `,
    },
    {
      title: "Лучшие практики",
      type: "text",
      description: `
        <ul>
          <li><strong>Используйте деструктуризацию:</strong> Это делает код более читаемым.</li>
          <li><strong>Задавайте defaultProps:</strong> Это помогает избежать ошибок при отсутствии пропсов.</li>
          <li><strong>Проверяйте типы с PropTypes:</strong> Это особенно важно для больших проектов.</li>
          <li><strong>Избегайте мутации props:</strong> Пропсы должны быть неизменяемыми.</li>
        </ul>
      `,
    },
    {
      title: "Частые ошибки",
      type: "text",
      description: `
        <p><strong>1. Мутация props:</strong></p>
        <pre><code>// Плохо: изменение props напрямую
function ChildComponent({ data }) {
  data.value = 'new value'; // Изменение props запрещено
}

// Лучше: создайте копию данных
function ChildComponent({ data }) {
  const newData = { ...data, value: 'new value' };
  return <p>{newData.value}</p>;
}</code></pre>

        <p><strong>2. Забытая проверка типов:</strong></p>
        <pre><code>// Плохо: отсутствие проверки типов
function Greeting({ name }) {
  return <p>Hello, {name}!</p>;
}

// Лучше: используйте PropTypes
Greeting.propTypes = {
  name: PropTypes.string.isRequired
};</code></pre>
      `,
    },
    {
      title: "Продвинутые паттерны",
      type: "text",
      description: `
        <p><strong>1. Render Props:</strong></p>
        <pre><code>function DataProvider({ render }) {
  const data = { name: 'Alice', age: 30 };
  return render(data);
}

function App() {
  return (
    <DataProvider render={(data) => (
      <div>
        <p>Name: {data.name}</p>
        <p>Age: {data.age}</p>
      </div>
    )} />
  );
}</code></pre>

        <p><strong>2. Compound Components:</strong></p>
        <pre><code>const Tab = ({ children }) => <div>{children}</div>;

Tab.Header = ({ children }) => <h1>{children}</h1>;
Tab.Content = ({ children }) => <p>{children}</p>;

function App() {
  return (
    <Tab>
      <Tab.Header>Title</Tab.Header>
      <Tab.Content>Content</Tab.Content>
    </Tab>
  );
}</code></pre>
      `,
    },
  ],
};
