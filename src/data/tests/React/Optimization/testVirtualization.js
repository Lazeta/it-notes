export const testVirtualization = {
  id: 102975,
  title: "Virtualization (виртуализация)",
  questions: [
    {
      id: 102976,
      question: "Что такое виртуализация в React?",
      answer: `
**Виртуализация:**
- Это техника, которая позволяет отображать только те элементы, которые видны пользователю, чтобы оптимизировать производительность.
- Особенно полезна для больших списков или таблиц с большим количеством данных.

**Преимущества:**
1. Уменьшение использования памяти.
2. Ускорение рендеринга.
3. Повышение отзывчивости интерфейса.

**Пример:**
\`\`\`javascript
import { Virtuoso } from 'react-virtuoso';

function VirtualizedList() {
  const items = Array.from({ length: 1000 }, (_, index) => \`Item \${index + 1}\`);

  return (
    <Virtuoso
      style={{ height: '400px', width: '300px' }}
      totalCount={items.length}
      itemContent={(index) => <div>{items[index]}</div>}
    />
  );
}
\`\`\`
`,
    },
    {
      id: 102977,
      question: "Зачем нужна виртуализация?",
      answer: `
**Зачем нужна виртуализация:**
1. **Оптимизация производительности:**
   - При большом количестве элементов DOM может стать перегруженным.
   - Виртуализация рендерит только видимые элементы.
2. **Снижение нагрузки на браузер:**
   - Меньше элементов в DOM → меньше потребление памяти и процессорного времени.
3. **Улучшение UX:**
   - Интерфейс становится более отзывчивым, особенно при скролле.

**Пример проблемы без виртуализации:**
\`\`\`javascript
function NonVirtualizedList() {
  const items = Array.from({ length: 10000 }, (_, index) => \`Item \${index + 1}\`);
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102978,
      question: "Какие библиотеки используются для виртуализации в React?",
      answer: `
**Популярные библиотеки:**
1. **react-window:**
   - Легковесная библиотека для виртуализации списков.
2. **react-virtualized:**
   - Более мощная библиотека с поддержкой сложных компонентов (таблицы, сетки).
3. **react-virtuoso:**
   - Простая библиотека для динамической виртуализации.

**Пример react-window:**
\`\`\`javascript
import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style}>Row {index}</div>
);

function VirtualizedList() {
  return (
    <List
      height={400}
      itemCount={1000}
      itemSize={50}
      width={300}
    >
      {Row}
    </List>
  );
}
\`\`\`
`,
    },
    {
      id: 102979,
      question: "Что такое windowing (оконная виртуализация)?",
      answer: `
**Windowing (оконная виртуализация):**
- Техника, при которой рендерятся только элементы, попадающие в область видимости (viewport).
- Остальные элементы создаются только при прокрутке.

**Пример:**
\`\`\`javascript
import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style}>Row {index}</div>
);

function WindowedList() {
  return (
    <List
      height={400} // Высота видимой области
      itemCount={1000} // Общее количество элементов
      itemSize={50} // Высота каждого элемента
      width={300} // Ширина списка
    >
      {Row}
    </List>
  );
}
\`\`\`
`,
    },
    {
      id: 102980,
      question: "Как реализовать виртуализацию для таблиц?",
      answer: `
**Виртуализация для таблиц:**
- Используйте библиотеки, такие как \`react-virtualized\` или \`react-table\`.

**Пример с react-virtualized:**
\`\`\`javascript
import { Column, Table } from 'react-virtualized';

const list = Array.from({ length: 1000 }, (_, index) => ({
  id: index,
  name: \`Name \${index}\`,
  age: Math.floor(Math.random() * 50),
}));

function VirtualizedTable() {
  return (
    <Table
      width={600}
      height={400}
      headerHeight={30}
      rowHeight={30}
      rowCount={list.length}
      rowGetter={({ index }) => list[index]}
    >
      <Column label="ID" dataKey="id" width={100} />
      <Column label="Name" dataKey="name" width={200} />
      <Column label="Age" dataKey="age" width={100} />
    </Table>
  );
}
\`\`\`
`,
    },
    {
      id: 102981,
      question: "Как работает динамическая виртуализация?",
      answer: `
**Динамическая виртуализация:**
- Элементы имеют разную высоту, и их размеры вычисляются динамически.
- Подходит для контента с переменной высотой.

**Пример с react-virtuoso:**
\`\`\`javascript
import { Virtuoso } from 'react-virtuoso';

function DynamicVirtualizedList() {
  const items = Array.from({ length: 1000 }, (_, index) => \`Item \${index + 1}\`);

  return (
    <Virtuoso
      style={{ height: '400px', width: '300px' }}
      totalCount={items.length}
      itemContent={(index) => <div>{items[index]}</div>}
    />
  );
}
\`\`\`
`,
    },
    {
      id: 102982,
      question: "Какие есть типы виртуализации?",
      answer: `
**Типы виртуализации:**
1. **Вертикальная виртуализация:**
   - Рендеринг элементов по вертикали (например, списки).
2. **Горизонтальная виртуализация:**
   - Рендеринг элементов по горизонтали (например, карусели).
3. **Табличная виртуализация:**
   - Рендеринг строк и столбцов в таблицах.
4. **Многомерная виртуализация:**
   - Рендеринг элементов в сетке (например, галерея).

**Пример вертикальной виртуализации:**
\`\`\`javascript
import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style}>Row {index}</div>
);

function VerticalList() {
  return (
    <List
      height={400}
      itemCount={1000}
      itemSize={50}
      width={300}
    >
      {Row}
    </List>
  );
}
\`\`\`
`,
    },
    {
      id: 102983,
      question: "Какие ограничения у виртуализации?",
      answer: `
**Ограничения:**
1. **Сложность реализации:**
   - Требует интеграции сторонних библиотек.
2. **Динамический контент:**
   - Сложно работать с элементами, у которых высота меняется динамически.
3. **Анимации:**
   - Анимации могут быть сложнее реализовать из-за ограниченного количества элементов в DOM.

**Пример проблемы:**
\`\`\`javascript
// Если элементы имеют динамическую высоту, нужно использовать библиотеки с поддержкой dynamic sizing.
\`\`\`
`,
    },
    {
      id: 102984,
      question: "Как тестировать компоненты с виртуализацией?",
      answer: `
**Тестирование:**
- Используйте \`@testing-library/react\` для проверки видимых элементов.
- Убедитесь, что виртуализация корректно обрабатывает прокрутку.

**Пример теста:**
\`\`\`javascript
import { render, screen } from '@testing-library/react';
import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style}>Row {index}</div>
);

function VirtualizedList() {
  return (
    <List
      height={400}
      itemCount={1000}
      itemSize={50}
      width={300}
    >
      {Row}
    </List>
  );
}

test('renders first visible row', () => {
  render(<VirtualizedList />);
  expect(screen.getByText('Row 0')).toBeInTheDocument();
});
\`\`\`
`,
    },
    {
      id: 102985,
      question: "Как оптимизировать виртуализацию для мобильных устройств?",
      answer: `
**Оптимизация для мобильных устройств:**
1. **Размеры элементов:**
   - Используйте фиксированные размеры для упрощения расчетов.
2. **Lazy loading:**
   - Загружайте данные по мере прокрутки.
3. **Touch events:**
   - Убедитесь, что виртуализация корректно работает с touch-событиями.

**Пример:**
\`\`\`javascript
import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style}>Row {index}</div>
);

function MobileOptimizedList() {
  return (
    <List
      height={window.innerHeight}
      itemCount={1000}
      itemSize={50}
      width={window.innerWidth}
    >
      {Row}
    </List>
  );
}
\`\`\`
`,
    },
  ],
};