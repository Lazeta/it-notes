export const TwoWayBinding = {
  id: 536,
  title: "Two-Way Binding (двустороннее связывание)",
  children: [
    {
      title: "Что такое двустороннее связывание?",
      type: "text",
      description: `
        <p><strong>Двустороннее связывание</strong> — это механизм, при котором данные синхронизируются между пользовательским интерфейсом и моделью данных в реальном времени.</p>
        <p>В React двустороннее связывание реализуется через:</p>
        <ul>
          <li>Использование управляемых компонентов (controlled components).</li>
          <li>Состояние (<code>state</code>) для хранения данных.</li>
          <li>Обработчики событий для обновления состояния.</li>
        </ul>
      `,
    },
    {
      title: "Пример двустороннего связывания",
      type: "text",
      description: `
        <p>Пример использования двустороннего связывания с текстовым полем:</p>
      `,
      code: `
import React, { useState } from 'react';

function TwoWayBindingExample() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value); // Обновление состояния при изменении input
  };

  return (
    <div>
      <input
        type="text"
        value={value} // Привязка значения к состоянию
        onChange={handleChange} // Обновление состояния при вводе
      />
      <p>Вы ввели: {value}</p>
    </div>
  );
}

export default TwoWayBindingExample;
      `,
    },
    {
      title: "Как это работает?",
      type: "text",
      description: `
        <p>В React двустороннее связывание работает следующим образом:</p>
        <ol>
          <li><strong>Состояние:</strong> Данные хранятся в состоянии компонента (например, через <code>useState</code>).</li>
          <li><strong>Привязка:</strong> Значение элемента интерфейса (например, <code><input></code>) привязывается к состоянию через атрибут <code>value</code>.</li>
          <li><strong>Обновление:</strong> При изменении значения в интерфейсе (например, при вводе текста) вызывается обработчик события (например, <code>onChange</code>), который обновляет состояние.</li>
          <li><strong>Ререндер:</strong> React автоматически обновляет интерфейс, когда состояние изменяется.</li>
        </ol>
      `,
    },
    {
      title: "Преимущества двустороннего связывания",
      type: "text",
      description: `
        <ul>
          <li><strong>Автоматическая синхронизация:</strong> Изменения в интерфейсе сразу отражаются в данных и наоборот.</li>
          <li><strong>Предсказуемость:</strong> Все данные находятся в одном месте (состоянии).</li>
          <li><strong>Удобство:</strong> Легко управлять формами и пользовательским вводом.</li>
        </ul>
      `,
    },
    {
      title: "Недостатки двустороннего связывания",
      type: "text",
      description: `
        <ul>
          <li><strong>Сложность:</strong> В больших приложениях может быть сложно отслеживать изменения состояния.</li>
          <li><strong>Производительность:</strong> Частые обновления состояния могут привести к ненужным ререндерам.</li>
        </ul>
      `,
    },
    {
      title: "Альтернатива: однонаправленное связывание",
      type: "text",
      description: `
        <p>React по своей сути использует <strong>однонаправленное связывание</strong>, где данные передаются сверху вниз через пропсы. Однако двустороннее связывание можно реализовать, как показано выше.</p>
        <p>Однонаправленное связывание проще для понимания и отладки, но требует больше кода для управления вводом пользователя.</p>
      `,
    },
    {
      title: "Лучшие практики",
      type: "text",
      description: `
        <ul>
          <li><strong>Используйте управляемые компоненты:</strong> Это делает код более предсказуемым и легким для тестирования.</li>
          <li><strong>Ограничьте использование состояния:</strong> Храните только те данные, которые действительно нужны.</li>
          <li><strong>Оптимизируйте производительность:</strong> Используйте <code>React.memo</code> или <code>useMemo</code> для минимизации ненужных ререндеров.</li>
        </ul>
      `,
    },
    {
      title: "Частые ошибки",
      type: "text",
      description: `
        <p><strong>1. Неправильная привязка значений:</strong></p>
        <pre><code>// Плохо: забытая привязка значения
<input type="text" onChange={handleChange} />

// Лучше: добавьте value
<input type="text" value={value} onChange={handleChange} />
</code></pre>

        <p><strong>2. Отсутствие обработчика событий:</strong></p>
        <pre><code>// Плохо: забытый обработчик
<input type="text" value={value} />

// Лучше: добавьте onChange
<input type="text" value={value} onChange={handleChange} />
</code></pre>
      `,
    },
    {
      title: "Продвинутые паттерны",
      type: "text",
      description: `
        <p><strong>1. Реализация двустороннего связывания с помощью хуков:</strong></p>
        <pre><code>function useTwoWayBinding(initialValue) {
  const [value, setValue] = useState(initialValue);
  const handleChange = (event) => setValue(event.target.value);
  return [value, handleChange];
}

function Component() {
  const [value, handleChange] = useTwoWayBinding('');

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>Вы ввели: {value}</p>
    </div>
  );
}
</code></pre>

        <p><strong>2. Работа с формами:</strong></p>
        <pre><code>function FormComponent() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Введите имя"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Введите email"
      />
      <button type="submit">Отправить</button>
    </form>
  );
}
</code></pre>
      `,
    },
    {
      title: "Дополнительные материалы",
      type: "text",
      description: `
        <p>Для более глубокого изучения:</p>
        <ul>
          <li><a href="https://reactjs.org/docs/forms.html"  target="_blank">React Documentation: Forms</a></li>
          <li><a href="https://ru.reactjs.org/docs/hooks-state.html"  target="_blank">React Documentation: Using the State Hook</a></li>
          <li><a href="https://medium.com/@stasonmars/%D0%B4%D0%B2%D1%83%D1%81%D1%82%D0%BE%D1%80%D0%BE%D0%BD%D0%BD%D0%B5%D0%B5-%D1%81%D0%B2%D1%8F%D0%B7%D1%8B%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-react-8c9b8f0d5e5a"  target="_blank">Medium: Двустороннее связывание в React</a></li>
        </ul>
      `,
    },
  ],
};
