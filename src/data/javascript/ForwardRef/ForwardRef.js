export const ForwardRef = {
  id: 224,
  title: "ForwardRef (Перенаправление Ref)",
  children: [
    {
      title: "Что такое ForwardRef?",
      type: "text",
      description: `
        <p><strong>ForwardRef</strong> — это функция в React, которая позволяет перенаправлять <code>ref</code> из родительского компонента в дочерний. Это полезно, когда вы хотите предоставить доступ к DOM-элементу или экземпляру дочернего компонента.</p>
        <p>По умолчанию <code>ref</code> не передается в дочерние компоненты, так как React обрабатывает их как обычные функции. <code>forwardRef</code> решает эту проблему.</p>
      `,
    },
    {
      title: "Синтаксис",
      type: "text",
      description: `
        <pre><code>import { forwardRef } from 'react';

const ChildComponent = forwardRef((props, ref) => {
  return <div ref={ref}>{props.children}</div>;
});

function ParentComponent() {
  const ref = useRef();

  useEffect(() => {
    console.log(ref.current); // DOM-элемент div
  }, []);

  return <ChildComponent ref={ref} />;
}</code></pre>
      `,
    },
    {
      title: "Пример использования",
      type: "text",
      description: `
        <p><strong>Пример: фокус на input через forwardRef:</strong></p>
      `,
      code: `
import React, { useRef, forwardRef, useImperativeHandle } from 'react';

// Кастомный компонент с forwardRef
const TextInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} {...props} />;
});

function App() {
  const textInputRef = useRef();

  const handleFocus = () => {
    textInputRef.current.focus(); // Управление фокусом
  };

  return (
    <>
      <TextInput ref={textInputRef} placeholder="Введите текст" />
      <button onClick={handleFocus}>Фокус</button>
    </>
  );
}

export default App;
      `,
    },
    {
      title: "Когда использовать?",
      type: "text",
      description: `
        <ul>
          <li><strong>Доступ к DOM-элементам:</strong> Когда вам нужно получить доступ к DOM-элементу внутри кастомного компонента.</li>
          <li><strong>Управление фокусом, текстовым выделением или анимациями:</strong> Например, установка фокуса на input или управление анимацией.</li>
          <li><strong>Интеграция с сторонними библиотеками:</strong> Когда библиотека требует прямого доступа к DOM-элементу.</li>
        </ul>
      `,
    },
    {
      title: "Лучшие практики",
      type: "text",
      description: `
        <ul>
          <li><strong>Используйте только при необходимости:</strong> Не злоупотребляйте <code>forwardRef</code>, если можно обойтись без него.</li>
          <li><strong>Ограничьте доступ:</strong> Если предоставляете методы через <code>useImperativeHandle</code>, убедитесь, что они минимально необходимы.</li>
          <li><strong>Избегайте сложных зависимостей:</strong> Старайтесь минимизировать количество данных, передаваемых через <code>ref</code>.</li>
        </ul>
      `,
    },
    {
      title: "TypeScript и ForwardRef",
      type: "text",
      description: `
        <p><strong>Типизация для forwardRef:</strong></p>
        <pre><code>import { forwardRef, useRef, useImperativeHandle } from 'react';

interface TextInputHandles {
  focus: () => void;
}

const TextInput = forwardRef<TextInputHandles, TextInputProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      if (inputRef.current) inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} {...props} />;
});
</code></pre>
      `,
    },
    {
      title: "Частые ошибки",
      type: "text",
      description: `
        <p><strong>1. Забытый forwardRef:</strong></p>
        <pre><code>// Плохо: ref не будет передан в дочерний компонент
function ChildComponent(props) {
  return <div>{props.children}</div>;
}

// Лучше: используйте forwardRef
const ChildComponent = forwardRef((props, ref) => {
  return <div ref={ref}>{props.children}</div>;
});</code></pre>

        <p><strong>2. Использование ref без проверки:</strong></p>
        <pre><code>// Плохо: вызов ref.current может быть undefined
textInputRef.current.focus();

// Лучше: добавьте проверку
if (textInputRef.current) {
  textInputRef.current.focus();
}</code></pre>
      `,
    },
    {
      title: "Продвинутые паттерны",
      type: "text",
      description: `
        <p><strong>1. Комбинирование с useImperativeHandle:</strong></p>
        <pre><code>const CustomButton = forwardRef((props, ref) => {
  const buttonRef = useRef();

  useImperativeHandle(ref, () => ({
    click: () => {
      buttonRef.current.click();
    }
  }));

  return <button ref={buttonRef} {...props} />;
});

// Использование
const buttonRef = useRef();
buttonRef.current.click(); // Программный клик по кнопке
</code></pre>

        <p><strong>2. Интеграция с сторонними библиотеками:</strong></p>
        <pre><code>// Пример интеграции с библиотекой для работы с графиками
const ChartComponent = forwardRef((props, ref) => {
  const chartRef = useRef();

  useImperativeHandle(ref, () => ({
    updateData: (newData) => {
      chartRef.current.update(newData);
    }
  }));

  return <canvas ref={chartRef} />;
});
</code></pre>
      `,
    },
  ],
};
