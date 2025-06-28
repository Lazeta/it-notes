export const testRouteRef = {
  id: 101725,
  title: "forwardRef (Перенаправление Ref)",
  questions: [
    {
      id: 101726,
      question: "Что такое ForwardRef?",
      answer: `
      **ForwardRef** — это функция в React, которая позволяет перенаправить \`ref\` от родительского компонента к дочернему DOM-узлу или компоненту.
      - Это полезно, когда вы хотите предоставить родительскому компоненту доступ к DOM-элементу или экземпляру дочернего компонента.

      **Пример использования:**
      \`\`\`javascript
      import React, { forwardRef } from 'react';

      const ChildComponent = forwardRef((props, ref) => {
        return <input type="text" ref={ref} />;
      });

      function ParentComponent() {
        const inputRef = React.useRef();

        const focusInput = () => {
          inputRef.current.focus();
        };

        return (
          <div>
            <ChildComponent ref={inputRef} />
            <button onClick={focusInput}>Фокус на поле ввода</button>
          </div>
        );
      }
      \`\`\`
      `,
    },
    {
      id: 101727,
      question: "Как перенаправить ref?",
      answer: `
      **Перенаправление ref:**
      - Используйте \`React.forwardRef\`, чтобы передать \`ref\` из родительского компонента в дочерний.
      - \`forwardRef\` принимает функцию с двумя аргументами: \`props\` и \`ref\`.

      **Пример:**
      \`\`\`javascript
      import React, { forwardRef } from 'react';

      const Button = forwardRef((props, ref) => {
        return <button ref={ref} {...props} />;
      });

      function App() {
        const buttonRef = React.useRef();

        const handleClick = () => {
          buttonRef.current.style.backgroundColor = 'lightblue';
        };

        return (
          <div>
            <Button ref={buttonRef}>Нажми меня</Button>
            <button onClick={handleClick}>Изменить цвет кнопки</button>
          </div>
        );
      }
      \`\`\`
      `,
    },
    {
      id: 101728,
      question: "Что возвращает ForwardRef?",
      answer: `
      **Возвращаемое значение:**
      - \`forwardRef\` возвращает React-компонент, который можно использовать в JSX.
      - Этот компонент может принимать \`ref\` как пропс, что отличает его от обычных функциональных компонентов.

      **Пример:**
      \`\`\`javascript
      const Input = React.forwardRef((props, ref) => {
        return <input ref={ref} {...props} />;
      });

      // Использование:
      function Form() {
        const inputRef = React.useRef();

        return (
          <div>
            <Input ref={inputRef} placeholder="Введите текст" />
            <button onClick={() => inputRef.current.focus()}>
              Фокус на поле ввода
            </button>
          </div>
        );
      }
      \`\`\`
      `,
    },
    {
      id: 101729,
      question: "Особенности ForwardRef?",
      answer: `
      **Особенности:**
      1. **Строгий режим:**
         - В строгом режиме (\`<React.StrictMode>\`) React вызывает функцию рендеринга дважды для обнаружения побочных эффектов.
         - Это поведение только для разработки и не влияет на производство.

      2. **Прозрачность:**
         - \`forwardRef\` делает \`ref\` прозрачным для родительского компонента.
         - Родительский компонент может напрямую взаимодействовать с DOM-элементом или экземпляром дочернего компонента.

      3. **Использование с HOC:**
         - При использовании с HOC (Higher-Order Components) \`forwardRef\` помогает передавать \`ref\` через обертку.

      **Пример с HOC:**
      \`\`\`javascript
      function withLogging(Component) {
        return React.forwardRef((props, ref) => {
          console.log('Рендеринг компонента');
          return <Component {...props} ref={ref} />;
        });
      }

      const EnhancedButton = withLogging(Button);
      \`\`\`
      `,
    },
    {
      id: 101730,
      question: "Зачем нужен forwardRef?",
      answer: `
      **Цели использования:**
      1. **Доступ к DOM-узлам:**
         - Позволяет родительскому компоненту получить доступ к DOM-элементу дочернего компонента (например, для фокусировки или измерения размеров).

      2. **Работа с сторонними библиотеками:**
         - Упрощает интеграцию с библиотеками, которые требуют доступа к DOM.

      3. **Создание переиспользуемых компонентов:**
         - Делает компоненты более гибкими, позволяя родителям управлять их внутренними элементами.

      **Пример:**
      \`\`\`javascript
      const TextInput = React.forwardRef((props, ref) => {
        return <input type="text" ref={ref} {...props} />;
      });

      function App() {
        const inputRef = React.useRef();

        const handleFocus = () => {
          inputRef.current.focus();
        };

        return (
          <div>
            <TextInput ref={inputRef} placeholder="Введите текст" />
            <button onClick={handleFocus}>Фокус на поле ввода</button>
          </div>
        );
      }
      \`\`\`
      `,
    },
    {
      id: 101731,
      question: "Можно ли использовать forwardRef с классовыми компонентами?",
      answer: `
      **Ответ:**
      - Нет, \`forwardRef\` работает только с функциональными компонентами.
      - Для классовых компонентов используйте \`React.createRef\` или \`callback-refs\`.

      **Пример с классовым компонентом:**
      \`\`\`javascript
      class ClassComponent extends React.Component {
        render() {
          return <input type="text" ref={this.props.innerRef} />;
        }
      }

      const ForwardedClassComponent = React.forwardRef((props, ref) => {
        return <ClassComponent innerRef={ref} />;
      });

      function App() {
        const inputRef = React.useRef();

        const handleFocus = () => {
          inputRef.current.focus();
        };

        return (
          <div>
            <ForwardedClassComponent ref={inputRef} />
            <button onClick={handleFocus}>Фокус на поле ввода</button>
          </div>
        );
      }
      \`\`\`
      `,
    },
  ],
};
