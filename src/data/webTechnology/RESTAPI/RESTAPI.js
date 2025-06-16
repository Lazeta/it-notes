export const RESTAPI = {
  id: 119,
  title: "REST API (Representational State Transfer API)",
  children: [
    {
      title: "Определение",
      type: "text",
      description: `
            <p><strong>REST API</strong> (Representational State Transfer Application Programming Interface) — это архитектурный стиль 
            взаимодействия компонентов распределенного приложения в сети. В контексте веб-разработки, он позволяет веб-сервисам общаться
            друг с другом через HTTP, используя стандартные методы HTTP (GET, POST, PUT, DELETE и т.д.) для выполнения операций над данными.</p>
          `,
    },
    {
      title: "Принципы REST",
      type: "text",
      description: `
            <ul>
              <li><strong>Без состояния (Stateless):</strong> Каждый запрос от клиента к серверу должен содержать всю информацию, необходимую для его выполнения. Сервер не сохраняет состояние клиента между запросами.</li>
              <li><strong>Единообразие интерфейса (Uniform Interface):</strong> Определяет стандартный способ взаимодействия между клиентом и сервером, что облегчает и унифицирует разработку и взаимодействие компонентов системы.</li>
              <li><strong>Кэширование (Cacheable):</strong> Ответы на запросы могут быть кэшируемыми или некэшируемыми, что позволяет улучшить производительность системы за счет уменьшения нагрузки на сервер.</li>
              <li><strong>Клиент-сервер (Client-Server):</strong> Разделение обязанностей между клиентом (например, пользовательским интерфейсом) и сервером (хранилище данных), что упрощает разработку и масштабирование компонентов независимо друг от друга.</li>
              <li><strong>Многоуровневая система (Layered System):</strong> Клиент не может обязательно знать, общается ли он напрямую с сервером или через посредников, что повышает безопасность системы и позволяет использовать балансировщики нагрузки (Nginx, AWS ALB), кэширующие прокси (Varnish, CDN), фаерволы/API-шлюзы(Cloudflare, Kong) и прокси сервера.</li>
              <li><strong>Код по требованию (Code on Demand, необязательно):</strong> Сервер может временно расширять или настраивать функциональность клиента, передавая ему исполняемый код.</li>
            </ul>
          `,
    },
    {
      title: "HTTP-методы в REST",
      type: "text",
      description: `
            <p>REST использует стандартные HTTP-методы для выполнения операций над ресурсами:</p>
            <ul>
              <li><strong>GET:</strong> Получение информации о ресурсе.</li>
              <li><strong>POST:</strong> Создание нового ресурса.</li>
              <li><strong>PUT:</strong> Обновление существующего ресурса.</li>
              <li><strong>DELETE:</strong> Удаление ресурса.</li>
            </ul>
            <p>Пример GET-запроса для получения данных о пользователе:</p>
          `,
      code: `
fetch('https://api.example.com/users/1',  {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
.then(response => response.json())
.then(data => console.log(data));
          `,
    },
    {
      title: "Статусные коды HTTP",
      type: "text",
      description: `
            <p>REST API использует стандартные HTTP-статусы для указания результата выполнения запроса:</p>
            <ul>
              <li><strong>200 OK:</strong> Запрос выполнен успешно.</li>
              <li><strong>201 Created:</strong> Ресурс успешно создан.</li>
              <li><strong>400 Bad Request:</strong> Ошибка в запросе клиента.</li>
              <li><strong>401 Unauthorized:</strong> Необходима авторизация.</li>
              <li><strong>403 Forbidden:</strong> Доступ запрещен.</li>
              <li><strong>404 Not Found:</strong> Ресурс не найден.</li>
              <li><strong>500 Internal Server Error:</strong> Ошибка на стороне сервера.</li>
            </ul>
          `,
    },
    {
      title: "Ресурсы и URI",
      type: "text",
      description: `
            <p>В REST ресурсы идентифицируются с помощью URI (Uniform Resource Identifier). Каждому ресурсу соответствует уникальный URI, по которому можно получить доступ к этому ресурсу.</p>
            <p>Примеры URI:</p>
            <ul>
              <li><code>https://api.example.com/users</code>  — список всех пользователей.</li>
              <li><code>https://api.example.com/users/1</code>  — информация о пользователе с ID 1.</li>
              <li><code>https://api.example.com/posts?author=1</code> — список постов пользователя с ID 1.</li>
            </ul>
          `,
    },
    {
      title: "Форматы данных",
      type: "text",
      description: `
            <p>RESTful API может использовать различные форматы данных для обмена информацией, включая:</p>
            <ul>
              <li><strong>JSON:</strong> Наиболее распространенный формат для передачи данных.</li>
              <li><strong>XML:</strong> Используется реже, но все еще поддерживается.</li>
              <li><strong>HTML:</strong> Может использоваться для возвращения веб-страниц.</li>
            </ul>
          `,
    },
    {
      title: "Примеры использования REST API",
      type: "text",
      description: `
            <p>REST API широко используется в современных приложениях:</p>
            <ul>
              <li><strong>Веб-сервисы:</strong> Например, получение списка товаров из интернет-магазина (<code>GET /products</code>).</li>
              <li><strong>Мобильные приложения:</strong> Например, отправка данных формы регистрации (<code>POST /register</code>).</li>
              <li><strong>Интеграция с внешними сервисами:</strong> Например, использование API Google Maps для отображения карт (<code>GET /maps/api</code>).</li>
            </ul>
          `,
    },
    {
      title: "Заключение",
      type: "text",
      description: `
        <p>REST API — это набор принципов и ограничений для создания веб-сервисов, который обеспечивает гибкое и 
        эффективное взаимодействие между компонентами распределенных систем через HTTP. 
        Благодаря своей простоте, масштабируемости и гибкости, 
        REST стал доминирующим стилем для разработки API для веб-приложений.</p>
      `,
    },
    {
      title: "",
      type: "text",
      url: "https://restfulapi.net/",
      link: "RESTful API Design Guide",
    },
    {
      title: "",
      type: "text",
      url: "https://developer.mozilla.org/ru/docs/Web/HTTP/Status",
      link: "MDN: HTTP Status Codes",
    },
  ],
};
