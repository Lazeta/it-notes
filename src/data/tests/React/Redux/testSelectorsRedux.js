export const testSelectorsRedux = {
  id: 100875,
  title: "Selectors (селекторы)",
  questions: [
    {
      id: 100876,
      question: "Что такое селекторы в Redux?",
      answer: `
**Селекторы в Redux:**
- Это функции, которые извлекают и преобразуют данные из состояния Redux.
- Позволяют инкапсулировать логику доступа к данным, делая код более читаемым и переиспользуемым.

**Преимущества:**
1. **Переиспользование:** Один селектор можно использовать в разных компонентах.
2. **Оптимизация:** Селекторы могут кэшировать результаты с помощью библиотек (например, \`reselect\`).
3. **Абстракция:** Скрывают сложную логику доступа к данным.

**Пример простого селектора:**
\`\`\`javascript
const selectUser = (state) => state.user;

// Использование
const user = selectUser(state);
console.log(user); // { name: "Alice", age: 25 }
\`\`\`
`,
    },
    {
      id: 100877,
      question: "Зачем нужны селекторы?",
      answer: `
**Зачем нужны селекторы:**
1. **Упрощение доступа к данным:**
   - Селекторы скрывают сложную структуру состояния.
2. **Повторное использование:**
   - Один селектор может использоваться в нескольких компонентах.
3. **Оптимизация производительности:**
   - Библиотеки, такие как \`reselect\`, позволяют создавать мемоизированные селекторы, которые пересчитываются только при изменении данных.
4. **Тестирование:**
   - Легче тестировать извлечение данных, чем напрямую работать с состоянием.

**Пример использования:**
\`\`\`javascript
const selectTodos = (state) => state.todos;
const todos = selectTodos(state);
\`\`\`
`,
    },
    {
      id: 100878,
      question: "Как создать мемоизированный селектор с помощью reselect?",
      answer: `
**Мемоизированные селекторы:**
- Библиотека \`reselect\` позволяет создавать селекторы, которые кэшируют результаты до тех пор, пока входные данные не изменятся.

**Пример:**
\`\`\`javascript
import { createSelector } from 'reselect';

// Входной селектор
const selectItems = (state) => state.items;

// Мемоизированный селектор
const selectTotalPrice = createSelector(
  [selectItems], // Входные селекторы
  (items) => items.reduce((total, item) => total + item.price, 0)
);

// Использование
const totalPrice = selectTotalPrice(state);
console.log(totalPrice); // 150 (например)
\`\`\`
`,
    },
    {
      id: 100879,
      question: "Что такое Reselect и зачем он нужен?",
      answer: `
**Reselect:**
- Это библиотека для создания мемоизированных селекторов.
- Позволяет оптимизировать производительность, избегая ненужных перерасчетов.

**Основные особенности:**
1. **Мемоизация:** Пересчитывает данные только при изменении входных данных.
2. **Композиция:** Можно комбинировать несколько селекторов для получения сложных данных.

**Пример:**
\`\`\`javascript
import { createSelector } from 'reselect';

const selectItems = (state) => state.items;
const selectDiscount = (state) => state.discount;

const selectTotalWithDiscount = createSelector(
  [selectItems, selectDiscount],
  (items, discount) => items.reduce((total, item) => total + item.price, 0) * (1 - discount)
);

// Использование
const totalWithDiscount = selectTotalWithDiscount(state);
console.log(totalWithDiscount); // 135 (например)
\`\`\`
`,
    },
    {
      id: 100880,
      question: "Какие проблемы решают селекторы?",
      answer: `
**Проблемы, решаемые селекторами:**
1. **Сложная структура состояния:**
   - Селекторы упрощают доступ к данным, скрывая детали реализации.
2. **Дублирование логики:**
   - Устраняют необходимость повторять одинаковый код в разных местах.
3. **Оптимизация производительности:**
   - Мемоизация предотвращает лишние перерасчеты.
4. **Тестируемость:**
   - Легко тестировать логику извлечения данных.

**Пример проблемы:**
\`\`\`javascript
// Без селектора
const totalPrice = state.items.reduce((total, item) => total + item.price, 0);

// С селектором
const selectTotalPrice = (state) => state.items.reduce((total, item) => total + item.price, 0);
\`\`\`
`,
    },
    {
      id: 100881,
      question: "Как использовать селекторы в React-Redux?",
      answer: `
**Использование селекторов в React-Redux:**
- Селекторы часто используются вместе с \`useSelector\` для доступа к данным из состояния Redux.

**Пример:**
\`\`\`javascript
import { useSelector } from 'react-redux';
import { selectTotalPrice } from './selectors';

function TotalPrice() {
  const totalPrice = useSelector(selectTotalPrice);

  return <div>Total Price: {totalPrice}</div>;
}
\`\`\`
`,
    },
    {
      id: 100882,
      question: "Как организовать селекторы в проекте?",
      answer: `
**Организация селекторов:**
1. **Отдельный файл:**
   - Создайте файл \`selectors.js\` и разместите все селекторы там.
2. **Группировка по фичам:**
   - Разделяйте селекторы по модулям или фичам (например, \`todos/selectors.js\`).
3. **Нейминг:**
   - Используйте префикс \`select\` для обозначения селекторов (например, \`selectItems\`, \`selectTotalPrice\`).

**Пример структуры:**
\`\`\`plaintext
src/
  features/
    todos/
      selectors.js
    cart/
      selectors.js
\`\`\`
`,
    },
    {
      id: 100883,
      question: "Как обрабатываются изменения данных в селекторах?",
      answer: `
**Обработка изменений:**
- Селекторы реагируют на изменения состояния автоматически.
- Если используется мемоизация (например, \`reselect\`), селектор пересчитывается только при изменении входных данных.

**Пример:**
\`\`\`javascript
const selectItems = (state) => state.items;

const selectTotalPrice = createSelector(
  [selectItems],
  (items) => items.reduce((total, item) => total + item.price, 0)
);

// При изменении items селектор пересчитается
dispatch(addItem({ price: 50 }));
\`\`\`
`,
    },
    {
      id: 100884,
      question: "Какие есть альтернативы Reselect?",
      answer: `
**Альтернативы Reselect:**
1. **Redux Toolkit:**
   - Встроенные селекторы с поддержкой мемоизации через \`createSelector\`.
2. **Custom Solutions:**
   - Можно написать собственные функции мемоизации.
3. **Библиотеки:**
   - \`re-reselect\`: Расширение \`reselect\` с поддержкой кэширования по ключам.
   - \`selectorator\`: Упрощенный API для создания селекторов.

**Пример (Redux Toolkit):**
\`\`\`javascript
import { createSelector } from '@reduxjs/toolkit';

const selectItems = (state) => state.items;
const selectTotalPrice = createSelector(
  [selectItems],
  (items) => items.reduce((total, item) => total + item.price, 0)
);
\`\`\`
`,
    },
  ],
};
