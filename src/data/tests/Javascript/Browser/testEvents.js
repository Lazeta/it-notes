export const testEvents = {
  id: 101350,
  title: "Events",
  questions: [
    {
      id: 101351,
      question: "Что такое DOM событие?",
      answer: `
      **DOM-событие:**
      - Это сигнал от браузера, сообщающий о том, что произошло какое-то событие на веб-странице.
      - Примеры: клик мышью, ввод текста, загрузка страницы, наведение курсора и т.д.
      `,
    },
    {
      id: 101352,
      question: "Как отлавливать DOM-события в JavaScript?",
      answer: `
      **Отлавливание событий:**
      1. **Использование \`addEventListener\`:**
         \`\`\`javascript
         element.addEventListener(event, callback, [useCapture]);
         \`\`\`
         - \`event\`: Тип события (например, \`"click"\`, \`"keydown"\`, \`"load"\`).
         - \`callback\`: Функция, которая выполняется при возникновении события.
         - \`[useCapture]\`: Логическое значение (\`true\` или \`false\`), указывающее, нужно ли отлавливать событие на этапе захвата.

      **Пример:**
      \`\`\`javascript
      const button = document.querySelector('button');
      button.addEventListener('click', () => {
        console.log('Button clicked!');
      });
      \`\`\`
      `,
    },
    {
      id: 101353,
      question:
        "Как можно предотвратить стандартное поведение события в JavaScript?",
      answer: `
      **Предотвращение стандартного поведения:**
      - Используйте метод \`e.preventDefault()\` объекта события.
      - Этот метод останавливает выполнение стандартного действия, связанного с событием.

      **Пример:**
      \`\`\`javascript
      const link = document.querySelector('a');
      link.addEventListener('click', (e) => {
        e.preventDefault(); // Предотвращает переход по ссылке
        console.log('Link click prevented');
      });
      \`\`\`
      `,
    },
    {
      id: 101354,
      question:
        "Объясните, что такое всплытие и перехват событий. Как вы можете использовать делегирование событий, чтобы оптимизировать обработку событий на веб-странице?",
      answer: `
      **Всплытие событий (Event Bubbling):**
      - Событие сначала обрабатывается на целевом элементе, а затем "всплывает" вверх по иерархии DOM, вызывая обработчики на родительских элементах.

      **Перехват событий (Event Capturing):**
      - Событие сначала обрабатывается на самом верхнем уровне (родительском элементе), а затем "спускается" вниз к целевому элементу.

      **Делегирование событий:**
      - Установите один обработчик события на родительский элемент, который будет обрабатывать события для всех его дочерних элементов.
      - **Оптимизация производительности:** Уменьшается количество обработчиков и затраты на память.
      - **Динамическое добавление элементов:** Обработчик работает с новыми элементами без необходимости пересоздания.

      **Пример делегирования:**
      \`\`\`javascript
      document.body.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
          console.log('Button clicked via delegation');
        }
      });
      \`\`\`
      `,
    },
    {
      id: 101355,
      question: "e.preventDefault() и e.stopPropagation(), для чего нужны?",
      answer: `
      **e.preventDefault():**
      - Отменяет стандартное поведение браузера, связанное с событием.
      - Например, предотвращает переход по ссылке при клике.

      **e.stopPropagation():**
      - Останавливает всплытие события, предотвращая его передачу родительским элементам.
      - Это означает, что обработчики событий на родительских элементах не будут вызваны.

      **Пример:**
      \`\`\`javascript
      const link = document.querySelector('a');
      link.addEventListener('click', (e) => {
        e.preventDefault(); // Предотвращает переход по ссылке
        e.stopPropagation(); // Останавливает всплытие
        console.log('Link click handled');
      });
      \`\`\`
      `,
    },
    {
      id: 101356,
      question: "Когда использовать e.preventDefault()?",
      answer: `
      **Когда использовать:**
      - Когда нужно предотвратить стандартное поведение элемента, но разрешить дальнейшую обработку события другими обработчиками или на других уровнях DOM.
      - Например, предотвратить отправку формы или переход по ссылке.

      **Пример:**
      \`\`\`javascript
      const form = document.querySelector('form');
      form.addEventListener('submit', (e) => {
        e.preventDefault(); // Предотвращает отправку формы
        console.log('Form submission prevented');
      });
      \`\`\`
      `,
    },
    {
      id: 101357,
      question: "Когда использовать e.stopPropagation()?",
      answer: `
      **Когда использовать:**
      - Когда нужно, чтобы событие обрабатывалось только на текущем элементе и не распространялось на родительские элементы.
      - Например, чтобы избежать срабатывания обработчиков на родительских элементах.

      **Пример:**
      \`\`\`javascript
      const button = document.querySelector('button');
      button.addEventListener('click', (e) => {
        e.stopPropagation(); // Останавливает всплытие
        console.log('Button click stopped propagation');
      });
      \`\`\`
      `,
    },
    {
      id: 101358,
      question:
        "Можно ли использовать вместе e.preventDefault() и e.stopPropagation()?",
      answer: `
      **Да, можно использовать вместе:**
      - \`e.preventDefault()\` предотвращает стандартное поведение.
      - \`e.stopPropagation()\` останавливает всплытие события.

      **Пример:**
      \`\`\`javascript
      const link = document.querySelector('a');
      link.addEventListener('click', (e) => {
        e.preventDefault(); // Предотвращает переход по ссылке
        e.stopPropagation(); // Останавливает всплытие
        console.log('Link click fully controlled');
      });
      \`\`\`
      `,
    },
  ],
};
