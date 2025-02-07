export const HTMLDocumentStructure = {
  id: 125,
  title: "Структура HTML документа",
  children: [
    {
      title: "<!DOCTYPE html>",
      type: "text",
      description: `
      <p>Объявляет тип документа и версию HTML:</p>
      <ul>
        <li><strong>Версия</strong>: Обычно используется HTML5.</li>
      </ul>
    `,
    },
    {
      title: "<html>",
      type: "text",
      description: `
      <p>Корневой элемент HTML-документа:</p>
      <ul>
        <li><strong>Атрибуты</strong>: Может содержать атрибут <code>lang</code> для указания языка.</li>
      </ul>
    `,
    },
    {
      title: "<head>",
      type: "text",
      description: `
      <p>Содержит метаданные о документе:</p>
      <ul>
        <li><strong><meta charset="UTF-8"></strong>: Устанавливает кодировку документа.</li>
        <li><strong><meta name="viewport"></strong>: Настройки для адаптивного дизайна и отображения на мобильных устройствах.</li>
        <li><strong><title></strong>: Заголовок, отображаемый на вкладке браузера.</li>
        <li><strong><link></strong>: Подключение внешних CSS-файлов.</li>
        <li><strong><script></strong>: Подключение внешних JavaScript-файлов (если необходимо).</li>
      </ul>
    `,
    },
    {
      title: "<body>",
      type: "text",
      description: `
      <p>Основное содержимое страницы:</p>
      <ul>
        <li><strong><header></strong>: Заголовок или навигация сайта.</li>
        <li><strong><main></strong>: Основной контент страницы.</li>
        <li><strong><footer></strong>: Нижний колонтитул с информацией о правами и ссылками.</li>
      </ul>
    `,
    },
  ],
};
