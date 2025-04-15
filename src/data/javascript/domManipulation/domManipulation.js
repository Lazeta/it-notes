export const domManipulation = {
  id: 529,
  title: "DOM Manipulation / Работа с DOM",
  children: [
    {
      title: "Основы DOM",
      type: "text",
      description: `
          <p><strong>DOM (Document Object Model)</strong> — программный интерфейс для работы с HTML-документом.</p>
          
          <p><strong>Структура DOM:</strong></p>
          <ul>
            <li>Документ — дерево узлов (nodes)</li>
            <li>Узлы могут быть элементами, текстом, комментариями</li>
            <li>Глобальный объект <code>document</code> — точка входа</li>
          </ul>
          
          <pre><code>// Пример DOM-структуры
  &lt;html&gt;
    &lt;head&gt;&lt;title&gt;Page&lt;/title&gt;&lt;/head&gt;
    &lt;body&gt;
      &lt;div id="app"&gt;&lt;/div&gt;
    &lt;/body&gt;
  &lt;/html&gt;</code></pre>
        `,
    },
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
  
          <p><strong>Поиск внутри элемента:</strong></p>
          <pre><code>const container = document.querySelector('.container');
  const links = container.querySelectorAll('a');</code></pre>
        `,
    },
    {
      title: "Создание и добавление элементов",
      type: "text",
      description: `
          <p><strong>Создание элементов:</strong></p>
          <pre><code>const div = document.createElement('div');
  const text = document.createTextNode('Hello');
  
  // Добавление класса и атрибутов
  div.className = 'alert';
  div.setAttribute('title', 'Popup');</code></pre>
  
          <p><strong>Добавление в DOM:</strong></p>
          <pre><code>// Добавление в конец
  parent.appendChild(div);
  
  // Добавление в начало
  parent.prepend(div);
  
  // Добавление перед элементом
  existingElement.before(div);
  
  // Добавление после элемента
  existingElement.after(div);
  
  // Замена элемента
  oldElement.replaceWith(newElement);</code></pre>
        `,
    },
    {
      title: "Изменение элементов",
      type: "text",
      description: `
          <p><strong>Работа с содержимым:</strong></p>
          <pre><code>// HTML-содержимое — не рекомендуется из-за рисков безопасности
          element.innerHTML = '&lt;strong&gt;Text&lt;/strong&gt;'; // Установка HTML-кода

          // Текстовое содержимое — безопасный способ установки текста
          element.textContent = 'Plain text'; // Установка текстового содержимого

          // Значение форм — установка значения для элемента ввода
          input.value = 'New value'; // Установка значения в поле ввода

          // Видимое текстовое содержимое — учитывает стили и видимость
          element.innerText = 'Visible text'; // Установка видимого текста

          // Вставка HTML-кода без замены существующего содержимого
          element.insertAdjacentHTML('beforeend', '<span>New Content</span>'); // Вставка HTML в конец элемента
          </code></pre>
  
          <p><strong>Классы и атрибуты:</strong></p>
          <pre><code>// Классы
  element.classList.add('active');
  element.classList.remove('hidden');
  element.classList.toggle('visible');
  
  // Атрибуты
  element.setAttribute('data-id', 123);
  const id = element.getAttribute('data-id');
  element.removeAttribute('title');
  
  // data-атрибуты
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
  }
  
  // Альтернативный вариант
  container.innerHTML = '';</code></pre>
  
          <p><strong>Осторожно с innerHTML:</strong></p>
          <ul>
            <li>Перезаписывает все содержимое</li>
            <li>Может привести к утечкам памяти</li>
            <li>Уязвимость для XSS-атак при вставке пользовательских данных</li>
          </ul>

          <p><strong>Вместо этого используйте лучше:</strong></p>
          <ul>
            <li><strong>textContent</strong> - используется для установки или получения текстового содержимого элемента. Он не интерпретирует HTML, что делает его более безопасным.</li>
            <li><strong>innerText</strong> - похож на textContent, но учитывает стиль и видимость текста. Он возвращает только видимый текст.</li>
            <li><strong>insertAdjacentHTML</strong> - если нужно вставить HTML-код, но без полной перезаписи содержимого элемента, можно использовать insertAdjacentHTML. Этот метод позволяет добавлять HTML в определённые позиции относительно элемента.</li>
          </ul>
        `,
    },
    {
      title: "Стилизация элементов",
      type: "text",
      description: `
          <p><strong>Инлайн-стили:</strong></p>
          <pre><code>// Установка стиля
  element.style.color = 'red';
  element.style.backgroundColor = '#fff';
  
  // Несколько стилей через cssText
  element.style.cssText = 'color: red; background: white;';
  
  // Получение стилей (только инлайн)
  const color = element.style.color;</code></pre>
  
          <p><strong>Вычисленные стили:</strong></p>
          <pre><code>// Все применённые стили
  const styles = getComputedStyle(element);
  const fontSize = styles.fontSize;</code></pre>
        `,
    },
    {
      title: "События",
      type: "text",
      description: `
          <p><strong>Добавление обработчиков:</strong></p>
          <pre><code>// Рекомендуемый способ
  button.addEventListener('click', (event) => {
    console.log('Clicked!', event.target);
  });
  
  // Устаревший способ (не рекомендуется)
  button.onclick = function() { ... };</code></pre>
  
          <p><strong>Удаление обработчиков:</strong></p>
          <pre><code>function handleClick() { ... }
  
  // Добавление
  button.addEventListener('click', handleClick);
  
  // Удаление
  button.removeEventListener('click', handleClick);</code></pre>
  
          <p><strong>Делегирование событий:</strong></p>
          <pre><code>list.addEventListener('click', (event) => {
    if (event.target.matches('li.item')) {
      console.log('Item clicked:', event.target);
    }
  });</code></pre>
        `,
    },
    {
      title: "Практические примеры",
      type: "text",
      description: `
          <p><strong>1. Создание модального окна:</strong></p>
          <pre><code>const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = \`
    &lt;div class="modal-content"&gt;
      &lt;span class="close"&gt;&times;&lt;/span&gt;
      &lt;p&gt;Modal content&lt;/p&gt;
    &lt;/div&gt;
  \`;
  document.body.appendChild(modal);
  
  document.querySelector('.close').addEventListener('click', () => {
    modal.remove();
  });</code></pre>
  
          <p><strong>2. Динамический список:</strong></p>
          <pre><code>const list = document.getElementById('list');
  const items = ['Apple', 'Banana', 'Orange'];
  
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });</code></pre>
  
          <p><strong>3. Форма с валидацией:</strong></p>
          <pre><code>form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = form.querySelector('input');
    
    if (!input.value.trim()) {
      input.classList.add('error');
      return;
    }
    
    console.log('Submitted:', input.value);
    form.reset();
  });</code></pre>
        `,
    },
    {
      title: "Оптимизация работы с DOM",
      type: "text",
      description: `
          <p><strong>1. Fragment для массового добавления:</strong></p>
          <pre><code>const fragment = document.createDocumentFragment();
  
  for (let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    div.textContent = \`Item \${i}\`;
    fragment.appendChild(div);
  }
  
  container.appendChild(fragment); // 1 рефлоу вместо 100</code></pre>
  
          <p><strong>2. Избегание "чтения после записи":</strong></p>
          <pre><code>// Плохо (вызывает лишние рефлоу)
  element.style.width = '100px';
  const width = element.offsetWidth;
  
  // Хорошо
  element.style.width = '100px';
  // Другие операции
  const width = element.offsetWidth; // Чтение после всех записей</code></pre>
  
          <p><strong>3. Делегирование событий</strong> вместо множества обработчиков</p>
          <p><strong>4. requestAnimationFrame</strong> для анимаций</p>
        `,
    },
  ],
};
