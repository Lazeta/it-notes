export const PureComponent = {
  id: 226,
  title: "PureComponent",
  children: [
    {
      title: "Что такое PureComponent?",
      type: "text",
      description: `
        <p><strong>PureComponent</strong> — это классовый компонент в React, который автоматически реализует метод <code>shouldComponentUpdate</code> с помощью поверхностного сравнения (<em>shallow comparison</em>) пропсов и состояния.</p>
        <p>Если пропсы или состояние не изменились (по результатам сравнения), компонент не будет перерисован, что помогает оптимизировать производительность.</p>
        <p>Основные характеристики:</p>
        <ul>
          <li>Поверхностное сравнение пропсов и состояния.</li>
          <li>Не требует ручной реализации <code>shouldComponentUpdate</code>.</li>
          <li>Подходит для простых компонентов без сложных структур данных.</li>
        </ul>
      `,
    },
    {
      title: "Синтаксис",
      type: "text",
      description: `
        <pre><code>import React, { PureComponent } from 'react';

class MyComponent extends PureComponent {
  render() {
    return <div>{this.props.value}</div>;
  }
}

// Использование
function App() {
  return <MyComponent value={42} />;
}</code></pre>
      `,
    },
    {
      title: "Как работает поверхностное сравнение?",
      type: "text",
      description: `
        <p><strong>Поверхностное сравнение</strong> означает, что React сравнивает только ссылки на объекты, массивы и примитивные значения:</p>
        <ul>
          <li><strong>Примитивы:</strong> Сравниваются по значению (например, <code>42 === 42</code>).</li>
          <li><strong>Объекты и массивы:</strong> Сравниваются по ссылке (например, <code>{ a: 1 } !== { a: 1 }</code>).</li>
        </ul>
        <p>Если ссылка не изменилась, компонент не будет перерисован.</p>
      `,
      code: `
const obj1 = { a: 1 };
const obj2 = { a: 1 };

console.log(obj1 === obj2); // false (разные ссылки)
      `,
    },
    {
      title: "Когда использовать PureComponent?",
      type: "text",
      description: `
        <p>Используйте <code>PureComponent</code>, когда:</p>
        <ul>
          <li>Компонент принимает только примитивные данные (числа, строки, булевы значения).</li>
          <li>Пропсы и состояние не изменяются часто.</li>
          <li>Вы хотите избежать ненужных перерисовок для повышения производительности.</li>
        </ul>
        <p>Не используйте <code>PureComponent</code>, если:</p>
        <ul>
          <li>Пропсы или состояние содержат сложные структуры данных (объекты, массивы).</li>
          <li>Данные мутируют напрямую (React не сможет обнаружить изменения).</li>
        </ul>
      `,
    },
    {
      title: "Пример использования",
      type: "text",
      description: `
        <p>Пример компонента, который не перерисовывается при одинаковых пропсах:</p>
      `,
      code: `
import React, { PureComponent } from 'react';

class Counter extends PureComponent {
  render() {
    console.log('Render called');
    return <div>Count: {this.props.count}</div>;
  }
}

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <Counter count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count)}>Set Same Value</button>
    </>
  );
}
// При нажатии на вторую кнопку компонент не перерисуется
      `,
    },
    {
      title: "Разница между Component и PureComponent",
      type: "text",
      description: `
        <table border="1">
          <tr>
            <th>Component</th>
            <th>PureComponent</th>
          </tr>
          <tr>
            <td>Всегда вызывает ререндер при изменении пропсов или состояния.</td>
            <td>Вызывает ререндер только при изменении пропсов или состояния (по результатам поверхностного сравнения).</td>
          </tr>
          <tr>
            <td>Не имеет встроенной оптимизации.</td>
            <td>Автоматически реализует <code>shouldComponentUpdate</code>.</td>
          </tr>
          <tr>
            <td>Подходит для сложных компонентов с частыми изменениями.</td>
            <td>Подходит для простых компонентов с редкими изменениями.</td>
          </tr>
        </table>
      `,
    },
    {
      title: "Лучшие практики",
      type: "text",
      description: `
        <ul>
          <li><strong>Избегайте мутаций:</strong> Не изменяйте пропсы или состояние напрямую. Вместо этого создавайте новые объекты или массивы.</li>
          <li><strong>Используйте для простых компонентов:</strong> Для сложных данных лучше использовать <code>React.memo</code> или <code>shouldComponentUpdate</code>.</li>
          <li><strong>Тестируйте производительность:</strong> Убедитесь, что использование <code>PureComponent</code> действительно улучшает производительность.</li>
        </ul>
      `,
    },
    {
      title: "Частые ошибки",
      type: "text",
      description: `
        <p><strong>1. Мутация данных:</strong></p>
        <pre><code>// Плохо: мутация пропсов
function updateData(data) {
  data.value = 'new value'; // PureComponent не обнаружит изменения
}

// Лучше: создайте новый объект
function updateData(data) {
  return { ...data, value: 'new value' };
}</code></pre>

        <p><strong>2. Использование PureComponent для сложных данных:</strong></p>
        <pre><code>// Плохо: PureComponent не справится с глубокими изменениями
class MyComponent extends PureComponent {
  render() {
    return <div>{this.props.data.nested.value}</div>;
  }
}

// Лучше: используйте shouldComponentUpdate или React.memo
</code></pre>
      `,
    },
    {
      title: "Альтернативы PureComponent",
      type: "text",
      description: `
        <p>Для функциональных компонентов можно использовать <code>React.memo</code>, который также реализует поверхностное сравнение пропсов.</p>
      `,
      code: `
import React from 'react';

const MyComponent = React.memo(function MyComponent({ value }) {
  console.log('Render called');
  return <div>Value: {value}</div>;
});

// Использование
function App() {
  const [value, setValue] = React.useState(0);
  return (
    <>
      <MyComponent value={value} />
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </>
  );
}
      `,
    },
  ],
};
