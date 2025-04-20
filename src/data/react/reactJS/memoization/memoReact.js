export const memoization = {
  id: 518,
  title: "Мемоизация",
  children: [
    {
      title: "Определение",
      type: "text",
      description: `
          <p><strong>Мемоизация</strong> — оптимизационная техника, которая кэширует результаты выполнения функций для одних и тех же входных данных, чтобы избежать повторных вычислений.</p>
          <ul>
            <li>Применяется для «тяжёлых» вычислений.</li>
            <li>Актуальна в React для предотвращения лишних рендеров.</li>
            <li>Работает по принципу: <em>«Один вход — один результат»</em>.</li>
          </ul>
        `,
    },
    {
      title: "Базовый пример (JavaScript)",
      type: "text",
      description: `
          <pre><code>function memoize(fn) {
    const cache = {};
    return function(...args) {
      const key = JSON.stringify(args);
      if (cache[key]) return cache[key];
      const result = fn(...args);
      cache[key] = result;
      return result;
    };
  }
  
  const factorial = memoize(n => {
    return n <= 1 ? 1 : n * factorial(n - 1);
  });</code></pre>
          <p>Теперь <code>factorial(5)</code> вычислится только один раз.</p>
        `,
    },
    {
      title: "Мемоизация в React",
      type: "text",
      description: `
          <p>React предоставляет 3 инструмента для мемоизации:</p>
          <ul>
            <li><strong><code>React.memo</code></strong> — кэширует компонент:</li>
            <pre><code>const MemoComponent = React.memo(Component);</code></pre>
            
            <li><strong><code>useMemo</code></strong> — кэширует значение:</li>
            <pre><code>const value = useMemo(() => computeExpensiveValue(a, b), [a, b]);</code></pre>
            
            <li><strong><code>useCallback</code></strong> — кэширует функцию:</li>
            <pre><code>const callback = useCallback(() => doSomething(a, b), [a, b]);</code></pre>
          </ul>
        `,
    },
    {
      title: "Когда использовать?",
      type: "text",
      description: `
          <ul>
            <li><strong>React.memo</strong>: Когда компонент часто рендерится с одинаковыми пропсами.</li>
            <li><strong>useMemo</strong>: Для сложных вычислений (фильтрация, сортировка, математические операции).</li>
            <li><strong>useCallback</strong>: Когда функция передаётся в дочерние компоненты как проп.</li>
          </ul>
          <p><strong>⚠️ Не злоупотребляйте!</strong> Мемоизация имеет накладные расходы (память, сравнение зависимостей).</p>
        `,
    },
    {
      title: "Пример: useMemo vs обычный расчёт",
      type: "text",
      description: `
          <pre><code>function List({ items }) {
    // Без мемоизации: вычисляется при каждом рендере
    // const sortedList = items.sort(...);
  
    // С мемоизацией: пересчитывается только при изменении items
    const sortedList = useMemo(() => items.sort(...), [items]);
  
    return &lt;ul&gt;{sortedList.map(...)}&lt;/ul&gt;;
  }</code></pre>
        `,
    },
  ],
};
