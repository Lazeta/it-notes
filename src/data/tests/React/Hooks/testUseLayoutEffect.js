export const testUseLayoutEffect = {
  id: 103300,
  title: "useLayoutEffect (синхронный эффект)",
  questions: [
    {
      id: 103301,
      question: "Что такое хук useLayoutEffect?",
      answer: `
**useLayoutEffect:**
- Это хук, аналогичный \`useEffect\`, но он срабатывает **синхронно** после всех DOM-мутаций, но до того, как браузер перерисует экран.
- Используется для выполнения измерений или манипуляций с DOM, которые должны быть завершены до того, как пользователь увидит изменения.

**Пример:**
\`\`\`javascript
import { useLayoutEffect, useRef } from 'react';

function MeasureExample() {
  const ref = useRef();

  useLayoutEffect(() => {
    const dimensions = ref.current.getBoundingClientRect();
    console.log(dimensions);
  }, []);

  return <div ref={ref}>Measure me!</div>;
}
\`\`\`
`,
    },
    {
      id: 103302,
      question: "В чем разница между useEffect и useLayoutEffect?",
      answer: `
**Разница между useEffect и useLayoutEffect:**
1. **Синхронность:**
   - \`useEffect\`: Асинхронный, выполняется после рендеринга и перерисовки экрана.
   - \`useLayoutEffect\`: Синхронный, выполняется перед перерисовкой экрана.
2. **Использование:**
   - \`useEffect\`: Подходит для побочных эффектов, таких как запросы к API, подписки и таймеры.
   - \`useLayoutEffect\`: Используется для измерений DOM или синхронных манипуляций с DOM.
3. **Производительность:**
   - \`useEffect\` менее затратен, так как не блокирует перерисовку.
   - \`useLayoutEffect\` может замедлить интерфейс, если используется неправильно.

**Пример:**
\`\`\`javascript
// useLayoutEffect:
useLayoutEffect(() => {
  // Измерение элемента
}, []);

// useEffect:
useEffect(() => {
  // Запрос данных
}, []);
\`\`\`
`,
    },
    {
      id: 103303,
      question: "Когда использовать useLayoutEffect?",
      answer: `
**Когда использовать:**
1. **Измерения DOM:**
   - Например, получение размеров или позиции элемента.
2. **Синхронные изменения DOM:**
   - Когда нужно внести изменения до того, как пользователь увидит результат.
3. **Анимации:**
   - Для создания анимаций, зависящих от текущего состояния DOM.

**Пример:**
\`\`\`javascript
function ResizeObserverComponent() {
  const ref = useRef();

  useLayoutEffect(() => {
    const element = ref.current;
    const width = element.offsetWidth;
    console.log('Width:', width);
  }, []);

  return <div ref={ref}>Resize me!</div>;
}
\`\`\`
`,
    },
    {
      id: 103304,
      question: "Какие есть ограничения у useLayoutEffect?",
      answer: `
**Ограничения:**
1. **Блокировка рендера:**
   - \`useLayoutEffect\` блокирует браузер, пока его код не выполнится.
2. **Влияние на производительность:**
   - Может замедлить интерфейс, если используется для тяжелых операций.
3. **Не подходит для асинхронных задач:**
   - Например, запросы к API лучше выполнять в \`useEffect\`.

**Пример проблемы:**
\`\`\`javascript
useLayoutEffect(() => {
  // Тяжелая операция, которая блокирует рендеринг
});
\`\`\`
`,
    },
    {
      id: 103305,
      question: "Как тестировать компоненты с useLayoutEffect?",
      answer: `
**Тестирование:**
- Используйте \`@testing-library/react\` для тестирования компонентов с \`useLayoutEffect\`.
- Убедитесь, что DOM-изменения происходят корректно.

**Пример:**
\`\`\`javascript
import { render, screen } from '@testing-library/react';
import { useLayoutEffect, useRef } from 'react';

function ComponentWithLayoutEffect() {
  const ref = useRef();

  useLayoutEffect(() => {
    ref.current.style.backgroundColor = 'red';
  }, []);

  return <div ref={ref}>Test</div>;
}

test('applies styles synchronously', () => {
  render(<ComponentWithLayoutEffect />);
  const element = screen.getByText('Test');
  expect(element).toHaveStyle('background-color: red');
});
\`\`\`
`,
    },
    {
      id: 103306,
      question: "Как работает useLayoutEffect с SSR (Server-Side Rendering)?",
      answer: `
**useLayoutEffect и SSR:**
- \`useLayoutEffect\` не работает на стороне сервера, так как там нет DOM.
- При использовании в SSR может вызвать ошибку.

**Решение:**
- Проверьте, запущено ли приложение на клиенте, перед использованием \`useLayoutEffect\`.

**Пример:**
\`\`\`javascript
import { useLayoutEffect, useState, useEffect } from 'react';

function Component() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useLayoutEffect(() => {
    if (isClient) {
      console.log('Running on client');
    }
  }, [isClient]);

  return <div>Check console</div>;
}
\`\`\`
`,
    },
    {
      id: 103307,
      question: "Как заменить useLayoutEffect на useEffect?",
      answer: `
**Замена useLayoutEffect на useEffect:**
- Если задача не требует синхронных изменений DOM, используйте \`useEffect\`.
- Перенесите логику из \`useLayoutEffect\` в \`useEffect\`.

**Пример:**
\`\`\`javascript
// До:
useLayoutEffect(() => {
  console.log('DOM updated');
}, []);

// После:
useEffect(() => {
  console.log('DOM updated');
}, []);
\`\`\`
`,
    },
    {
      id: 103308,
      question: "Как использовать useLayoutEffect для создания анимаций?",
      answer: `
**Создание анимаций:**
- \`useLayoutEffect\` можно использовать для анимаций, зависящих от текущего состояния DOM.

**Пример:**
\`\`\`javascript
function AnimatedComponent() {
  const ref = useRef();

  useLayoutEffect(() => {
    const element = ref.current;
    const height = element.offsetHeight;

    element.style.transition = 'height 0.5s';
    element.style.height = \`\${height * 2}px\`;
  }, []);

  return <div ref={ref} style={{ height: '100px', background: 'lightblue' }} />;
}
\`\`\`
`,
    },
    {
      id: 103309,
      question: "Какие есть альтернативы useLayoutEffect?",
      answer: `
**Альтернативы:**
1. **useEffect:**
   - Для большинства случаев достаточно \`useEffect\`.
2. **Ref Callbacks:**
   - Используйте колбэки для работы с DOM.
3. **requestAnimationFrame:**
   - Для анимаций и измерений.

**Пример:**
\`\`\`javascript
function RefCallbackExample() {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    const width = element.offsetWidth;
    console.log('Width:', width);
  }, []);

  return <div ref={ref}>Measure me!</div>;
}
\`\`\`
`,
    },
    {
      id: 103310,
      question: "Как предотвратить блокировку рендера в useLayoutEffect?",
      answer: `
**Предотвращение блокировки:**
1. **Оптимизация кода:**
   - Выполняйте только необходимые операции.
2. **Перенос логики:**
   - Перенесите тяжелые вычисления в Web Workers или асинхронные функции.
3. **Использование useEffect:**
   - Если синхронность не требуется, используйте \`useEffect\`.

**Пример оптимизации:**
\`\`\`javascript
useLayoutEffect(() => {
  requestAnimationFrame(() => {
    // Выполнение тяжелой операции
  });
}, []);
\`\`\`
`,
    },
  ],
};
