export const testPureComponent = {
  id: 101750,
  title: "PureComponent (чистый компонент)",
  questions: [
    {
      id: 101751,
      question: "Что такое PureComponent?",
      answer: `
      **React.PureComponent:**
      - Это базовый класс для компонентов React, который автоматически реализует метод \`shouldComponentUpdate\` с использованием поверхностного сравнения пропсов и состояния.
      - Если пропсы или состояние не изменились, компонент не будет перерисовываться.

      **Пример использования:**
      \`\`\`javascript
      class DisplayValue extends React.PureComponent {
        render() {
          return <div>{this.props.value}</div>;
        }
      }

      // Перерисовка произойдет только при изменении \`value\`.
      \`\`\`
      `,
    },
    {
      id: 101752,
      question: "Как работает поверхностное сравнение в PureComponent?",
      answer: `
      **Поверхностное сравнение:**
      - Сравниваются только ссылки на объекты или значения примитивных типов (числа, строки, булевы значения).
      - Если ссылки на объекты или массивы не изменились, компонент считается неизменным.

      **Пример:**
      \`\`\`javascript
      class MyComponent extends React.PureComponent {
        render() {
          return <div>{this.props.data.title}</div>;
        }
      }

      const data = { title: 'Hello' };
      ReactDOM.render(<MyComponent data={data} />, document.getElementById('root'));

      // Изменение данных не вызовет перерисовку, так как ссылка на объект не изменилась:
      data.title = 'World';
      ReactDOM.render(<MyComponent data={data} />, document.getElementById('root'));
      \`\`\`
      `,
    },
    {
      id: 101753,
      question: "Чем отличается PureComponent от Component?",
      answer: `
      **Различия:**
      1. **PureComponent:**
         - Автоматически реализует \`shouldComponentUpdate\` с поверхностным сравнением.
         - Предотвращает ненужные перерисовки, если пропсы и состояние не изменились.

      2. **Component:**
         - Не имеет встроенной логики сравнения.
         - Перерисовывается при каждом обновлении, даже если пропсы и состояние не изменились.

      **Пример:**
      \`\`\`javascript
      class RegularComponent extends React.Component {
        render() {
          console.log('RegularComponent rendered');
          return <div>{this.props.value}</div>;
        }
      }

      class PureChild extends React.PureComponent {
        render() {
          console.log('PureChild rendered');
          return <div>{this.props.value}</div>;
        }
      }

      // RegularComponent будет перерисовываться всегда, даже если \`value\` не изменился.
      // PureChild будет перерисовываться только при изменении \`value\`.
      \`\`\`
      `,
    },
    {
      id: 101754,
      question: "В каких случаях использовать PureComponent?",
      answer: `
      **Когда использовать:**
      1. **Компоненты с простыми пропсами и состоянием:**
         - Например, отображение текста или чисел.
      2. **Оптимизация производительности:**
         - Когда нужно избежать ненужных перерисовок.
      3. **Автоматическое сравнение:**
         - Когда поверхностное сравнение достаточно для обработки изменений.

      **Пример:**
      \`\`\`javascript
      class DisplayValue extends React.PureComponent {
        render() {
          return <p>{this.props.value}</p>;
        }
      }
      \`\`\`
      `,
    },
    {
      id: 101755,
      question: "В каких случаях не использовать PureComponent?",
      answer: `
      **Когда не использовать:**
      1. **Сложные вложенные структуры данных:**
         - Поверхностное сравнение не работает с вложенными объектами или массивами.
      2. **Глубокое сравнение:**
         - Если требуется проверка на глубокое равенство.
      3. **Изменяемое состояние:**
         - Если компонент изменяет свои пропсы или состояние в методах жизненного цикла.

      **Пример проблемы:**
      \`\`\`javascript
      class ProblematicComponent extends React.PureComponent {
        state = { data: { value: 0 } };

        updateData = () => {
          this.state.data.value++;
          this.setState({ data: this.state.data });
        };

        render() {
          return <div>{this.state.data.value}</div>;
        }
      }

      // PureComponent не заметит изменения, так как ссылка на \`data\` не меняется.
      \`\`\`
      `,
    },
    {
      id: 101756,
      question: "Какие ограничения у PureComponent?",
      answer: `
      **Ограничения:**
      1. **Поверхностное сравнение:**
         - Не подходит для сложных структур данных (например, вложенных объектов или массивов).
      2. **Изменяемые данные:**
         - Если пропсы или состояние мутируют, PureComponent не сможет обнаружить изменения.
      3. **Производительность:**
         - Для очень больших объектов поверхностное сравнение может быть затратным.

      **Решение:**
      - Используйте иммутабельность данных.
      - Для сложных случаев используйте \`React.memo\` или ручную реализацию \`shouldComponentUpdate\`.
      `,
    },
    {
      id: 101757,
      question:
        "Как создать функциональный компонент с поведением PureComponent?",
      answer: `
      **React.memo:**
      - Это функциональный аналог PureComponent.
      - Выполняет поверхностное сравнение пропсов и предотвращает ненужные перерисовки.

      **Пример:**
      \`\`\`javascript
      const MyComponent = React.memo(function MyComponent({ value }) {
        console.log('Rendered');
        return <div>{value}</div>;
      });

      // Компонент будет перерисовываться только при изменении \`value\`.
      \`\`\`
      `,
    },
    {
      id: 101758,
      question: "Как улучшить производительность с помощью PureComponent?",
      answer: `
      **Способы улучшения:**
      1. **Использование иммутабельности:**
         - Всегда создавайте новые объекты или массивы вместо изменения существующих.
      2. **Ограничение количества перерисовок:**
         - Используйте PureComponent для компонентов, которые часто обновляются.
      3. **Разбиение сложных компонентов:**
         - Разделяйте компоненты на более мелкие, чтобы минимизировать перерисовки.

      **Пример:**
      \`\`\`javascript
      class ListItem extends React.PureComponent {
        render() {
          return <li>{this.props.text}</li>;
        }
      }

      class List extends React.Component {
        render() {
          return (
            <ul>
              {this.props.items.map((item) => (
                <ListItem key={item.id} text={item.text} />
              ))}
            </ul>
          );
        }
      }
      \`\`\`
      `,
    },
    {
      id: 101759,
      question:
        "Что такое shouldComponentUpdate и как он связан с PureComponent?",
      answer: `
      **shouldComponentUpdate:**
      - Метод жизненного цикла, который определяет, нужно ли перерисовывать компонент.
      - Возвращает \`true\` (перерисовать) или \`false\` (не перерисовывать).

      **Связь с PureComponent:**
      - PureComponent автоматически реализует \`shouldComponentUpdate\` с поверхностным сравнением пропсов и состояния.

      **Пример ручной реализации:**
      \`\`\`javascript
      class MyComponent extends React.Component {
        shouldComponentUpdate(nextProps, nextState) {
          return nextProps.value !== this.props.value;
        }

        render() {
          return <div>{this.props.value}</div>;
        }
      }
      \`\`\`
      `,
    },
  ],
};
