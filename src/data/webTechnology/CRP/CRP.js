export const CRP = {
  id: 118,
  title: "CRP",
  children: [
    {
      title: "1. Что такое CRP?",
      type: "text",
      description: `
            <p>CRP (Cross-Origin Resource Policy) - это механизм безопасности, который позволяет управлять доступом к ресурсам на основе их источника.</p>
            <p>Он используется для определения, какие ресурсы могут быть использованы в контексте других источников.</p>
          `,
    },
    {
      title: "2. Зачем нужен CRP?",
      type: "text",
      description: `
            <p>CRP помогает предотвратить атаки, такие как:</p>
            <ul>
              <li>Cross-Site Scripting (XSS)</li>
              <li>Cross-Origin Resource Sharing (CORS)</li>
            </ul>
            <p>Это позволяет разработчикам контролировать, какие внешние ресурсы могут взаимодействовать с их приложениями.</p>
          `,
    },
    {
      title: "3. Как работает CRP?",
      type: "text",
      description: `
            <p>CRP работает путем добавления заголовков HTTP к ресурсам, которые определяют правила доступа.</p>
            <p>Примеры заголовков:</p>
            <ul>
              <li><code>Cross-Origin-Resource-Policy: same-origin</code> - Разрешает доступ только с того же источника.</li>
              <li><code>Cross-Origin-Resource-Policy: cross-origin</code> - Разрешает доступ с любых источников.</li>
            </ul>
          `,
    },
    {
      title: "4. Пример использования CRP",
      type: "text",
      description: `
            <p>Пример настройки заголовка CRP в серверном приложении:</p>
          `,
      code: `
response.setHeader('Cross-Origin-Resource-Policy', 'same-origin');
          `,
    },
    {
      title: "5. Когда использовать CRP?",
      type: "text",
      description: `
            <p>CRP следует использовать, когда:</p>
            <ul>
              <li>Необходимо защитить ресурсы от несанкционированного доступа.</li>
              <li>Приложение взаимодействует с ресурсами из разных источников.</li>
              <li>Хотите контролировать доступ к вашим ресурсам на уровне безопасности.</li>
            </ul>
          `,
    },
  ],
};
