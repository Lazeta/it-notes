export const PageVisibilityAPI = {
  id: 234,
  title: "Page Visibility API",
  children: [
    {
      title:
        "Реализация паузы/старта видео в зависимости от состояния видимости страницы",
      description: `Page Visibility API — это API браузера, который проверяет видимость страницы. Он помогает определять, скрыта или свернута текущая страница, и тем самым позволяет контролировать ее поведение и использование ресурсов`,
      type: "text",
      code: `
const video = document.querySelector('video');
document.addEventListener('visibilitychange', () => {
if (document.hidden) {
video.pause();
} else {
video.play();
}
});
`,
      link: "Подробнее — MDN",
      url: "https://medium.com/nuances-of-programming/%D0%B2%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2-page-visibility-api-fca074a5b113",
    },
  ],
};
