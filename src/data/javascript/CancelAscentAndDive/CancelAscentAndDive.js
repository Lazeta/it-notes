export const CancelAscentAndDive = {
  id: 134,
  title: "Cancel ascent and dive / Отмена всплытия и погружения",
  children: [
    {
      title: "1. Всплытие событий",
      type: "text",
      description: `
            <p>Всплытие - это процесс, при котором событие движется от целевого элемента к корню документа.</p>
            <p>По умолчанию события всплывают, позволяя родительским элементам обрабатывать их.</p>
          `,
    },
    {
      title: "2. Погружение событий",
      type: "text",
      description: `
            <p>Погружение (или захват) - это процесс, при котором событие движется от корня документа к целевому элементу.</p>
            <p>Этот процесс выполняется только при установке соответствующего параметра в <code>addEventListener</code>.</p>
          `,
    },
    {
      title: "3. Отмена всплытия",
      type: "text",
      description: `
            <p>Чтобы отменить всплытие события, используйте метод <code>event.stopPropagation()</code>.</p>
            <p>Этот метод предотвращает дальнейшее распространение события по дереву DOM.</p>
          `,
    },
    {
      title: "4. Отмена погружения",
      type: "text",
      description: `
            <p>Чтобы отменить погружение события, используйте метод <code>event.stopImmediatePropagation()</code>.</p>
            <p>Этот метод не только предотвращает дальнейшее распространение, но и останавливает выполнение других обработчиков события на текущем элементе.</p>
          `,
    },
    {
      title: "Пример отмены всплытия",
      type: "text",
      description: `
            <p>Пример отмены всплытия события:</p>
          `,
      code: `
    button.addEventListener('click', function(event) {
      event.stopPropagation(); // Отменяет всплытие события
      console.log('Кнопка нажата, всплытие отменено!');
    });
          `,
    },
  ],
};
