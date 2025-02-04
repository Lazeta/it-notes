export const DragAndDrop = {
  title: "Drag and Drop / Перетаскивание",
  children: [
    {
      title: "Основы Drag and Drop",
      type: "text",
      description: `
          <p>Drag and Drop — это способ улучшить интерфейс, позволяя пользователю перемещать элементы с помощью мыши. Это может быть полезно для копирования и перемещения документов, а также для других действий, таких как добавление элементов в корзину.</p>
          `,
    },
    {
      title: "Алгоритм Drag and Drop",
      type: "text",
      description: `
          <p>Базовый алгоритм Drag and Drop включает следующие шаги:</p>
            <ul>
              <li><strong>mousedown</strong>: Подготовка элемента к перемещению.</li>
              <li><strong>mousemove</strong>: Перемещение элемента на новые координаты.</li>
              <li><strong>mouseup</strong>: Завершение перемещения элемента.</li>
              </ul>
              `,
    },
    {
      title: "Правильное позиционирование",
      type: "text",
      description: `
              <p>Чтобы избежать «прыжков» элемента при начале Drag and Drop, запоминаем расстояние от курсора до элемента и используем его при перемещении.</p>
              `,
    },
    {
      title: "Цели переноса (Droppable)",
      type: "text",
      description: `
              <p>Для реализации переноса элемента в другую цель, используйте метод <code>document.elementFromPoint</code> для определения, над каким элементом находится указатель.</p>
              <ul>
              <li>Подсвечивайте элементы, когда мышь находится над ними.</li>
              <li>Обрабатывайте окончание переноса, чтобы выполнить действия с элементами.</li>
              </ul>
              `,
    },
    {
      title: "Пример кода",
      type: "text",
      description: `
              <p>Пример реализации Drag and Drop:</p>
              `,
      code: `
// код для начала переноса
ball.onmousedown = function(event) {
};

// код для перемещения элемента
function onMouseMove(event) {
}
              `,
      link: "Mouse Drag and Drop",
      url: "https://learn.javascript.ru/mouse-drag-and-drop",
    },
  ],
};
