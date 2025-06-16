export const useRef = {
  id: 2545,
  title: "Хук useRef",
  children: [
    {
      title: "Определение",
      type: "text",
      description: `
        <p><strong><code>useRef</code></strong> — это хук для работы с мутабельными значениями и DOM-элементами. Он возвращает объект с полем <code>.current</code>, которое можно изменять без вызова ререндера.</p>
        <p><strong>Основные кейсы:</strong></p>
        <ul>
          <li>Доступ к DOM (например, <code>input.focus()</code>).</li>
          <li>Хранение изменяемых значений (таймеры, предыдущие пропсы).</li>
          <li>Интеграция с не-React библиотеками (Canvas, D3).</li>
        </ul>
      `,
    },
    {
      title: "Синтаксис",
      type: "text",
      description: `
        <pre><code>import { useRef } from 'react';

function Component() {
  const ref = useRef(initialValue);
  // initialValue: любое начальное значение (null, 0, [] и т.д.)
  console.log(ref.current); // Доступ к значению

  return <div ref={ref} />; // Привязка к DOM
}</code></pre>
      `,
    },
    {
      title: "Пример: фокус на input",
      type: "text",
      description: `
        <pre><code>function LoginForm() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus(); // Управление DOM
  };

  return (
    <>
      <input ref={inputRef} placeholder="Логин" />
      <button onClick={handleClick}>Фокус на поле</button>
    </>
  );
}</code></pre>
      `,
    },
    {
      title: "Хранение мутабельных данных",
      type: "text",
      description: `
        <p>Ref-ы полезны для значений, которые не должны триггерить ререндер:</p>
        <pre><code>function Counter() {
  const count = useRef(0); // Не вызывает ререндер!

  const increment = () => {
    count.current += 1;
    console.log('Текущее значение:', count.current);
  };

  return (
    <>
      <p>Значение в консоли: проверьте DevTools</p>
      <button onClick={increment}>Увеличить</button>
    </>
  );
}</code></pre>
        <p><strong>Важно:</strong> Для отображения в UI используйте <code>useState</code>!</p>
      `,
    },
    {
      title: "Разница с useState",
      type: "text",
      description: `
        <table border="1">
          <tr><th><code>useRef</code></th><th><code>useState</code></th></tr>
          <tr><td>Изменение <code>.current</code> не вызывает ререндер</td><td>Ререндер при изменении</td></tr>
          <tr><td>Значение сохраняется между перерисовками</td><td>Сохраняется между перерисовками</td></tr>
          <tr><td>Используется для DOM, таймеров, интеграций</td><td>Для данных, влияющих на UI</td></tr>
        </table>
      `,
    },
    {
      title: "Лучшие практики",
      type: "text",
      description: `
        <ul>
          <li><strong>Очистка refs:</strong> Обнуляйте значения в <code>useEffect</code> при анмаунте:</li>
          <pre><code>useEffect(() => {
  const timerId = setInterval(() => {}, 1000);
  timerRef.current = timerId;
  return () => clearInterval(timerRef.current);
}, []);</code></pre>

          <li><strong>Не используйте в рендере:</strong> Изменяйте <code>.current</code> только в эффектах или обработчиках событий.</li>

          <li><strong>ForwardRef:</strong> Для передачи ref в кастомные компоненты:</li>
          <pre><code>const CustomInput = forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));</code></pre>
        </ul>
      `,
    },
    {
      title: "Продвинутые паттерны",
      type: "text",
      description: `
        <p><strong>1. Использование для сохранения предыдущих значений:</strong></p>
        <pre><code>function usePrevious(value) {
  const ref = useRef();
  
  useEffect(() => {
    ref.current = value; // Сохраняем предыдущее значение
  }, [value]);
  
  return ref.current;
}

// Использование:
const prevCount = usePrevious(count);
console.log('Текущее:', count, 'Предыдущее:', prevCount);
</code></pre>

        <p><strong>2. Интеграция с Canvas:</strong></p>
        <pre><code>function CanvasComponent() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Рисуем круг
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
    ctx.stroke();
  }, []);

  return <canvas ref={canvasRef} width="150" height="150" />;
}</code></pre>
      `,
    },
    {
      title: "TypeScript и useRef",
      type: "text",
      description: `
        <p><strong>Типизация useRef:</strong></p>
        <pre><code>const inputRef = useRef<HTMLInputElement | null>(null);

// Использование
if (inputRef.current) {
  inputRef.current.focus();
}</code></pre>

        <p><strong>Типизация для мутабельных данных:</strong></p>
        <pre><code>const count = useRef<number>(0);

count.current += 1; // Без проблем
console.log(count.current);</code></pre>
      `,
    },
  ],
};
