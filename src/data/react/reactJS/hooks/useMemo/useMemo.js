export const useMemo = {
  id: 2546,
  title: "useMemo",
  children: [
    {
      title: "Основы использования",
      type: "text",
      description: `
        <p><strong>useMemo</strong> — хук для мемоизации (кэширования) вычислений между рендерами.</p>
        
        <pre><code>import { useMemo } from 'react';

function Component({ items, filter }) {
  // Вычисляемое значение будет кэшировано до изменения зависимостей
  const filteredItems = useMemo(() => {
    return items.filter(item => item.includes(filter));
  }, [items, filter]);

  return &lt;List items={filteredItems} /&gt;;
}</code></pre>

        <p><strong>Параметры:</strong></p>
        <ul>
          <li><code>create</code> — функция вычисления значения</li>
          <li><code>dependencies</code> — массив зависимостей</li>
        </ul>
      `
    },
    {
      title: "Когда использовать",
      type: "text",
      description: `
        <p><strong>1. Тяжёлые вычисления:</strong></p>
        <pre><code>const sortedList = useMemo(() => {
  return hugeList.sort((a, b) => a.value - b.value);
}, [hugeList]);</code></pre>

        <p><strong>2. Оптимизация дочерних компонентов:</strong></p>
        <pre><code>const childProps = useMemo(() => ({ 
  onClick: () => {...}, 
  data: processedData 
}), [processedData]);</code></pre>

        <p><strong>3. Стабилизация ссылок:</strong></p>
        <pre><code>const config = useMemo(() => ({
  duration: 300,
  easing: 'ease-in-out'
}), []); // Пустой массив - конфиг никогда не изменится</code></pre>

        <p><strong>Не стоит использовать:</strong></p>
        <ul>
          <li>Для простых вычислений (затраты на мемоизацию превысят выгоду)</li>
          <li>Когда зависимости меняются при каждом рендере</li>
        </ul>
      `
    },
    {
      title: "Типизация с TypeScript",
      type: "text",
      description: `
        <p><strong>Явное указание типа:</strong></p>
        <pre><code>const value = useMemo&lt;number&gt;(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);</code></pre>

        <p><strong>Автовывод типа:</strong></p>
        <pre><code>const user = useMemo(() => ({
  name: 'Alex',
  age: 30
}), []); // Тип: { name: string; age: number }</code></pre>

        <p><strong>Сложные вычисления:</strong></p>
        <pre><code>interface Statistics {
  mean: number;
  median: number;
  mode: number[];
}

const stats = useMemo&lt;Statistics&gt;(() => {
  return calculateStats(largeDataset);
}, [largeDataset]);</code></pre>
      `
    },
    {
      title: "Оптимизация производительности",
      type: "text",
      description: `
        <p><strong>1. Правильный выбор зависимостей:</strong></p>
        <pre><code>// Плохо - лишняя зависимость (theme не используется в вычислениях)
const optimizedValue = useMemo(() => compute(a, b), [a, b, theme]);

// Хорошо - только реальные зависимости
const optimizedValue = useMemo(() => compute(a, b), [a, b]);</code></pre>

        <p><strong>2. Избегание избыточной мемоизации:</strong></p>
        <pre><code>// Неоправданное использование - простое сложение
const sum = useMemo(() => a + b, [a, b]);

// Лучше - вычислять напрямую
const sum = a + b;</code></pre>

        <p><strong>3. Комбинирование с useCallback:</strong></p>
        <pre><code>const childProps = useMemo(() => ({
  onClick: useCallback(() => {...}, []),
  data: processedData
}), [processedData]);</code></pre>
      `
    },
    {
      title: "Практические примеры",
      type: "text",
      description: `
        <p><strong>1. Фильтрация и сортировка:</strong></p>
        <pre><code>function ProductList({ products, category, sortBy }) {
  const visibleProducts = useMemo(() => {
    return products
      .filter(p => p.category === category)
      .sort((a, b) => a[sortBy] - b[sortBy]);
  }, [products, category, sortBy]);

  return &lt;List items={visibleProducts} /&gt;;
}</code></pre>

        <p><strong>2. Форматирование данных:</strong></p>
        <pre><code>const formattedDate = useMemo(() => {
  return new Date(timestamp).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}, [timestamp]);</code></pre>

        <p><strong>3. Мемоизация компонентов:</strong></p>
        <pre><code>const memoizedComponent = useMemo(() => {
  return &lt;ExpensiveComponent data={data} /&gt;;
}, [data]);</code></pre>
      `
    },
    {
      title: "Распространённые ошибки",
      type: "text",
      description: `
        <p><strong>1. Путаница с useEffect:</strong></p>
        <pre><code>// Неправильно - useMemo не для побочных эффектов
useMemo(() => {
  document.title = title;
}, [title]);

// Правильно - использовать useEffect
useEffect(() => {
  document.title = title;
}, [title]);</code></pre>

        <p><strong>2. Изменение данных в useMemo:</strong></p>
        <pre><code>// Плохо - мутация данных
const transformed = useMemo(() => {
  items[0].value = 100; // Прямая мутация!
  return items;
}, [items]);

// Хорошо - возвращаем новый объект
const transformed = useMemo(() => {
  return items.map((item, i) => 
    i === 0 ? { ...item, value: 100 } : item
  );
}, [items]);</code></pre>

        <p><strong>3. Пропущенные зависимости:</strong></p>
        <pre><code>const result = useMemo(() => {
  return a + b; // Пропущена зависимость b
}, [a]);</code></pre>
      `
    },
    {
      title: "Сравнение с другими хуками",
      type: "text",
      description: `
        <table border="1">
          <tr>
            <th>Хук</th>
            <th>Назначение</th>
            <th>Когда использовать</th>
          </tr>
          <tr>
            <td><code>useMemo</code></td>
            <td>Мемоизация значений</td>
            <td>Тяжёлые вычисления, стабилизация ссылок</td>
          </tr>
          <tr>
            <td><code>useCallback</code></td>
            <td>Мемоизация функций</td>
            <td>Передача колбэков дочерним компонентам</td>
          </tr>
          <tr>
            <td><code>useEffect</code></td>
            <td>Побочные эффекты</td>
            <td>Запросы данных, подписки, ручное управление DOM</td>
          </tr>
          <tr>
            <td><code>useRef</code></td>
            <td>Ссылки на значения</td>
            <td>Хранение мутабельных значений между рендерами</td>
          </tr>
        </table>
      `
    },
    {
      title: "Лучшие практики",
      type: "text",
      description: `
        <ul>
          <li><strong>Измеряйте производительность</strong> перед оптимизацией</li>
          <li><strong>Используйте React DevTools</strong> для проверки лишних ререндеров</li>
          <li><strong>Разделяйте сложные вычисления</strong> на несколько useMemo</li>
          <li><strong>Избегайте вложенных useMemo</strong> — это усложняет код</li>
          <li><strong>Документируйте</strong> причины использования useMemo</li>
        </ul>

        <p><strong>Пример профилирования:</strong></p>
        <pre><code>console.time('filter');
const visibleItems = useMemo(() => {
  return items.filter(expensiveFilter);
}, [items]);
console.timeEnd('filter'); // Замер времени выполнения</code></pre>
      `
    }
  ]
};