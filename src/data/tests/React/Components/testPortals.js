export const testPortals = {
  id: 102800,
  title: "Portals (порталы)",
  questions: [
    {
      id: 102801,
      question: "Что такое порталы (Portals) в React?",
      answer: `
**Порталы (Portals):**
- Это способ рендеринга дочерних элементов в DOM-узел, который находится вне иерархии родительского компонента.
- Позволяют выводить элементы в другую часть DOM, не нарушая логику React.

**Пример создания портала:**
\`\`\`javascript
import ReactDOM from 'react-dom';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById('modal-root')
  );
}
\`\`\`
`,
    },
    {
      id: 102802,
      question: "Как создать портал в React?",
      answer: `
**Создание портала:**
- Используйте \`ReactDOM.createPortal(child, container)\`.

**Шаги:**
1. Создайте DOM-элемент для портала (например, \`<div id="modal-root"></div>\`).
2. Передайте дочерний элемент и контейнер в \`createPortal\`.

**Пример:**
\`\`\`javascript
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <h1>Основной контент</h1>
      <Modal>
        <p>Это модальное окно</p>
      </Modal>
    </div>
  );
}

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById('modal-root')
  );
}
\`\`\`
`,
    },
    {
      id: 102803,
      question: "Зачем нужны порталы в React?",
      answer: `
**Зачем нужны порталы:**
1. **Выход за пределы DOM-иерархии:**
   - Позволяют рендерить элементы вне родительского компонента (например, модальные окна, всплывающие подсказки).
2. **Управление z-index:**
   - Удобно для управления слоями (например, чтобы модальное окно было поверх других элементов).
3. **Изоляция стилей:**
   - Помогает избежать конфликтов стилей между родительским и дочерним компонентами.

**Пример использования:**
\`\`\`javascript
function Tooltip({ children }) {
  return ReactDOM.createPortal(
    <div className="tooltip">{children}</div>,
    document.body
  );
}
\`\`\`
`,
    },
    {
      id: 102804,
      question: "Как порталы работают с событиями?",
      answer: `
**Работа с событиями:**
- События в портале распространяются вверх по дереву React, даже если портал находится вне родительского DOM-узла.

**Пример:**
\`\`\`javascript
function Parent() {
  const handleClick = () => {
    console.log('Клик на родителе');
  };

  return (
    <div onClick={handleClick}>
      <p>Родительский компонент</p>
      <Child />
    </div>
  );
}

function Child() {
  return ReactDOM.createPortal(
    <button>Кнопка в портале</button>,
    document.getElementById('portal-root')
  );
}
\`\`\`

**Результат:**
- При клике на кнопку в портале событие всплывает до родительского компонента.
`,
    },
    {
      id: 102805,
      question: "Какие типичные случаи использования порталов?",
      answer: `
**Типичные случаи использования:**
1. **Модальные окна:**
   - Вывод модальных окон поверх всего приложения.
2. **Всплывающие подсказки (tooltips):**
   - Отображение подсказок рядом с элементами.
3. **Уведомления:**
   - Показ уведомлений в верхней части экрана.
4. **Контекстное меню:**
   - Отображение меню относительно курсора или элемента.

**Пример модального окна:**
\`\`\`javascript
function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">{children}</div>
    </div>,
    document.getElementById('modal-root')
  );
}
\`\`\`
`,
    },
    {
      id: 102806,
      question: "Как порталы влияют на производительность?",
      answer: `
**Влияние на производительность:**
- Порталы не создают дополнительных затрат на рендеринг, так как React управляет их обновлениями так же, как обычные компоненты.
- Однако, если портал содержит тяжелые вычисления или часто обновляется, это может повлиять на производительность.

**Оптимизация:**
- Используйте \`React.memo\` или \`useMemo\` для оптимизации содержимого портала.
`,
    },
    {
      id: 102807,
      question: "Можно ли использовать порталы с React Router?",
      answer: `
**Использование с React Router:**
- Да, порталы можно использовать вместе с React Router для отображения элементов в разных частях DOM.

**Пример:**
\`\`\`javascript
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/modal">Open Modal</Link>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/modal" component={ModalPage} />
      </div>
    </Router>
  );
}

function ModalPage() {
  return ReactDOM.createPortal(
    <div className="modal">
      <p>Это модальное окно через React Router</p>
    </div>,
    document.getElementById('modal-root')
  );
}
\`\`\`
`,
    },
    {
      id: 102808,
      question: "Как тестировать порталы?",
      answer: `
**Тестирование порталов:**
- Используйте библиотеки, такие как \`@testing-library/react\`, для тестирования порталов.
- Создайте контейнер для портала в тестовой среде.

**Пример теста:**
\`\`\`javascript
import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div>{children}</div>,
    document.getElementById('modal-root')
  );
}

test('рендеринг портала', () => {
  const root = document.createElement('div');
  root.id = 'modal-root';
  document.body.appendChild(root);

  render(<Modal>Тестовый текст</Modal>);

  expect(screen.getByText('Тестовый текст')).toBeInTheDocument();
});
\`\`\`
`,
    },
    {
      id: 102809,
      question: "Как порталы работают с SSR (Server-Side Rendering)?",
      answer: `
**Работа с SSR:**
- Порталы не поддерживаются напрямую в SSR, так как они зависят от DOM.
- Для SSR нужно отдельно обрабатывать порталы на стороне клиента.

**Решение:**
- Отрисовывайте портал только на клиенте, проверяя наличие \`document\`.

**Пример:**
\`\`\`javascript
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function ClientOnlyPortal({ children, selector }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return ReactDOM.createPortal(children, document.querySelector(selector));
}
\`\`\`
`,
    },
  ],
};
