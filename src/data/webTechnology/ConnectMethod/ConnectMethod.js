export const ConnectMethod = {
  id: 115,
  title: "Метод CONNECT",
  children: [
    {
      title: "Определение",
      type: "text",
      description: `
            <p>Метод CONNECT в HTTP используется для установления туннельного соединения к серверу через прокси-сервер. Этот метод позволяет клиенту устанавливать TCP-соединение с сервером через прокси, что полезно для работы с зашифрованными соединениями, такими как HTTPS.</p>
          `,
    },
    {
      title: "Характеристики",
      type: "text",
      description: `
            <p>Характеристики метода CONNECT:</p>
            <ul>
              <li><strong>Туннелирование:</strong> Метод CONNECT создает туннель для передачи данных между клиентом и сервером через прокси-сервер.</li>
              <li><strong>Использование с HTTPS:</strong> Обычно применяется для передачи зашифрованного HTTPS-трафика через прокси.</li>
              <li><strong>Неизменяемость запросов:</strong> Все данные передаются без изменений, что позволяет поддерживать безопасность соединения.</li>
              <li><strong>Ответ прокси-сервера:</strong> Прокси-сервер отвечает на запрос CONNECT с кодом 200 (OK), если соединение успешно установлено.</li>
            </ul>
          `,
    },
    {
      title: "Применение",
      type: "text",
      description: `
            <p>Метод CONNECT используется в следующих ситуациях:</p>
            <ul>
              <li><strong>Доступ к защищенным ресурсам:</strong> Позволяет клиентам подключаться к защищенным ресурсам через прокси-серверы.</li>
              <li><strong>Обход ограничений:</strong> Используется для обхода сетевых фильтров и блокировок, позволяя осуществлять безопасное соединение.</li>
              <li><strong>Шифрование данных:</strong> Обеспечивает шифрование трафика между клиентом и сервером в случаях, когда это необходимо.</li>
            </ul>
          `,
    },
    {
      title: "Пример запроса",
      type: "text",
      description: `
            <p>Пример запроса CONNECT:</p>
            <pre><code>CONNECT www.example.com:443 HTTP/1.1
    Host: www.example.com:443
    </code></pre>
            <p>Ответ прокси-сервера может выглядеть так:</p>
            <pre><code>HTTP/1.1 200 Connection Established
    </code></pre>
          `,
    },
  ],
};
