export const Cookie = {
  id: 215,
  title: "Cookie (Куки)",
  children: [
    {
      title: "Что такое куки?",
      type: "text",
      description: `
        <p><strong>Куки</strong> — это небольшие фрагменты данных, которые веб-сайты сохраняют на компьютере пользователя. 
        Они используются для хранения информации о пользователе, его предпочтениях и сессиях.</p>
        <p>Более подробно можно узнать в <a href="https://developer.mozilla.org/ru/docs/Web/HTTP/Cookies">официальной  документации MDN</a></p>
      `,
    },
    {
      title: "Создание куки",
      type: "text",
      description: `
        <p><strong>Пример создания куки:</strong></p>
        <p>Важно помнить о безопасности при установке куки</p>
      `,
      code: `
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/; secure; SameSite=Strict";
      `,
    },
    {
      title: "Чтение куки",
      type: "text",
      description: `
        <p><strong>Пример чтения куки:</strong></p>
      `,
      code: `
const getCookie = (name) => {
  const value = document.cookie.split('; ').find(row => row.startsWith(name + '='))?.split('=')[1];
  return value ? decodeURIComponent(value) : null;
};

const username = getCookie('username');
console.log(username); // JohnDoe
      `,
    },
    {
      title: "Удаление куки",
      type: "text",
      description: `
    <p><strong>Пример удаления куки:</strong></p>
    <p>Чтобы удалить куки, необходимо установить его значение в пустую строку и задать дату истечения в прошлом. Это сообщает браузеру, что куки больше не нужно хранить.</p>
  `,
      code: `
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  `,
    },
    {
      title: "Свойства куки",
      type: "text",
      description: `
        <p><strong>Основные атрибуты куки:</strong></p>
        <ul>
          <li><strong>expires</strong>: Дата истечения куки. Если не указано, куки будут действовать до закрытия вкладки браузера.</li>
          <li><strong>max-age</strong>: Время жизни куки в секундах. При наличии этого атрибута, expires игнорируется.</li>
          <li><strong>path</strong>: Путь, по которому куки доступны. Например, / позволяет использовать куки на всем сайте, а /account — только в разделе аккаунта.</li>
          <li><strong>domain</strong>: Домен, для которого куки установлены. Если не указано, куки будут доступны только для домена, который их создал.</li>
          <li><strong>secure</strong>: При установленном атрибуте куки передаются только по HTTPS.</li>
          <li><strong>SameSite</strong>: Защита от CSRF-атак. Может быть задан как 'Strict', 'Lax' или 'None': 
            <ul>
              <li><strong>Strict</strong>: Куки отправляются только при навигации на сайт.</li>
              <li><strong>Lax</strong>: Куки отправляются при навигации, но не при кросс-сайтовых запросах.</li>
              <li><strong>None</strong>: Куки отправляются всегда, но необходимо использовать secure.</li>
            </ul>
          </li>
        </ul>
      `,
    },
    {
      title: "Примеры использования всех атрибутов",
      type: "text",
      description: `
        <p><strong>Пример установки куки с несколькими атрибутами:</strong></p>
      `,
      code: `
document.cookie = "sessionId=abc123; expires=Fri, 31 Dec 2023 23:59:59 GMT; max-age=3600; path=/; domain=example.com; secure; SameSite=Lax";
      `,
    },
    {
      title: "SameSite атрибут",
      type: "text",
      description: `
        <p><strong>SameSite</strong> — важный атрибут для защиты от CSRF-атак:</p>
        <ul>
          <li><strong>Strict</strong>: Куки отправляются только при навигации на сайт</li>
          <li><strong>Lax</strong>: Куки отправляются при навигации, но не при кросс-сайтовых запросах</li>
          <li><strong>None</strong>: Куки отправляются всегда, но требует secure-флага</li>
        </ul>
        <p>Подробнее о <a href="https://owasp.org/www-community/SameSite">SameSite  и безопасности</a></p>
      `,
    },
    {
      title: "",
      type: "text",
      url: "https://learn.javascript.ru/cookie",
      link: "learn.javascript",
    },
  ],
};