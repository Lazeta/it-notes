export const useImperativeHandle = {
  id: 2572,
  title: "useImperativeHandle",
  children: [
    {
      title: "Определение",
      type: "text",
      description: `
        <p><strong>useImperativeHandle</strong> — это хук, который позволяет настраивать значение, предоставляемое через <code>ref</code>. По умолчанию <code>ref</code> предоставляет доступ к DOM-элементу или экземпляру компонента, но с помощью <code>useImperativeHandle</code> можно ограничить или расширить доступные методы и свойства.</p>
        <p><strong>Основные кейсы:</strong></p>
        <ul>
          <li>Ограничение доступа к внутренним методам компонента.</li>
          <li>Предоставление пользовательских методов через <code>ref</code>.</li>
          <li>Интеграция с не-React библиотеками.</li>
        </ul>
      `,
    },
    {
      title: "Синтаксис",
      type: "text",
      description: `
        <pre><code>import { useRef, useImperativeHandle, forwardRef } from 'react';

function ChildComponent(props, ref) {
  useImperativeHandle(ref, () => ({
    customMethod() {
      console.log('Custom method called');
    },
    anotherMethod() {
      console.log('Another method called');
    }
  }));

  return <div>Child Component</div>;
}

const ForwardedChild = forwardRef(ChildComponent);

function ParentComponent() {
  const childRef = useRef();

  const handleClick = () => {
    childRef.current.customMethod(); // Вызов пользовательского метода
  };

  return (
    <>
      <ForwardedChild ref={childRef} />
      <button onClick={handleClick}>Call Custom Method</button>
    </>
  );
}</code></pre>
      `,
    },
    {
      title: "Пример использования",
      type: "text",
      description: `
        <p><strong>Пример: управление фокусом в кастомном компоненте:</strong></p>
      `,
      code: `
import React, { useRef, useImperativeHandle, forwardRef } from 'react';

// Кастомный компонент с управлением фокусом
const TextInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = '';
    }
  }));

  return <input ref={inputRef} {...props} />;
});

function App() {
  const textInputRef = useRef();

  const handleFocus = () => {
    textInputRef.current.focus(); // Управление фокусом
  };

  const handleClear = () => {
    textInputRef.current.clear(); // Очистка поля
  };

  return (
    <>
      <TextInput ref={textInputRef} placeholder="Введите текст" />
      <button onClick={handleFocus}>Фокус</button>
      <button onClick={handleClear}>Очистить</button>
    </>
  );
}

export default App;
      `,
    },
    {
      title: "Преимущества useImperativeHandle",
      type: "text",
      description: `
        <ul>
          <li><strong>Контроль над доступными методами:</strong> Можно ограничить или расширить функциональность, предоставляемую через <code>ref</code>.</li>
          <li><strong>Инкапсуляция логики:</strong> Внутренняя реализация компонента остается скрытой для родительского компонента.</li>
          <li><strong>Гибкость:</strong> Позволяет создавать сложные интерфейсы взаимодействия между компонентами.</li>
        </ul>
      `,
    },
    {
      title: "Лучшие практики",
      type: "text",
      description: `
        <ul>
          <li><strong>Используйте только при необходимости:</strong> <code>useImperativeHandle</code> следует использовать только в тех случаях, когда нельзя обойтись без <code>ref</code>.</li>
          <li><strong>Ограничьте доступ:</strong> Предоставляйте только те методы, которые действительно нужны родительскому компоненту.</li>
          <li><strong>Комбинируйте с forwardRef:</strong> <code>useImperativeHandle</code> работает только в сочетании с <code>forwardRef</code>.</li>
        </ul>
      `,
    },
    {
      title: "Типизация с TypeScript",
      type: "text",
      description: `
        <p><strong>Типизация для useImperativeHandle:</strong></p>
        <pre><code>interface TextInputHandles {
  focus: () => void;
  clear: () => void;
}

const TextInput = forwardRef<TextInputHandles, TextInputProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      if (inputRef.current) inputRef.current.focus();
    },
    clear: () => {
      if (inputRef.current) inputRef.current.value = '';
    }
  }));

  return <input ref={inputRef} {...props} />;
});</code></pre>
      `,
    },
    {
      title: "Частые ошибки",
      type: "text",
      description: `
        <p><strong>1. Избыточное использование:</strong></p>
        <pre><code>// Не используйте useImperativeHandle там, где можно обойтись props
// Лучше передавать данные через props и callback'и</code></pre>

        <p><strong>2. Отсутствие forwardRef:</strong></p>
        <pre><code>// useImperativeHandle требует forwardRef
// Без forwardRef ref не будет передан в компонент</code></pre>

        <p><strong>3. Неправильная типизация:</strong></p>
        <pre><code>// Убедитесь, что типизированы все методы, предоставляемые через ref
interface Handles {
  focus: () => void;
  clear: () => void;
}</code></pre>
      `,
    },
    {
      title: "Продвинутые паттерны",
      type: "text",
      description: `
        <p><strong>1. Комбинирование с useReducer:</strong></p>
        <pre><code>const FormComponent = forwardRef((props, ref) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  useImperativeHandle(ref, () => ({
    submit: () => {
      dispatch({ type: 'submit' });
    },
    reset: () => {
      dispatch({ type: 'reset' });
    }
  }));

  return <form>...</form>;
});</code></pre>

        <p><strong>2. Интеграция с сторонними библиотеками:</strong></p>
        <pre><code>// Пример интеграции с библиотекой для работы с картами
const MapComponent = forwardRef((props, ref) => {
  const mapRef = useRef();

  useImperativeHandle(ref, () => ({
    zoomIn: () => {
      mapRef.current.zoomIn();
    },
    zoomOut: () => {
      mapRef.current.zoomOut();
    }
  }));

  return <div ref={mapRef} />;
});</code></pre>
      `,
    },
  ],
};
