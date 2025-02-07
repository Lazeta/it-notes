export const GlobalWindowObject = {
  id: 146,
  title: "Global window object / Глобальный объект window",
  children: [
    {
      title: "1. Что такое объект window?",
      type: "text",
      description: `
            <p>Объект <code>window</code> представляет собой глобальный объект в браузере, который является корнем для всех объектов и функций в JavaScript.</p>
            <p>Он предоставляет доступ к свойствам и методам, связанным с окном браузера.</p>
          `,
    },
    {
      title: "2. Свойства объекта window",
      type: "text",
      description: `
            <p>Некоторые ключевые свойства объекта <code>window</code>:</p>
            <ul>
              <li><code>window.document</code> - доступ к DOM-документу.</li>
              <li><code>window.location</code> - информация о текущем URL.</li>
              <li><code>window.history</code> - управление историей браузера.</li>
              <li><code>window.navigator</code> - информация о браузере и его версиях.</li>
            </ul>
          `,
    },
    {
      title: "3. Методы объекта window",
      type: "text",
      description: `
            <p>Некоторые полезные методы объекта <code>window</code>:</p>
            <ul>
              <li><code>window.alert()</code> - отображает простое окно с сообщением.</li>
              <li><code>window.confirm()</code> - показывает диалоговое окно с вопросом и кнопками "OK" и "Cancel".</li>
              <li><code>window.open()</code> - открывает новое окно или вкладку.</li>
              <li><code>window.setTimeout()</code> - выполняет функцию через заданный интервал времени.</li>
            </ul>
          `,
    },
    {
      title: "4. Пример использования объекта window",
      type: "text",
      description: `
            <p>Пример использования объекта <code>window</code> для отображения сообщения:</p>
          `,
      code: `
window.alert('Привет, мир!');
          `,
    },
    {
      title: "5. Особенности объекта window",
      type: "text",
      description: `
            <p>Объект <code>window</code> является единственным экземпляром глобального объекта в браузере, что означает, что:</p>
            <ul>
              <li>Все глобальные переменные и функции доступны как свойства объекта <code>window</code>.</li>
              <li>Вы можете обращаться к методам и свойствам через <code>this</code> в глобальном контексте.</li>
            </ul>
          `,
    },
  ],
};
