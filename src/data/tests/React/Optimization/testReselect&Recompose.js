export const testReselectRecompose = {
  id: 103025,
  title: "Reselect and Recompose (селекторы и композиция)",
  questions: [
    {
      id: 103026,
      question: "Что такое Reselect и зачем он нужен?",
      answer: `
**Reselect:**
- Библиотека для создания мемоизированных селекторов в Redux.
- Позволяет избежать лишних пересчетов данных, если входные данные не изменились.

**Зачем нужен:**
1. **Оптимизация производительности:**
   - Предотвращает повторные вычисления при каждом рендере.
2. **Мемоизация данных:**
   - Кэширует результаты селекторов на основе входных данных.

**Пример:**
\`\`\`javascript
import { createSelector } from 'reselect';

const selectItems = (state) => state.items;
const selectFilter = (state) => state.filter;

const selectFilteredItems = createSelector(
  [selectItems, selectFilter],
  (items, filter) => items.filter(item => item.type === filter)
);

// Использование:
const mapStateToProps = (state) => ({
  filteredItems: selectFilteredItems(state),
});
\`\`\`
`,
    },
    {
      id: 103027,
      question: "Как работает createSelector в Reselect?",
      answer: `
**createSelector:**
- Принимает массив входных селекторов и функцию преобразования.
- Если входные данные не изменились, возвращает закэшированный результат.

**Шаги работы:**
1. Вызывает входные селекторы для получения данных.
2. Проверяет, изменились ли входные данные.
3. Если данные не изменились, возвращает кэшированный результат.
4. Если данные изменились, вызывает функцию преобразования.

**Пример:**
\`\`\`javascript
import { createSelector } from 'reselect';

const selectNumbers = (state) => state.numbers;
const selectMultiplier = (state) => state.multiplier;

const selectMultipliedNumbers = createSelector(
  [selectNumbers, selectMultiplier],
  (numbers, multiplier) => numbers.map(num => num * multiplier)
);
\`\`\`
`,
    },
    {
      id: 103028,
      question: "Зачем нужны селекторы в Redux?",
      answer: `
**Зачем нужны селекторы:**
1. **Абстракция данных:**
   - Инкапсулируют логику получения данных из состояния.
2. **Оптимизация:**
   - Предотвращают лишние вычисления.
3. **Повторное использование:**
   - Селекторы можно использовать в разных компонентах.

**Пример без селекторов:**
\`\`\`javascript
const mapStateToProps = (state) => ({
  filteredItems: state.items.filter(item => item.type === state.filter),
});
\`\`\`

**Пример с селекторами:**
\`\`\`javascript
const selectFilteredItems = createSelector(
  [(state) => state.items, (state) => state.filter],
  (items, filter) => items.filter(item => item.type === filter)
);

const mapStateToProps = (state) => ({
  filteredItems: selectFilteredItems(state),
});
\`\`\`
`,
    },
    {
      id: 103029,
      question: "Что такое Recompose и зачем он нужен?",
      answer: `
**Recompose:**
- Утилитарная библиотека для функциональных компонентов.
- Позволяет создавать компоненты с использованием композиции хуков и высших порядковых компонентов (HOC).

**Зачем нужен:**
1. **Композиция логики:**
   - Объединяет несколько HOC в один компонент.
2. **Упрощение кода:**
   - Уменьшает количество шаблонного кода.
3. **Гибкость:**
   - Легко комбинировать и переиспользовать логику.

**Пример:**
\`\`\`javascript
import { compose, withState, withHandlers } from 'recompose';

const enhance = compose(
  withState('count', 'setCount', 0),
  withHandlers({
    increment: ({ setCount }) => () => setCount(n => n + 1),
    decrement: ({ setCount }) => () => setCount(n => n - 1),
  })
);

const Counter = enhance(({ count, increment, decrement }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </div>
));
\`\`\`
`,
    },
    {
      id: 103030,
      question: "Какие основные функции предоставляет Recompose?",
      answer: `
**Основные функции:**
1. **withState:**
   - Добавляет состояние в функциональный компонент.
2. **withHandlers:**
   - Создает обработчики событий.
3. **compose:**
   - Комбинирует несколько HOC в один.
4. **pure:**
   - Оптимизирует ререндеринг компонента.
5. **branch:**
   - Условно применяет HOC.

**Пример:**
\`\`\`javascript
import { compose, withState, pure } from 'recompose';

const enhance = compose(
  withState('value', 'setValue', ''),
  pure
);

const Input = enhance(({ value, setValue }) => (
  <input value={value} onChange={(e) => setValue(e.target.value)} />
));
\`\`\`
`,
    },
    {
      id: 103031,
      question: "Как заменить Recompose хуками?",
      answer: `
**Замена Recompose хуками:**
- Хуки предоставляют аналогичную функциональность, но более современным способом.

**Сравнение:**

**Recompose:**
\`\`\`javascript
import { compose, withState } from 'recompose';

const enhance = compose(
  withState('count', 'setCount', 0)
);

const Counter = enhance(({ count, setCount }) => (
  <div>
    <p>{count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
  </div>
));
\`\`\`

**Хуки:**
\`\`\`javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 103032,
      question: "Какие есть альтернативы Recompose?",
      answer: `
**Альтернативы:**
1. **React Hooks:**
   - Современный способ управления состоянием и побочными эффектами.
2. **Redux Toolkit:**
   - Включает встроенные утилиты для работы с состоянием.
3. **Custom Hooks:**
   - Пользовательские хуки для переиспользования логики.

**Пример Custom Hook:**
\`\`\`javascript
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return { count, increment, decrement };
}

function Counter() {
  const { count, increment, decrement } = useCounter();
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 103033,
      question: "Как тестировать селекторы из Reselect?",
      answer: `
**Тестирование селекторов:**
- Используйте Jest или другую библиотеку для тестирования.

**Пример:**
\`\`\`javascript
import { createSelector } from 'reselect';

const selectNumbers = (state) => state.numbers;
const selectMultiplier = (state) => state.multiplier;

const selectMultipliedNumbers = createSelector(
  [selectNumbers, selectMultiplier],
  (numbers, multiplier) => numbers.map(num => num * multiplier)
);

test('multiplies numbers correctly', () => {
  const state = {
    numbers: [1, 2, 3],
    multiplier: 2,
  };
  expect(selectMultipliedNumbers(state)).toEqual([2, 4, 6]);
});
\`\`\`
`,
    },
    {
      id: 103034,
      question: "Какие ограничения у Reselect?",
      answer: `
**Ограничения:**
1. **Пересчет только по входным данным:**
   - Если селектор зависит от глубоко вложенных данных, может потребоваться дополнительная оптимизация.
2. **Неподдерживаемые сложные структуры:**
   - Может быть сложно работать с иммутабельными данными.

**Пример проблемы:**
\`\`\`javascript
const selectDeepData = createSelector(
  [(state) => state.deep.nested.data],
  (data) => data.filter(item => item.active)
);
// Если \`deep.nested.data\` изменяется, селектор пересчитывается.
\`\`\`
`,
    },
    {
      id: 103035,
      question: "Как комбинировать Reselect и Redux Toolkit?",
      answer: `
**Комбинирование:**
- Redux Toolkit предоставляет встроенные утилиты для работы с селекторами.

**Пример:**
\`\`\`javascript
import { createSlice, createSelector } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
  },
});

const selectValue = (state) => state.counter.value;

const selectDoubledValue = createSelector(
  [selectValue],
  (value) => value * 2
);

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
\`\`\`
`,
    },
  ],
};
