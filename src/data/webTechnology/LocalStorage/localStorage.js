export const LocalStorage = {
  id: 216,
  title: "localStorage (Локальное хранилище)",
  children: [
    {
      title: "Что такое localStorage?",
      type: "text",
      description: `
        <p><strong>localStorage</strong> — это механизм хранения данных в браузере, который позволяет сохранять данные в виде пар "ключ-значение". Данные сохраняются в браузере даже после закрытия вкладки или перезагрузки страницы.</p>
      `,
    },
    {
      title: "Создание и запись данных",
      type: "text",
      description: `
        <p><strong>Пример записи данных в localStorage:</strong></p>
      `,
      code: `
localStorage.setItem('username', 'JohnDoe');
      `,
    },
    {
      title: "Чтение данных",
      type: "text",
      description: `
        <p><strong>Пример чтения данных из localStorage:</strong></p>
      `,
      code: `
const username = localStorage.getItem('username');
console.log(username); // JohnDoe
      `,
    },
    {
      title: "Удаление данных",
      type: "text",
      description: `
        <p><strong>Пример удаления данных из localStorage:</strong></p>
      `,
      code: `
localStorage.removeItem('username');
      `,
    },
    {
      title: "Очистка localStorage",
      type: "text",
      description: `
        <p><strong>Пример полной очистки localStorage:</strong></p>
      `,
      code: `
localStorage.clear();
      `,
    },
    {
      title: "Хранение объектов",
      type: "text",
      description: `
        <p><strong>localStorage может хранить только строки, поэтому для хранения объектов их нужно сериализовать в JSON:</strong></p>
      `,
      code: `
const user = { name: 'John', age: 30 };
localStorage.setItem('user', JSON.stringify(user));

// Чтение объекта
const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser.name); // John
      `,
    },
    {
      title: "Преимущества localStorage",
      type: "text",
      description: `
        <ul>
          <li><strong>Простота использования:</strong> Легкий в использовании API для хранения данных.</li>
          <li><strong>Долговременное хранение:</strong> Данные сохраняются даже после закрытия браузера.</li>
          <li><strong>Объем хранения:</strong> Обычно позволяет хранить до 5-10 МБ данных.</li>
        </ul>
      `,
    },
    {
      title: "Недостатки localStorage",
      type: "text",
      description: `
        <ul>
          <li><strong>Только строковые значения:</strong> Необходимо сериализовать объекты.</li>
          <li><strong>Отсутствие поддержки нескольких вкладок:</strong> localStorage не синхронизируется между вкладками в реальном времени.</li>
          <li><strong>Безопасность:</strong> Данные не шифруются, что может быть уязвимо для XSS-атак.</li>
        </ul>
      `,
    },
    {
      title: "Сравнение с другими механизмами хранения данных",
      type: "text",
      description: `
        <p>localStorage можно сравнить с другими механизмами хранения данных в браузере:</p>
        <ul>
          <li><strong>sessionStorage:</strong> Данные хранятся только в течение сессии (до закрытия вкладки).</li>
          <li><strong>cookies:</strong> Данные отправляются с каждым HTTP-запросом, имеют ограниченный размер (4 КБ) и могут быть защищены флагами (HttpOnly, Secure).</li>
          <li><strong>IndexedDB:</strong> Более мощная база данных, поддерживающая сложные запросы и большие объемы данных.</li>
        </ul>
      `,
    },
    {
      title: "Рекомендации по использованию",
      type: "text",
      description: `
        <p>Когда использовать localStorage:</p>
        <ul>
          <li><strong>Сохранение состояния UI:</strong> Например, тему оформления или состояние виджетов.</li>
          <li><strong>Хранение небольших данных:</strong> Например, пользовательские настройки или предпочтения.</li>
          <li><strong>Кэширование данных:</strong> Например, кэширование результатов API для уменьшения количества запросов.</li>
        </ul>
        <p>Когда НЕ использовать localStorage:</p>
        <ul>
          <li><strong>Хранение чувствительных данных:</strong> Например, токены авторизации или пароли.</li>
          <li><strong>Работа с большими объемами данных:</strong> Используйте IndexedDB для этого.</li>
        </ul>
      `,
    },
    {
      title: "Примеры использования в реальных сценариях",
      type: "text",
      description: `
        <p>Примеры использования localStorage в реальных приложениях:</p>
        <ul>
          <li><strong>Сохранение состояния формы:</strong> Если пользователь случайно закрыл страницу, данные формы можно восстановить.</li>
          <li><strong>Настройки темы оформления:</strong> Сохранение выбора пользователя (темная/светлая тема).</li>
          <li><strong>Кэширование данных:</strong> Например, сохранение списка товаров для офлайн-режима.</li>
        </ul>
      `,
    },
    {
      title: "",
      type: "text",
      url: "https://developer.mozilla.org/ru/docs/Web/API/Window/localStorage",
      link: "MDN: localStorage",
    },
    {
      title: "",
      type: "text",
      url: "https://javascript.info/localstorage",
      link: "JavaScript Info: localStorage",
    },
  ],
};
