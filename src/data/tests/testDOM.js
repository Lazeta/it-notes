export const testDOM = {
  id: 100120,
  title: "DOM",
  questions: [
    {
      id: 100103,
      question: "Какие существуют типы узлов в DOM?",
      answer: `
      **Типы узлов в DOM (nodeType):**
      1. **ELEMENT_NODE (1):** Элемент HTML (например, \`<div>\`, \`<p>\`).
      2. **ATTRIBUTE_NODE (2):** Атрибут элемента (устаревший, почти не используется в современных API).
      3. **TEXT_NODE (3):** Текстовое содержимое элемента (включая пробелы и переносы строк).
      4. **COMMENT_NODE (8):** Комментарий (\`<!-- ... -->\`).
      5. **DOCUMENT_NODE (9):** Корневой узел документа (\`document\`).
      6. **DOCUMENT_TYPE_NODE (10):** Объявление типа документа (\`<!DOCTYPE html>\`).
      7. **DOCUMENT_FRAGMENT_NODE (11):** "Виртуальный" узел (\`DocumentFragment\`), не являющийся частью DOM.

      **Пример проверки типа узла:**
      \`\`\`javascript
      const element = document.querySelector('div');
      console.log(element.nodeType); // 1 (ELEMENT_NODE)
      \`\`\`
      `,
    },
    {
      id: 100104,
      question: "Объясните, что такое DOM-дерево и как оно структурировано.",
      answer: `
      **DOM-дерево (Document Object Model):**
      - Это иерархическая структура, в которой браузер представляет HTML-документ как набор объектов (узлов) в виде дерева.

      **Структура DOM-дерева:**
      1. **Корень:** Объект \`document\`.
      2. **Дочерние узлы:** Элементы (\`<html>\`, \`<body>\`, \`<div>\`), текстовые узлы и т.д.
      3. **Ветвление:** Каждый элемент может содержать другие элементы или текстовые узлы.
      4. **Связи:** У каждого узла есть родитель, дети, братья и сёстры.

      **Пример структуры:**
      \`\`\`html
      <html>
        <head>
          <title>Заголовок</title>
        </head>
        <body>
          <div>Привет!</div>
        </body>
      </html>
      \`\`\`
      **DOM-представление:**
      - \`document\` → \`<html>\` → \`<head>\` → \`<title>\` → "Заголовок"
      - \`document\` → \`<html>\` → \`<body>\` → \`<div>\` → "Привет!"
      `,
    },
    {
      id: 100105,
      question:
        "Каким образом изменения в DOM могут влиять на производительность веб-страницы?",
      answer: `
      **Основные операции, влияющие на производительность:**
      1. **Reflow (перекомпоновка):**
         - Происходит при изменении геометрии элемента (ширина, высота, позиция).
         - Браузер пересчитывает расположение других элементов.
         - Пример:
           \`\`\`javascript
           const div = document.querySelector('div');
           div.style.width = '200px'; // Вызовет reflow
           \`\`\`

      2. **Repaint (перерисовка):**
         - Происходит при изменении визуальных свойств, не затрагивающих геометрию (например, \`color\`, \`background\`).
         - Браузер только перерисовывает элемент.
         - Пример:
           \`\`\`javascript
           const div = document.querySelector('div');
           div.style.backgroundColor = 'red'; // Вызовет repaint
           \`\`\`

      **Оптимизация:**
      - Минимизируйте количество изменений DOM.
      - Используйте \`DocumentFragment\` для массовых изменений.
      - Группируйте изменения стилей через \`classList\`.
      `,
    },
    {
      id: 100106,
      question: "Какие методы используются для манипуляции DOM?",
      answer: `
      **Методы манипуляции DOM:**
      1. **Получение элементов:**
         - \`document.getElementById(id)\`: Получить элемент по ID.
         - \`document.querySelector(selector)\`: Получить первый элемент по CSS-селектору.
         - \`document.querySelectorAll(selector)\`: Получить все элементы по CSS-селектору.

      2. **Создание и добавление элементов:**
         - \`document.createElement(tagName)\`: Создать новый элемент.
         - \`parentNode.appendChild(childNode)\`: Добавить дочерний элемент.
         - \`parentNode.removeChild(childNode)\`: Удалить дочерний элемент.

      3. **Изменение содержимого:**
         - \`element.innerHTML\`: Получить/установить HTML-содержимое.
         - \`element.textContent\`: Получить/установить текстовое содержимое.

      4. **Работа с атрибутами:**
         - \`element.setAttribute(name, value)\`: Установить атрибут.
         - \`element.getAttribute(name)\`: Получить значение атрибута.
         - \`element.removeAttribute(name)\`: Удалить атрибут.

      **Пример:**
      \`\`\`javascript
      const div = document.createElement('div');
      div.textContent = 'Привет, мир!';
      document.body.appendChild(div);
      \`\`\`
      `,
    },
    {
      id: 100107,
      question: "Что такое Shadow DOM и чем он отличается от обычного DOM?",
      answer: `
      **Shadow DOM:**
      - Это инкапсулированный DOM, который изолирует стили и структуру компонента от основного DOM.
      - Используется для создания веб-компонентов.

      **Отличия от обычного DOM:**
      1. **Инкапсуляция:** Стили и скрипты внутри Shadow DOM не влияют на основной DOM.
      2. **Изолированные события:** События из Shadow DOM не распространяются за его пределы.
      3. **Использование:** Shadow DOM часто применяется в веб-компонентах (\`<custom-element>\`).

      **Пример создания Shadow DOM:**
      \`\`\`javascript
      const host = document.createElement('div');
      const shadowRoot = host.attachShadow({ mode: 'open' });
      shadowRoot.innerHTML = '<p>Это Shadow DOM</p>';
      document.body.appendChild(host);
      \`\`\`
      `,
    },
    {
      id: 100108,
      question: "Как работают события в DOM?",
      answer: `
      **События в DOM:**
      - События — это действия или происшествия, которые происходят в DOM (например, клики, нажатия клавиш, загрузка страницы).
      - Они позволяют реагировать на взаимодействие пользователя с интерфейсом.

      **Основные методы работы с событиями:**
      1. \`element.addEventListener(type, handler)\`: Добавить обработчик события.
      2. \`element.removeEventListener(type, handler)\`: Удалить обработчик события.
      3. \`event.stopPropagation()\`: Остановить всплытие события.
      4. \`event.preventDefault()\`: Отменить стандартное поведение.

      **Пример:**
      \`\`\`javascript
      const button = document.querySelector('button');
      button.addEventListener('click', (event) => {
        console.log('Кнопка нажата!');
      });
      \`\`\`
      `,
    },
  ],
};
