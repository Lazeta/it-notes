export const BOM = {
  id: 221,
  title: "BOM (Browser Object Model)",
  children: [
    {
      title: "Что такое BOM?",
      type: "text",
      description: `
        <p><strong>BOM (Browser Object Model)</strong> — это набор объектов, предоставляемых браузером, которые позволяют взаимодействовать с окном браузера и его функциями. В отличие от DOM, который работает с HTML-документом, BOM фокусируется на браузере и его окружении.</p>
        <p>BOM не является стандартом W3C, но большинство его методов и свойств поддерживаются всеми современными браузерами.</p>
      `,
    },
    {
      title: "Объект window",
      type: "text",
      description: `
        <p><strong>window</strong> — это глобальный объект в браузере. Он представляет собой окно или вкладку браузера и содержит множество методов и свойств для работы с ним.</p>
        <ul>
          <li><strong>window.innerWidth / window.innerHeight:</strong> Ширина и высота окна браузера.</li>
          <li><strong>window.open(url):</strong> Открывает новое окно или вкладку.</li>
          <li><strong>window.close():</strong> Закрывает текущее окно.</li>
          <li><strong>window.alert(message):</strong> Показывает диалоговое окно с сообщением.</li>
          <li><strong>window.confirm(message):</strong> Показывает диалоговое окно с подтверждением (да/нет).</li>
          <li><strong>window.prompt(message):</strong> Показывает диалоговое окно с полем ввода.</li>
        </ul>
      `,
      code: `
// Пример использования методов window
window.alert('Hello, world!');
const isConfirmed = window.confirm('Are you sure?');
if (isConfirmed) {
  console.log('User confirmed');
}

const userInput = window.prompt('Enter your name:');
console.log(userInput);
      `,
    },
    {
      title: "Объект navigator",
      type: "text",
      description: `
        <p><strong>navigator</strong> предоставляет информацию о браузере и операционной системе пользователя.</p>
        <ul>
          <li><strong>navigator.userAgent:</strong> Строка, содержащая информацию о браузере, ОС и устройстве.</li>
          <li><strong>navigator.language:</strong> Язык браузера пользователя.</li>
          <li><strong>navigator.geolocation:</strong> Предоставляет доступ к геолокации пользователя.</li>
          <li><strong>navigator.onLine:</strong> Проверяет, есть ли подключение к интернету.</li>
        </ul>
      `,
      code: `
// Пример использования navigator
console.log(navigator.userAgent); // Информация о браузере
console.log(navigator.language); // Язык браузера

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    console.log('Latitude:', position.coords.latitude);
    console.log('Longitude:', position.coords.longitude);
  });
}
      `,
    },
    {
      title: "Объект location",
      type: "text",
      description: `
        <p><strong>location</strong> предоставляет информацию о текущем URL и позволяет управлять адресной строкой браузера.</p>
        <ul>
          <li><strong>location.href:</strong> Полный URL текущей страницы.</li>
          <li><strong>location.protocol:</strong> Протокол (например, http: или https:).</li>
          <li><strong>location.host:</strong> Хост (например, example.com).</li>
          <li><strong>location.pathname:</strong> Путь после домена (например, /page).</li>
          <li><strong>location.search:</strong> Параметры запроса (например, ?id=123).</li>
          <li><strong>location.reload():</strong> Перезагружает страницу.</li>
          <li><strong>location.assign(url):</strong> Переходит по указанному URL.</li>
          <li><strong>location.replace(url):</strong> Заменяет текущую страницу на новую без сохранения в истории.</li>
        </ul>
      `,
      code: `
// Пример использования location
console.log(location.href); // Полный URL
console.log(location.protocol); // Протокол
console.log(location.host); // Хост

// Переход на новую страницу
location.assign('https://example.com'); 

// Перезагрузка страницы
location.reload();
      `,
    },
    {
      title: "Объект history",
      type: "text",
      description: `
        <p><strong>history</strong> предоставляет доступ к истории браузера (навигации между страницами).</p>
        <ul>
          <li><strong>history.back():</strong> Возвращает пользователя на предыдущую страницу.</li>
          <li><strong>history.forward():</strong> Переходит на следующую страницу.</li>
          <li><strong>history.go(n):</strong> Переходит на n страниц вперед или назад (положительное или отрицательное число).</li>
          <li><strong>history.pushState(state, title, url):</strong> Добавляет новую запись в историю без перезагрузки страницы.</li>
          <li><strong>history.replaceState(state, title, url):</strong> Заменяет текущую запись в истории.</li>
        </ul>
      `,
      code: `
// Пример использования history
history.back(); // Вернуться назад
history.forward(); // Перейти вперед
history.go(-2); // Вернуться на две страницы назад

// Добавление новой записи в историю
history.pushState({ page: 1 }, 'Title', '/page1');
      `,
    },
    {
      title: "Объект screen",
      type: "text",
      description: `
        <p><strong>screen</strong> предоставляет информацию о экране пользователя.</p>
        <ul>
          <li><strong>screen.width / screen.height:</strong> Разрешение экрана в пикселях.</li>
          <li><strong>screen.availWidth / screen.availHeight:</strong> Доступная ширина и высота экрана (без учета панелей задач).</li>
          <li><strong>screen.colorDepth:</strong> Глубина цвета экрана (в битах).</li>
          <li><strong>screen.orientation:</strong> Ориентация экрана (портретная или ландшафтная).</li>
        </ul>
      `,
      code: `
// Пример использования screen
console.log(screen.width, screen.height); // Разрешение экрана
console.log(screen.availWidth, screen.availHeight); // Доступная область
console.log(screen.colorDepth); // Глубина цвета
      `,
    },
    {
      title: "Таймеры",
      type: "text",
      description: `
        <p>BOM предоставляет методы для работы с таймерами:</p>
        <ul>
          <li><strong>setTimeout(callback, delay):</strong> Выполняет функцию один раз через заданное время (в миллисекундах).</li>
          <li><strong>setInterval(callback, interval):</strong> Выполняет функцию повторно с заданным интервалом.</li>
          <li><strong>clearTimeout(id):</strong> Останавливает выполнение setTimeout.</li>
          <li><strong>clearInterval(id):</strong> Останавливает выполнение setInterval.</li>
        </ul>
      `,
      code: `
// Пример использования таймеров
const timeoutId = setTimeout(() => {
  console.log('This will run after 2 seconds');
}, 2000);

const intervalId = setInterval(() => {
  console.log('This will run every second');
}, 1000);

// Остановка таймеров
clearTimeout(timeoutId);
clearInterval(intervalId);
      `,
    },
    {
      title: "Преимущества и недостатки BOM",
      type: "text",
      description: `
        <p><strong>Преимущества:</strong></p>
        <ul>
          <li>Позволяет взаимодействовать с браузером и его окружением.</li>
          <li>Поддерживается всеми современными браузерами.</li>
          <li>Предоставляет доступ к важным данным, таким как геолокация, история и параметры URL.</li>
        </ul>
        <p><strong>Недостатки:</strong></p>
        <ul>
          <li>Не является стандартом W3C, что может привести к различиям в реализации.</li>
          <li>Некоторые методы могут быть ограничены из соображений безопасности (например, доступ к геолокации).</li>
        </ul>
      `,
    },
    {
      title: "",
      type: "text",
      url: "https://developer.mozilla.org/ru/docs/Web/API/Window",
      link: "MDN: Window",
    },
    {
      title: "",
      type: "text",
      url: "https://developer.mozilla.org/ru/docs/Web/API/Navigator",
      link: "MDN: Navigator",
    },
  ],
};
