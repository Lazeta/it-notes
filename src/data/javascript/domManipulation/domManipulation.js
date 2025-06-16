export const DOMManipulation = {
  id: 529,
  title: "DOM Manipulation (Работа с DOM)",
  children: [
    {
      title: "Поиск элементов",
      type: "text",
      description: `
        <p><strong>Методы поиска:</strong></p>
        <pre><code>// По ID (возвращает один элемент)
const app = document.getElementById('app');

// По CSS-селектору (первый элемент)
const btn = document.querySelector('.btn');

// По CSS-селектору (все элементы)
const items = document.querySelectorAll('.item');

// По имени тега
const divs = document.getElementsByTagName('div');

// По классу
const cards = document.getElementsByClassName('card');</code></pre>
      `,
    },
    {
      title: "Создание и добавление элементов",
      type: "text",
      description: `
        <p><strong>Создание элементов:</strong></p>
        <pre><code>const div = document.createElement('div');
div.className = 'alert';
div.textContent = 'Hello, world!';

// Добавление в DOM
parent.appendChild(div);</code></pre>
      `,
    },
    {
      title: "Изменение элементов",
      type: "text",
      description: `
        <p><strong>Работа с содержимым:</strong></p>
        <pre><code>// Установка HTML-кода
element.innerHTML = '<strong>Text</strong>'; // Не рекомендуется

// Безопасная установка текста
element.textContent = 'Plain text';

// Изменение атрибутов
element.setAttribute('title', 'Tooltip');
element.dataset.userId = '42'; // data-user-id</code></pre>
      `,
    },
    {
      title: "Удаление элементов",
      type: "text",
      description: `
        <p><strong>Методы удаления:</strong></p>
        <pre><code>// Удаление элемента
element.remove();

// Удаление всех дочерних элементов
while (container.firstChild) {
  container.firstChild.remove();
}</code></pre>
      `,
    },
    {
      title: "Стилизация элементов",
      type: "text",
      description: `
        <p><strong>Инлайн-стили:</strong></p>
        <pre><code>element.style.color = 'red';
element.style.backgroundColor = '#fff';</code></pre>

        <p><strong>Вычисленные стили:</strong></p>
        <pre><code>const styles = getComputedStyle(element);
console.log(styles.fontSize);</code></pre>
      `,
    },
    {
      title: "Обработка событий",
      type: "text",
      description: `
        <p><strong>Добавление обработчиков:</strong></p>
        <pre><code>button.addEventListener('click', (event) => {
  console.log('Clicked!', event.target);
});</code></pre>

        <p><strong>Делегирование событий:</strong></p>
        <pre><code>list.addEventListener('click', (event) => {
  if (event.target.matches('li.item')) {
    console.log('Item clicked:', event.target);
  }
});</code></pre>
      `,
    },
    {
      title: "Оптимизация работы с DOM",
      type: "text",
      description: `
        <p><strong>Fragment для массового добавления:</strong></p>
        <pre><code>const fragment = document.createDocumentFragment();

for (let i = 0; i < 100; i++) {
  const div = document.createElement('div');
  div.textContent = \`Item \${i}\`;
  fragment.appendChild(div);
}

container.appendChild(fragment); // 1 рефлоу вместо 100</code></pre>

        <p><strong>Избегание лишних рефлоу:</strong></p>
        <pre><code>element.style.width = '100px';
// Другие операции
const width = element.offsetWidth; // Чтение после всех записей</code></pre>
      `,
    },
    {
      title: "",
      type: "text",
      url: "https://developer.mozilla.org/ru/docs/Web/API/Document_Object_Model",
      link: "MDN: DOM",
    },
  ],
};
