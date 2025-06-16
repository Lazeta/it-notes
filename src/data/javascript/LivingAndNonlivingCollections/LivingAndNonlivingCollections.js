export const LivingAndNonlivingCollections = {
  id: 152,
  title: "Living and nonliving collections (Живые и неживые коллекции)",
  children: [
    {
      title: "Что такое коллекции в JavaScript?",
      type: "text",
      description: `
        <p><strong>Коллекции в JavaScript</strong> — это объекты, которые хранят группы элементов. Они могут быть <strong>живыми</strong> или <strong>неживыми</strong> в зависимости от их поведения при изменении DOM.</p>
        <p>Живые коллекции автоматически обновляются при изменении DOM, тогда как неживые коллекции остаются неизменными после их создания.</p>
      `,
    },
    {
      title: "Живые коллекции",
      type: "text",
      description: `
        <p><strong>Живые коллекции</strong> автоматически обновляются при изменении DOM. Примеры:</p>
        <ul>
          <li><code>document.getElementsByTagName()</code></li>
          <li><code>document.getElementsByClassName()</code></li>
          <li><code>document.childNodes</code></li>
          <li><code>HTMLCollection</code> (возвращается методами выше)</li>
        </ul>
        <p>При добавлении или удалении элементов, живые коллекции будут отражать эти изменения.</p>
      `,
    },
    {
      title: "Неживые коллекции",
      type: "text",
      description: `
        <p><strong>Неживые коллекции</strong> не обновляются при изменении DOM. Примеры:</p>
        <ul>
          <li><code>document.querySelectorAll()</code></li>
          <li><code>NodeList</code> (возвращается методом <code>querySelectorAll</code>)</li>
          <li><code>Array.from()</code> (при преобразовании живых коллекций)</li>
        </ul>
        <p>Эти коллекции сохраняют состояние на момент их создания и не реагируют на изменения в DOM.</p>
      `,
    },
    {
      title: "Пример работы с живыми коллекциями",
      type: "text",
      description: `
        <p>Пример использования живой коллекции:</p>
      `,
      code: `
const elements = document.getElementsByClassName('example');
console.log(elements.length); // Выводит количество элементов с классом 'example'

// Добавим новый элемент с классом 'example'
const newElement = document.createElement('div');
newElement.className = 'example';
document.body.appendChild(newElement);

console.log(elements.length); // Теперь длина коллекции увеличилась
      `,
    },
    {
      title: "Пример работы с неживыми коллекциями",
      type: "text",
      description: `
        <p>Пример использования неживой коллекции:</p>
      `,
      code: `
const staticElements = document.querySelectorAll('.example');
console.log(staticElements.length); // Выводит количество элементов с классом 'example'

// Добавим новый элемент с классом 'example'
const newStaticElement = document.createElement('div');
newStaticElement.className = 'example';
document.body.appendChild(newStaticElement);

console.log(staticElements.length); // Длина коллекции не изменилась
      `,
    },
    {
      title: "Лучшие практики",
      type: "text",
      description: `
        <ul>
          <li><strong>Используйте живые коллекции только при необходимости:</strong> Они могут быть менее производительными, так как обновляются динамически.</li>
          <li><strong>Для статических данных используйте неживые коллекции:</strong> Например, <code>querySelectorAll</code> подходит для фиксированных наборов элементов.</li>
          <li><strong>Преобразуйте живые коллекции в массивы:</strong> Это позволяет использовать методы массива, такие как <code>map</code>, <code>filter</code> и т.д.</li>
        </ul>
      `,
      code: `
// Преобразование живой коллекции в массив
const liveCollection = document.getElementsByClassName('example');
const arrayFromLiveCollection = Array.from(liveCollection);

// Или использование spread оператора
const spreadCollection = [...liveCollection];

// Теперь можно использовать методы массива
arrayFromLiveCollection.forEach(element => console.log(element));
      `,
    },
    {
      title: "Частые ошибки",
      type: "text",
      description: `
        <p><strong>1. Заблуждение о статичности живых коллекций:</strong></p>
        <pre><code>// Плохо: предположение, что коллекция не изменится
const elements = document.getElementsByClassName('example');
console.log(elements.length); // 3

// После добавления элемента
const newElement = document.createElement('div');
newElement.className = 'example';
document.body.appendChild(newElement);

console.log(elements.length); // 4 (коллекция обновилась)
</code></pre>

        <p><strong>2. Неправильное использование методов:</strong></p>
        <pre><code>// Плохо: попытка вызвать метод массива напрямую
const liveCollection = document.getElementsByClassName('example');
liveCollection.map(el => console.log(el)); // Ошибка: map не является функцией

// Лучше: преобразуйте коллекцию в массив
Array.from(liveCollection).map(el => console.log(el));
</code></pre>
      `,
    },
    {
      title: "Дополнительные материалы",
      type: "text",
      description: `
        <p>Для более глубокого изучения:</p>
        <ul>
          <li><a href="https://developer.mozilla.org/ru/docs/Web/API/HTMLCollection"  target="_blank">MDN Web Docs: HTMLCollection</a></li>
          <li><a href="https://developer.mozilla.org/ru/docs/Web/API/NodeList"  target="_blank">MDN Web Docs: NodeList</a></li>
          <li><a href="https://javascript.info/dom-nodes"  target="_blank">JavaScript.info: Коллекции DOM-узлов</a></li>
        </ul>
      `,
    },
  ],
};
