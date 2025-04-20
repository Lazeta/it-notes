export const hookUseRef = {
  id: 517,
  title: "Хук useRef",
  children: [
    {
      title: "Определение",
      type: "text",
      description: `
          <p><strong><code>useRef</code></strong> — хук для работы с мутабельными значениями и DOM-элементами. Возвращает объект с полем <code>.current</code>, которое можно изменять без ререндера.</p>
          <p><strong>Основные кейсы:</strong></p>
          <ul>
            <li>Доступ к DOM (<code>input.focus()</code>).</li>
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
  
    return &lt;div ref={ref} /&gt;; // Привязка к DOM
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
      &lt;&gt;
        &lt;input ref={inputRef} placeholder="Логин" /&gt;
        &lt;button onClick={handleClick}&gt;Фокус на поле&lt;/button&gt;
      &lt;/&gt;
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
  
    // ...
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
            <tr><td>Значение сбрасывается при анмаунте</td><td>Сохраняется между перерисовками</td></tr>
            <tr><td>Используйте для DOM, таймеров, интеграций</td><td>Для данных, влияющих на UI</td></tr>
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
    const timerId = setInterval(...);
    timerRef.current = timerId;
    return () => clearInterval(timerRef.current);
  }, []);</code></pre>
            <li><strong>Не используйте в рендере:</strong> Изменяйте <code>.current</code> только в эффектах или обработчиках.</li>
            <li><strong>ForwardRef:</strong> Для передачи ref в кастомные компоненты:</li>
            <pre><code>const CustomInput = forwardRef((props, ref) => (
    &lt;input ref={ref} {...props} /&gt;
  ));</code></pre>
          </ul>
        `,
    },
  ],
};
