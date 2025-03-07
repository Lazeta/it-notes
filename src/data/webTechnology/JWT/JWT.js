export const JWT = {
  id: 102,
  title: "JWT (JSON Web Token)",
  children: [
    {
      title: "Определение",
      type: "text",
      description: `
            <p>JWT (JSON Web Token) — это открытый стандарт (RFC 7519), который определяет компактный и автономный способ безопасной передачи информации между сторонами в виде JSON-объекта. Эта информация может быть проверена и доверена, так как она подписана цифровой подписью.</p>
          `,
    },
    {
      title: "Структура JWT",
      type: "text",
      description: `
            <p>JWT состоит из трех частей, разделенных точками:</p>
            <ul>
              <li><strong>Header</strong>: Содержит информацию о типе токена (обычно "JWT") и алгоритме подписи (например, HMAC SHA256 или RSA).</li>
              <li><strong>Payload</strong>: Содержит данные (т.Claims), которые будут переданы. Это может быть информация о пользователе, срок действия токена и т. д.</li>
              <li><strong>Signature</strong>: Создается путем кодирования заголовка и полезной нагрузки, и последующей подписи с использованием секрета или закрытого ключа.</li>
            </ul>
          `,
    },
    {
      title: "Преимущества JWT",
      type: "text",
      description: `
            <p>Преимущества использования JWT:</p>
            <ul>
              <li><strong>Самодостаточность</strong>: Токен содержит все необходимые данные, что позволяет избежать дополнительных запросов к серверу для проверки состояния сессии.</li>
              <li><strong>Безопасность</strong>: JWT можно подписывать и шифровать, что обеспечивает защиту данных от подделки и несанкционированного доступа.</li>
              <li><strong>Масштабируемость</strong>: JWT можно использовать в распределенных системах, где нет необходимости в хранилище состояния сессии на сервере.</li>
            </ul>
          `,
    },
    {
      title: "Недостатки JWT",
      type: "text",
      description: `
            <p>Недостатки использования JWT:</p>
            <ul>
              <li><strong>Увеличение размера токена</strong>: Из-за включения дополнительных данных размер JWT может быть значительно больше, чем традиционные сессионные идентификаторы.</li>
              <li><strong>Сложность управления сроком действия</strong>: После выдачи токена его нельзя отозвать, если он скомпрометирован, до истечения срока действия.</li>
              <li><strong>Безопасность</strong>: Если секретный ключ, используемый для подписи токена, будет скомпрометирован, это может привести к серьезным угрозам безопасности.</li>
            </ul>
          `,
    },
    {
      title: "Использование JWT",
      type: "text",
      description: `
            <p>JWT часто используется для:</p>
            <ul>
              <li><strong>Аутентификации</strong>: После успешного входа в систему пользователю выдается JWT, который он использует для доступа к защищенным ресурсам.</li>
              <li><strong>Авторизации</strong>: JWT может содержать информацию о ролях и разрешениях пользователя, что позволяет контролировать доступ к различным ресурсам.</li>
              <li><strong>Передачи данных</strong>: JWT может использоваться для обмена информацией между различными системами в распределенных приложениях.</li>
            </ul>
          `,
    },
  ],
};
