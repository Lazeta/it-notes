export const componentRerenders = {
  id: 519,
  title: "Ререндеры компонентов и оптимизация",
  children: [
    {
      title: "Когда происходит ререндер?",
      type: "text",
      description: `
          <p><strong>Компонент ререндерится в следующих случаях:</strong></p>
          <ul>
            <li><strong>Изменение состояния (state):</strong> Вызов <code>setState</code> или <code>useState</code>.</li>
            <li><strong>Изменение пропсов (props):</strong> Новые значения от родительского компонента.</li>
            <li><strong>Изменение контекста (context):</strong> Если компонент подписан на контекст через <code>useContext</code>.</li>
            <li><strong>Ререндер родителя:</strong> Дочерние компоненты ререндерятся вместе с родителем (если не оптимизированы).</li>
          </ul>
          <p><strong>Важно:</strong> Ререндер ≠ обновление DOM. React сначала сравнивает Virtual DOM.</p>
        `,
    },
    {
      title: "Как оптимизировать лишние ререндеры?",
      type: "text",
      description: `
          <p><strong>1. Мемоизация компонентов:</strong></p>
          <pre><code>import { memo } from 'react';
  const MemoComponent = memo(Component); // Пропсы сравниваются поверхностно</code></pre>
  
          <p><strong>2. Мемоизация значений и функций:</strong></p>
          <pre><code>const value = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  const callback = useCallback(() => doSomething(a, b), [a, b]);</code></pre>
  
          <p><strong>3. Оптимизация контекста:</strong></p>
          <ul>
            <li>Разделяйте контексты на независимые части.</li>
            <li>Используйте <code>memo</code> для потребителей контекста.</li>
          </ul>
  
          <p><strong>4. Управление зависимостями эффектов:</strong></p>
          <pre><code>useEffect(() => {
    // Действие
  }, [dep1, dep2]); // Указывайте только необходимые зависимости</code></pre>
        `,
    },
    {
      title: "Глубокое сравнение пропсов",
      type: "text",
      description: `
          <p>Для сложных пропсов в <code>memo</code> можно задать кастомное сравнение:</p>
          <pre><code>const areEqual = (prevProps, nextProps) => {
    return prevProps.data.id === nextProps.data.id;
  };
  
  export default memo(Component, areEqual);</code></pre>
          <p><strong>Осторожно:</strong> Глубокое сравнение может быть дорогим!</p>
        `,
    },
    {
      title: "Инструменты для анализа",
      type: "text",
      description: `
          <ul>
            <li><strong>React DevTools:</strong> Включите подсветку обновлений (Highlight Updates).</li>
            <li><strong>Профилировщик:</strong> Записывайте и анализируйте рендеры через Profiler.</li>
            <li><strong>why-did-you-render:</strong> Библиотека для логирования причин ререндеров.</li>
          </ul>
        `,
    },
    {
      title: "Паттерны для предотвращения ререндеров",
      type: "text",
      description: `
          <p><strong>1. Подъем состояния:</strong> Перемещайте состояние ближе к месту использования.</p>
          <p><strong>2. Компоненты-дети:</strong> Передавайте примитивы вместо объектов/массивов.</p>
          <p><strong>3. Составные компоненты:</strong> Используйте <code>children</code> или render-пропсы.</p>
          <pre><code>// Плохо: объект в пропсах
  &lt;Component data={{ id: 1, name: 'test' }} /&gt;
  
  // Лучше: примитивы
  &lt;Component id={1} name="test" /&gt;</code></pre>
        `,
    },
  ],
};
