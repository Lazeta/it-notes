export const testTwoWayDataBinding = {
  id: 101000,
  title: "Two-Way Binding (двустороннее связывание)",
  questions: [
    {
      id: 101001,
      question: "Что такое двустороннее связывание (Two-Way Binding)?",
      answer: `
      **Двустороннее связывание (Two-Way Binding):**
      - Это механизм, при котором изменения в пользовательском интерфейсе автоматически обновляют данные в модели, и наоборот.
      - Обеспечивает синхронизацию между интерфейсом и данными без необходимости написания дополнительного кода.

      **Пример в Vue.js:**
      \`\`\`html
      <div id="app">
        <input v-model="message" placeholder="Введите текст">
        <p>Вы ввели: {{ message }}</p>
      </div>

      <script>
        new Vue({
          el: '#app',
          data: {
            message: '',
          },
        });
      </script>
      \`\`\`

      **Пример в Angular:**
      \`\`\`html
      <input [(ngModel)]="message" placeholder="Введите текст">
      <p>Вы ввели: {{ message }}</p>
      \`\`\`
      `,
    },
    {
      id: 101002,
      question: "Как работает двустороннее связывание?",
      answer: `
      **Механизм работы:**
      1. **Связывание данных с интерфейсом:**
         - Когда данные изменяются в модели, интерфейс автоматически обновляется.
      2. **Связывание интерфейса с данными:**
         - Когда пользователь взаимодействует с интерфейсом (например, вводит текст), данные в модели обновляются.

      **Пример в React (ручная реализация):**
      \`\`\`javascript
      function App() {
        const [value, setValue] = React.useState('');

        return (
          <div>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <p>Вы ввели: {value}</p>
          </div>
        );
      }
      \`\`\`
      `,
    },
    {
      id: 101003,
      question: "В чем разница между односторонним и двусторонним связыванием?",
      answer: `
      **Различия:**
      1. **Одностороннее связывание:**
         - Изменения в модели отражаются в интерфейсе, но не наоборот.
         - Требует ручной обработки событий для обновления данных.

      2. **Двустороннее связывание:**
         - Изменения в интерфейсе автоматически обновляют модель, и наоборот.
         - Упрощает разработку, так как синхронизация происходит автоматически.

      **Пример одностороннего связывания в React:**
      \`\`\`javascript
      function App() {
        const [value, setValue] = React.useState('');

        return (
          <div>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <p>Вы ввели: {value}</p>
          </div>
        );
      }
      \`\`\`
      `,
    },
    {
      id: 101004,
      question: "Какие преимущества двустороннего связывания?",
      answer: `
      **Преимущества:**
      1. **Удобство разработки:**
         - Автоматическая синхронизация данных и интерфейса упрощает работу.
      2. **Чистый код:**
         - Не требуется написание дополнительного кода для обработки событий.
      3. **Быстрая разработка:**
         - Подходит для небольших и средних проектов.

      **Пример в Vue.js:**
      \`\`\`html
      <div id="app">
        <input v-model="count" type="number">
        <p>Значение: {{ count }}</p>
      </div>

      <script>
        new Vue({
          el: '#app',
          data: {
            count: 0,
          },
        });
      </script>
      \`\`\`
      `,
    },
    {
      id: 101005,
      question: "Какие недостатки двустороннего связывания?",
      answer: `
      **Недостатки:**
      1. **Производительность:**
         - В больших приложениях может привести к снижению производительности из-за частых обновлений.
      2. **Сложность отладки:**
         - Трудно отследить, где именно произошли изменения данных.
      3. **Перегрузка данных:**
         - При большом количестве связанных элементов может возникнуть путаница.

      **Решение:**
      - Использовать одностороннее связывание для сложных проектов.
      `,
    },
    {
      id: 101006,
      question: "Как реализовать двустороннее связывание в React?",
      answer: `
      **Реализация:**
      - React не имеет встроенной поддержки двустороннего связывания, но его можно реализовать вручную.

      **Пример:**
      \`\`\`javascript
      function App() {
        const [value, setValue] = React.useState('');

        return (
          <div>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <p>Вы ввели: {value}</p>
          </div>
        );
      }
      \`\`\`
      `,
    },
    {
      id: 101007,
      question: "Как использовать v-model в Vue.js?",
      answer: `
      **v-model:**
      - Это директива Vue.js для реализации двустороннего связывания.

      **Пример:**
      \`\`\`html
      <div id="app">
        <input v-model="name" placeholder="Введите имя">
        <p>Имя: {{ name }}</p>
      </div>

      <script>
        new Vue({
          el: '#app',
          data: {
            name: '',
          },
        });
      </script>
      \`\`\`
      `,
    },
    {
      id: 101008,
      question: "Как использовать ngModel в Angular?",
      answer: `
      **ngModel:**
      - Это директива Angular для реализации двустороннего связывания.

      **Пример:**
      \`\`\`html
      <input [(ngModel)]="name" placeholder="Введите имя">
      <p>Имя: {{ name }}</p>
      \`\`\`

      **Необходимые шаги:**
      1. Импортировать \`FormsModule\` в модуль:
         \`\`\`typescript
         import { FormsModule } from '@angular/forms';

         @NgModule({
           imports: [FormsModule],
         })
         export class AppModule {}
         \`\`\`
      `,
    },
    {
      id: 101009,
      question:
        "Можно ли использовать двустороннее связывание в Vanilla JavaScript?",
      answer: `
      **Да, можно:**
      - Реализуется вручную через обработчики событий.

      **Пример:**
      \`\`\`html
      <div>
        <input id="input" type="text" placeholder="Введите текст">
        <p id="output"></p>
      </div>

      <script>
        const input = document.getElementById('input');
        const output = document.getElementById('output');

        input.addEventListener('input', () => {
          output.textContent = input.value;
        });
      </script>
      \`\`\`
      `,
    },
    {
      id: 101010,
      question: "Какие альтернативы двустороннему связыванию?",
      answer: `
      **Альтернативы:**
      1. **Одностороннее связывание:**
         - Изменения в модели отражаются в интерфейсе, но не наоборот.
      2. **Управляемые компоненты:**
         - В React состояние управляется через props и события.
      3. **Unidirectional Data Flow:**
         - Однонаправленный поток данных (Flux, Redux).

      **Пример одностороннего связывания:**
      \`\`\`javascript
      function App() {
        const [value, setValue] = React.useState('');

        return (
          <div>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <p>Вы ввели: {value}</p>
          </div>
        );
      }
      \`\`\`
      `,
    },
  ],
};
