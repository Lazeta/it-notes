export const DifferenceBetweenCookieSessionStorageAndLocalStorage = {
  id: 2528,
  title: "Разница между cookie, sessionStorage и localStorage",
  children: [
    {
      title: "Cookie",
      type: "text",
      description: `
                <p>Основные характеристики cookie:</p>
                <li><strong>Применение</strong>: Хранит данные на стороне клиента, отправляемые на сервер при каждом запросе.</li>
                <li><strong>Размер</strong>: Ограничен примерно 4 КБ.</li>
                <li><strong>Время жизни</strong>: Может иметь заданное время жизни и храниться до его истечения.</li>
                <li><strong>Доступ</strong>: Доступен для сервера и клиента.</li>
              `,
    },
    {
      title: "sessionStorage",
      type: "text",
      description: `
                <p>Основные характеристики sessionStorage:</p>
                <li><strong>Применение</strong>: Хранит данные, специфичные для одной сессии.</li>
                <li><strong>Размер</strong>: Обычно ограничен до 5-10 МБ.</li>
                <li><strong>Время жизни</strong>: Данные существуют лишь в течение одной вкладки.</li>
                <li><strong>Доступ</strong>: Доступен только из текущей вкладки.</li>
              `,
    },
    {
      title: "localStorage",
      type: "text",
      description: `
                <p>Основные характеристики localStorage:</p>
                <li><strong>Применение</strong>: Хранит данные, доступные между сессиями.</li>
                <li><strong>Размер</strong>: Обычно ограничен до 5-10 МБ.</li>
                <li><strong>Время жизни</strong>: Данные сохраняются до тех пор, пока пользователь их не удалит.</li>
                <li><strong>Доступ</strong>: Доступен только для клиентских скриптов.</li>
              `,
    },
  ],
};
