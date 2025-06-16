export const SessionStorage = {
  id: 217,
  title: "sessionStorage",
  children: [
    {
      title: "Что такое sessionStorage?",
      type: "text",
      description: `
        <p><strong>sessionStorage</strong> — это механизм хранения данных в браузере, который позволяет сохранять данные в виде пар "ключ-значение". Данные хранятся только в пределах одной сессии и удаляются при закрытии вкладки или браузера.</p>
      `,
    },
    {
      title: "Создание и запись данных",
      type: "text",
      description: `
        <p><strong>Пример записи данных в sessionStorage:</strong></p>
      `,
      code: `
sessionStorage.setItem('sessionUser', 'JohnDoe');
      `,
    },
    {
      title: "Чтение данных",
      type: "text",
      description: `
        <p><strong>Пример чтения данных из sessionStorage:</strong></p>
      `,
      code: `
const sessionUser = sessionStorage.getItem('sessionUser');
console.log(sessionUser); // JohnDoe
      `,
    },
    {
      title: "Удаление данных",
      type: "text",
      description: `
        <p><strong>Пример удаления данных из sessionStorage:</strong></p>
      `,
      code: `
sessionStorage.removeItem('sessionUser');
      `,
    },
    {
      title: "Очистка sessionStorage",
      type: "text",
      description: `
        <p><strong>Пример полной очистки sessionStorage:</strong></p>
      `,
      code: `
sessionStorage.clear();
      `,
    },
    {
      title: "Хранение объектов",
      type: "text",
      description: `
        <p><strong>sessionStorage может хранить только строки, поэтому для хранения объектов их нужно сериализовать в JSON:</strong></p>
      `,
      code: `
const sessionData = { name: 'John', age: 30 };
sessionStorage.setItem('sessionData', JSON.stringify(sessionData));

// Чтение объекта
const storedSessionData = JSON.parse(sessionStorage.getItem('sessionData'));
console.log(storedSessionData.name); // John
      `,
    },
    {
      title: "Преимущества sessionStorage",
      type: "text",
      description: `
        <ul>
          <li><strong>Простота использования:</strong> Легкий в использовании API для хранения данных.</li>
          <li><strong>Временное хранение:</strong> Данные сохраняются до закрытия вкладки или браузера.</li>
          <li><strong>Объем хранения:</strong> Обычно позволяет хранить до 5-10 МБ данных.</li>
          <li><strong>Изолированность данных:</strong> Данные доступны только в рамках одной вкладки, что обеспечивает изоляцию между сессиями.</li>
        </ul>
      `,
    },
    {
      title: "Недостатки sessionStorage",
      type: "text",
      description: `
        <ul>
          <li><strong>Только строковые значения:</strong> Необходимо сериализовать объекты.</li>
          <li><strong>Сессионное хранение:</strong> Данные недоступны после закрытия вкладки или браузера.</li>
          <li><strong>Безопасность:</strong> Данные не шифруются, что может быть уязвимо для XSS-атак.</li>
        </ul>
      `,
    },
    {
      title: "Сравнение с localStorage",
      type: "text",
      description: `
        <p><strong>Основные различия между sessionStorage и localStorage:</strong></p>
        <ul>
          <li><strong>Срок хранения:</strong> localStorage сохраняет данные даже после закрытия браузера, тогда как sessionStorage удаляет данные при закрытии вкладки.</li>
          <li><strong>Доступность:</strong> localStorage доступен во всех вкладках одного домена, а sessionStorage — только в рамках одной вкладки.</li>
          <li><strong>Использование:</strong> localStorage подходит для долгосрочного хранения данных, а sessionStorage — для временного хранения данных в рамках одной сессии.</li>
        </ul>
      `,
    },
    {
      title: "Рекомендации по использованию",
      type: "text",
      description: `
        <p>Когда использовать sessionStorage:</p>
        <ul>
          <li><strong>Временные данные:</strong> Например, состояние формы или данные, которые нужны только в рамках одной сессии.</li>
          <li><strong>Изоляция данных:</strong> Если данные должны быть доступны только в рамках одной вкладки.</li>
          <li><strong>Защита от переполнения:</strong> Когда нужно временно сохранить небольшие объемы данных, не засоряя localStorage.</li>
        </ul>
        <p>Когда НЕ использовать sessionStorage:</p>
        <ul>
          <li><strong>Долгосрочное хранение:</strong> Используйте localStorage или IndexedDB.</li>
          <li><strong>Межвкладочная синхронизация:</strong> sessionStorage не поддерживает обмен данными между вкладками.</li>
        </ul>
      `,
    },
    {
      title: "Примеры использования в реальных сценариях",
      type: "text",
      description: `
        <p>Примеры использования sessionStorage в реальных приложениях:</p>
        <ul>
          <li><strong>Сохранение состояния формы:</strong> Если пользователь случайно обновил страницу, данные формы можно восстановить.</li>
          <li><strong>Временные данные пользователя:</strong> Например, хранение данных корзины покупок в рамках одной сессии.</li>
          <li><strong>Отслеживание действий пользователя:</strong> Например, временное сохранение последних действий пользователя для аналитики.</li>
        </ul>
      `,
    },
    {
      title: "",
      type: "text",
      url: "https://developer.mozilla.org/ru/docs/Web/API/Window/sessionStorage",
      link: "MDN: sessionStorage",
    },
    {
      title: "",
      type: "text",
      url: "https://javascript.info/localstorage",
      link: "JavaScript Info: Хранилище браузера",
    },
  ],
};
