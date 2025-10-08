export const testStyleIsolation = {
  id: 100475,
  title: "Изоляция Стилей",
  questions: [
    {
      id: 100476,
      question: "Что такое изоляция стилей?",
      answer: `
      **Изоляция стилей** — это практика, направленная на предотвращение конфликтов между CSS-правилами разных компонентов или модулей.
      - Помогает избежать пересечения имен классов.
      - Обеспечивает независимость стилей компонентов.

      **Пример проблемы:**
      \`\`\`css
      /* Глобальные стили */
      .button {
        background-color: blue;
      }

      /* Стили компонента */
      .button {
        background-color: red;
      }
      \`\`\`
      В результате кнопка может отображаться не так, как ожидалось.
      `,
    },
    {
      id: 100477,
      question: "Какие методы изоляции стилей существуют?",
      answer: `
      **Методы изоляции стилей:**
      1. **CSS Modules:**
         - Каждый класс получает уникальное имя (хэш), чтобы избежать конфликтов.
         - Пример:
           \`\`\`javascript
           import styles from './Button.module.css';

           function Button() {
             return <button className={styles.button}>Click me</button>;
           }
           \`\`\`

      2. **BEM (Block Element Modifier):**
         - Использует соглашение об именовании для уникальности классов.
         - Пример:
           \`\`\`html
           <div class="card">
             <div class="card__title">Title</div>
             <div class="card__content">Content</div>
           </div>
           \`\`\`

      3. **Scoped CSS (Vue.js):**
         - Стили применяются только к конкретному компоненту.
         - Пример:
           \`\`\`vue
           <style scoped>
           .button {
             background-color: green;
           }
           </style>
           \`\`\`

      4. **Shadow DOM:**
         - Создает изолированное дерево DOM, где стили не влияют на внешний мир.
         - Пример:
           \`\`\`javascript
           const shadow = element.attachShadow({ mode: 'open' });
           shadow.innerHTML = \`<style>.button { color: red; }</style>\`;
           \`\`\`

      5. **Utility-first CSS (Tailwind CSS):**
         - Использует атомарные классы, которые сложно переопределить.
         - Пример:
           \`\`\`html
           <button class="bg-blue-500 text-white px-4 py-2 rounded">Click me</button>
           \`\`\`
      `,
    },
    {
      id: 100478,
      question: "Что такое CSS Modules и как они работают?",
      answer: `
      **CSS Modules:**
      - Это подход, при котором каждый CSS-класс автоматически преобразуется в уникальный идентификатор.
      - Обеспечивает локальную область видимости стилей.

      **Пример:**
      \`\`\`css
      /* Button.module.css */
      .button {
        background-color: blue;
      }
      \`\`\`

      \`\`\`javascript
      import styles from './Button.module.css';

      function Button() {
        return <button className={styles.button}>Click me</button>;
      }
      \`\`\`

      **Результат в HTML:**
      \`\`\`html
      <button class="Button_button__1a2b3">Click me</button>
      \`\`\`
      `,
    },
    {
      id: 100479,
      question: "Что такое Shadow DOM и как он помогает в изоляции стилей?",
      answer: `
      **Shadow DOM:**
      - Это технология, позволяющая создавать изолированные DOM-деревья внутри элемента.
      - Стили внутри Shadow DOM не влияют на внешний документ и наоборот.

      **Пример:**
      \`\`\`javascript
      const div = document.createElement('div');
      const shadow = div.attachShadow({ mode: 'open' });

      shadow.innerHTML = \`
        <style>
          button {
            background-color: red;
          }
        </style>
        <button>Click me</button>
      \`;

      document.body.appendChild(div);
      \`\`\`

      **Особенности:**
      - Полная изоляция стилей.
      - Подходит для создания веб-компонентов.
      `,
    },
    {
      id: 100480,
      question: "Как работает BEM и почему это помогает в изоляции стилей?",
      answer: `
      **BEM (Block Element Modifier):**
      - Методология именования классов, которая минимизирует вероятность конфликтов.
      - Использует строгую структуру: \`block__element--modifier\`.

      **Пример:**
      \`\`\`html
      <div class="card">
        <div class="card__title card__title--large">Title</div>
        <div class="card__content">Content</div>
      </div>
      \`\`\`

      **Преимущества:**
      - Уникальные имена классов.
      - Легко читаемый и организованный код.
      - Минимальная вероятность пересечения с глобальными стилями.
      `,
    },
    {
      id: 100481,
      question: "Что такое Scoped CSS и где оно используется?",
      answer: `
      **Scoped CSS:**
      - Это механизм, который ограничивает область действия стилей конкретным компонентом.
      - Используется в фреймворках, таких как Vue.js.

      **Пример (Vue.js):**
      \`\`\`vue
      <template>
        <button class="button">Click me</button>
      </template>

      <style scoped>
      .button {
        background-color: green;
      }
      </style>
      \`\`\`

      **Особенности:**
      - Стили применяются только к текущему компоненту.
      - Предотвращает утечку стилей в другие части приложения.
      `,
    },
    {
      id: 100482,
      question: "Как Tailwind CSS помогает в изоляции стилей?",
      answer: `
      **Tailwind CSS:**
      - Utility-first CSS-фреймворк, который использует атомарные классы.
      - Классы применяются напрямую к элементам, что исключает необходимость глобальных стилей.

      **Пример:**
      \`\`\`html
      <button class="bg-blue-500 text-white px-4 py-2 rounded">Click me</button>
      \`\`\`

      **Преимущества:**
      - Нет необходимости в глобальных CSS-файлах.
      - Минимальная вероятность конфликтов.
      - Быстрая разработка благодаря готовым классам.
      `,
    },
    {
      id: 100483,
      question: "Какие проблемы решает изоляция стилей?",
      answer: `
      **Проблемы, решаемые изоляцией стилей:**
      1. **Конфликты имен классов:**
         - Разные компоненты могут использовать одинаковые имена классов.
      2. **Переопределение стилей:**
         - Глобальные стили могут случайно переопределять локальные.
      3. **Поддержка кода:**
         - Изоляция упрощает понимание и изменение стилей.
      4. **Масштабируемость:**
         - Легче добавлять новые компоненты без риска сломать существующие.
      `,
    },
  ],
};
