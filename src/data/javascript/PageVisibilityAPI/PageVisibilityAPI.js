export const PageVisibilityAPI = {
  id: 158,
  title: "Page Visibility API (страница видима или скрыта)",
  children: [
    {
      title: "Что такое Page Visibility API?",
      type: "text",
      description: `
        <p><strong>Page Visibility API</strong> — это API браузера, который позволяет определить, видима ли текущая вкладка или страница для пользователя. Это полезно для оптимизации производительности и управления ресурсами.</p>
        <p>Основные применения:</p>
        <ul>
          <li>Приостановка видео или анимаций при сворачивании страницы.</li>
          <li>Остановка фоновых процессов (например, таймеров или запросов).</li>
          <li>Снижение потребления ресурсов устройства.</li>
        </ul>
      `,
    },
    {
      title: "Реализация паузы/старта видео",
      type: "text",
      description: `
        <p>Пример использования Page Visibility API для паузы и возобновления воспроизведения видео в зависимости от состояния видимости страницы:</p>
      `,
      code: `
const video = document.querySelector('video');

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    video.pause(); // При скрытии страницы
  } else {
    video.play(); // При возвращении к странице
  }
});
      `,
    },
    {
      title: "Основные свойства",
      type: "text",
      description: `
        <p><strong>document.hidden</strong>: Возвращает <code>true</code>, если страница невидима, и <code>false</code>, если она видима.</p>
        <p><strong>document.visibilityState</strong>: Возвращает строку, указывающую состояние видимости страницы:</p>
        <ul>
          <li><code>visible</code>: Страница видима.</li>
          <li><code>hidden</code>: Страница скрыта (свернута или переключена на другую вкладку).</li>
          <li><code>prerender</code>: Страница предварительно рендерится (не видна пользователю).</li>
        </ul>
      `,
    },
    {
      title: "Пример с использованием visibilityState",
      type: "text",
      description: `
        <p>Дополнительный пример с использованием свойства <code>visibilityState</code>:</p>
      `,
      code: `
document.addEventListener('visibilitychange', () => {
  switch (document.visibilityState) {
    case 'visible':
      console.log('Страница видима');
      break;
    case 'hidden':
      console.log('Страница скрыта');
      break;
    default:
      console.log('Неизвестное состояние');
  }
});
      `,
    },
    {
      title: "Лучшие практики",
      type: "text",
      description: `
        <ul>
          <li><strong>Оптимизация ресурсов:</strong> Останавливайте ненужные процессы, такие как анимации или таймеры, когда страница скрыта.</li>
          <li><strong>Используйте событие visibilitychange:</strong> Вместо постоянного опроса состояния используйте событие для реагирования на изменения.</li>
          <li><strong>Проверяйте поддержку API:</strong> Некоторые старые браузеры могут не поддерживать Page Visibility API.</li>
        </ul>
      `,
      code: `
if (typeof document.hidden !== 'undefined') {
  // Page Visibility API поддерживается
} else {
  console.log('Page Visibility API не поддерживается');
}
      `,
    },
    {
      title: "Дополнительные материалы",
      type: "text",
      description: `
        <p>Для более глубокого изучения:</p>
        <ul>
          <li><a href="https://developer.mozilla.org/ru/docs/Web/API/Page_Visibility_API"  target="_blank">MDN Web Docs: Page Visibility API</a></li>
          <li><a href="https://caniuse.com/pagevisibility"  target="_blank">Can I Use: Поддержка Page Visibility API</a></li>
        </ul>
      `,
    },
  ],
};