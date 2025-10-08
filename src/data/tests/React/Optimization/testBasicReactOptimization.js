export const testBasicReactOptimization = {
  id: 103225,
  title: "Basic React Optimization (базовая оптимизация в React)",
  questions: [
    {
      id: 103226,
      question: "Что такое оптимизация в React?",
      answer: `
**Оптимизация в React:**
- Это процесс улучшения производительности приложения за счет уменьшения ненужных перерисовок, оптимизации состояния и минимизации лишних вычислений.
- Основная цель — сделать приложение быстрее и отзывчивее.

**Основные подходы:**
1. Использование мемоизации (\`useMemo\`, \`React.memo\`).
2. Управление состоянием с помощью хуков.
3. Ленивая загрузка компонентов (\`React.lazy\` и \`Suspense\`).
4. Разделение кода (Code Splitting).
5. Избегание лишних ререндеров.

**Пример:**
\`\`\`javascript
const MemoizedComponent = React.memo(MyComponent);
\`\`\`
`,
    },
    {
      id: 103227,
      question: "Как использовать React.memo для оптимизации?",
      answer: `
**React.memo:**
- Это HOC (High-Order Component), который предотвращает лишние перерисовки функциональных компонентов, если их пропсы не изменились.

**Пример:**
\`\`\`javascript
const MyComponent = React.memo(function MyComponent({ prop }) {
  console.log('Rendered');
  return <p>{prop}</p>;
});

function ParentComponent() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <MyComponent prop="Static Prop" />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 103228,
      question: "Что такое useMemo и как он помогает оптимизировать?",
      answer: `
**useMemo:**
- Это хук, который мемоизирует значения, чтобы избежать повторных вычислений при каждом рендере.

**Пример:**
\`\`\`javascript
import { useMemo } from 'react';

function ExpensiveComponent({ a, b }) {
  const result = useMemo(() => {
    console.log('Computing result...');
    return a * b;
  }, [a, b]);

  return <p>Result: {result}</p>;
}
\`\`\`
`,
    },
    {
      id: 103229,
      question: "Что такое useCallback и зачем он нужен?",
      answer: `
**useCallback:**
- Это хук, который мемоизирует функции, чтобы избежать их повторного создания при каждом рендере.

**Пример:**
\`\`\`javascript
import { useCallback } from 'react';

function ParentComponent() {
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return <ChildComponent onClick={handleClick} />;
}
\`\`\`
`,
    },
    {
      id: 103230,
      question: "Как избежать лишних ререндеров в React?",
      answer: `
**Способы избежать лишних ререндеров:**
1. **React.memo:** Предотвращает перерисовку компонента, если пропсы не изменились.
2. **useMemo/useCallback:** Мемоизация значений и функций.
3. **shouldComponentUpdate:** В классовых компонентах можно контролировать обновления.
4. **PureComponent:** Автоматическая проверка изменений в классовых компонентах.

**Пример:**
\`\`\`javascript
const MemoizedComponent = React.memo(MyComponent);
\`\`\`
`,
    },
    {
      id: 103231,
      question: "Как работает shouldComponentUpdate?",
      answer: `
**shouldComponentUpdate:**
- Метод классового компонента, который определяет, нужно ли перерисовывать компонент.
- Возвращает \`true\` (перерисовать) или \`false\` (не перерисовывать).

**Пример:**
\`\`\`javascript
class OptimizedComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.value !== this.props.value;
  }

  render() {
    return <p>Value: {this.props.value}</p>;
  }
}
\`\`\`
`,
    },
    {
      id: 103232,
      question: "Что такое PureComponent и чем он отличается от Component?",
      answer: `
**PureComponent:**
- Классовый компонент, который автоматически реализует поверхностное сравнение пропсов и состояния.
- Предотвращает лишние перерисовки.

**Разница между PureComponent и Component:**
- \`PureComponent\` автоматически проверяет изменения в пропсах и состоянии.
- \`Component\` всегда перерисовывается, если вызван \`setState\`.

**Пример:**
\`\`\`javascript
class PureComp extends React.PureComponent {
  render() {
    return <p>PureComponent</p>;
  }
}
\`\`\`
`,
    },
    {
      id: 103233,
      question: "Как использовать ленивую загрузку в React?",
      answer: `
**Ленивая загрузка:**
- Техника загрузки компонентов только тогда, когда они нужны.
- Реализуется через \`React.lazy\` и \`Suspense\`.

**Пример:**
\`\`\`javascript
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </React.Suspense>
  );
}
\`\`\`
`,
    },
    {
      id: 103234,
      question: "Что такое Code Splitting и как его использовать?",
      answer: `
**Code Splitting:**
- Это техника разделения кода на части для уменьшения размера начального бандла.
- Реализуется через динамический импорт или инструменты сборки (например, Webpack).

**Пример:**
\`\`\`javascript
const Module = await import('./Module');

// Webpack Code Splitting:
const LazyComponent = React.lazy(() => import('./LazyComponent'));
\`\`\`
`,
    },
    {
      id: 103235,
      question: "Какие есть стратегии базовой оптимизации в React?",
      answer: `
**Стратегии:**
1. **Мемоизация:** \`useMemo\`, \`React.memo\`, \`useCallback\`.
2. **Ленивая загрузка:** \`React.lazy\` и \`Suspense\`.
3. **Разделение кода:** Code Splitting.
4. **Управление состоянием:** Избегайте лишних обновлений.
5. **Оптимизация DOM:** Используйте Virtual DOM эффективно.

**Пример:**
\`\`\`javascript
const MemoizedComponent = React.memo(MyComponent);
\`\`\`
`,
    },
  ],
};
