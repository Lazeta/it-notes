export const middleware = {
  id: 531,
  title: "Middleware",
  children: [
    {
      title: "Определение",
      type: "text",
      description: `
        <p>Middleware - это функция, которая обрабатывает action перед тем, как она достигнет редьюсера.</p>
        <p>Middleware может использоваться:</p>
        <ul>
          <li>Логирования действий</li>
          <li>Обработки асинхронных операций (например, запросов к API)</li>
          <li>Добавления дополнительной логики (например, аналитика)</li>
        </ul>
      `,
    },
  ],
};
