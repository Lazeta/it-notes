export const MethodologyBEM = {
  id: 188,
  title: "Methodology BEM",
  children: [
    {
      title: "B - Блок (Block)",
      type: "text",
      description: `
            <p>Определение блока:</p>
            <ul>
              <li><strong>Что это</strong>: Независимый компонент интерфейса, который может быть переиспользован.</li>
              <li><strong>Примеры</strong>: <code>header</code>, <code>menu</code>, <code>button</code>.</li>
            </ul>
          `,
    },
    {
      title: "E - Элемент (Element)",
      type: "text",
      description: `
            <p>Определение элемента:</p>
            <ul>
              <li><strong>Что это</strong>: Составная часть блока, которая не имеет смысла вне него.</li>
              <li><strong>Обозначение</strong>: Элементы обозначаются двойным подчеркиванием, например, <code>menu__item</code>.</li>
            </ul>
          `,
    },
    {
      title: "M - Модификатор (Modifier)",
      type: "text",
      description: `
            <p>Определение модификатора:</p>
            <ul>
              <li><strong>Что это</strong>: Состояние или версия блока или элемента, изменяющая его внешний вид или поведение.</li>
              <li><strong>Обозначение</strong>: Модификаторы обозначаются двойным дефиссом, например, <code>button--primary</code>.</li>
            </ul>
          `,
    },
    {
      title: "Преимущества BEM",
      type: "text",
      description: `
            <p>Основные преимущества методологии BEM:</p>
            <ul>
              <li><strong>Читаемость</strong>: Структура именования делает код более понятным.</li>
              <li><strong>Масштабируемость</strong>: Легко добавлять новые блоки и элементы без конфликтов.</li>
              <li><strong>Поддерживаемость</strong>: Изменения в одном блоке не влияют на другие.</li>
            </ul>
          `,
    },
  ],
};
