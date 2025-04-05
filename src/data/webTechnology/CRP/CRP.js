export const CRP = {
  id: 118,
  title: "CRP",
  children: [
    {
      title: "1. Что такое CRP?",
      type: "text",
      description: `
            <p>CRP / CSP (Cross-Origin Resource Policy или Content Security Policy) - это механизм безопасности, который позволяет управлять доступом к ресурсам на основе их источника.</p>
            <p>Он используется для определения, какие ресурсы могут быть использованы в контексте других источников.</p>
          `,
    },
    {
      title: "2. Зачем нужен CSP (Content Security Policy)?",
      type: "text",
      description: `
            <p>CSP помогает предотвратить атаки, такие как:</p>
            <ul>
              <li><strong>Cross-Site Scripting (XSS)</strong> — блокирует выполнение вредоносных скриптов, внедрённых на страницу.</li>
              <li><strong>Data Injection</strong> — запрещает загрузку ресурсов (изображений, стилей, скриптов) из неподтверждённых источников.</li>
              <li><strong>Clickjacking</strong> — может ограничивать встраивание страницы в iframe (через директиву <code>frame-ancestors</code>).</li>
            </ul>
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
