export const testFragments = {
  id: 103125,
  title: "React Fragments (фрагменты)",
  questions: [
    {
      id: 103126,
      question: "Что такое React Fragments?",
      answer: `
**React Fragments:**
- Это способ группировать несколько элементов без добавления лишних узлов в DOM.
- Фрагменты не создают дополнительных DOM-элементов, что помогает избежать лишней вложенности.

**Синтаксис:**
\`\`\`javascript
// Короткий синтаксис:
<>
  <ChildA />
  <ChildB />
</>

// Полный синтаксис:
<React.Fragment>
  <ChildA />
  <ChildB />
</React.Fragment>
\`\`\`
`,
    },
    {
      id: 103127,
      question: "Зачем нужны React Fragments?",
      answer: `
**Зачем нужны:**
1. **Избежание лишних DOM-узлов:**
   - Иногда нужно вернуть несколько элементов из компонента, но без обертки (например, \`div\`).
2. **Улучшение читаемости HTML:**
   - Фрагменты делают структуру DOM более чистой.
3. **CSS и Layout:**
   - Лишние обертки могут нарушить CSS-правила (например, \`flexbox\` или \`grid\`).

**Пример проблемы без фрагментов:**
\`\`\`javascript
function MyComponent() {
  return (
    <div>
      <ChildA />
      <ChildB />
    </div>
  );
}
// Лишний \`div\` может сломать layout.
\`\`\`

**Решение с фрагментами:**
\`\`\`javascript
function MyComponent() {
  return (
    <>
      <ChildA />
      <ChildB />
    </>
  );
}
\`\`\`
`,
    },
    {
      id: 103128,
      question: "Какие есть способы использования React Fragments?",
      answer: `
**Способы использования:**
1. **Короткий синтаксис (\`<>\`):**
   - Простой и удобный для большинства случаев.
   \`\`\`javascript
   <>
     <ChildA />
     <ChildB />
   </>
   \`\`\`
2. **Полный синтаксис (\`<React.Fragment>\`):**
   - Позволяет передавать ключи (например, в списках).
   \`\`\`javascript
   <React.Fragment key="uniqueKey">
     <ChildA />
     <ChildB />
   </React.Fragment>
   \`\`\`
`,
    },
    {
      id: 103129,
      question: "Как использовать ключи с React Fragments?",
      answer: `
**Использование ключей:**
- Ключи можно передавать только с полным синтаксисом (\`<React.Fragment>\`).

**Пример:**
\`\`\`javascript
function List({ items }) {
  return (
    <>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </React.Fragment>
      ))}
    </>
  );
}
\`\`\`
`,
    },
    {
      id: 103130,
      question: "Какие преимущества у React Fragments?",
      answer: `
**Преимущества:**
1. **Отсутствие лишних DOM-узлов:**
   - Фрагменты не добавляют дополнительные элементы в DOM.
2. **Упрощение структуры:**
   - Чистый и понятный код без ненужных оберток.
3. **Совместимость с CSS:**
   - Не нарушает правила макета (например, \`flexbox\` или \`grid\`).

**Пример:**
\`\`\`javascript
function TableRows() {
  return (
    <>
      <tr><td>Row 1</td></tr>
      <tr><td>Row 2</td></tr>
    </>
  );
}
\`\`\`
`,
    },
    {
      id: 103131,
      question: "Можно ли использовать атрибуты с React Fragments?",
      answer: `
**Атрибуты:**
- Нет, фрагменты не поддерживают атрибуты (например, \`className\`, \`style\`).
- Если нужна обертка с атрибутами, используйте обычный HTML-элемент.

**Пример:**
\`\`\`javascript
// Ошибка:
<>
  <ChildA />
  <ChildB />
</>

// Решение:
<div className="wrapper">
  <ChildA />
  <ChildB />
</div>
\`\`\`
`,
    },
    {
      id: 103132,
      question: "Как тестировать компоненты с React Fragments?",
      answer: `
**Тестирование:**
- Фрагменты не добавляют DOM-узлы, поэтому их тестирование аналогично тестированию обычных компонентов.

**Пример теста:**
\`\`\`javascript
import { render, screen } from '@testing-library/react';

function ComponentWithFragments() {
  return (
    <>
      <p>First paragraph</p>
      <p>Second paragraph</p>
    </>
  );
}

test('renders paragraphs', () => {
  render(<ComponentWithFragments />);
  expect(screen.getByText('First paragraph')).toBeInTheDocument();
  expect(screen.getByText('Second paragraph')).toBeInTheDocument();
});
\`\`\`
`,
    },
    {
      id: 103133,
      question: "Какие ограничения у React Fragments?",
      answer: `
**Ограничения:**
1. **Нет поддержки атрибутов:**
   - Нельзя добавлять \`className\`, \`style\` или другие атрибуты.
2. **Ключи только с полным синтаксисом:**
   - Ключи нельзя использовать с коротким синтаксисом (\`<>\`).

**Пример проблемы:**
\`\`\`javascript
// Ошибка:
<>
  <Child key="1" />
</>

// Решение:
<React.Fragment key="1">
  <Child />
</React.Fragment>
\`\`\`
`,
    },
    {
      id: 103134,
      question: "Как выбрать между Fragment и div?",
      answer: `
**Выбор между Fragment и div:**
1. **Fragment:**
   - Если нужно вернуть несколько элементов без лишней обертки.
   - Когда важно сохранить чистую структуру DOM.
2. **div:**
   - Если нужна обертка с атрибутами (например, \`className\` или \`style\`).
   - Когда обертка не нарушает макет.

**Пример:**
\`\`\`javascript
// Fragment:
<>
  <ChildA />
  <ChildB />
</>

// div:
<div className="container">
  <ChildA />
  <ChildB />
</div>
\`\`\`
`,
    },
    {
      id: 103135,
      question: "Как работают Fragments с таблицами?",
      answer: `
**Fragments с таблицами:**
- В таблицах нельзя использовать \`div\` как обертку.
- Fragments позволяют возвращать несколько строк (\`<tr>\`) без нарушения структуры таблицы.

**Пример:**
\`\`\`javascript
function TableRows() {
  return (
    <>
      <tr><td>Row 1</td></tr>
      <tr><td>Row 2</td></tr>
    </>
  );
}
\`\`\`
`,
    },
  ],
};
