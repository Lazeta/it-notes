export const CreatingLayoutInHTMLAndCSS = {
  title: "Создание макета в HTML и CSS",
  children: [
    {
      title: "HTML атрибуты для создания макета:",
      type: "text",
      description: `
      <ul>
        <li><strong>Атрибуты <code>div</code>:</strong>
          <ul>
            <li><code>id</code>: Уникальный идентификатор элемента.</li>
            <li><code>class</code>: Классы для стилизации с помощью CSS.</li>
          </ul>
        </li>
        <li><strong>Семантические элементы:</strong>
          <ul>
            <li><code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>: Используются для структурирования страницы.</li>
          </ul>
        </li>
        <li><strong>Встраиваемый стиль:</strong>
          <ul>
            <li>Пример использования <code>style</code>:</li>
          </ul>
        </li>
      </ul>
    `,
      code: `
<div style="width: 50%; float: left;">Контент</div>
    `,
    },
    {
      title: "CSS свойства для создания макета:",
      type: "text",
      description: `
      <ul>
        <li><strong>Свойство <code>display</code>:</strong>
          <ul>
            <li><code>block</code>, <code>inline</code>, <code>inline-block</code>, <code>flex</code>, <code>grid</code></li>
          </ul>
        </li>
        <li><strong>Свойство <code>position</code>:</strong>
          <ul>
            <li><code>static</code>, <code>relative</code>, <code>absolute</code>, <code>fixed</code>, <code>sticky</code></li>
          </ul>
        </li>
        <li><strong>Свойства <code>margin</code> и <code>padding</code>:</strong> Используются для управления пространством между элементами и внутри элемента.</li>
        <li><strong>Свойства <code>width</code> и <code>height</code>:</strong> Задают размеры элемента.</li>
      </ul>
    `,
      code: `
.container {
display: flex;
justify-content: center; /* Выравнивание по горизонтали */
align-items: center; /* Выравнивание по вертикали */
}
    `,
    },
    {
      title: "HTML5 семантические элементы:",
      type: "text",
      description: `
      <ul>
        <li><strong>&lt;header&gt;</strong>, <strong>&lt;nav&gt;</strong>, <strong>&lt;main&gt;</strong>, <strong>&lt;section&gt;</strong>, <strong>&lt;article&gt;</strong>, <strong>&lt;aside&gt;</strong>, <strong>&lt;footer&gt;</strong>: Эти элементы помогают улучшить SEO и доступность.</li>
      </ul>
    `,
    },
    {
      title: "Flexbox и Grid для создания макетов:",
      type: "text",
      description: `
      <ul>
        <li><strong>Flexbox:</strong> Упрощает выравнивание элементов вдоль одной оси.</li>
        <li><strong>Grid:</strong> Позволяет создавать сеточные макеты, определяя колонки и строки.</li>
      </ul>
    `,
      code: `
/* Flexbox */
.container {
display: flex;
justify-content: center; /* Выравнивание по горизонтали */
align-items: center; /* Выравнивание по вертикали */
}

/* Grid */
.grid-container {
display: grid;
grid-template-columns: repeat(3, 1fr); /* Три равные колонки */
}
    `,
    },
  ],
};
