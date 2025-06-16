export const useLayoutEffect = {
  id: 2573,
  title: "useLayoutEffect",
  children: [
    {
      title: "Определение",
      type: "text",
      description: `
        <p><strong>useLayoutEffect</strong> — это хук, который работает аналогично <code>useEffect</code>, но выполняется синхронно после рендера, до того как браузер отрисует изменения. Это делает его идеальным для операций, связанных с измерением DOM (например, получение размеров элемента).</p>
        <p><strong>Основные отличия от useEffect:</strong></p>
        <ul>
          <li>Выполняется синхронно перед отрисовкой.</li>
          <li>Используется для операций, которые должны быть завершены до того, как пользователь увидит результат.</li>
        </ul>
      `,
    },
    {
      title: "Синтаксис",
      type: "text",
      description: `
        <pre><code>import { useLayoutEffect } from 'react';

function Component() {
  useLayoutEffect(() => {
    // Сторонний эффект (например, измерение DOM)
    return () => {
      // Очистка (необязательно)
    };
  }, [dependencies]);
}</code></pre>
      `,
    },
    {
      title: "Пример использования",
      type: "text",
      description: `
        <p><strong>Пример: измерение размера элемента:</strong></p>
      `,
      code: `
import React, { useRef, useLayoutEffect, useState } from 'react';

function MeasureExample() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (ref.current) {
      const { width, height } = ref.current.getBoundingClientRect();
      setSize({ width, height });
    }
  }, []);

  return (
    <>
      <div ref={ref} style={{ width: '200px', height: '100px', border: '1px solid black' }}>
        Измеряемый элемент
      </div>
      <p>Ширина: {size.width}px</p>
      <p>Высота: {size.height}px</p>
    </>
  );
}

export default MeasureExample;
      `,
    },
    {
      title: "Когда использовать?",
      type: "text",
      description: `
        <p><strong>1. Измерение DOM:</strong></p>
        <pre><code>// Получение размеров элемента
useLayoutEffect(() => {
  if (ref.current) {
    const rect = ref.current.getBoundingClientRect();
    console.log(rect.width, rect.height);
  }
}, []);</code></pre>

        <p><strong>2. Корректировка положения элементов:</strong></p>
        <pre><code>// Корректировка положения tooltip'а
useLayoutEffect(() => {
  if (tooltipRef.current && triggerRef.current) {
    const triggerRect = triggerRef.current.getBoundingClientRect();
    tooltipRef.current.style.top = \`\${triggerRect.bottom + window.scrollY}px\`;
    tooltipRef.current.style.left = \`\${triggerRect.left + window.scrollX}px\`;
  }
}, [tooltipRef, triggerRef]);</code></pre>
      `,
    },
    {
      title: "Разница с useEffect",
      type: "text",
      description: `
        <table border="1">
          <tr>
            <th>Хук</th>
            <th>Время выполнения</th>
            <th>Применение</th>
          </tr>
          <tr>
            <td>useEffect</td>
            <td>После отрисовки (асинхронно)</td>
            <td>Побочные эффекты, не требующие точных измерений DOM</td>
          </tr>
          <tr>
            <td>useLayoutEffect</td>
            <td>Перед отрисовкой (синхронно)</td>
            <td>Измерения DOM, корректировка положения элементов</td>
          </tr>
        </table>
      `,
    },
    {
      title: "Лучшие практики",
      type: "text",
      description: `
        <ul>
          <li><strong>Используйте только при необходимости:</strong> <code>useLayoutEffect</code> блокирует отрисовку, поэтому его следует использовать только в тех случаях, когда нельзя обойтись <code>useEffect</code>.</li>
          <li><strong>Минимизируйте зависимости:</strong> Чем меньше зависимостей, тем реже будет вызываться эффект.</li>
          <li><strong>Тестируйте производительность:</strong> Если эффект выполняется слишком долго, это может привести к задержкам в UI.</li>
        </ul>
      `,
    },
    {
      title: "Частые ошибки",
      type: "text",
      description: `
        <p><strong>1. Использование там, где достаточно useEffect:</strong></p>
        <pre><code>// Плохо: использование useLayoutEffect для простых побочных эффектов
useLayoutEffect(() => {
  console.log('Эффект выполнен');
}, []);

// Лучше: используйте useEffect
useEffect(() => {
  console.log('Эффект выполнен');
}, []);</code></pre>

        <p><strong>2. Забытая очистка:</strong></p>
        <pre><code>// Всегда добавляйте функцию очистки, если она нужна
useLayoutEffect(() => {
  const handler = () => console.log('Resize');
  window.addEventListener('resize', handler);
  return () => window.removeEventListener('resize', handler); // Очистка
}, []);</code></pre>
      `,
    },
    {
      title: "TypeScript и useLayoutEffect",
      type: "text",
      description: `
        <p><strong>Типизация для useLayoutEffect:</strong></p>
        <pre><code>import { useLayoutEffect } from 'react';

function Component() {
  useLayoutEffect(() => {
    const element = document.getElementById('my-element') as HTMLElement | null;
    if (element) {
      console.log(element.offsetWidth);
    }
  }, []);
}</code></pre>
      `,
    },
  ],
};
