export const OverrideBrowserDefaults = {
  id: 156,
  title: "Override browser defaults (Отмена действий браузера по умолчанию)",
  children: [
    {
      title: "Что такое действия по умолчанию?",
      type: "text",
      description: `
        <p><strong>Действия по умолчанию</strong> — это стандартные реакции браузера на определенные события. Например:</p>
        <ul>
          <li>Переход по ссылке при клике на элемент <code><a></code>.</li>
          <li>Отправка формы при нажатии кнопки <code><button></code>.</li>
          <li>Прокрутка страницы при нажатии клавиш со стрелками.</li>
          <li>Выделение текста при двойном клике.</li>
        </ul>
        <p>Эти действия могут быть переопределены с помощью JavaScript.</p>
      `,
    },
    {
      title: "Как отменить действия по умолчанию?",
      type: "text",
      description: `
        <p>Для отмены действий по умолчанию используется метод <code>event.preventDefault()</code>. Этот метод предотвращает выполнение стандартной реакции браузера на событие.</p>
        <p>Метод <code>preventDefault()</code> следует вызывать внутри обработчика события.</p>
      `,
    },
    {
      title: "Пример отмены действий по умолчанию",
      type: "text",
      description: `
        <p>Пример отмены перехода по ссылке:</p>
      `,
      code: `
const link = document.getElementById('myLink');

link.addEventListener('click', function(event) {
  event.preventDefault(); // Отменяет переход по ссылке
  console.log('Переход отменен!');
});
      `,
    },
    {
      title: "Когда использовать отмену действий по умолчанию?",
      type: "text",
      description: `
        <p>Отмена действий по умолчанию полезна, когда вы хотите:</p>
        <ul>
          <li><strong>Изменить стандартное поведение элемента:</strong> Например, создать собственную логику для отправки форм или обработки ссылок.</li>
          <li><strong>Добавить свою логику обработки события:</strong> Например, проверять ввод данных перед отправкой формы.</li>
          <li><strong>Создать пользовательский интерфейс с уникальным поведением:</strong> Например, реализовать drag-and-drop или кастомные выпадающие списки.</li>
        </ul>
      `,
    },
    {
      title: "Лучшие практики",
      type: "text",
      description: `
        <ul>
          <li><strong>Используйте <code>preventDefault()</code> только при необходимости:</strong> Не злоупотребляйте этим методом, если стандартное поведение браузера можно сохранить.</li>
          <li><strong>Добавляйте проверки:</strong> Убедитесь, что отмена действия не нарушает пользовательский опыт.</li>
          <li><strong>Тестируйте кросс-браузерность:</strong> Некоторые браузеры могут по-разному обрабатывать события по умолчанию.</li>
        </ul>
      `,
    },
    {
      title: "Продвинутые примеры",
      type: "text",
      description: `
        <p><strong>1. Отмена отправки формы:</strong></p>
        <pre><code>const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Отменяет отправку формы
  console.log('Форма не отправлена!');
});
</code></pre>

        <p><strong>2. Отмена выделения текста:</strong></p>
        <pre><code>document.addEventListener('selectstart', function(event) {
  event.preventDefault(); // Отменяет выделение текста
  console.log('Выделение текста отменено!');
});
</code></pre>

        <p><strong>3. Кастомная обработка drag-and-drop:</strong></p>
        <pre><code>const draggable = document.getElementById('draggable');

draggable.addEventListener('dragstart', function(event) {
  event.preventDefault(); // Отменяет стандартное поведение drag-and-drop
  console.log('Drag-and-drop отменен!');
});
</code></pre>
      `,
    },
    {
      title: "Частые ошибки",
      type: "text",
      description: `
        <p><strong>1. Забытый вызов preventDefault():</strong></p>
        <pre><code>// Плохо: стандартное поведение не отменено
link.addEventListener('click', function(event) {
  console.log('Ссылка кликнута!');
});

// Лучше: добавьте preventDefault()
link.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('Переход отменен!');
});</code></pre>

        <p><strong>2. Избыточное использование preventDefault():</strong></p>
        <pre><code>// Плохо: отменяет все клики на странице
document.addEventListener('click', function(event) {
  event.preventDefault();
});

// Лучше: ограничьте область применения
link.addEventListener('click', function(event) {
  event.preventDefault();
});</code></pre>
      `,
    },
    {
      title: "Дополнительные материалы",
      type: "text",
      description: `
        <p>Для более глубокого изучения:</p>
        <ul>
          <li><a href="https://developer.mozilla.org/ru/docs/Web/API/Event/preventDefault"  target="_blank">MDN Web Docs: preventDefault()</a></li>
          <li><a href="https://javascript.info/default-browser-action"  target="_blank">JavaScript.info: Действия браузера по умолчанию</a></li>
        </ul>
      `,
    },
  ],
};
